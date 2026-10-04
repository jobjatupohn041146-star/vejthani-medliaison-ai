#!/usr/bin/env python3
"""
Generate realistic mock medical files (.docx, .pdf, .jpg, .png) for Vejthani Medical Liaison AI testing.
Produces 3 comprehensive cases:
Case 1: UAE - Robotic Knee Replacement (Mr. Mohammed Al-Balushi)
Case 2: Oman - Endoscopic Spine Surgery (Mr. Tariq Al-Riyami)
Case 3: Qatar - Pediatric Clubfoot Ponseti (Master Rashid Al-Thani)
"""

import os
import sys
import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from PIL import Image, ImageDraw, ImageFont

def get_font(size):
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def create_radiology_image(filename_base, out_dir, patient_name, dob, study_date, exam_title, modality, findings_text, diagram_type="knee"):
    width, height = 1200, 1600
    img = Image.new("RGB", (width, height), color=(10, 15, 25))
    draw = ImageDraw.Draw(img)
    
    font_large = get_font(28)
    font_med = get_font(20)
    font_small = get_font(15)
    font_mono = get_font(14)
    
    # Top Medical Banner
    draw.rectangle([(0, 0), (width, 100)], fill=(18, 32, 54))
    draw.line([(0, 100), (width, 100)], fill=(0, 180, 216), width=3)
    draw.text((30, 20), "ADVANCED DIAGNOSTIC MEDICAL IMAGING CENTER", fill=(255, 255, 255), font=font_large)
    draw.text((30, 60), f"DEPARTMENT OF RADIOLOGY & PACS ARCHIVE | ACCREDITED FACILITY", fill=(144, 202, 249), font=font_small)
    
    # DICOM Patient Info Header
    draw.rectangle([(30, 120), (width - 30, 260)], fill=(15, 23, 42), outline=(51, 65, 85), width=1)
    
    info_col1 = [
        f"PATIENT NAME: {patient_name.upper()}",
        f"PATIENT ID: MED-{abs(hash(patient_name)) % 900000 + 100000}",
        f"DOB / AGE: {dob}",
        f"GENDER: MALE"
    ]
    info_col2 = [
        f"STUDY: {exam_title.upper()}",
        f"STUDY DATE: {study_date}",
        f"MODALITY: {modality} (DICOM 3.0 Standard)",
        f"STATUS: VERIFIED & FINALIZED"
    ]
    
    for i, line in enumerate(info_col1):
        draw.text((50, 135 + i * 28), line, fill=(226, 232, 240), font=font_small)
    for i, line in enumerate(info_col2):
        draw.text((650, 135 + i * 28), line, fill=(226, 232, 240), font=font_small)
        
    # Main Radiology Simulation Canvas
    canvas_box = (30, 280, width - 30, 1150)
    draw.rectangle(canvas_box, fill=(5, 8, 15), outline=(30, 41, 59), width=2)
    
    # Grid overlay
    for y in range(320, 1120, 80):
        draw.line([(40, y), (width - 40, y)], fill=(15, 23, 35), width=1)
    for x in range(80, width - 40, 100):
        draw.line([(x, 290), (x, 1140)], fill=(15, 23, 35), width=1)
        
    center_x = width // 2
    
    if diagram_type == "knee":
        # Draw simulated Knee joint bones
        # Femur (Thigh bone)
        femur_pts = [
            (center_x - 120, 360), (center_x + 120, 360),
            (center_x + 140, 520), (center_x + 180, 620),
            (center_x + 110, 680), (center_x + 20, 660),
            (center_x - 20, 660), (center_x - 110, 680),
            (center_x - 180, 620), (center_x - 140, 520)
        ]
        draw.polygon(femur_pts, fill=(180, 195, 215), outline=(220, 235, 255))
        
        # Tibia & Fibula (Lower leg bones)
        tibia_pts = [
            (center_x - 170, 710), (center_x - 20, 690),
            (center_x + 20, 690), (center_x + 170, 710),
            (center_x + 140, 780), (center_x + 110, 980),
            (center_x - 110, 980), (center_x - 140, 780)
        ]
        draw.polygon(tibia_pts, fill=(170, 185, 205), outline=(210, 225, 245))
        
        # Joint space narrowing annotation (Medial compartment)
        draw.ellipse([(center_x - 160, 665), (center_x - 40, 705)], outline=(239, 68, 68), width=3)
        draw.line([(center_x - 100, 660), (center_x - 260, 600)], fill=(239, 68, 68), width=2)
        draw.text((center_x - 450, 580), "MARKED JOINT SPACE NARROWING (1.4 mm)", fill=(239, 68, 68), font=font_med)
        draw.text((center_x - 450, 610), "KELLGREN-LAWRENCE GRADE 3-4", fill=(254, 202, 202), font=font_small)
        
        # Osteophyte annotation
        draw.ellipse([(center_x + 130, 670), (center_x + 185, 715)], outline=(245, 158, 11), width=2)
        draw.line([(center_x + 180, 690), (center_x + 260, 640)], fill=(245, 158, 11), width=2)
        draw.text((center_x + 270, 630), "MARGINAL OSTEOPHYTES (LATERAL)", fill=(245, 158, 11), font=font_small)
        
    elif diagram_type == "spine":
        # Draw simulated Cervical Vertebrae C4-C7
        for idx, (cy, lbl) in enumerate([(440, "C4"), (540, "C5"), (660, "C6"), (780, "C7")]):
            draw.rounded_rectangle([(center_x - 160, cy - 35), (center_x + 160, cy + 35)], radius=15, fill=(160, 175, 195), outline=(210, 225, 245), width=2)
            draw.text((center_x - 140, cy - 12), lbl, fill=(15, 23, 42), font=font_med)
            
        # Draw C5-C6 Herniated Disc
        draw.rectangle([(center_x - 130, 580), (center_x + 130, 620)], fill=(70, 85, 105), outline=(100, 116, 139))
        draw.ellipse([(center_x + 80, 585), (center_x + 175, 625)], fill=(225, 29, 72), outline=(255, 255, 255), width=2)
        draw.line([(center_x + 170, 605), (center_x + 270, 560)], fill=(225, 29, 72), width=3)
        draw.text((center_x + 280, 545), "PARACENTRAL DISC HERNIATION (C5-C6)", fill=(225, 29, 72), font=font_med)
        draw.text((center_x + 280, 580), "RIGHT C6 NERVE ROOT IMPINGEMENT", fill=(254, 205, 211), font=font_small)
        
    elif diagram_type == "pediatric":
        # Draw simulated Pediatric Foot & Ankle
        draw.ellipse([(center_x - 90, 420), (center_x + 90, 720)], fill=(160, 180, 205), outline=(200, 220, 245), width=2)
        draw.ellipse([(center_x - 140, 680), (center_x + 80, 880)], fill=(150, 170, 195), outline=(200, 220, 245), width=2)
        # Inversion angle indicator
        draw.line([(center_x, 480), (center_x - 70, 850)], fill=(245, 158, 11), width=3)
        draw.line([(center_x, 480), (center_x, 850)], fill=(59, 130, 246), width=2)
        draw.text((center_x + 30, 620), "TALOCALCANEAL ANGLE: 12 DEG (VARUS)", fill=(245, 158, 11), font=font_med)
        draw.text((center_x + 30, 655), "EQUINOVARUS DEFORMITY NOTED", fill=(254, 215, 170), font=font_small)

    # Scale bar and orientation marker
    draw.text((60, 310), "R", fill=(255, 255, 255), font=font_large)
    draw.text((width - 90, 310), "POST", fill=(148, 163, 184), font=font_med)
    draw.text((60, 1100), "FOV: 24cm | MATRIX: 512x512 | THICKNESS: 3.0mm", fill=(100, 116, 139), font=font_mono)

    # Radiology Impression & Findings Box
    draw.rectangle([(30, 1170), (width - 30, 1550)], fill=(15, 23, 42), outline=(51, 65, 85), width=1)
    draw.text((50, 1190), "OFFICIAL RADIOLOGIST FINDINGS & IMPRESSION:", fill=(56, 189, 248), font=font_med)
    
    y_text = 1230
    for line in findings_text:
        draw.text((50, y_text), line, fill=(226, 232, 240), font=font_small)
        y_text += 26
        
    draw.line([(50, 1480), (width - 50, 1480)], fill=(51, 65, 85), width=1)
    draw.text((50, 1500), "Attending Radiologist: Dr. Tariq Mansoor, MD, FRCR | License: UAE-DHA-94812 | Electronic Verification Signed", fill=(148, 163, 184), font=font_mono)

    # Save PNG/JPG and PDF
    pdf_path = os.path.join(out_dir, f"{filename_base}.pdf")
    jpg_path = os.path.join(out_dir, f"{filename_base}.jpg")
    img.save(pdf_path, "PDF", resolution=150.0)
    img.save(jpg_path, "JPEG", quality=92)
    return pdf_path, jpg_path

def build_docx_referral(out_path, clinic_name, city_country, patient_dict, clinical_dict, missing_dict):
    doc = docx.Document()
    
    # Page setup
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)
        
    # Clinic Letterhead
    p_header = doc.add_paragraph()
    p_header.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    run_h1 = p_header.add_run(f"{clinic_name}\n")
    run_h1.bold = True
    run_h1.font.size = Pt(14)
    run_h1.font.color.rgb = RGBColor(27, 54, 93)
    run_h2 = p_header.add_run(f"Medical Specialist Department | {city_country}\nTel: +971-4-800-4321 | Email: international@consult-med.org\n")
    run_h2.font.size = Pt(9.5)
    run_h2.font.color.rgb = RGBColor(100, 116, 139)
    
    p_title = doc.add_paragraph()
    p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    run_title = p_title.add_run("OFFICIAL MEDICAL REFERRAL & CONSULTATION SUMMARY")
    run_title.bold = True
    run_title.font.size = Pt(15)
    run_title.font.color.rgb = RGBColor(27, 54, 93)
    
    p_to = doc.add_paragraph()
    run_to = p_to.add_run("TO: International Medical Coordination & Liaison Department\nVejthani Hospital (King of Bones)\n1 Ladprao 111, Khlong Chan, Bang Kapi, Bangkok 10240, Thailand\n")
    run_to.bold = True
    run_to.font.size = Pt(10.5)
    run_to.font.color.rgb = RGBColor(30, 41, 59)
    
    doc.add_paragraph("Dear Medical Liaison and Orthopedic Specialist Team,")
    
    doc.add_heading("1. PATIENT DEMOGRAPHIC & ADMINISTRATIVE PROFILE", level=2)
    
    # Table for Demographics
    table = doc.add_table(rows=4, cols=2)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.style = 'Table Grid'
    
    demo_data = [
        ("Full Name:", patient_dict.get("name", "")),
        ("Date of Birth / Age:", f"{patient_dict.get('dob', '')} ({patient_dict.get('age', '')} Years)"),
        ("Nationality & Passport:", f"{patient_dict.get('nationality', '')} | {patient_dict.get('passport', '')}"),
        ("Hospital Identification:", f"Primary HN: {patient_dict.get('hn', '')} | Contact: {patient_dict.get('phone', '')}")
    ]
    
    for row_idx, (k, v) in enumerate(demo_data):
        cell_k = table.cell(row_idx, 0)
        cell_v = table.cell(row_idx, 1)
        cell_k.text = k
        cell_v.text = v
        cell_k.paragraphs[0].runs[0].bold = True
        cell_k.width = Inches(2.2)
        cell_v.width = Inches(4.5)
        
    doc.add_paragraph() # Spacing
    
    doc.add_heading("2. CLINICAL INTAKE & DIAGNOSTIC FINDINGS", level=2)
    
    p_complaint = doc.add_paragraph()
    p_complaint.add_run("Chief Complaint & Mobility Limitation: ").bold = True
    p_complaint.add_run(clinical_dict.get("complaint", ""))
    
    p_history = doc.add_paragraph()
    p_history.add_run("History of Present Illness: ").bold = True
    p_history.add_run(clinical_dict.get("history", ""))
    
    p_diag = doc.add_paragraph()
    p_diag.add_run("Provisional Clinical Diagnosis: ").bold = True
    p_diag.add_run(clinical_dict.get("diagnosis", ""))
    
    p_precaution = doc.add_paragraph()
    p_precaution.add_run("Comorbidities & Precautions: ").bold = True
    p_precaution.add_run(clinical_dict.get("precautions", ""))
    
    doc.add_heading("3. PROPOSED TREATMENT & SURGICAL OBJECTIVE", level=2)
    p_plan = doc.add_paragraph()
    p_plan.add_run("Referred Specialty & Procedure: ").bold = True
    p_plan.add_run(clinical_dict.get("procedure", ""))
    
    p_rationale = doc.add_paragraph()
    p_rationale.add_run("Clinical Rationale: ").bold = True
    p_rationale.add_run(clinical_dict.get("rationale", ""))
    
    doc.add_heading("4. DOCUMENTATION CHECKLIST & ACTIONABLE GAP ANALYSIS", level=2)
    
    p_recd = doc.add_paragraph()
    p_recd.add_run("Attached Records Forwarded in this Submission:").bold = True
    for item in missing_dict.get("received", []):
        doc.add_paragraph(f"- {item}", style='List Bullet')
        
    p_miss = doc.add_paragraph()
    p_miss.add_run("Actionable Missing Records Required Prior to Surgical Confirmation:").bold = True
    for item in missing_dict.get("missing", []):
        doc.add_paragraph(f"- {item} (PRIORITY ATTENTION)", style='List Bullet')
        
    doc.add_paragraph()
    p_sign = doc.add_paragraph()
    p_sign.add_run(f"Referring Physician: {clinical_dict.get('doctor_name', 'Dr. Ahmed Al-Mansoor, MD')}\n")
    p_sign.add_run(f"Specialty: Senior Consultant Orthopedic & Spine Surgeon\nMedical Registration License: #{abs(hash(clinic_name)) % 80000 + 10000}\nOfficial Stamp & Electronic Signature Approved\n")
    p_sign.runs[0].bold = True
    
    doc.save(out_path)
    return out_path

def main():
    workspace = "/Users/job/Documents/antigravity/proud-pasteur"
    target_dir = os.path.join(workspace, "mock_medical_cases")
    os.makedirs(target_dir, exist_ok=True)
    
    # ---------------- CASE 1: UAE KNEE ----------------
    case1_dir = os.path.join(target_dir, "Case1_Robotic_Knee_UAE")
    os.makedirs(case1_dir, exist_ok=True)
    
    patient1 = {
        "name": "Mr. Mohammed Al-Balushi",
        "dob": "14-Aug-1964",
        "age": 62,
        "nationality": "United Arab Emirates (UAE)",
        "passport": "UAE-N7841964123",
        "hn": "VN-884920",
        "phone": "+971 50 123 4567"
    }
    clinical1 = {
        "complaint": "Severe right knee pain (VAS score 8/10), progressive joint crepitus, unable to walk more than 10 minutes without resting.",
        "history": "62-year-old male with progressive bilateral knee osteoarthrosis, right worse than left for past 3 years. Conservative treatments including intra-articular steroid and hyaluronic acid injections yielded only temporary relief. Seeking robotic-assisted surgical replacement at King of Bones Center.",
        "diagnosis": "Severe Right Knee Osteoarthritis (Kellgren-Lawrence Grade 3-4), medial compartment collapse with secondary varus deformity.",
        "precautions": "Type 2 Diabetes Mellitus on oral hypoglycemic agents (Metformin 500mg BID). Pre-operative glycemic evaluation mandatory.",
        "procedure": "Robotic-Assisted Total Knee Arthroplasty (Robotic TKA - King of Bones Protocol).",
        "rationale": "High-precision robotic bone resection, minimal soft tissue disruption, rapid weight-bearing rehabilitation.",
        "doctor_name": "Dr. Hamad Al-Qasimi, MD, FRCS"
    }
    missing1 = {
        "received": [
            "Right Knee MRI (Sagittal/Coronal T1/T2 views)",
            "Standing Bilateral Knee Plain Radiographs (AP/Lateral weight-bearing)",
            "Valid UAE Passport Copy"
        ],
        "missing": [
            "Recent Glycated Hemoglobin (HbA1c Blood Test) within last 30 days",
            "Pre-operative 12-Lead Electrocardiogram (ECG) and Anesthesia Evaluation"
        ]
    }
    build_docx_referral(
        os.path.join(case1_dir, "Case1_Doctor_Referral_Dubai.docx"),
        "Dubai Bone & Joint Specialty Institute",
        "Dubai Healthcare City, UAE",
        patient1, clinical1, missing1
    )
    create_radiology_image(
        "Case1_Right_Knee_MRI_Report",
        case1_dir,
        patient1["name"],
        patient1["dob"],
        "28-SEP-2026",
        "MRI Right Knee Joint (Non-Contrast)",
        "MRI / 3.0T MAGNETOM",
        [
            "1. Severe medial tibiofemoral joint space narrowing with complete articular cartilage denudation.",
            "2. Extensive subchondral bone sclerosis and cystic changes in medial tibial plateau.",
            "3. Grade 3 complex tear of posterior horn of medial meniscus; anterior cruciate ligament attenuated.",
            "4. Prominent marginal osteophytes along medial and lateral femoral condyles (Kellgren-Lawrence Grade 4).",
            "IMPRESSION: Advanced end-stage right knee osteoarthritis. Candidate for total knee replacement."
        ],
        diagram_type="knee"
    )
    
    # ---------------- CASE 2: OMAN SPINE ----------------
    case2_dir = os.path.join(target_dir, "Case2_Endoscopic_Spine_Oman")
    os.makedirs(case2_dir, exist_ok=True)
    
    patient2 = {
        "name": "Mr. Tariq Al-Riyami",
        "dob": "02-Nov-1977",
        "age": 48,
        "nationality": "Sultanate of Oman",
        "passport": "OMN-A9023410",
        "hn": "VN-902341",
        "phone": "+968 9123 4567"
    }
    clinical2 = {
        "complaint": "Intense neck pain radiating down the right shoulder and arm to thumb and index finger, accompanied by parasthesia and morning grip weakness.",
        "history": "48-year-old active engineer presenting with severe right C6 cervical radiculopathy for 5 months. Physical examination confirms Spurling's test positive to the right, diminished right biceps jerk (+1/4), and hand grip strength 4/5.",
        "diagnosis": "Cervical Spondylotic Radiculopathy with C5-C6 Herniated Nucleus Pulposus and right neuroforaminal stenosis.",
        "precautions": "Progressive right hand motor weakness. Requires urgent neuro-decompression to prevent permanent nerve deficit.",
        "procedure": "Full-Endoscopic Cervical Discectomy / Decompression (Minimally Invasive Spine Surgery).",
        "rationale": "Direct endoscopic visualization through 7mm working port, preserving spinal stability and neck paraspinal muscles.",
        "doctor_name": "Dr. Salim Al-Habsi, MD, Spine Fellow"
    }
    missing2 = {
        "received": [
            "Muscat Spine Clinic Clinical Consultation Record (.docx)",
            "Electromyography (EMG) and Nerve Conduction Study Report",
            "Oman Passport Copy"
        ],
        "missing": [
            "Complete Cervical Spine MRI DICOM Imaging Disc / Cloud File Link",
            "Contrast and Drug Allergy Profile Verification"
        ]
    }
    build_docx_referral(
        os.path.join(case2_dir, "Case2_Muscat_Clinical_Summary.docx"),
        "Muscat Spine & Neurology Hospital",
        "Al Khuwair, Muscat, Sultanate of Oman",
        patient2, clinical2, missing2
    )
    create_radiology_image(
        "Case2_Cervical_Spine_Scan",
        case2_dir,
        patient2["name"],
        patient2["dob"],
        "29-SEP-2026",
        "MRI Cervical Spine Sagittal & Axial",
        "MRI / 1.5T HIGH-FIELD",
        [
            "1. C5-C6 level reveals prominent right paracentral/foraminal disc extrusion measuring 5.2 mm.",
            "2. Marked compression and displacement of the exiting right C6 nerve root.",
            "3. Preserved spinal cord caliber; no signs of compressive cervical myelopathy at this level.",
            "4. Mild disc desiccation noted at C4-C5 and C6-C7 without significant neural compromise.",
            "IMPRESSION: Right C5-C6 extruded disc causing severe mechanical right C6 radiculopathy."
        ],
        diagram_type="spine"
    )
    
    # ---------------- CASE 3: QATAR PEDIATRIC ----------------
    case3_dir = os.path.join(target_dir, "Case3_Pediatric_Clubfoot_Qatar")
    os.makedirs(case3_dir, exist_ok=True)
    
    patient3 = {
        "name": "Master Rashid Al-Thani (Father: Mr. Jassim)",
        "dob": "10-Jan-2022",
        "age": 4,
        "nationality": "State of Qatar",
        "passport": "QAT-P7712048",
        "hn": "VN-771204",
        "phone": "+974 3312 3456"
    }
    clinical3 = {
        "complaint": "Bilateral inward turning of feet with restricted ankle dorsiflexion, frequent tripping when running.",
        "history": "4-year-old boy born with congenital bilateral clubfoot. Treated initially with 5 cycles of serial casting in Doha. Family notes persistent stiffness and residual dynamic supination during walking.",
        "diagnosis": "Bilateral Congenital Talipes Equinovarus (Clubfoot), Residual Deformity with Achilles tendon tightness.",
        "precautions": "Pediatric patient requiring dedicated pediatric anesthesiologist and child-friendly post-op protocol.",
        "procedure": "Pediatric Ponseti Re-alignment & Percutaneous Tendon Balancing / Anterior Tibial Tendon Transfer.",
        "rationale": "Correction of hindfoot alignment and restoration of normal foot progression angle for unobstructed childhood mobility.",
        "doctor_name": "Dr. Maryam Al-Kuwari, MD, Pediatric Orthopedics"
    }
    missing3 = {
        "received": [
            "Pediatric Orthopedic Initial Assessment & Casting Record",
            "Weight-bearing Foot Radiographs & Clinical Photographs",
            "Pediatric Immunization Record"
        ],
        "missing": [
            "Fit-to-Fly Medical Certificate from Pediatrician for Air Travel",
            "Father & Mother Passport Copies for Embassy Medical Visa Guarantee Letter"
        ]
    }
    build_docx_referral(
        os.path.join(case3_dir, "Case3_Doha_Pediatric_Ortho_Record.docx"),
        "Doha Specialized Pediatric Medical Center",
        "Doha, State of Qatar",
        patient3, clinical3, missing3
    )
    create_radiology_image(
        "Case3_Pediatric_Foot_Xray",
        case3_dir,
        patient3["name"],
        patient3["dob"],
        "30-SEP-2026",
        "Pediatric Bilateral Feet Weight-Bearing AP/Lateral",
        "DIGITAL RADIOGRAPHY (DR)",
        [
            "1. Reduced talocalcaneal angle (12 degrees, normal range 25-40), indicative of hindfoot varus.",
            "2. Parallel relationship between talus and calcaneus axes on lateral view (equinus positioning).",
            "3. Forefoot adduction and mild navicular medial subluxation relative to talar head.",
            "4. No evidence of bone synostosis or tarsal coalition.",
            "IMPRESSION: Bilateral residual talipes equinovarus deformities. Recommended for pediatric orthopedic correction."
        ],
        diagram_type="pediatric"
    )
    
    # Readme guide
    readme_path = os.path.join(target_dir, "README_TEST_CASES.txt")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write("""VEJTHANI MEDICAL LIAISON AI - MOCK CLINICAL TEST CASES
========================================================================

These files are designed to test the Universal Medical Document Ingestion
and Personalized Nurse Teleprompter feature.

HOW TO TEST:
1. Open the system at:
   https://jobjatupohn041146-star.github.io/vejthani-medliaison-ai/
2. Click menu "สแกนเอกสาร & สคริปต์รายบุคคล" (or sidebar icon).
3. Drag & drop any of the files below into the upload dropzone:

------------------------------------------------------------------------
CASE 1: UNITED ARAB EMIRATES (UAE) - KNEE REPLACEMENT
Folder: Case1_Robotic_Knee_UAE
- Case1_Doctor_Referral_Dubai.docx  (Word document referral)
- Case1_Right_Knee_MRI_Report.pdf   (Full radiology report & DICOM scan)
- Case1_Right_Knee_MRI_Report.jpg   (Radiology scan image)

Patient: Mr. Mohammed Al-Balushi (Age 62, UAE)
Diagnosis: Severe Right Knee Osteoarthritis Grade 3-4 (Robotic Knee Surgery)
Expected Missing Records: HbA1c Blood Test within 30 days, 12-Lead ECG

------------------------------------------------------------------------
CASE 2: OMAN - ENDOSCOPIC SPINE SURGERY
Folder: Case2_Endoscopic_Spine_Oman
- Case2_Muscat_Clinical_Summary.docx (Spine clinical consultation report)
- Case2_Cervical_Spine_Scan.pdf      (Spine radiology report & scan)
- Case2_Cervical_Spine_Scan.jpg      (High-contrast scan image)

Patient: Mr. Tariq Al-Riyami (Age 48, Oman)
Diagnosis: Cervical Radiculopathy, C5-C6 Herniated Disc
Expected Missing Records: Latest Cervical MRI DICOM, Allergy profile

------------------------------------------------------------------------
CASE 3: QATAR - PEDIATRIC CLUBFOOT CORRECTION
Folder: Case3_Pediatric_Clubfoot_Qatar
- Case3_Doha_Pediatric_Ortho_Record.docx (Pediatric casting record)
- Case3_Pediatric_Foot_Xray.pdf          (Pediatric feet X-ray report)
- Case3_Pediatric_Foot_Xray.jpg          (Radiograph scan)

Patient: Master Rashid Al-Thani / Father: Mr. Jassim (Age 4, Qatar)
Diagnosis: Bilateral Clubfoot (Talipes Equinovarus)
Expected Missing Records: Fit-to-Fly Certificate, Father/Mother Passports

========================================================================
Vejthani Hospital - King of Bones International Medical Coordination
""")
    print("All mock clinical cases successfully generated in:", target_dir)

if __name__ == "__main__":
    main()
