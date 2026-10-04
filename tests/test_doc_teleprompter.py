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
            "btnSampleCaseKnee",
            "btnSampleCaseSpine",
            "btnSampleCasePediatric",
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
            "docClosingDynamic",
            "docPrompt6"
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
        self.assertIn("/api/analyze-doc", js)

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
