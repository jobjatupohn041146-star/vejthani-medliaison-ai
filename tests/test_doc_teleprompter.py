"""
Unit and Integration Tests for Universal Medical Document Ingestion & Nurse Teleprompter
"""

import unittest
import json
import os
import sys
import re

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from tests.helpers import ServerInspector

class TestMedicalDocTeleprompter(unittest.TestCase):

    def test_analyze_doc_endpoint_default(self):
        """Test POST /api/analyze-doc returns clinical dossier and 6 teleprompter cards"""
        payload = {
            "files": [{"name": "knee_mri_report.pdf", "text": "Right knee joint severe osteoarthritis grade 3"}]
        }
        status, headers, body = ServerInspector.post_json("/api/analyze-doc", payload)
        self.assertEqual(status, 200)
        res_json = json.loads(body.decode("utf-8"))
        self.assertEqual(res_json.get("status"), "success")
        
        dossier = res_json.get("dossier", {})
        self.assertIn("patientName", dossier)
        self.assertIn("chiefComplaint", dossier)
        self.assertIn("diagnosis", dossier)
        self.assertIn("documentsReceived", dossier)
        self.assertIn("documentsMissing", dossier)
        self.assertTrue(len(dossier["documentsMissing"]) > 0)

        cards = res_json.get("scriptCards", [])
        self.assertEqual(len(cards), 6)
        for card in cards:
            self.assertIn("step", card)
            self.assertIn("thai", card)
            self.assertIn("english", card)
            self.assertIn("arabic", card)
            self.assertIn("arabicPhonetic", card)

    def test_analyze_doc_endpoint_cancer(self):
        """Test POST /api/analyze-doc adapts to oncology/cancer context"""
        payload = {
            "files": [{"name": "liver_cancer_biopsy.docx", "text": "Patient with hepatocellular carcinoma evaluation"}]
        }
        status, headers, body = ServerInspector.post_json("/api/analyze-doc", payload)
        self.assertEqual(status, 200)
        res_json = json.loads(body.decode("utf-8"))
        dossier = res_json.get("dossier", {})
        self.assertEqual(dossier.get("specialty"), "cancer")
        self.assertIn("Fatima", dossier.get("patientName", ""))

    def test_analyze_doc_endpoint_pediatric(self):
        """Test POST /api/analyze-doc adapts to pediatric orthopedic context"""
        payload = {
            "files": [{"name": "child_clubfoot_scan.png", "text": "Pediatric congenital clubfoot evaluation"}]
        }
        status, headers, body = ServerInspector.post_json("/api/analyze-doc", payload)
        self.assertEqual(status, 200)
        res_json = json.loads(body.decode("utf-8"))
        dossier = res_json.get("dossier", {})
        self.assertEqual(dossier.get("specialty"), "pediatric")
        self.assertIn("Rashid", dossier.get("patientName", ""))

    def test_frontend_dom_elements_exist(self):
        """Verify that all UI elements for document ingestion and teleprompter exist in index.html"""
        with open("index.html", "r", encoding="utf-8") as f:
            html = f.read()

        required_ids = [
            "medicalDocIngestionSection",
            "medicalDropArea",
            "medicalFileInput",
            "medicalFilesQueueContainer",
            "stagedFilesList",
            "stagedFilesCount",
            "btnProcessMedicalDocs",
            "medicalDocStatus",
            "clinicalDossierCard",
            "dossierChiefComplaint",
            "dossierDiagnosis",
            "dossierPrecautions",
            "dossierMissingDocsContainer",
            "dossierMissingList",
            "dossierMissingCountBadge",
            "scriptPrompt1Phonetic",
            "scriptPrompt2Phonetic",
            "scriptPrompt3Phonetic",
            "scriptClosingDynamicPhonetic",
            "scriptPrompt6Phonetic",
            "btnAttachMedicalDocs",
            "btnStep1AttachDoc",
            "btnInqAttachDoc",
            "viewDocTeleprompter",
            "navDockDocScript",
            "navModeDocScript",
            "btnGoToDocPage",
            "btnSyncToCallSop",
            "btnDocSendWhatsApp",
            "docPrompt1",
            "docPrompt2",
            "docPrompt3",
            "docPrompt4",
            "docPrompt4Phonetic",
            "docClosingDynamic",
            "docPrompt6",
            "docLiaisonProfileCard",
            "docStaffName",
            "docStaffPosition",
            "docStaffExt",
            "docStaffWhatsApp"
        ]

        for el_id in required_ids:
            self.assertIn(f'id="{el_id}"', html, f"Missing required element id: {el_id}")

    def test_app_js_sample_cases_and_functions(self):
        """Verify sample cases and core functions in app.js"""
        with open("app.js", "r", encoding="utf-8") as f:
            js = f.read()

        self.assertIn("SAMPLE_MEDICAL_CASES", js)
        self.assertIn("loadSampleMedicalCase", js)
        self.assertIn("renderDossierCard", js)
        self.assertIn("resetDossierCard", js)
        self.assertIn("initMedicalDocIngestion", js)
        self.assertIn("initTeleprompterQuickActions", js)
        self.assertIn("extractClinicalDossierAndScripts", js)
        self.assertNotIn("renderCallPrompts()", js, "renderCallPrompts() ReferenceError bug should not exist")

    def test_demo_case_buttons_removed_from_html(self):
        """Verify user request: demo case buttons removed from index.html"""
        with open("index.html", "r", encoding="utf-8") as f:
            html = f.read()
        self.assertNotIn('id="btnSampleCaseKnee"', html)
        self.assertNotIn('id="btnSampleCaseSpine"', html)
        self.assertNotIn('id="btnSampleCasePediatric"', html)

    def test_distinct_scripts_across_medical_specialties(self):
        """Verify that different medical cases produce completely distinct scripts and missing docs"""
        knee_payload = {"files": [{"name": "knee.pdf", "text": "Right knee osteoarthritis"}]}
        cancer_payload = {"files": [{"name": "cancer.pdf", "text": "Liver hepatocellular carcinoma"}]}
        pediatric_payload = {"files": [{"name": "child.pdf", "text": "Pediatric clubfoot evaluation"}]}

        _, _, body_knee = ServerInspector.post_json("/api/analyze-doc", knee_payload)
        _, _, body_cancer = ServerInspector.post_json("/api/analyze-doc", cancer_payload)
        _, _, body_pediatric = ServerInspector.post_json("/api/analyze-doc", pediatric_payload)

        res_knee = json.loads(body_knee.decode("utf-8"))
        res_cancer = json.loads(body_cancer.decode("utf-8"))
        res_pediatric = json.loads(body_pediatric.decode("utf-8"))

        knee_card2 = res_knee["scriptCards"][1]["thai"]
        cancer_card2 = res_cancer["scriptCards"][1]["thai"]
        pediatric_card2 = res_pediatric["scriptCards"][1]["thai"]

        # Assert no two cases have identical script cards
        self.assertNotEqual(knee_card2, cancer_card2, "Knee and Cancer scripts must be distinct")
        self.assertNotEqual(knee_card2, pediatric_card2, "Knee and Pediatric scripts must be distinct")
        self.assertNotEqual(cancer_card2, pediatric_card2, "Cancer and Pediatric scripts must be distinct")

        # Assert distinct missing documents
        self.assertNotEqual(res_knee["dossier"]["documentsMissing"], res_cancer["dossier"]["documentsMissing"])
        self.assertNotEqual(res_knee["dossier"]["documentsMissing"], res_pediatric["dossier"]["documentsMissing"])

    def test_gemini_client_side_and_tone_controls(self):
        """Verify Gemini client-side caller, tone switcher, and editable script DOM elements"""
        with open("index.html", "r", encoding="utf-8") as f:
            html = f.read()
        with open("app.js", "r", encoding="utf-8") as f:
            js = f.read()

        # HTML elements
        self.assertIn('id="engineBadgeNLP"', html)
        self.assertIn('id="engineBadgeGemini"', html)
        self.assertIn('id="quickGeminiApiKey"', html)
        self.assertIn('id="docToneFormal"', html)
        self.assertIn('id="docToneEmpathy"', html)
        self.assertIn('id="docToneConcise"', html)
        self.assertIn('id="btnToggleEditScript"', html)

        # JS functions and state
        self.assertIn("callClientSideGeminiApi", js)
        self.assertIn("currentScriptTone", js)
        self.assertIn("doc-tone-btn", js)

    def test_liaison_profile_and_sync(self):
        """Verify Liaison Profile elements in Medical Doc Teleprompter and bidirectional sync logic"""
        with open("index.html", "r", encoding="utf-8") as f:
            html = f.read()
        with open("app.js", "r", encoding="utf-8") as f:
            js = f.read()

        # HTML assertions
        self.assertIn('id="docLiaisonProfileCard"', html)
        self.assertIn('id="docStaffName"', html)
        self.assertIn('id="docStaffPosition"', html)
        self.assertIn('id="docStaffExt"', html)
        self.assertIn('id="docStaffWhatsApp"', html)

        # JS sync assertions
        self.assertIn("syncStaffProfile", js)
        self.assertIn("vejthani_staff_profile", js)
        self.assertIn("docStaffName", js)
        self.assertIn("callStaffName", js)

    def test_cross_language_sync_and_api(self):
        """Verify cross-language translation engine and /api/translate-script endpoint"""
        with open("app.js", "r", encoding="utf-8") as f:
            js = f.read()

        self.assertIn("translateThaiCardToEnAndAr", js)
        self.assertIn("saveAndSyncAllCardsAcrossLanguages", js)
        self.assertIn("/api/translate-script", js)

        # Server endpoint verification
        payload = {
            "thaiText": "สวัสดีครับ ขอสายคุณโมฮัมเหม็ด อัล-บาลูชี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์กระดูกและข้อ King of Bones โรงพยาบาลเวชธานี",
            "cardIndex": 0,
            "patientName": "Mr. Mohammed Al-Balushi",
            "staffName": "Sorawit"
        }
        status, headers, body = ServerInspector.post_json("/api/translate-script", payload)
        self.assertEqual(status, 200)
        res = json.loads(body.decode("utf-8"))
        self.assertEqual(res.get("status"), "success")
        self.assertIn("Mohammed Al-Balushi", res.get("english", ""))
        self.assertIn("King of Bones", res.get("english", ""))
        self.assertIn("Sorawit", res.get("english", ""))
        self.assertIn("Mohammed Al-Balushi", res.get("arabic", ""))

    def test_zero_emojis(self):
        """Enforce strict zero emojis rule in all web files"""
        emoji_pattern = re.compile(
            '[\U00010000-\U0010ffff]'
            '|[\u2600-\u26FF]'
            '|[\u2700-\u27BF]'
            '|[\uFE00-\uFE0F]'
            '|[\u20D0-\u20FF]'
        )
        for filename in ["index.html", "app.js", "server.py", "api/analyze-doc.js"]:
            with open(filename, "r", encoding="utf-8") as f:
                for idx, line in enumerate(f, 1):
                    matches = emoji_pattern.findall(line)
                    self.assertEqual(len(matches), 0, f"Emoji found in {filename}:{idx}: {matches}")

if __name__ == '__main__':
    unittest.main()

