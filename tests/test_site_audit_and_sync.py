import unittest
import os
import re

class TestSiteAuditAndCrossLanguageSync(unittest.TestCase):
    def setUp(self):
        self.base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.index_path = os.path.join(self.base_dir, "index.html")
        self.app_js_path = os.path.join(self.base_dir, "app.js")
        self.server_py_path = os.path.join(self.base_dir, "server.py")
        
        with open(self.index_path, "r", encoding="utf-8") as f:
            self.index_html = f.read()
            
        with open(self.app_js_path, "r", encoding="utf-8") as f:
            self.app_js = f.read()

    def test_dossier_live_editing_inputs_exist(self):
        """Test that interactive patient profile editing inputs exist in View 4 Clinical Dossier"""
        self.assertIn('id="dossierPatientName"', self.index_html)
        self.assertIn('id="dossierPatientHN"', self.index_html)
        self.assertIn('id="dossierChiefComplaint"', self.index_html)
        self.assertIn('id="dossierDiagnosis"', self.index_html)
        
        # Verify contenteditable on complaint and diagnosis
        self.assertIn('id="dossierChiefComplaint"', self.index_html)
        self.assertIn('contenteditable="true"', self.index_html)
        self.assertIn('id="dossierDiagnosis"', self.index_html)

    def test_cross_language_sync_functions_present(self):
        """Test that dynamic cross-language synchronization functions exist in app.js"""
        self.assertIn("function applyDynamicPatientDataToCardText", self.app_js)
        self.assertIn("function syncPatientNameAcrossCards", self.app_js)
        self.assertIn("function saveAndSyncAllCardsAcrossLanguages", self.app_js)

    def test_bidirectional_input_sync_wired(self):
        """Test that dossier and call form inputs are mutually synchronized in app.js"""
        self.assertIn("dossierPatientName.addEventListener", self.app_js)
        self.assertIn("dossierPatientHN.addEventListener", self.app_js)
        self.assertIn("dossierDiagnosis.addEventListener", self.app_js)
        self.assertIn("callPatientName.addEventListener", self.app_js)

    def test_card_save_and_sync_trigger(self):
        """Test that saving card edits triggers cross-language synchronization"""
        self.assertIn("saveAndSyncAllCardsAcrossLanguages()", self.app_js)
        self.assertIn("btnToggleEditText.textContent = isEditingMode ? \"บันทึกการแก้ไข\" : \"แก้ไขบทพูด\"", self.app_js)

    def test_arabic_button_styling_high_contrast(self):
        """Test that docCallLangAr has high-contrast styling for active and inactive states"""
        self.assertIn('id="docCallLangAr"', self.index_html)
        self.assertIn('bg-[#1B365D]', self.app_js)
        self.assertIn('font-arabic', self.app_js)

    def test_gender_endings_adaptation(self):
        """Test that gender endings (krub vs ka) are adapted dynamically in Thai scripts"""
        self.assertIn('"สวัสดีค่ะ"', self.app_js)
        self.assertIn('"สวัสดีครับ"', self.app_js)
        self.assertIn('"ดิฉันชื่อ"', self.app_js)
        self.assertIn('"ผมชื่อ"', self.app_js)

    def test_site_wide_modules_presence(self):
        """Comprehensive audit: verify all 5 views and global components exist in HTML"""
        # View 1: Call SOP Journey
        self.assertIn('id="viewCallJourney"', self.index_html)
        self.assertIn('id="callPatientName"', self.index_html)
        self.assertIn('id="callPatientHN"', self.index_html)
        self.assertIn('id="callTopic"', self.index_html)
        self.assertIn('id="scriptPrompt1"', self.index_html)
        self.assertIn('id="callOutcomeButtons"', self.index_html)
        self.assertIn('data-outcome="ready"', self.index_html)
        self.assertIn('data-outcome="not_ready"', self.index_html)
        self.assertIn('data-outcome="decline"', self.index_html)
        self.assertIn('id="postCallWhatsAppSummary"', self.index_html)
        self.assertIn('id="btnOpenPostCallWhatsApp"', self.index_html)

        # View 2: 5 Inquiries Management Console
        self.assertIn('id="viewInquiryConsole"', self.index_html)
        self.assertIn('data-inq-cat="king_of_bone"', self.index_html)
        self.assertIn('data-inq-cat="cancer"', self.index_html)
        self.assertIn('data-inq-cat="pediatric"', self.index_html)
        self.assertIn('data-inq-cat="general_surgery"', self.index_html)
        self.assertIn('data-inq-cat="investigate"', self.index_html)

        # View 3: Arabic Cultural Etiquette Guide
        self.assertIn('id="viewArabicCenter"', self.index_html)

        # View 4: Medical Document Ingestion & Teleprompter
        self.assertIn('id="viewDocTeleprompter"', self.index_html)
        self.assertIn('id="medicalDropArea"', self.index_html)
        self.assertIn('id="btnProcessMedicalDocs"', self.index_html)
        self.assertIn('id="docPrompt1"', self.index_html)
        self.assertIn('id="docPrompt6"', self.index_html)
        self.assertIn('id="docToneFormal"', self.index_html)
        self.assertIn('id="docToneEmpathy"', self.index_html)
        self.assertIn('id="docToneConcise"', self.index_html)

        # View 5: Settings / Executive Management
        self.assertIn('id="viewSettings"', self.index_html)

        # Global Components
        self.assertIn('id="medicalFileInput"', self.index_html)
        self.assertIn('id="docCallLangThai"', self.index_html)
        self.assertIn('id="docCallLangEn"', self.index_html)
        self.assertIn('id="docCallLangAr"', self.index_html)

    def test_zero_emojis_across_project(self):
        """Strict Rule: Verify zero emojis in index.html and app.js"""
        emoji_pattern = re.compile(
            r'[\U0001F600-\U0001F64F]'
            r'|[\U0001F300-\U0001F5FF]'
            r'|[\U0001F680-\U0001F6FF]'
            r'|[\U0001F1E0-\U0001F1FF]'
            r'|[\U00002702-\U000027B0]'
            r'|[\U000024C2-\U0001F251]'
            r'|[\U0001F900-\U0001F9FF]'
            r'|[\U0001FA00-\U0001FA6F]'
            r'|[\U0001FA70-\U0001FAFF]'
        )

        for filename, content in [("index.html", self.index_html), ("app.js", self.app_js)]:
            matches = emoji_pattern.findall(content)
            self.assertEqual(len(matches), 0, f"Found emoji in {filename}: {matches}")

if __name__ == "__main__":
    unittest.main()
