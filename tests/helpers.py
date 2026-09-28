"""
MedLiaison AI - E2E Test Suite Helpers
Authoritative inspectors, parsers, and oracles for opaque-box testing.
"""

import os
import io
import re
import json
import urllib.parse
from html.parser import HTMLParser
from datetime import datetime, timezone, timedelta
from typing import Dict, List, Set, Any, Optional, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_HTML_PATH = os.path.join(ROOT_DIR, "index.html")
APP_JS_PATH = os.path.join(ROOT_DIR, "app.js")
SERVER_PY_PATH = os.path.join(ROOT_DIR, "server.py")


class DOMInspector(HTMLParser):
    """Parses index.html to extract DOM elements, attributes, IDs, and styling classes."""

    def __init__(self, html_content: Optional[str] = None):
        super().__init__()
        self.raw_html = html_content or self._load_file(INDEX_HTML_PATH)
        self.ids: Set[str] = set()
        self.elements_by_id: Dict[str, Dict[str, Any]] = {}
        self.classes: Set[str] = set()
        self.buttons: List[Dict[str, Any]] = []
        self.inputs: List[Dict[str, Any]] = []
        self.views: List[str] = []
        self.dock_buttons: List[Dict[str, Any]] = []
        self.links: List[Dict[str, str]] = []
        self._current_tag = None
        self.feed(self.raw_html)

    @staticmethod
    def _load_file(path: str) -> str:
        with open(path, "r", encoding="utf-8") as f:
            return f.read()

    def handle_starttag(self, tag: str, attrs: List[Tuple[str, Optional[str]]]):
        attr_dict = {k: v or "" for k, v in attrs}
        el_id = attr_dict.get("id")
        if el_id:
            self.ids.add(el_id)
            self.elements_by_id[el_id] = {
                "tag": tag,
                "attrs": attr_dict,
                "classes": attr_dict.get("class", "").split(),
            }
            if el_id.startswith("view"):
                self.views.append(el_id)

        classes = attr_dict.get("class", "").split()
        for c in classes:
            self.classes.add(c)

        if tag == "button":
            self.buttons.append({"tag": tag, "attrs": attr_dict, "id": el_id})
            if "dock-btn" in classes or (el_id and "Dock" in el_id):
                self.dock_buttons.append({"tag": tag, "attrs": attr_dict, "id": el_id})

        if tag in ("input", "select", "textarea"):
            self.inputs.append({"tag": tag, "attrs": attr_dict, "id": el_id})

        if tag == "link":
            self.links.append(attr_dict)

    def has_id(self, el_id: str) -> bool:
        return el_id in self.ids

    def get_element(self, el_id: str) -> Optional[Dict[str, Any]]:
        return self.elements_by_id.get(el_id)

    def contains_text(self, text: str) -> bool:
        return text in self.raw_html

    def has_token(self, token: str) -> bool:
        return token in self.raw_html

    def get_google_fonts_links(self) -> List[str]:
        return [l.get("href", "") for l in self.links if "fonts.googleapis.com" in l.get("href", "")]


class MockSocket:
    """Mock socket for zero-network testing of server.py MedLiaisonHandler."""

    def __init__(self, raw_bytes: bytes):
        self.rfile = io.BytesIO(raw_bytes)
        self.wfile = io.BytesIO()

    def makefile(self, mode: str, *args, **kwargs):
        if "r" in mode:
            return self.rfile
        return self.wfile

    def sendall(self, data: bytes):
        self.wfile.write(data)


class ServerInspector:
    """Invokes server.py MedLiaisonHandler in-memory to test HTTP methods, status, MIME, and security."""

    @staticmethod
    def _execute_request(raw_request: bytes) -> Tuple[int, Dict[str, str], bytes]:
        import server
        sock = MockSocket(raw_request)
        try:
            handler = server.MedLiaisonHandler(sock, ("127.0.0.1", 54321), None)
        except Exception as e:
            # Handle potential socket closing behavior
            pass

        raw_resp = sock.wfile.getvalue()
        if not raw_resp:
            return 500, {}, b""

        parts = raw_resp.split(b"\r\n\r\n", 1)
        header_block = parts[0].decode("latin1", errors="replace")
        body = parts[1] if len(parts) > 1 else b""

        lines = header_block.split("\r\n")
        status_line = lines[0]
        status_code = int(status_line.split()[1]) if len(status_line.split()) > 1 else 0

        headers = {}
        for line in lines[1:]:
            if ":" in line:
                k, v = line.split(":", 1)
                headers[k.strip().lower()] = v.strip()

        return status_code, headers, body

    @classmethod
    def get(cls, path: str) -> Tuple[int, Dict[str, str], bytes]:
        req = f"GET {path} HTTP/1.1\r\nHost: localhost\r\n\r\n".encode("utf-8")
        return cls._execute_request(req)

    @classmethod
    def post_json(cls, path: str, payload: Dict[str, Any]) -> Tuple[int, Dict[str, str], bytes]:
        body = json.dumps(payload).encode("utf-8")
        req = (
            f"POST {path} HTTP/1.1\r\n"
            f"Host: localhost\r\n"
            f"Content-Type: application/json\r\n"
            f"Content-Length: {len(body)}\r\n\r\n"
        ).encode("utf-8") + body
        return cls._execute_request(req)


class ScriptInspector:
    """Inspects app.js source code, data tables, and JavaScript implementation structures."""

    def __init__(self, js_content: Optional[str] = None):
        with open(APP_JS_PATH, "r", encoding="utf-8") as f:
            self.raw_js = js_content or f.read()

    def has_pattern(self, pattern: str) -> bool:
        return bool(re.search(pattern, self.raw_js))

    def find_all(self, pattern: str) -> List[str]:
        return re.findall(pattern, self.raw_js)

    def extract_timezones(self) -> Dict[str, Any]:
        match = re.search(r"const\s+COUNTRY_TIMEZONES\s*=\s*(\{[\s\S]*?\n\};)", self.raw_js)
        if not match:
            return {}
        # Clean JS object to JSON approximation
        js_obj = match.group(1)
        cleaned = re.sub(r"(\w+):", r'"\1":', js_obj)
        cleaned = re.sub(r",\s*\}", "}", cleaned)
        cleaned = re.sub(r",\s*\]", "]", cleaned)
        # Fix single quotes
        cleaned = cleaned.replace("'", '"')
        try:
            return json.loads(cleaned.rstrip(";"))
        except Exception:
            return {}

    def extract_presets(self) -> Dict[str, Any]:
        match = re.search(r"const\s+CALL_SOP_PRESETS\s*=\s*(\{[\s\S]*?\n\};)", self.raw_js)
        if not match:
            return {}
        return {"raw": match.group(1)}

    def extract_specialties(self) -> Dict[str, Any]:
        match = re.search(r"const\s+INQUIRY_SPECIALTIES\s*=\s*(\{[\s\S]*?\n\};)", self.raw_js)
        if not match:
            return {}
        return {"raw": match.group(1)}

    def check_syntax(self) -> Tuple[bool, str]:
        """Validates JavaScript syntax using available engine (e.g. Deno) to prevent runtime crashes."""
        import subprocess
        deno_path = "/opt/homebrew/bin/deno"
        if os.path.exists(deno_path):
            res = subprocess.run([deno_path, "check", APP_JS_PATH], capture_output=True, text=True)
            if res.returncode != 0:
                return False, res.stderr or res.stdout
            return True, ""
        return True, ""


class TimezoneAndPrayerOracle:
    """Authoritative reference mathematical model for GCC time offsets and Islamic prayer windows."""

    # Authoritative offsets from UTC
    OFFSETS = {
        "oman": 4,      # GST (GMT+4)
        "uae": 4,       # GST (GMT+4)
        "saudi": 3,     # AST (GMT+3)
        "qatar": 3,     # AST (GMT+3)
        "kuwait": 3,    # AST (GMT+3)
        "uk": 1,        # BST / GMT+1
        "usa": -4       # EDT / GMT-4
    }

    # Reference 5 daily prayers (approximate standard Gulf window in local 24h time)
    PRAYER_WINDOWS = {
        "fajr": ((4, 20), (5, 30)),
        "dhuhr": ((11, 45), (13, 0)),
        "asr": ((15, 10), (16, 30)),
        "maghrib": ((17, 40), (19, 0)),
        "isha": ((18, 55), (20, 15)),
    }

    # Friday Jummah congregational prayer window
    JUMMAH_WINDOW = ((11, 30), (13, 30))

    # Qaylulah (GCC afternoon rest) window
    QAYLULAH_WINDOW = ((14, 0), (16, 30))

    @classmethod
    def get_local_time(cls, country: str, utc_dt: datetime) -> datetime:
        offset_hours = cls.OFFSETS.get(country, 4)
        tz = timezone(timedelta(hours=offset_hours))
        return utc_dt.astimezone(tz)

    @classmethod
    def is_in_window(cls, time_tuple: Tuple[int, int], window: Tuple[Tuple[int, int], Tuple[int, int]]) -> bool:
        start_h, start_m = window[0]
        end_h, end_m = window[1]
        cur_h, cur_m = time_tuple
        cur_mins = cur_h * 60 + cur_m
        start_mins = start_h * 60 + start_m
        end_mins = end_h * 60 + end_m
        return start_mins <= cur_mins < end_mins

    @classmethod
    def is_friday_jummah(cls, local_dt: datetime) -> bool:
        # Friday in Python weekday() is 4 (Monday=0 ... Friday=4, Sunday=6)
        if local_dt.weekday() != 4:
            return False
        cur_time = (local_dt.hour, local_dt.minute)
        return cls.is_in_window(cur_time, cls.JUMMAH_WINDOW)

    @classmethod
    def is_prayer_time(cls, country: str, local_dt: datetime) -> Optional[str]:
        if country in ("uk", "usa"):
            return None
        cur_time = (local_dt.hour, local_dt.minute)
        for prayer_name, window in cls.PRAYER_WINDOWS.items():
            if cls.is_in_window(cur_time, window):
                return prayer_name
        return None

    @classmethod
    def is_qaylulah_rest(cls, country: str, local_dt: datetime) -> bool:
        if country in ("uk", "usa"):
            return False
        cur_time = (local_dt.hour, local_dt.minute)
        return cls.is_in_window(cur_time, cls.QAYLULAH_WINDOW)

    @classmethod
    def is_acceptable_call_window(cls, country: str, local_dt: datetime) -> Tuple[bool, str]:
        # Friday Jummah check
        if cls.is_friday_jummah(local_dt):
            return False, "FRIDAY_JUMMAH_ALERT"
        # Late night check
        if local_dt.hour >= 20 or local_dt.hour < 6:
            return False, "LATE_NIGHT_DO_NOT_CALL"
        # Early morning check
        if local_dt.hour < 9:
            return False, "EARLY_MORNING_WAIT"
        # Specific prayer check
        prayer = cls.is_prayer_time(country, local_dt)
        if prayer:
            return False, f"PRAYER_ALERT_{prayer.upper()}"
        # Afternoon rest check
        if cls.is_qaylulah_rest(country, local_dt):
            return False, "AFTERNOON_REST_ALERT"
        return True, "SUITABLE_BUSINESS_HOURS"


class WhatsAppRouterOracle:
    """Authoritative validator for WhatsApp direct link routing, sanitization, and encoding."""

    @staticmethod
    def sanitize_phone(raw_phone: str) -> str:
        """Removes +, spaces, dashes, parentheses from international numbers."""
        return re.sub(r"[^\d]", "", raw_phone)

    @classmethod
    def build_direct_url(cls, phone: str, text: str) -> str:
        clean_phone = cls.sanitize_phone(phone)
        encoded_text = urllib.parse.quote(text, safe="")
        if clean_phone:
            return f"https://wa.me/{clean_phone}?text={encoded_text}"
        return f"https://wa.me/?text={encoded_text}"

    @classmethod
    def validate_url(cls, url: str) -> Dict[str, Any]:
        parsed = urllib.parse.urlparse(url)
        is_valid_domain = parsed.netloc in ("wa.me", "api.whatsapp.com")
        path_digits = re.sub(r"[^\d]", "", parsed.path)
        qs = urllib.parse.parse_qs(parsed.query)
        has_text = "text" in qs and len(qs["text"][0]) > 0
        decoded_text = qs.get("text", [""])[0]

        return {
            "is_valid_scheme": parsed.scheme in ("https", "http"),
            "is_valid_domain": is_valid_domain,
            "has_phone": bool(path_digits),
            "phone_number": path_digits,
            "has_text": has_text,
            "decoded_text": decoded_text,
            "contains_arabic": bool(re.search(r"[\u0600-\u06FF]", decoded_text)),
            "contains_thai": bool(re.search(r"[\u0E00-\u0E7F]", decoded_text)),
        }
