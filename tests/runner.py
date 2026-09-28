#!/usr/bin/env python3
"""
Vejthani MedLiaison AI - Master E2E Test Suite Runner
Authoritative, opaque-box, requirement-driven test execution engine.
"""

import sys
import os
import unittest
import time
import argparse
from typing import List, Dict, Any

# Ensure project root is in sys.path
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

from tests.test_tier1_features import TestTier1FeatureCoverage
from tests.test_tier2_boundaries import TestTier2BoundariesAndCornerCases
from tests.test_tier3_combinations import TestTier3CrossFeatureCombinations
from tests.test_tier4_scenarios import TestTier4RealWorldScenarios

TIER_CLASSES = {
    1: ("Tier 1: Feature Coverage", TestTier1FeatureCoverage),
    2: ("Tier 2: Boundary & Corner Cases", TestTier2BoundariesAndCornerCases),
    3: ("Tier 3: Cross-Feature Combinations", TestTier3CrossFeatureCombinations),
    4: ("Tier 4: Real-World Scenarios", TestTier4RealWorldScenarios),
}


class MedLiaisonTestResult:
    def __init__(self):
        self.results: List[Dict[str, Any]] = []

    def record(self, tier: int, test_id: str, doc: str, milestone: str, status: str, message: str = "", duration: float = 0.0):
        self.results.append({
            "tier": tier,
            "id": test_id,
            "doc": doc.strip() if doc else test_id,
            "milestone": milestone,
            "status": status,
            "message": message,
            "duration": duration,
        })


def run_medliaison_suite(target_tier: int = 0, target_milestone: str = "all", strict: bool = False, verbose: bool = False) -> int:
    collector = MedLiaisonTestResult()
    start_time = time.time()

    tiers_to_run = [target_tier] if target_tier in TIER_CLASSES else [1, 2, 3, 4]

    print("\n" + "=" * 80)
    print("🏥 Vejthani MedLiaison AI - E2E Automated Test Suite")
    print("   Enterprise Standards: JCI Medical Diplomatic | GCC Royal Diplomatic | Vejthani SOP")
    print("=" * 80)

    for tier_num in tiers_to_run:
        tier_title, test_class = TIER_CLASSES[tier_num]
        print(f"\n📂 Executing {tier_title} ...")

        # Extract test methods
        loader = unittest.TestLoader()
        suite = loader.loadTestsFromTestCase(test_class)

        for test in suite:
            test_method_name = test._testMethodName
            test_method = getattr(test_class, test_method_name)
            doc = getattr(test_method, "__doc__", "") or test_method_name
            test_milestone = getattr(test_method, "milestone", "baseline")

            # Filter by milestone if requested
            if target_milestone != "all":
                if target_milestone == "baseline" and test_milestone != "baseline":
                    continue
                elif target_milestone == "M1" and test_milestone not in ("baseline", "M1"):
                    continue
                elif target_milestone == "M2" and test_milestone not in ("baseline", "M1", "M2"):
                    continue
                elif target_milestone == "M3" and test_milestone not in ("baseline", "M1", "M2", "M3"):
                    continue

            # Run test individually
            sub_suite = unittest.TestSuite([test])
            runner = unittest.TextTestRunner(stream=open(os.devnull, 'w'), verbosity=0)
            
            t0 = time.time()
            res = runner.run(sub_suite)
            duration = time.time() - t0

            if res.wasSuccessful():
                status = "PASS"
                msg = ""
            else:
                if len(res.failures) > 0:
                    status = "FAIL"
                    msg = res.failures[0][1].splitlines()[-1] if res.failures[0][1] else "Assertion failed"
                elif len(res.errors) > 0:
                    status = "ERROR"
                    msg = res.errors[0][1].splitlines()[-1] if res.errors[0][1] else "Runtime error"
                else:
                    status = "FAIL"
                    msg = "Test failed"

            # Milestone classification
            if status != "PASS" and test_milestone != "baseline":
                display_status = f"PENDING ({test_milestone})"
            else:
                display_status = status

            collector.record(
                tier=tier_num,
                test_id=test_method_name,
                doc=doc,
                milestone=test_milestone,
                status=status,
                message=msg,
                duration=duration,
            )

            # Interactive console output
            icon = "✅" if status == "PASS" else ("⏳" if test_milestone != "baseline" else "❌")
            if verbose or status != "PASS":
                print(f"  {icon} [{display_status:<14}] {test_method_name}: {doc.splitlines()[0]}")
                if msg and verbose:
                    print(f"       └── Reason: {msg}")
            else:
                print(f"  {icon} [{display_status:<14}] {test_method_name}")

    total_time = time.time() - start_time
    total_tests = len(collector.results)
    passed_tests = sum(1 for r in collector.results if r["status"] == "PASS")
    failed_baseline = sum(1 for r in collector.results if r["status"] != "PASS" and r["milestone"] == "baseline")
    pending_m1 = sum(1 for r in collector.results if r["status"] != "PASS" and r["milestone"] == "M1")
    pending_m2 = sum(1 for r in collector.results if r["status"] != "PASS" and r["milestone"] == "M2")
    pending_m3 = sum(1 for r in collector.results if r["status"] != "PASS" and r["milestone"] == "M3")

    print("\n" + "=" * 80)
    print("📊 Test Execution Summary & Milestone Readiness")
    print("=" * 80)
    print(f"Total Test Cases Executed : {total_tests}")
    print(f"Execution Duration        : {total_time:.3f} seconds")
    print(f"Currently Passing         : {passed_tests} / {total_tests} ({(passed_tests/total_tests)*100:.1f}%)")
    print("-" * 80)
    print("Milestone Breakdown:")
    print(f"  🟢 Baseline (Existing Codebase)  : {passed_tests} passing (Regressions: {failed_baseline})")
    print(f"  ⏳ Milestone 1 (M1 UI Glass)     : {pending_m1} tests pending M1 completion")
    print(f"  ⏳ Milestone 2 (M2 Localization) : {pending_m2} tests pending M2 completion")
    print(f"  ⏳ Milestone 3 (M3 Call & Specs) : {pending_m3} tests pending M3 completion")
    print("=" * 80)

    # Detailed pending items
    if pending_m1 + pending_m2 + pending_m3 > 0:
        print("\n📋 Next Implementation Milestone Activations:")
        if pending_m1 > 0:
            print(f"  [M1 Scope] {pending_m1} tests waiting for Obsidian theme (#0b0d11), ambient glow, and 5-view dock.")
        if pending_m2 > 0:
            print(f"  [M2 Scope] {pending_m2} tests waiting for Amiri/Alexandria/Noto Sans Thai, Arabic SOP, and gender toggle.")
        if pending_m3 > 0:
            print(f"  [M3 Scope] {pending_m3} tests waiting for 1s clock, Friday Jummah alert, phone in wa.me, and 5-stage engine.")

    print("\n")

    if strict:
        if passed_tests < total_tests:
            print("❌ Strict Mode: Test suite requires 100% pass across all milestones.")
            return 1
        return 0

    if failed_baseline > 0:
        print("❌ Regression Detected in Baseline functionality!")
        return 1

    print("✅ Test suite executed cleanly! All baseline features passing, milestone gates active.")
    return 0


def main():
    parser = argparse.ArgumentParser(description="Vejthani MedLiaison AI E2E Test Suite Runner")
    parser.add_argument("--tier", type=int, choices=[1, 2, 3, 4], default=0, help="Run only specific tier (1, 2, 3, 4)")
    parser.add_argument("--milestone", choices=["all", "baseline", "M1", "M2", "M3", "M4"], default="all", help="Target milestone filter")
    parser.add_argument("--strict", action="store_true", help="Fail if any test fails (for M4 hardening)")
    parser.add_argument("-v", "--verbose", action="store_true", help="Verbose output with error messages")
    args = parser.parse_args()

    sys.exit(run_medliaison_suite(
        target_tier=args.tier,
        target_milestone=args.milestone,
        strict=args.strict,
        verbose=args.verbose,
    ))


if __name__ == "__main__":
    main()
