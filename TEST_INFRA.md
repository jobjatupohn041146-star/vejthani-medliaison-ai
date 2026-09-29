# MedLiaison AI — E2E Test Infrastructure & Specification
**Project:** Vejthani MedLiaison AI (Ultra-Premium Enterprise Standard)  
**Architect:** E2E Test Suite Architect (`teamwork_preview_test_writer_1`)  
**Scope:** Automated, Opaque-Box End-to-End Verification Suite  
**Version:** 1.0.0 (Pre-Release / Milestone-Gated)  
**Date:** 2026-09-28  

---

## 1. Test Philosophy & Guiding Principles

The Vejthani MedLiaison AI system operates at the intersection of critical tertiary healthcare, international VIP patient coordination, and GCC diplomatic protocols. Serving royalty, dignitaries, embassy health offices, and international patients requires a zero-defect standard across visual rendering, linguistic integrity, cultural respect, and technical workflow execution.

### Core Principles
1. **Opaque-Box & Requirement-Driven:**
   Tests evaluate observable external behaviors, DOM contracts, HTTP endpoints, and mathematical/linguistic invariants rather than internal implementation details. The test suite treats the system as a functional black box driven strictly by `ORIGINAL_REQUEST.md` and `PROJECT.md`.
2. **Authoritative Output Derivation:**
   Every test has an explicit authoritative specification source:
   - *Timezones & Prayer Schedules:* Standard UTC offsets and Islamic prayer calculation windows (Fajr, Dhuhr, Asr, Maghrib, Isha, and Friday Jummah).
   - *Cultural Protocols:* GCC diplomatic salutations, Qaylulah afternoon rest window (14:00–16:30), gender sensitivity rules, and Arabic RTL layout standards.
   - *Medical Governance:* JCI standards, Vejthani Hospital SOP tele-prompt stages, and Embassy Medical Attaché financial guarantee coordination.
3. **Progressive Testability & Milestone Traceability:**
   Tests are tagged with milestone markers (`baseline`, `M1`, `M2`, `M3`, `M4`). Implementing agents can execute milestone-filtered runs (`python3 tests/runner.py --milestone M1`) to verify milestone increments without false regression alarms.
4. **Zero Flakiness & Environment Independence:**
   The test runner requires zero external network connections or third-party test runners, running entirely within standard Python 3.14 on macOS with in-memory HTTP sockets (`MockSocket`), HTML parsing, and RFC-compliant URL validation.

---

## 2. Test Design Methodologies

The test suite applies four formal software testing methodologies to guarantee comprehensive coverage:

### 2.1 Category-Partition Method (CPM)
System parameters and inputs are decomposed into discrete equivalence partitions:
- **Language Mode:** `{ Thai (th), English (en), Arabic GCC Diplomatic (ar) }`
- **Call Outcome:** `{ Ready to Book (ready), Considering / Need Info (not_ready), Decline (decline) }`
- **Inquiry Specialty:** `{ King of Bones (king_of_bone), Cancer Center (cancer), Pediatric Orthopedics (pediatric), General Surgery (general_surgery), Lead Investigation (investigate) }`
- **Target Market:** `{ GCC / Arab Diplomatic (gcc), Western / Expat (western) }`
- **Staff Gender Register:** `{ Female (ค่ะ/ดิฉัน), Male (ครับ/ผม) }`
- **Inquiry Stage:** `{ Stage 1 (Initial Records), Stage 2 (48h Plan), Stage 3 (Re-engagement), Stage 4 (Logistics & Visa), Stage 5 (Financial Package) }`

### 2.2 Boundary Value Analysis (BVA)
Tests probe exact operational thresholds where system state shifts:
- **Early Morning Window:** `08:59 AM` (Too early / Wait) vs `09:00 AM` (Business hours open).
- **Dhuhr Prayer Window:** `11:45 AM` (Enter prayer alert) to `13:00 PM` (Exit prayer alert).
- **Friday Jummah Congregational Prayer:** `Friday 11:30 AM` to `Friday 13:30 PM` (High-priority alert, halt outbound calls).
- **Late Night Window:** `19:59 PM` (Appropriate) vs `20:00 PM` (Do not call / late night alert).
- **Midnight Roll-Over:** Bangkok 02:00 AM (Next calendar day) vs Riyadh 10:00 PM (Previous calendar day).
- **Phone Number Normalization:** Stripping leading `+`, parentheses, spaces, dashes, and country prefixes (`+968 9123-4567` → `96891234567`).

### 2.3 Combinatorial & Pairwise Testing
Verifies multi-variable state interactions to prevent cascading failures:
- Switching specialty while in an active inquiry stage updates procedure, document checklist, and message drafts simultaneously.
- Toggling tele-prompter language preserves custom patient names, topics, and issues without data loss.
- Changing outcome state triggers synchronized updates across tele-prompter closing cards, post-call WhatsApp summaries, and CRM audit logs.
- Selecting male/female coordinator dynamically eliminates `/` slashes across Thai sentences while preserving Arabic WhatsApp generation.

### 2.4 Real-World Workload Profiles
End-to-end integration scenarios representing high-value clinical patient journeys:
1. **Omani Knee Replacement (King of Bones):** High-net-worth VIP journey from Muscat requiring Oman Health Office guarantee letter, robotic knee procedure, and direct Arabic WhatsApp routing.
2. **Saudi Cancer Second Opinion (Oncology MDT):** Complex oncology triage from Riyadh requiring female subspecialist coordination, Biopsy/PET-CT review, and diplomatic English/Arabic summaries.
3. **UAE Pediatric Orthopedic Referral:** Family-centered consultation from Dubai requiring pediatric growth charts and pre-travel video call scheduling.
4. **UK Surgery Fit-to-Fly (Laparoscopic Cholecystectomy):** JCI-compliant British patient journey requiring 5-day fit-to-fly recovery guarantee and international insurance pre-authorization.
5. **Kuwait Friday Jummah & 4D Lead Triage:** Contact attempt during sacred congregational prayer; system suppresses calls and initiates 4D Lead Qualification (Diamond VIP scoring).

---

## 3. Test Suite Inventory & Milestone Coverage Mapping

The test suite comprises **66 comprehensive test cases** organized across four tiers:

| Tier | Test Count | Scope | Key Test Methods | Target Milestones |
| :--- | :---: | :--- | :--- | :--- |
| **Tier 1: Feature Coverage** | 35 | UI Dark Glassmorphism, Navigation Docks, Trilingual Fonts, 3 Call Steps, 5 Specialties, WhatsApp Router, Timezones | `test_t1_01` to `test_t1_35` | Baseline (17), M1 (9), M2 (4), M3 (5) |
| **Tier 2: Boundary & Corner Cases** | 16 | Prayer boundaries, Friday Jummah window, Qaylulah rest, phone sanitization, BiDi isolation, server traversal security | `test_t2_01` to `test_t2_16` | Baseline (10), M2 (2), M3 (4) |
| **Tier 3: Cross-Feature Combinations** | 10 | Multi-variable state transitions, language/outcome matrix, gender toggle reactivity, API fallback bridge | `test_t3_01` to `test_t3_10` | Baseline (5), M1 (1), M2 (3), M3 (1) |
| **Tier 4: Real-World Scenarios** | 5 | End-to-end clinical concierge patient journeys (Oman, Saudi, UAE, UK, Kuwait) | `test_t4_01` to `test_t4_05` | Baseline (2), M2 (1), M3 (2) |
| **Total** | **66** | **Complete System Lifecycle** | | **Baseline: 34 \| M1: 10 \| M2: 10 \| M3: 12** |

---

## 4. Test Execution & Usage Guide

### 4.1 Master Test Runner (`tests/runner.py`)
The suite is executed via the standalone Python runner:

```bash
# Execute entire test suite (all tiers, all milestones)
python3 tests/runner.py

# Run with verbose output showing all individual test docstrings and failure details
python3 tests/runner.py -v

# Run a specific tier only
python3 tests/runner.py --tier 1
python3 tests/runner.py --tier 2
python3 tests/runner.py --tier 3
python3 tests/runner.py --tier 4

# Run against a specific milestone gate
python3 tests/runner.py --milestone baseline   # 100% pass on existing legacy codebase
python3 tests/runner.py --milestone M1         # 100% pass on UI transformation
python3 tests/runner.py --milestone M2         # Verifies Trilingual Localization
python3 tests/runner.py --milestone M3         # Verifies Interactive Journey & Specialties

# Strict mode (Hard failure exit code 1 if any milestone test fails - used for M4 gate)
python3 tests/runner.py --strict
```

### 4.2 Standard Python unittest Execution
The suite also supports standard Python unittest discovery:

```bash
python3 -m unittest discover tests
```

---

## 5. Architectural Test Directory Layout

```
tests/
├── __init__.py                    # Python test package initialization
├── helpers.py                     # Authoritative DOM, Server, Script inspectors and Oracles
├── runner.py                      # Standalone CLI runner with milestone gating and reporting
├── test_tier1_features.py         # Tier 1: 35 Feature Coverage tests
├── test_tier2_boundaries.py       # Tier 2: 16 Boundary & Corner Case tests
├── test_tier3_combinations.py     # Tier 3: 10 Cross-Feature Combination tests
└── test_tier4_scenarios.py        # Tier 4: 5 Real-World Workload Scenario tests
```

---

## 6. Milestone Acceptance Matrix

| Milestone | Scope Description | Tests Activated | Target Pass Rate | Current Status |
| :--- | :--- | :---: | :---: | :---: |
| **Baseline** | Legacy codebase regression preservation | 34 | 100% (34/34) |  **PASSING** |
| **M1** | Dark Glassmorphism Canvas, Floating Dock, 5 Views | 10 | 100% (10/10) |  **PASSING** |
| **M2** | Amiri/Alexandria/Noto Fonts, Arabic SOP, Gender toggle, No slashes | 10 | 100% (10/10) | ⏳ **PENDING (4 tests)** |
| **M3** | 1s Clock, Friday Jummah Alert, Direct wa.me, 5-Stage Nurturing | 12 | 100% (12/12) | ⏳ **PENDING (4 tests)** |
| **M4** | Final Acceptance Gate & Tier 5 Hardening | 66 | 100% (66/66) | ⏳ **PLANNED** |

---

*Authored by teamwork_preview_test_writer_1 for Vejthani MedLiaison AI.*
