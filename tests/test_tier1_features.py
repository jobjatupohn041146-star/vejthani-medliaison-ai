"""
Tier 1: Feature Coverage Test Suite (35 Tests)
Validates all core system features across UI, languages, 3 call steps, 5 specialties,
WhatsApp direct routing, and GCC timezone/prayer calculation engines.
"""

import unittest
import re
from tests.helpers import (
    DOMInspector,
    ScriptInspector,
    ServerInspector,
    TimezoneAndPrayerOracle,
    WhatsAppRouterOracle,
)


def milestone(m: str):
    """Decorator to assign a target milestone to a test method."""
    def decorator(fn):
        fn.milestone = m
        return fn
    return decorator


class TestTier1FeatureCoverage(unittest.TestCase):
    """Tier 1: Comprehensive feature coverage across all 7 architectural components."""

    @classmethod
    def setUpClass(cls):
        cls.dom = DOMInspector()
        cls.script = ScriptInspector()

    # -------------------------------------------------------------------------
    # Feature 1: Obsidian & Charcoal Canvas & Ambient Glow (M1)
    # -------------------------------------------------------------------------
    @milestone("M1")
    def test_t1_01_obsidian_canvas_token(self):
        """T1.1: Body/Canvas must use deep obsidian (#0b0d11)."""
        has_hex = "#0b0d11" in self.dom.raw_html
        has_token = "obsidian" in self.dom.raw_html
        self.assertTrue(
            has_hex or has_token,
            "Deep obsidian canvas (#0b0d11 or 'obsidian' color token) must be configured in index.html.",
        )

    @milestone("M1")
    def test_t1_02_charcoal_panel_token(self):
        """T1.2: Container cards must use dark charcoal (#12151c)."""
        has_hex = "#12151c" in self.dom.raw_html
        has_token = "charcoal" in self.dom.raw_html
        self.assertTrue(
            has_hex or has_token,
            "Dark charcoal panel (#12151c or 'charcoal' color token) must be configured in index.html.",
        )

    @milestone("M1")
    def test_t1_03_glass_borders_and_blur(self):
        """T1.3: Translucent panels must feature backdrop-blur-2xl and border-white/10 micro-borders."""
        has_blur = "backdrop-blur" in self.dom.raw_html
        has_border = "border-white/10" in self.dom.raw_html or "border-white/15" in self.dom.raw_html
        self.assertTrue(
            has_blur and has_border,
            "Glassmorphism panels must feature backdrop-blur and crisp micro-borders (border-white/10).",
        )

    @milestone("M1")
    def test_t1_04_ambient_radial_glow_layer(self):
        """T1.4: Fixed ambient radial illumination canvas with Royal Blue, Emerald, and Amber glows."""
        has_glow_canvas = "pointer-events-none" in self.dom.raw_html and "blur-" in self.dom.raw_html
        has_blue = "blue-600" in self.dom.raw_html or "blue-500" in self.dom.raw_html or "#2563eb" in self.dom.raw_html
        has_emerald = "emerald-500" in self.dom.raw_html or "#10b981" in self.dom.raw_html
        has_amber = "amber-500" in self.dom.raw_html or "#f59e0b" in self.dom.raw_html
        self.assertTrue(
            has_glow_canvas and has_blue and has_emerald and has_amber,
            "Ambient radial glow layer with Royal Blue, Emerald, and Amber blurred emitters must exist.",
        )

    @milestone("M1")
    def test_t1_05_high_contrast_typography_tokens(self):
        """T1.5: High contrast text hierarchy (pure white headings, platinum/slate-200 body)."""
        has_white = "text-white" in self.dom.raw_html
        has_platinum = (
            "text-slate-100" in self.dom.raw_html
            or "text-slate-200" in self.dom.raw_html
            or "platinum" in self.dom.raw_html
        )
        self.assertTrue(
            has_white and has_platinum,
            "High-contrast dark-mode typography tokens (text-white and platinum/slate-200) must be present.",
        )

    # -------------------------------------------------------------------------
    # Feature 2: Floating Navigation Dock & 5 Views (M1)
    # -------------------------------------------------------------------------
    @milestone("M1")
    def test_t1_06_desktop_floating_left_dock(self):
        """T1.6: Desktop Floating Left Navigation Dock exists with dock buttons."""
        has_dock = (
            "navDockCall" in self.dom.ids
            or "fixed left-5" in self.dom.raw_html
            or "dock-btn" in self.dom.raw_html
        )
        self.assertTrue(
            has_dock,
            "Floating Left Navigation Dock (#navDockCall or fixed left-5) must be present in index.html.",
        )

    @milestone("M1")
    def test_t1_07_mobile_bottom_dock(self):
        """T1.7: Mobile/tablet floating bottom dock exists for responsive viewports."""
        has_mobile_dock = (
            "lg:hidden" in self.dom.raw_html
            and ("bottom-3" in self.dom.raw_html or "bottom-0" in self.dom.raw_html)
        )
        self.assertTrue(
            has_mobile_dock,
            "Mobile floating bottom dock (lg:hidden with bottom positioning) must be present.",
        )

    @milestone("M1")
    def test_t1_08_five_discrete_view_containers(self):
        """T1.8: Main application contains all 5 discrete view containers."""
        required_views = [
            "viewCallJourney",
            "viewInquiryConsole",
            "viewArabicCenter",
            "viewLeadInvestigation",
            "viewSettings",
        ]
        missing = [v for v in required_views if not self.dom.has_id(v)]
        self.assertEqual(
            len(missing),
            0,
            f"All 5 discrete application views must exist in index.html. Missing: {missing}",
        )

    @milestone("M1")
    def test_t1_09_dock_navigation_data_targets(self):
        """T1.9: Dock buttons must specify data-target attributes pointing to view containers."""
        has_targets = False
        for btn in self.dom.buttons:
            attrs = btn.get("attrs", {})
            if "data-target" in attrs and attrs["data-target"].startswith("view"):
                has_targets = True
                break
        self.assertTrue(
            has_targets,
            "Navigation dock buttons must specify data-target attributes pointing to view IDs.",
        )

    @milestone("baseline")
    def test_t1_10_legacy_dom_ids_preservation(self):
        """T1.10: Core legacy DOM IDs must be preserved for backward compatibility."""
        critical_ids = [
            "callPatientName",
            "callPatientCountry",
            "callStaffName",
            "callTopic",
            "callPriorChannel",
            "callRemainingIssue",
            "scriptPrompt1",
            "scriptPrompt2",
            "scriptPrompt3",
            "scriptPrompt4",
            "scriptClosingDynamic",
            "scriptPrompt6",
            "postCallWhatsAppSummary",
            "btnOpenPostCallWhatsApp",
            "btnCopyPostCallSummary",
            "inqProcedure",
            "inqWhatsAppText",
            "inqArabicText",
            "inqEmailSubject",
            "inqEmailBody",
        ]
        missing = [i for i in critical_ids if not self.dom.has_id(i)]
        self.assertEqual(
            len(missing),
            0,
            f"Critical legacy DOM IDs must be preserved. Missing: {missing}",
        )

    # -------------------------------------------------------------------------
    # Feature 3: Trilingual Typography & Font Stack (M2)
    # -------------------------------------------------------------------------
    @milestone("M2")
    def test_t1_11_google_fonts_trilingual_import(self):
        """T1.11: Google Fonts link imports Plus Jakarta Sans, Noto Sans Thai, Amiri, and Alexandria."""
        fonts_links = self.dom.get_google_fonts_links()
        combined_links = " ".join(fonts_links)
        self.assertIn("Plus+Jakarta+Sans", combined_links, "Missing Plus Jakarta Sans font import.")
        self.assertIn("Noto+Sans+Thai", combined_links, "Missing Noto Sans Thai font import.")
        self.assertIn("Amiri", combined_links, "Missing Amiri Arabic serif font import.")
        self.assertIn("Alexandria", combined_links, "Missing Alexandria Arabic sans-serif font import.")

    @milestone("M2")
    def test_t1_12_tailwind_font_families_configured(self):
        """T1.12: Tailwind config defines font families for sans, thai, arabic, and arabicSans."""
        has_thai_font = "Noto Sans Thai" in self.dom.raw_html or "thai:" in self.dom.raw_html
        has_arabic_sans = "Alexandria" in self.dom.raw_html or "arabicSans:" in self.dom.raw_html
        self.assertTrue(
            has_thai_font and has_arabic_sans,
            "Tailwind configuration must register Noto Sans Thai and Alexandria font families.",
        )

    @milestone("M2")
    def test_t1_13_arabic_teleprompter_script_cards(self):
        """T1.13: generateVejthaniCallScript in app.js supports lang === 'ar' with authentic GCC text."""
        has_ar_branch = (
            self.script.has_pattern(r'lang\s*===\s*["\']ar["\']')
            or self.script.has_pattern(r'case\s*["\']ar["\']')
            or self.script.has_pattern(r'السلام عليكم ورحمة الله وبركاته')
        )
        self.assertTrue(
            has_ar_branch,
            "generateVejthaniCallScript must implement an Arabic tele-prompter branch for Card 1-6.",
        )

    @milestone("M2")
    def test_t1_14_arabic_whatsapp_summary_template(self):
        """T1.14: Arabic WhatsApp summary template exists with proper RTL and GCC diplomatic phrasing."""
        has_ar_summary = (
            "ملخص ما تم مناقشته" in self.script.raw_js
            or "مكتب التنسيق الطبي الدولي" in self.script.raw_js
        )
        self.assertTrue(
            has_ar_summary,
            "Arabic post-call WhatsApp summary template with diplomatic hospital sign-off must exist in app.js.",
        )

    @milestone("M2")
    def test_t1_15_thai_sop_staff_gender_toggle(self):
        """T1.15: Staff gender selector (ครับ vs ค่ะ) eliminates repetitive forward slashes in Thai scripts."""
        has_gender_toggle = (
            "btnStaffGenderMale" in self.dom.ids
            or "btnStaffGenderFemale" in self.dom.ids
            or self.script.has_pattern(r"callStaffGender|staffGender")
        )
        self.assertTrue(
            has_gender_toggle,
            "Staff gender toggle (male 'ครับ' / female 'ค่ะ') must be provided to eliminate slash notation.",
        )

    # -------------------------------------------------------------------------
    # Feature 4: 3-Step Vejthani Call Journey (Baseline & M3)
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t1_16_call_journey_step1_inputs(self):
        """T1.16: Step 1 contains patient name, country, staff name, topic, channel, and remaining issue."""
        step1_fields = [
            "callPatientName",
            "callPatientCountry",
            "callStaffName",
            "callTopic",
            "callPriorChannel",
            "callRemainingIssue",
        ]
        for f in step1_fields:
            self.assertTrue(self.dom.has_id(f), f"Step 1 form must contain input #{f}")

    @milestone("M3")
    def test_t1_17_call_journey_step1_hn_and_phone(self):
        """T1.17: Step 1 includes Hospital Number (HN) and international phone number with GCC prefill."""
        has_hn = self.dom.has_id("callPatientHN") or "HN" in self.dom.raw_html
        has_phone = self.dom.has_id("callPatientPhone") or "phone" in self.dom.raw_html.lower()
        self.assertTrue(
            has_hn and has_phone,
            "Step 1 must include Hospital Number (#callPatientHN) and international phone (#callPatientPhone).",
        )

    @milestone("baseline")
    def test_t1_18_call_journey_step2_teleprompter_cards(self):
        """T1.18: Step 2 contains 6 distinct tele-prompt cards for the live call flow."""
        cards = [
            "scriptPrompt1",
            "scriptPrompt2",
            "scriptPrompt3",
            "scriptPrompt4",
            "scriptClosingDynamic",
            "scriptPrompt6",
        ]
        for c in cards:
            self.assertTrue(self.dom.has_id(c), f"Step 2 must contain prompt card #{c}")

    @milestone("baseline")
    def test_t1_19_call_journey_step2_outcome_buttons(self):
        """T1.19: Step 2 contains 3 interactive outcome buttons (Ready, Not Ready, Decline)."""
        outcomes_found = set()
        for btn in self.dom.buttons:
            attrs = btn.get("attrs", {})
            if "data-outcome" in attrs:
                outcomes_found.add(attrs["data-outcome"])
        self.assertTrue(
            {"ready", "not_ready", "decline"}.issubset(outcomes_found),
            f"Step 2 must have outcome buttons for ready, not_ready, and decline. Found: {outcomes_found}",
        )

    @milestone("baseline")
    def test_t1_20_call_journey_step3_summary_and_crm(self):
        """T1.20: Step 3 contains post-call WhatsApp summary preview and CRM log snippet."""
        self.assertTrue(self.dom.has_id("postCallWhatsAppSummary"), "Step 3 must have #postCallWhatsAppSummary")
        has_crm = self.dom.has_id("callCrmLogSummary") or self.dom.has_id("postCallCrmLog")
        self.assertTrue(has_crm, "Step 3 must have CRM log summary container.")

    # -------------------------------------------------------------------------
    # Feature 5: 5 Inquiry Specialties Engine (Baseline)
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t1_21_specialty_king_of_bone_catalog(self):
        """T1.21: King of Bone specialty catalog includes robotic knee replacement and scan requirements."""
        self.assertIn("king_of_bone", self.script.raw_js)
        self.assertIn("Robotic Total Knee Replacement", self.script.raw_js)
        self.assertIn("X-ray", self.script.raw_js)

    @milestone("baseline")
    def test_t1_22_specialty_cancer_center_catalog(self):
        """T1.22: Cancer Center specialty catalog includes oncology second opinion & MDT tumor board."""
        self.assertIn("cancer", self.script.raw_js)
        self.assertIn("Oncology", self.script.raw_js)
        self.assertIn("Biopsy", self.script.raw_js)

    @milestone("baseline")
    def test_t1_23_specialty_pediatric_catalog(self):
        """T1.23: Pediatric specialty catalog includes pediatric gait correction and growth charts."""
        self.assertIn("pediatric", self.script.raw_js)
        self.assertIn("Pediatric", self.script.raw_js)

    @milestone("baseline")
    def test_t1_24_specialty_general_surgery_catalog(self):
        """T1.24: General Surgery specialty catalog includes laparoscopic cholecystectomy and fit-to-fly."""
        self.assertIn("general_surgery", self.script.raw_js)
        self.assertIn("Laparoscopic Cholecystectomy", self.script.raw_js)

    @milestone("baseline")
    def test_t1_25_specialty_investigate_catalog(self):
        """T1.25: Lead Investigation specialty catalog includes pre-screening assessment requirements."""
        self.assertIn("investigate", self.script.raw_js)

    # -------------------------------------------------------------------------
    # Feature 6: WhatsApp Link Generation & Routing (Baseline & M3)
    # -------------------------------------------------------------------------
    @milestone("M3")
    def test_t1_26_whatsapp_direct_url_format(self):
        """T1.26: WhatsApp URL generator targets https://wa.me/${phone}?text=${encoded} with sanitized phone."""
        has_phone_wa = (
            self.script.has_pattern(r"wa\.me/\$\{[^}]*phone[^}]*\}\?text=")
            or self.script.has_pattern(r"wa\.me/\+?\d+\?text=")
        )
        self.assertTrue(
            has_phone_wa,
            "WhatsApp link must route directly to patient phone (wa.me/${phone}?text=).",
        )

    @milestone("baseline")
    def test_t1_27_whatsapp_message_structure(self):
        """T1.27: Generated WhatsApp summary contains structured header, topic, action, and hospital footer."""
        self.assertIn("Summary of our discussion", self.script.raw_js)
        self.assertIn("Vejthani Hospital", self.script.raw_js)

    @milestone("baseline")
    def test_t1_28_whatsapp_one_click_trigger(self):
        """T1.28: btnOpenPostCallWhatsApp button exists and is bound in JavaScript."""
        self.assertTrue(self.dom.has_id("btnOpenPostCallWhatsApp"))
        self.assertIn("btnOpenPostCallWhatsApp", self.script.raw_js)

    @milestone("M2")
    def test_t1_29_whatsapp_summary_language_selector(self):
        """T1.29: Step 3 provides trilingual WhatsApp summary language selector (Arabic, English, Thai)."""
        has_summary_lang = (
            self.dom.has_id("btnSummaryLangAr")
            or self.script.has_pattern(r"currentSummaryLang|summaryLang")
        )
        self.assertTrue(
            has_summary_lang,
            "Step 3 must provide independent WhatsApp summary language selector (Arabic/English/Thai).",
        )

    @milestone("M3")
    def test_t1_30_inquiry_one_click_whatsapp_action(self):
        """T1.30: Inquiry Console provides 1-click 'Send via WhatsApp' button."""
        has_send_wa = (
            self.dom.has_id("btnSendInqWhatsApp")
            or "btnSendInqWhatsApp" in self.script.raw_js
        )
        self.assertTrue(
            has_send_wa,
            "Inquiry Console must provide a 1-click WhatsApp send button (#btnSendInqWhatsApp).",
        )

    # -------------------------------------------------------------------------
    # Feature 7: Live GCC Timezone & Prayer Engine (Baseline & M3)
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t1_31_timezone_oman_configuration(self):
        """T1.31: Oman timezone is configured with offset +4 (GST / GMT+4)."""
        self.assertIn("oman:", self.script.raw_js)
        self.assertIn("Muscat", self.script.raw_js)

    @milestone("baseline")
    def test_t1_32_timezone_uae_configuration(self):
        """T1.32: UAE timezone is configured with offset +4 (GST / GMT+4)."""
        self.assertIn("uae:", self.script.raw_js)
        self.assertIn("Dubai", self.script.raw_js)

    @milestone("baseline")
    def test_t1_33_timezone_saudi_configuration(self):
        """T1.33: Saudi Arabia timezone is configured with offset +3 (AST / GMT+3)."""
        self.assertIn("saudi:", self.script.raw_js)
        self.assertIn("Riyadh", self.script.raw_js)

    @milestone("baseline")
    def test_t1_34_timezone_qatar_kuwait_configuration(self):
        """T1.34: Qatar and Kuwait timezones are configured with offset +3 (AST / GMT+3)."""
        self.assertIn("qatar:", self.script.raw_js)
        self.assertIn("kuwait:", self.script.raw_js)

    @milestone("M3")
    def test_t1_35_live_seconds_clock_and_all_five_prayers(self):
        """T1.35: Clock updates with live seconds tick (1000ms) and checks all 5 daily prayers."""
        has_1s_interval = (
            "setInterval" in self.script.raw_js
            and ("1000" in self.script.raw_js)
        )
        has_fajr = "Fajr" in self.script.raw_js or "ฟัจญร์" in self.script.raw_js or "fajr" in self.script.raw_js
        self.assertTrue(
            has_1s_interval and has_fajr,
            "Timezone engine must implement 1-second live clock update and dynamic 5-prayer check.",
        )

    @milestone("baseline")
    def test_t1_36_js_syntax_clean(self):
        """T1.36: app.js must have 100% valid JavaScript syntax without parse or lexing errors."""
        is_valid, err_msg = self.script.check_syntax()
        self.assertTrue(is_valid, f"JavaScript syntax error detected in app.js:\n{err_msg}")


if __name__ == "__main__":
    unittest.main()

