"""
Automated unit tests for Case Repository, Data Dashboard, 3-Step Follow-Up Pipeline,
and Multi-Format Export Engine (CSV UTF-8 BOM, JSON Backup, Printable Dossier).
"""

import unittest
import os
import re

class TestCaseDashboardAndExport(unittest.TestCase):

    def setUp(self):
        self.base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        self.index_path = os.path.join(self.base_dir, "index.html")
        self.app_js_path = os.path.join(self.base_dir, "app.js")

        with open(self.index_path, "r", encoding="utf-8") as f:
            self.index_html = f.read()

        with open(self.app_js_path, "r", encoding="utf-8") as f:
            self.app_js = f.read()

    def test_dashboard_and_navigation_dom_elements(self):
        """Verify that all UI elements for Case Dashboard & Navigation exist in index.html"""
        required_ids = [
            "viewCaseDashboard",
            "navDockCaseDashboard",
            "navModeCaseDashboard",
            "btnGoToCaseDashboard",
            "btnExportCasesCSV",
            "btnExportCasesJSON",
            "btnTriggerImportJSON",
            "fileImportCasesJSON",
            "btnResetDemoCases",
            "metricTotalCases",
            "metricStep1",
            "metricStep2",
            "metricStep3",
            "metricBooked",
            "caseSearchInput",
            "caseSpecialtyFilter",
            "caseStepFilter",
            "caseCountIndicator",
            "caseTableBody",
            "caseTableEmptyState",
            "caseFollowUpModal",
            "modalCaseBadge",
            "modalPatientName",
            "modalPatientSub",
            "btnCloseFollowUpModal",
            "btnModalSelectStep1",
            "btnModalSelectStep2",
            "btnModalSelectStep3",
            "btnModalSelectStepBooked",
            "modalStepTitle",
            "modalStepObjective",
            "btnModalLangThai",
            "btnModalLangEn",
            "btnModalLangAr",
            "modalScriptContent",
            "btnCopyModalScript",
            "btnModalSendWhatsApp",
            "modalLogStaff",
            "modalLogChannel",
            "modalLogOutcome",
            "modalLogNotes",
            "btnSaveFollowUpLog",
            "modalHistoryTimeline",
            "btnPrintModalDossier",
            "btnOpenCaseInTeleprompter",
            "btnModalCloseSecondary"
        ]

        for el_id in required_ids:
            self.assertIn(f'id="{el_id}"', self.index_html, f"Missing required element id: {el_id}")

    def test_default_gcc_demo_cases_configured(self):
        """Verify 5 high-yield clinical demo cases covering GCC countries, specialties, and steps"""
        self.assertIn("DEFAULT_GCC_DEMO_CASES", self.app_js)
        self.assertIn("CASE-2026-OM-001", self.app_js)
        self.assertIn("CASE-2026-SA-002", self.app_js)
        self.assertIn("CASE-2026-AE-003", self.app_js)
        self.assertIn("CASE-2026-QA-004", self.app_js)
        self.assertIn("CASE-2026-KW-005", self.app_js)

        # Check patient names
        self.assertIn("Mohammed Al-Balushi", self.app_js)
        self.assertIn("Fatima Al-Zahrani", self.app_js)
        self.assertIn("Baby Tariq Al-Maktoum", self.app_js)
        self.assertIn("Khaled Al-Kuwari", self.app_js)
        self.assertIn("Sheikh Ahmed Al-Sabah", self.app_js)

        # Check follow-up stages
        self.assertIn('"step1"', self.app_js)
        self.assertIn('"step2"', self.app_js)
        self.assertIn('"step3"', self.app_js)
        self.assertIn('"booked"', self.app_js)

    def test_case_repository_functions_defined(self):
        """Verify presence of core repository, follow-up, and export functions in app.js"""
        functions = [
            "function getStoredCases",
            "function saveStoredCases",
            "function saveCaseToRepository",
            "function renderCaseDashboard",
            "function openCaseFollowUpModal",
            "function loadCaseIntoTeleprompter",
            "function generateFollowUpScript",
            "function generateFollowUpWhatsAppURL",
            "function exportCasesToCSV",
            "function exportCasesToJSON",
            "function importCasesFromJSON",
            "function printCaseDossier",
            "function initCaseDashboardAndRepository"
        ]

        for fn in functions:
            self.assertIn(fn, self.app_js, f"Missing core function: {fn}")

    def test_csv_export_includes_utf8_bom(self):
        """Verify CSV export includes UTF-8 BOM (\\uFEFF) to prevent Excel Thai/Arabic mojibake"""
        self.assertIn('"\\uFEFF" + headers.map', self.app_js, "CSV export must prepend \\uFEFF for Excel UTF-8 compatibility")
        self.assertIn('Vejthani_Cases_Export_', self.app_js)

    def test_auto_archive_wired_on_doc_process(self):
        """Verify document ingestion automatically archives processed cases to repository"""
        self.assertIn("saveCaseToRepository(result.dossier, result.scriptCards, currentScriptTone, usedEngine)", self.app_js)
        self.assertIn("saveCaseToRepository(fallbackResult.dossier, fallbackResult.scriptCards, currentScriptTone, \"client-fallback\")", self.app_js)

    def test_view_switching_includes_viewCaseDashboard(self):
        """Verify viewCaseDashboard is registered in views array and activateView triggers render"""
        self.assertIn("'viewCaseDashboard'", self.index_html)
        self.assertIn("window.renderCaseDashboard();", self.index_html)

    def test_zero_emojis_across_files(self):
        """Strict Rule: Zero emojis in index.html and app.js"""
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
