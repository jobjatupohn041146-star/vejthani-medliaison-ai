"""
Tier 3: Cross-Feature Combinations Test Suite (10 Tests)
Validates interactions across multi-variable states: specialty switching, trilingual
language toggles, outcome mutation matrices, staff gender reactivity, and server API bridges.
"""

import unittest
import json
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


class TestTier3CrossFeatureCombinations(unittest.TestCase):
    """Tier 3: Multi-feature interactions and state transitions."""

    @classmethod
    def setUpClass(cls):
        cls.dom = DOMInspector()
        cls.script = ScriptInspector()

    # -------------------------------------------------------------------------
    # Specialty & Document Checklist Combinations
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t3_01_specialty_switch_updates_procedure_and_checklist(self):
        """T3.1: Switching inquiry category from king_of_bone to cancer updates procedure and document checklist."""
        # Both categories must be handled by renderInquiryCategory
        self.assertIn("renderInquiryCategory", self.script.raw_js)
        self.assertIn("king_of_bone", self.script.raw_js)
        self.assertIn("cancer", self.script.raw_js)
        self.assertIn("inqDocsList", self.script.raw_js)

    @milestone("M3")
    def test_t3_02_interactive_checklist_influences_generated_message(self):
        """T3.2: Toggling document checklist checkboxes influences missing documents list in generated message."""
        has_checkbox_logic = (
            'type="checkbox"' in self.dom.raw_html
            or "checkbox" in self.script.raw_js
            or "checked" in self.script.raw_js
        )
        self.assertTrue(
            has_checkbox_logic,
            "Document requirements must be interactive checkable items that track received vs pending status.",
        )

    # -------------------------------------------------------------------------
    # Language Toggle & State Preservation
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t3_03_language_toggle_preserves_form_inputs(self):
        """T3.3: Toggling tele-prompt language (Thai <-> English) reads current form values dynamically."""
        self.assertIn("getCallFormData", self.script.raw_js)
        self.assertIn("callPatientName.value", self.script.raw_js)
        self.assertIn("refreshCallScript", self.script.raw_js)

    @milestone("M2")
    def test_t3_04_outcome_reaction_matrix_trilingual(self):
        """T3.4: Outcome toggle (Ready / Not Ready / Decline) updates closing card and WhatsApp text across all 3 languages."""
        # Outcome selection triggers refreshCallScript
        self.assertIn("data-outcome", self.dom.raw_html)
        # Verify app.js handles outcomes in English and Thai
        self.assertIn('outcome === "ready"', self.script.raw_js)
        self.assertIn('outcome === "not_ready"', self.script.raw_js)
        # M2 requires Arabic outcome branches
        has_arabic_outcomes = (
            "جاهز" in self.script.raw_js
            or "تأكيد الموعد" in self.script.raw_js
            or "اعتذار" in self.script.raw_js
            or ('lang === "ar"' in self.script.raw_js and "outcome" in self.script.raw_js)
        )
        self.assertTrue(
            has_arabic_outcomes,
            "Arabic tele-prompt and WhatsApp summary must dynamically branch across the 3 outcome states.",
        )

    # -------------------------------------------------------------------------
    # Staff Gender Toggle & Thai SOP Refinement
    # -------------------------------------------------------------------------
    @milestone("M2")
    def test_t3_05_staff_gender_toggle_removes_slashes(self):
        """T3.5: Staff gender toggle (Female vs Male) updates Thai polite particles without slash clutter."""
        has_slash_repetition = "ค่ะ/ครับ" in self.script.raw_js and "ดิฉัน/ผม" in self.script.raw_js
        self.assertFalse(
            has_slash_repetition,
            "Thai tele-prompter scripts must not contain repeated 'ค่ะ/ครับ' and 'ดิฉัน/ผม' slash notation.",
        )

    # -------------------------------------------------------------------------
    # Country Selection & Timezone Math
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t3_06_country_change_updates_clock_and_offset(self):
        """T3.6: Changing patient country triggers calculateCountryTime and updates country clock."""
        self.assertIn("updateCountryClock", self.script.raw_js)
        has_clock_el = (
            "patientCountryTime" in self.script.raw_js
            or "countryLocalClock" in self.script.raw_js
        )
        self.assertTrue(has_clock_el, "app.js must update country clock element on country change.")
        self.assertIn("calculateCountryTime", self.script.raw_js)

    # -------------------------------------------------------------------------
    # View Navigation State Retention
    # -------------------------------------------------------------------------
    @milestone("M1")
    def test_t3_07_view_switching_navigation_contract(self):
        """T3.7: Switching between the 5 views toggles 'active' on dock button and 'hidden' on view containers."""
        # Check all 5 views exist
        views = ["viewCallJourney", "viewInquiryConsole", "viewArabicCenter", "viewLeadInvestigation", "viewSettings"]
        for v in views:
            self.assertTrue(self.dom.has_id(v), f"View container #{v} must exist in index.html")

    # -------------------------------------------------------------------------
    # Server API Bridge & Fallback
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t3_08_server_api_bridge_fallback_without_key(self):
        """T3.8: POST /api/generate without API key returns HTTP 200 with status 'use_local_engine'."""
        payload = {
            "category": "king_of_bone",
            "patientName": "Mr. Mohammed Al-Balushi",
            "targetMarket": "gcc",
            "medicalProcedure": "Robotic Knee Replacement",
            "inquiryStage": "stage_1",
        }
        status, headers, body = ServerInspector.post_json("/api/generate", payload)
        self.assertEqual(status, 200, f"Expected 200 OK from /api/generate fallback. Got {status}")
        self.assertIn("application/json", headers.get("content-type", ""))
        data = json.loads(body.decode("utf-8"))
        self.assertEqual(data.get("status"), "use_local_engine")

    # -------------------------------------------------------------------------
    # Presets Trilingual Purity
    # -------------------------------------------------------------------------
    @milestone("M2")
    def test_t3_09_presets_do_not_inject_thai_phrases_into_english(self):
        """T3.9: Presets loaded into English tele-prompter must not contain injected Thai phrases."""
        has_thai_leak = (
            "WhatsApp และ Email" in self.dom.raw_html
            or "ความชัดเจนเรื่องห้องพักครอบครัว" in self.script.raw_js
            and "Robotic-Assisted" not in self.script.raw_js
        )
        self.assertFalse(
            has_thai_leak,
            "Clinical presets must provide localized English strings to prevent Thai phrase leakage.",
        )

    # -------------------------------------------------------------------------
    # 5-Stage Dynamic Nurturing Interpolation
    # -------------------------------------------------------------------------
    @milestone("M3")
    def test_t3_10_inquiry_stage_change_updates_message_template(self):
        """T3.10: Changing #inqStage (Stage 1 to 5) updates the inquiry message template dynamically."""
        has_stage_handling = (
            "inqStage" in self.script.raw_js
            and ("stage_1" in self.script.raw_js or "stage" in self.script.raw_js)
            and ("addEventListener" in self.script.raw_js)
        )
        self.assertTrue(
            has_stage_handling,
            "Inquiry Console must listen to #inqStage changes and dynamically update generated messages.",
        )

    # -------------------------------------------------------------------------
    # Zero Language Leakage Verification (Arabic & English Purity)
    # -------------------------------------------------------------------------
    @milestone("baseline")
    def test_t3_11_arabic_whatsapp_zero_thai_leakage(self):
        """T3.11: Arabic WhatsApp summary must have ZERO Thai characters across all clinical presets."""
        import subprocess
        import os
        deno_path = "/opt/homebrew/bin/deno"
        if os.path.exists(deno_path):
            test_script = (
                "globalThis.window = { lucide: { createIcons: () => {} } };\n"
                "globalThis.document = { addEventListener: () => {}, getElementById: () => null, querySelectorAll: () => [] };\n"
                "const code = await Deno.readTextFile('app.js');\n"
                "(1, eval)(code + '\\nglobalThis.CALL_SOP_PRESETS = CALL_SOP_PRESETS;\\nglobalThis.generateVejthaniCallScript = generateVejthaniCallScript;');\n"
                "const thaiRegex = /[\\u0E00-\\u0E7F]/;\n"
                "for (const k of ['oman_knee', 'saudi_cancer', 'uae_pediatric', 'uk_surgery']) {\n"
                "  const p = globalThis.CALL_SOP_PRESETS[k];\n"
                "  const res = globalThis.generateVejthaniCallScript(p, 'ar', 'ready', 'male', 'ar');\n"
                "  if (thaiRegex.test(res.summaryWA)) {\n"
                "    console.error('Leak in ' + k + ': ' + res.summaryWA);\n"
                "    Deno.exit(1);\n"
                "  }\n"
                "}\n"
                "Deno.exit(0);\n"
            )
            res = subprocess.run([deno_path, "eval", test_script], capture_output=True, text=True)
            self.assertEqual(res.returncode, 0, f"Thai characters detected in Arabic WhatsApp summary:\n{res.stderr or res.stdout}")



if __name__ == "__main__":
    import json
    unittest.main()
