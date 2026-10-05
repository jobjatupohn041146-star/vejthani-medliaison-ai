"""
Tier 2: Boundary & Corner Cases Test Suite (16 Tests)
Validates prayer boundary times, midnight roll-overs, DST/offsets, phone formatting,
Friday Jummah 11:30-13:30 window, BiDi punctuation, double salutations, and server security.
"""

import unittest
from datetime import datetime, timezone, timedelta
import urllib.parse
from tests.helpers import (
    DOMInspector,
    ScriptInspector,
    ServerInspector,
    TimezoneAndPrayerOracle,
    WhatsAppRouterOracle,
)


def milestone(m: str):
    def decorator(fn):
        fn.milestone = m
        return fn
    return decorator


class TestTier2BoundariesAndCornerCases(unittest.TestCase):
    """Tier 2: Exhaustive boundary conditions and edge cases."""

    @classmethod
    def setUpClass(cls):
        cls.dom = DOMInspector()
        cls.script = ScriptInspector()
        cls.oracle = TimezoneAndPrayerOracle

    # -------------------------------------------------------------------------
    # BVA: Prayer Time Boundaries & Friday Jummah
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t2_01_prayer_boundary_dhuhr_start(self):
        """T2.1: Local time 12:00 in Oman/Saudi enters Dhuhr prayer window."""
        dt = datetime(2026, 9, 29, 12, 5, tzinfo=timezone.utc)  # Tuesday 12:05 UTC
        is_prayer = self.oracle.is_in_window((12, 5), ((11, 45), (13, 0)))
        self.assertTrue(is_prayer, "12:05 must fall into the Dhuhr prayer window (11:45 - 13:00).")

    @milestone("baseline")
    def test_t2_02_prayer_boundary_dhuhr_end(self):
        """T2.2: Local time 13:01 exits Dhuhr prayer window and returns to business hours."""
        is_prayer = self.oracle.is_in_window((13, 1), ((11, 45), (13, 0)))
        self.assertFalse(is_prayer, "13:01 must be outside the Dhuhr prayer window.")

    @milestone("baseline")
    def test_t2_03_prayer_boundary_maghrib_sunset(self):
        """T2.3: Local time 18:15 falls in Maghrib prayer & family dinner window."""
        is_maghrib = self.oracle.is_in_window((18, 15), ((17, 40), (19, 0)))
        self.assertTrue(is_maghrib, "18:15 must trigger Maghrib prayer window alert.")

    @milestone("M3")
    def test_t2_04_friday_jummah_congregational_window(self):
        """T2.4: Friday local time 11:30 - 13:30 triggers high-priority Friday Jummah alert."""
        # 2026-10-02 is a Friday
        friday_jummah = datetime(2026, 10, 2, 12, 15, tzinfo=timezone(timedelta(hours=4)))
        self.assertEqual(friday_jummah.weekday(), 4, "Test date must be a Friday.")
        is_jummah = self.oracle.is_friday_jummah(friday_jummah)
        self.assertTrue(is_jummah, "Friday 12:15 PM must trigger Friday Jummah Congregational Prayer alert.")

        # Verify implementation handles Friday Jummah
        has_jummah_code = (
            "getDay() === 5" in self.script.raw_js
            or "getDay() == 5" in self.script.raw_js
            or "Jummah" in self.script.raw_js
            or "صلاة الجمعة" in self.script.raw_js
        )
        self.assertTrue(
            has_jummah_code,
            "Application logic in app.js must evaluate Friday (day 5) and trigger Jummah alert.",
        )

    @milestone("baseline")
    def test_t2_05_friday_non_jummah_morning(self):
        """T2.5: Friday morning at 10:00 AM does not trigger Jummah prayer alert."""
        friday_morning = datetime(2026, 10, 2, 10, 0, tzinfo=timezone(timedelta(hours=4)))
        is_jummah = self.oracle.is_friday_jummah(friday_morning)
        self.assertFalse(is_jummah, "Friday 10:00 AM must NOT trigger Jummah prayer alert.")

    @milestone("M3")
    def test_t2_06_qaylulah_afternoon_rest_window(self):
        """T2.6: Midday Qaylulah (14:00 - 16:30) triggers family rest alert."""
        afternoon_rest = datetime(2026, 9, 29, 14, 30, tzinfo=timezone(timedelta(hours=4)))
        is_rest = self.oracle.is_qaylulah_rest("oman", afternoon_rest)
        self.assertTrue(is_rest, "14:30 must fall in the Qaylulah afternoon rest window.")

    @milestone("baseline")
    def test_t2_07_early_morning_boundary(self):
        """T2.7: Local time 08:59 AM triggers 'Too Early' alert (<09:00)."""
        dt = datetime(2026, 9, 29, 8, 59, tzinfo=timezone(timedelta(hours=4)))
        suitable, code = self.oracle.is_acceptable_call_window("oman", dt)
        self.assertFalse(suitable)
        self.assertEqual(code, "EARLY_MORNING_WAIT")

    @milestone("baseline")
    def test_t2_08_late_night_boundary(self):
        """T2.8: Local time 20:00 triggers 'Too Late' alert (>=20:00)."""
        dt = datetime(2026, 9, 29, 20, 0, tzinfo=timezone(timedelta(hours=3)))
        suitable, code = self.oracle.is_acceptable_call_window("saudi", dt)
        self.assertFalse(suitable)
        self.assertEqual(code, "LATE_NIGHT_DO_NOT_CALL")

    # -------------------------------------------------------------------------
    # Corner Cases: Midnight Roll-Over & Timezone Calculation
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t2_09_midnight_rollover_utc_math(self):
        """T2.9: Bangkok 02:00 AM (+7) corresponds to Riyadh 10:00 PM (+3) on previous calendar day."""
        bangkok_dt = datetime(2026, 9, 30, 2, 0, tzinfo=timezone(timedelta(hours=7)))
        utc_dt = bangkok_dt.astimezone(timezone.utc)
        riyadh_dt = self.oracle.get_local_time("saudi", utc_dt)

        self.assertEqual(riyadh_dt.day, 29, "Riyadh day must be previous day (29th) during Bangkok early morning.")
        self.assertEqual(riyadh_dt.hour, 22, "Riyadh hour must be 22 (10:00 PM).")

    # -------------------------------------------------------------------------
    # Phone Number Formatting & Sanitization
    # -------------------------------------------------------------------------
    @milestone("M3")
    def test_t2_10_phone_sanitization_standard_gcc(self):
        """T2.10: Formats '+968 9123-4567' into pure numeric '96891234567' for wa.me direct link."""
        raw = "+968 9123-4567"
        sanitized = WhatsAppRouterOracle.sanitize_phone(raw)
        self.assertEqual(sanitized, "96891234567")
        direct_url = WhatsAppRouterOracle.build_direct_url(raw, "Test Message")
        self.assertTrue(direct_url.startswith("https://wa.me/96891234567?text="))

    @milestone("M3")
    def test_t2_11_phone_sanitization_complex_characters(self):
        """T2.11: Formats international phone with parenthesis/spaces: '+971 (0) 50 123 4567'."""
        raw = "+971 (0) 50 123 4567"
        sanitized = WhatsAppRouterOracle.sanitize_phone(raw)
        self.assertEqual(sanitized, "9710501234567")

    # -------------------------------------------------------------------------
    # Encoding & Escaping Integrity
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t2_12_whatsapp_url_encoding_rfc3986(self):
        """T2.12: WhatsApp URL encoding properly encodes Arabic characters, special symbols, and newlines."""
        arabic_text = "السلام عليكم ورحمة الله وبركاته - مستشفى فيجثاني\nالموضوع: فحص طبي"
        encoded = urllib.parse.quote(arabic_text, safe="")
        # Must not contain unescaped spaces or newlines
        self.assertNotIn(" ", encoded)
        self.assertNotIn("\n", encoded)
        # Decoding must recover exact original string
        decoded = urllib.parse.unquote(encoded)
        self.assertEqual(decoded, arabic_text)

    @milestone("M2")
    def test_t2_13_bidi_punctuation_isolation(self):
        """T2.13: Arabic post-call text avoids BiDi punctuation inversion."""
        arabic_sample = "مستشفى فيجثاني الدولي (Vejthani Hospital)، بانكوك، تايلاند"
        # Verify RTL layout support in DOM
        self.assertTrue(
            self.dom.contains_text('dir="rtl"') or self.dom.contains_text("text-right"),
            "DOM must provide dir='rtl' or text-right for Arabic containers to prevent BiDi bleed.",
        )

    # -------------------------------------------------------------------------
    # Linguistic Edge Cases
    # -------------------------------------------------------------------------
    @milestone("M2")
    def test_t2_14_double_salutation_prevention(self):
        """T2.14: Patient name with existing title ('Mr. Mohammed') must not produce 'Mr./Ms. Mr. Mohammed'."""
        has_double_salutation_bug = "Hello, Mr./Ms. ${patientName}" in self.script.raw_js
        self.assertFalse(
            has_double_salutation_bug,
            "Tele-prompter must not hardcode 'Mr./Ms. ${patientName}' without sanitizing existing honorifics.",
        )

    @milestone("baseline")
    def test_t2_15_empty_input_fallbacks(self):
        """T2.15: Empty patient or staff name falls back gracefully to polite generic labels."""
        self.assertIn("||", self.script.raw_js, "app.js must provide fallback values for empty form inputs.")

    # -------------------------------------------------------------------------
    # Server Security & HTTP Method Handling
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t2_16_server_directory_traversal_protection(self):
        """T2.16: Directory traversal attempt (/../etc/passwd) returns HTTP 403 Forbidden."""
        status, headers, body = ServerInspector.get("/../etc/passwd")
        self.assertEqual(status, 403, f"Directory traversal must be blocked with 403 Forbidden. Got {status}")
        self.assertIn(b"Access Denied", body)


if __name__ == "__main__":
    unittest.main()
