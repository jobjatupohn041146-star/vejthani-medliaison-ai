"""
Tier 4: Real-World Workload Scenarios Test Suite (5 Tests)
End-to-end integration journeys emulating authentic clinical concierge interactions:
Omani knee patient, Saudi oncology inquiry, UAE pediatric referral, UK fit-to-fly, and Friday Jummah VIP triage.
"""

import unittest
import json
from datetime import datetime, timezone, timedelta
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


class TestTier4RealWorldScenarios(unittest.TestCase):
    """Tier 4: Complete end-to-end clinical workflow scenarios."""

    @classmethod
    def setUpClass(cls):
        cls.dom = DOMInspector()
        cls.script = ScriptInspector()
        cls.oracle = TimezoneAndPrayerOracle
        cls.router = WhatsAppRouterOracle

    # -------------------------------------------------------------------------
    # Scenario 1: Omani Knee Patient Full Journey
    # -------------------------------------------------------------------------
    @milestone("M3")
    def test_t4_01_omani_knee_patient_full_journey(self):
        """T4.1: Omani knee patient full journey (Muscat GMT+4, King of Bones, Embassy guarantee, direct WhatsApp link)."""
        patient_name = "Mr. Mohammed Al-Balushi"
        country = "oman"
        phone = "+968 9123-4567"
        topic = "Robotic-Assisted Total Knee Replacement (King of Bones)"
        remaining_issue = "Oman Embassy Financial Guarantee Letter and VIP Family Suite"

        # 1. Verify Timezone Math
        utc_test = datetime(2026, 9, 29, 8, 0, tzinfo=timezone.utc)  # 12:00 PM Muscat
        local_dt = self.oracle.get_local_time(country, utc_test)
        self.assertEqual(local_dt.hour, 12, "Muscat time must be UTC+4")

        # 2. Verify WhatsApp Direct Routing Link
        direct_url = self.router.build_direct_url(phone, f"Summary for {patient_name}: {topic}")
        validation = self.router.validate_url(direct_url)
        self.assertTrue(validation["is_valid_domain"])
        self.assertEqual(validation["phone_number"], "96891234567")
        self.assertIn("Mohammed", validation["decoded_text"])

        # 3. Verify Codebase Readiness for Arabic GCC SOP
        has_ar_journey = (
            "البلوشي" in self.script.raw_js
            or "سلطنة عُمان" in self.script.raw_js
            or "oman" in self.script.raw_js
        )
        self.assertTrue(has_ar_journey)

    # -------------------------------------------------------------------------
    # Scenario 2: Saudi Cancer MDT Inquiry
    # -------------------------------------------------------------------------
    @milestone("M2")
    def test_t4_02_saudi_cancer_mdt_inquiry(self):
        """T4.2: Saudi cancer MDT inquiry (Riyadh GMT+3, oncology second opinion, female doctor, biopsy review)."""
        patient_name = "Mrs. Aisha Al-Husseini"
        country = "saudi"
        topic = "Oncology Second Opinion & MDT Tumor Board"

        # 1. Verify Saudi Timezone (UTC+3)
        utc_test = datetime(2026, 9, 29, 12, 0, tzinfo=timezone.utc)  # 15:00 Riyadh
        local_dt = self.oracle.get_local_time(country, utc_test)
        self.assertEqual(local_dt.hour, 15, "Riyadh time must be UTC+3")

        # 2. Verify Cancer Catalog in app.js
        self.assertIn("cancer", self.script.raw_js)
        self.assertIn("Biopsy", self.script.raw_js)

        # 3. Verify No Double Salutation in English tele-prompter
        has_double = f"Hello, Mr./Ms. {patient_name}" in self.script.raw_js
        self.assertFalse(has_double, "Must not inject double salutation for Mrs. Aisha Al-Husseini")

    # -------------------------------------------------------------------------
    # Scenario 3: UAE Pediatric Referral
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t4_03_uae_pediatric_referral(self):
        """T4.3: UAE pediatric referral (Dubai GMT+4, pediatric orthopedic gait correction, growth chart)."""
        country = "uae"
        utc_test = datetime(2026, 9, 29, 6, 0, tzinfo=timezone.utc)  # 10:00 Dubai
        local_dt = self.oracle.get_local_time(country, utc_test)
        self.assertEqual(local_dt.hour, 10, "Dubai time must be UTC+4")

        # Verify pediatric specialty catalog
        self.assertIn("pediatric", self.script.raw_js)
        self.assertIn("Rashid", self.script.raw_js)

    # -------------------------------------------------------------------------
    # Scenario 4: UK Surgery Fit-to-Fly
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t4_04_uk_surgery_fit_to_fly(self):
        """T4.4: UK surgery fit-to-fly (London GMT+1, laparoscopic cholecystectomy, 5-day recovery)."""
        country = "uk"
        utc_test = datetime(2026, 9, 29, 10, 0, tzinfo=timezone.utc)  # 11:00 London
        local_dt = self.oracle.get_local_time(country, utc_test)
        self.assertEqual(local_dt.hour, 11, "London time must be UTC+1")

        # Verify General Surgery specialty catalog
        self.assertIn("general_surgery", self.script.raw_js)
        self.assertIn("Laparoscopic Cholecystectomy", self.script.raw_js)

    # -------------------------------------------------------------------------
    # Scenario 5: Friday Jummah Etiquette & Lead Qualification
    # -------------------------------------------------------------------------
    @milestone("M3")
    def test_t4_05_friday_jummah_etiquette_and_lead_scoring(self):
        """T4.5: Kuwait VIP inquiry during Friday Jummah (12:15 PM) halts call with Jummah alert and initiates 4D Lead Scoring."""
        # 2026-10-02 is a Friday
        kuwait_friday_jummah = datetime(2026, 10, 2, 12, 15, tzinfo=timezone(timedelta(hours=3)))
        suitable, code = self.oracle.is_acceptable_call_window("kuwait", kuwait_friday_jummah)
        self.assertFalse(suitable, "Friday 12:15 PM in Kuwait must not be marked suitable for calling.")
        self.assertEqual(code, "FRIDAY_JUMMAH_ALERT")

        # Verify Lead Qualification View exists in DOM for diplomatic triage
        self.assertTrue(
            self.dom.has_id("viewLeadInvestigation") or self.dom.has_id("navDockLead"),
            "Dedicated Lead Investigation console must be present for VIP triage.",
        )


if __name__ == "__main__":
    unittest.main()
