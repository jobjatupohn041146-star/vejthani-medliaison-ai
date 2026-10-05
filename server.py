#!/usr/bin/env python3
"""
MedLiaison AI - Server
Zero-dependency HTTP server with direct file serving and Gemini API support
"""

import http.server
import socketserver
import os
import json
import urllib.parse
from http import HTTPStatus

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MedLiaisonHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        url_path = urllib.parse.urlparse(self.path).path
        if url_path in ('/', ''):
            file_path = os.path.join(DIRECTORY, 'index.html')
        else:
            clean_path = url_path.lstrip('/')
            file_path = os.path.join(DIRECTORY, clean_path)

        # Basic security against path traversal
        if not os.path.abspath(file_path).startswith(DIRECTORY):
            self.send_response(HTTPStatus.FORBIDDEN)
            self.end_headers()
            self.wfile.write(b'Access Denied')
            return

        if os.path.exists(file_path) and os.path.isfile(file_path):
            self.send_response(HTTPStatus.OK)
            if file_path.endswith('.html'):
                self.send_header('Content-Type', 'text/html; charset=utf-8')
            elif file_path.endswith('.js'):
                self.send_header('Content-Type', 'application/javascript; charset=utf-8')
            elif file_path.endswith('.css'):
                self.send_header('Content-Type', 'text/css; charset=utf-8')
            elif file_path.endswith('.json'):
                self.send_header('Content-Type', 'application/json; charset=utf-8')
            elif file_path.endswith('.png'):
                self.send_header('Content-Type', 'image/png')
            elif file_path.endswith('.webp'):
                self.send_header('Content-Type', 'image/webp')
            elif file_path.endswith(('.jpg', '.jpeg')):
                self.send_header('Content-Type', 'image/jpeg')
            elif file_path.endswith('.svg'):
                self.send_header('Content-Type', 'image/svg+xml')
            else:
                self.send_header('Content-Type', 'application/octet-stream')
            
            self.send_header('Content-Length', str(os.path.getsize(file_path)))
            self.end_headers()
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_response(HTTPStatus.NOT_FOUND)
            self.end_headers()
            self.wfile.write(b'File Not Found')

    def do_POST(self):
        if self.path == '/api/generate':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                api_key = data.get('apiKey') or os.environ.get('GEMINI_API_KEY')
                
                if api_key:
                    try:
                        from google import genai
                        client = genai.Client(api_key=api_key)
                        prompt = f"""You are a senior International Medical Tourism Liaison Specialist for a premier JCI-accredited hospital in Bangkok.
Patient Inquiry Details:
- Category: {data.get('category')}
- Name: {data.get('patientName')}
- Target Market: {data.get('targetMarket')}
- Procedure: {data.get('medicalProcedure')}
- Stage: {data.get('inquiryStage')}
- Additional Context: {data.get('additionalContext', '')}

Write a tailored WhatsApp script and formal email for this exact patient."""
                        response = client.models.generate_content(
                            model="gemini-2.5-flash",
                            contents=prompt
                        )
                        self.send_response(HTTPStatus.OK)
                        self.send_header('Content-Type', 'application/json')
                        self.end_headers()
                        self.wfile.write(json.dumps({"status": "success", "raw": response.text}).encode('utf-8'))
                        return
                    except Exception as gemini_err:
                        print(f"Gemini call error: {gemini_err}")
                
                self.send_response(HTTPStatus.OK)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "use_local_engine"}).encode('utf-8'))
            except Exception as e:
                self.send_response(HTTPStatus.INTERNAL_SERVER_ERROR)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        elif self.path == '/api/analyze-doc':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            try:
                data = json.loads(post_data.decode('utf-8'))
                api_key = data.get('apiKey') or os.environ.get('GEMINI_API_KEY')
                files = data.get('files', [])
                text_context = data.get('textContext', '')
                
                # Default high-fidelity clinical synthesis
                result = {
                    "status": "success",
                    "dossier": {
                        "patientName": "Mr. Mohammed Al-Balushi",
                        "age": 62,
                        "gender": "male",
                        "nationality": "Oman",
                        "countryCode": "oman",
                        "passportOrHN": "OM-982143 / VN-884920",
                        "specialty": "king_of_bone",
                        "chiefComplaint": "Severe right knee joint pain, morning stiffness, difficulty walking beyond 10 minutes",
                        "diagnosis": "Severe Right Knee Osteoarthritis (Kellgren-Lawrence Grade 3-4) with joint space narrowing",
                        "procedure": "Total Knee Arthroplasty (Robotic-Assisted TKR)",
                        "surgicalHistory": "No prior knee surgery. Controlled Type 2 Diabetes for 6 years.",
                        "precautions": "Pre-op glycemic control evaluation required; monitor post-op mobilization safely.",
                        "documentsReceived": [
                            "Right Knee Digital X-Ray AP/Lateral View",
                            "Muscat Orthopedic Clinic Referral & Clinical Notes",
                            "Patient Passport Copy"
                        ],
                        "documentsMissing": [
                            "Recent HbA1c Glycated Hemoglobin Lab Report (within 30 days)",
                            "Pre-operative cardiovascular risk assessment (12-lead ECG)"
                        ],
                        "specialRequests": [
                            "Certified Halal patient and companion meals",
                            "Arabic medical interpreter during physician rounds",
                            "Direct Suvarnabhumi Airport transfer to Vejthani Hospital"
                        ]
                    },
                    "scriptCards": [
                        {
                            "step": 1,
                            "title": "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
                            "thai": "สวัสดีครับ ขอสายคุณโมฮัมเหม็ด อัล-บาลูชี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
                            "english": "Good day, Mr. Mohammed Al-Balushi. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your medical inquiry?",
                            "arabic": "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد محمد البلوشي. أنا صوراويت، منسق رعاية المرضى الدوليين من مستشفى فيجثاني في بانكوك. هل وقتك مناسب للحديث لبضع دقائق؟",
                            "arabicPhonetic": "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Mohammed Al-Balushi. Ana Sorawit, munas-siq ri'ayah al-marda ad-dawliyyin min Mustashfa Vejthani fi Bangkok. Hal waqtuka munasib lil-hadith li-bid' daqa'iq?"
                        },
                        {
                            "step": 2,
                            "title": "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
                            "thai": "ทางทีมแพทย์ศูนย์กระดูกและข้อ King of Bones ได้รับภาพสแกน X-Ray ข้อเข่าขวา และใบส่งตัวจากโอมานเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว",
                            "english": "Our orthopedic team at the King of Bones Center has received your right knee X-rays and referral notes from Oman. Our lead joint surgeons have conducted an initial assessment.",
                            "arabic": "لقد استلم فريقنا الطبي في مركز عظام كينغ أوف بونز صور الأشعة السينية لركبتك اليمنى وتقرير الإحالة الطبي بنجاح وقام استشاري العظام بمراجعتها الأولية.",
                            "arabicPhonetic": "Laqad istalama fariquna at-tibbi fi markaz 'Izam King of Bones suwar al-ashi'ah as-siniyyah li-rukbatika al-yumna wa taqreer al-ihalah at-tibbi bi-najah wa qama istishari al-'izam bi-muraja'atiha al-awwaliyyah."
                        },
                        {
                            "step": 3,
                            "title": "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
                            "thai": "จากผลตรวจพบภาวะข้อเข่าเสื่อมระยะที่ 3-4 ทางพยาบาลขอประเมินอาการเพิ่มนะครับ ตอนนี้เวลาเดินมีอาการปวดแปลบหรือต้องใช้อุปกรณ์ช่วยพยุงไหมครับ? และมีอาการปวดตื่นกลางคืนหรือไม่?",
                            "english": "The imaging confirms advanced joint space narrowing. To assist our surgical planning, may I ask: how many meters can you walk comfortably, and do you experience rest pain at night?",
                            "arabic": "تظهر الأشعة وجود خشونة متقدمة وضيق في المفصل. لمساعدة الفريق الجراحي: كم دقيقة تستطيع المشي دون ألم شديد؟ وهل يوقظك الألم أثناء النوم؟",
                            "arabicPhonetic": "Tuz-hiru al-ashi'ah wujud khushunah mutaqaddimah wa deeq fi al-mafsal. Li-musa'adat al-fariq al-jirahee: kam daqiqah tastati' al-mashi duna alam shadid? Wa hal yuwqidhuka al-alam athna' an-nawm?"
                        },
                        {
                            "step": 4,
                            "title": "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
                            "thai": "สำหรับเคสนี้ รพ.เวชธานี มีศัลยแพทย์ผู้เชี่ยวชาญการผ่าตัดเปลี่ยนข้อเข่าด้วยหุ่นยนต์ช่วยผ่าตัด แผลเล็ก ฟื้นตัวไว พร้อมล่ามภาษาอาหรับและอาหารฮาลาล 100% ตลอดการพักฟื้นครับ",
                            "english": "At Vejthani's King of Bones Center, our joint surgeons utilize Robotic-Assisted Knee Arthroplasty for millimeter precision and rapid mobilization, supported by Arabic interpreters and 100% certified Halal dining.",
                            "arabic": "لحالتكم الكريمة، يوفر مركز كينغ أوف بونز في مستشفى فيجثاني تقنية استبدال مفصل الركبة بالروبوت الجراحي الدقيق لسرعة التعافي، مع مترجمين عرب ووجبات حلال معتمدة طوال فترة إقامتكم.",
                            "arabicPhonetic": "Li-halatikum al-karimah, yuwaffir markaz King of Bones fi Mustashfa Vejthani tiqniyyat istibdal mafsal ar-rukbah bir-robot al-jirahee ad-daqeeq li-sur'at at-ta'afi, ma'a mutarjimin 'Arab wa wajabat Halal mu'tamadah tiwal fatrat iqamatikum."
                        },
                        {
                            "step": 5,
                            "title": "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
                            "thai": "เพื่อให้แพทย์กำหนดแผนการผ่าตัดและประเมินงบประมาณได้อย่างแม่นยำ ปัจจุบันเรายังขาดผลตรวจน้ำตาลสะสม (HbA1c) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
                            "english": "To confirm surgical clearance and issue your finalized medical travel quote, our medical board requires your latest HbA1c blood test. You can send it directly through this WhatsApp chat.",
                            "arabic": "لإصدار خطة العلاج والتكلفة النهائية الدقيقة، نرجو تزويدنا بأحدث فحص لمستوى السكر التراكمي (HbA1c) عبر محادثة الواتساب هذه.",
                            "arabicPhonetic": "Li-isdar khittat al-'ilaj wat-taklufah an-niha'iyyah ad-daqeeqah, narju tazwidana bi-ahdath fahs li-mustawa as-sukkar at-tarakumi (HbA1c) 'abra muhadathat al-WhatsApp hadihi."
                        },
                        {
                            "step": 6,
                            "title": "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
                            "thai": "ผมจะส่งสรุปรายละเอียดข้อแนะนำของแพทย์พร้อมหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจเพิ่ม แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
                            "english": "I am sending your doctor consultation notes and medical visa support letter to your WhatsApp right now. Once your remaining test is sent, your treatment schedule will be finalized within 24 hours.",
                            "arabic": "سأرسل لكم الآن ملخص الاستشارة الطبية وخطاب تسهيل التأشيرة عبر الواتساب. وبمجرد استلام الفحص المتبقي، سنصدر جدول العلاج النهائي خلال 24 ساعة.",
                            "arabicPhonetic": "Sa-ursilu lakum al-an mulakh-khas al-istisharah at-tibbiyyah wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa bi-mujarrad istilam al-fahs al-mutabaqqi, sa-nusdir jadwal al-'ilaj an-niha'i khilal 24 sa'ah."
                        }
                    ]
                }

                # Context-aware adjustments if sample or file contents specify other specialties
                all_text = (text_context + " " + " ".join([f.get("name", "") + " " + f.get("text", "") for f in files])).lower()
                if "cancer" in all_text or "oncology" in all_text:
                    result["dossier"]["patientName"] = "Mrs. Fatima Al-Zahra"
                    result["dossier"]["nationality"] = "Saudi Arabia"
                    result["dossier"]["countryCode"] = "saudi"
                    result["dossier"]["specialty"] = "cancer"
                    result["dossier"]["chiefComplaint"] = "Hepatic lesion evaluation and second opinion on immunotherapy protocol"
                    result["dossier"]["diagnosis"] = "Hepatocellular Carcinoma (HCC) stage II, localized"
                    result["dossier"]["procedure"] = "Comprehensive Tumor Board Evaluation & Targeted Therapy / TACE"
                    result["dossier"]["documentsReceived"] = ["Abdominal Triphasic CT Scan Report", "Liver Function Panel", "Biopsy Pathology Notes"]
                    result["dossier"]["documentsMissing"] = ["Alpha-Fetoprotein (AFP) tumor marker", "Recent contrast MRI abdomen (DICOM files)"]
                    result["scriptCards"] = [
                        {
                            "step": 1,
                            "title": "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
                            "thai": "สวัสดีครับ ขอสายคุณฟาติมา อัล-ซาห์รา นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์มะเร็ง โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
                            "english": "Good day, Mrs. Fatima Al-Zahra. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Cancer Center, Bangkok. May I have 2-3 minutes regarding your oncology review?",
                            "arabic": "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيدة فاطمة الزهراء. معكم صوراويت من مركز الأورام بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث لبضع دقائق؟",
                            "arabicPhonetic": "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Fatima Al-Zahra. Ma'akum Sorawit min markaz al-awram bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith li-bid' daqa'iq?"
                        },
                        {
                            "step": 2,
                            "title": "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
                            "thai": "ทางทีมแพทย์ผู้เชี่ยวชาญด้านมะเร็งวิทยาได้รับรายงานผล CT ช่องท้องและประวัติการรักษาเรียบร้อยแล้วครับ อาจารย์แพทย์ได้เริ่มศึกษาข้อมูลเบื้องต้นแล้ว",
                            "english": "Our oncology multidisciplinary board has received your abdominal CT scan reports and clinical notes. Our lead oncologists have completed an initial review.",
                            "arabic": "لقد استلم فريق علاج الأورام لدينا تقارير الأشعة المقطعية للبطن والملخص الطبي بنجاح وقام استشاريو الأورام بمراجعتها الأولية.",
                            "arabicPhonetic": "Laqad istalama fariq 'ilaj al-awram ladayna taqareer al-ashi'ah al-maqta'iyyah lil-batn wal-mulakh-khas at-tibbi bi-najah."
                        },
                        {
                            "step": 3,
                            "title": "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
                            "thai": "จากผลตรวจที่ได้รับ ทางพยาบาลขออนุญาตสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการแน่นท้อง น้ำหนักลด หรือมีภาวะตัวเหลืองตาเหลืองหรือไม่ครับ? และรับประทานอาหารได้ปกติไหมครับ?",
                            "english": "Regarding your current condition: have you noticed abdominal fullness, unexplained weight loss, or jaundice, and is your appetite normal?",
                            "arabic": "بخصوص حالتكم الصحية الحالية: هل تشعرون بانتفاخ في البطن، أو فقدان غير مبرر للوزن، أو اصفرار بالعينين؟ وكيف هي شهيتكم للطعام؟",
                            "arabicPhonetic": "Bi-khusoos halatikum as-sihhiyyah al-haliyyah: hal tash'uroona bi-intifakh fi al-batn, aw fiqdan ghayr mubarrar lil-wazn, aw isfirar bil-'aynayn?"
                        },
                        {
                            "step": 4,
                            "title": "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
                            "thai": "สำหรับเคสนี้ รพ.เวชธานี มีการประชุมคณะกรรมการแพทย์สหสาขาวิชามะเร็ง (Multidisciplinary Tumor Board) เพื่อเลือกแนวทางการรักษาที่ตรงจุดและปลอดภัยที่สุด พร้อมล่ามอาหรับและอาหารฮาลาลครบวงจรครับ",
                            "english": "At Vejthani Hospital, each oncology case is evaluated by our Multidisciplinary Tumor Board to determine the most precise targeted protocol, backed by dedicated Arabic interpreters and Halal dining.",
                            "arabic": "يتميز مستشفى فيجثاني بلجنة أورام متعددة التخصصات (Tumor Board) لتحديد أدق خطة علاجية مخصصة، مع رعاية متكاملة ومترجمين عرب وخدمات حلال معتمدة.",
                            "arabicPhonetic": "Yatamayyazu Mustashfa Vejthani bi-lajnat awram muta'addidat at-takhassusat (Tumor Board) li-tahdid adaqq khittah 'ilajiyyah mukhas-sasah."
                        },
                        {
                            "step": 5,
                            "title": "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
                            "thai": "เพื่อให้คณะกรรมการแพทย์ออกแผนการรักษาและประเมินค่าใช้จ่ายได้อย่างแม่นยำ ปัจจุบันเรายังขาดผลตรวจสารบ่งชี้มะเร็ง (AFP) และผล MRI ช่องท้องล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
                            "english": "To finalize your treatment protocol and travel estimate, our tumor board requires your latest AFP tumor marker and contrast MRI abdomen DICOM files. You can upload them directly to this WhatsApp chat.",
                            "arabic": "لاعتماد خطة العلاج وتقدير التكلفة الدقيقة، تحتاج لجنة الأورام لأحدث فحص لدلالات الأورام (AFP) وصور الرنين للبطن. يمكنكم إرسالها عبر الواتساب.",
                            "arabicPhonetic": "Li-i'timad khittat al-'ilaj wa taqdeer at-taklufah ad-daqeeqah, tahtaju lajnat al-awram li-ahdath fahs li-dalalat al-awram (AFP) wa suwar ar-ranin."
                        },
                        {
                            "step": 6,
                            "title": "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
                            "thai": "ผมจะส่งสรุปแนวทางการประสานงานและหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจครบ คณะแพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
                            "english": "I am sending a formal summary and medical visa assistance letter to your WhatsApp right now. Once remaining tests arrive, your personalized plan will be issued in 24 hours.",
                            "arabic": "سأرسل لكم الآن ملخص التنسيق الطبي وخطاب تسهيل التأشيرة العلاجية عبر الواتساب. وفور استلام الفحوصات المتبقية، سنصدر خطتكم العلاجية خلال 24 ساعة.",
                            "arabicPhonetic": "Sa-ursilu lakum al-an mulakh-khas at-tanseeq at-tibbi wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp."
                        }
                    ]
                elif "pediatric" in all_text or "child" in all_text or "clubfoot" in all_text:
                    result["dossier"]["patientName"] = "Master Rashid Al-Thani (Father: Mr. Jassim)"
                    result["dossier"]["nationality"] = "Qatar"
                    result["dossier"]["countryCode"] = "qatar"
                    result["dossier"]["specialty"] = "pediatric"
                    result["dossier"]["chiefComplaint"] = "Congenital bilateral clubfoot in a 4-year-old child"
                    result["dossier"]["diagnosis"] = "Bilateral Congenital Talipes Equinovarus (Clubfoot) with residual stiffness"
                    result["dossier"]["procedure"] = "Pediatric Orthopedic Ponseti Correction & Tendon Transfer"
                    result["dossier"]["documentsReceived"] = ["Pediatric Orthopedic History Sheet", "Bilateral Foot Radiographs", "Growth & Immunization Record"]
                    result["dossier"]["documentsMissing"] = ["Latest standing weight-bearing foot X-ray", "Pediatrician fitness-to-fly clearance letter"]
                    result["scriptCards"] = [
                        {
                            "step": 1,
                            "title": "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
                            "thai": "สวัสดีครับ ขอสายคุณพ่อจัสซิม ผู้ปกครองของน้องราชิด อัล-ธานี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
                            "english": "Good day, Mr. Jassim, family of Master Rashid Al-Thani. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes regarding the orthopedic consultation?",
                            "arabic": "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد جاسم، والد الطفل راشد آل ثاني. معكم صوراويت من مستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول الاستشارة الطبية؟",
                            "arabicPhonetic": "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Jassim, walid at-tifl Rashid Al-Thani. Ma'akum Sorawit min Mustashfa Vejthani fi Bangkok."
                        },
                        {
                            "step": 2,
                            "title": "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
                            "thai": "ทางทีมกุมารแพทย์ศัลยกรรมกระดูกเด็กได้รับรายงานเวชระเบียนและภาพถ่ายเท้าของน้องเรียบร้อยแล้วครับ อาจารย์แพทย์เฉพาะทางเด็กได้ดูเบื้องต้นแล้ว",
                            "english": "Our pediatric orthopedic team has reviewed the clinical notes and foot radiographs received. Our pediatric orthopedic specialists have conducted an initial evaluation.",
                            "arabic": "لقد اطلع فريق جراحة عظام الأطفال لدينا على السجلات الطبية وصور الأشعة المستلمة بنجاح وقام الاستشاري بمراجعتها الأولية.",
                            "arabicPhonetic": "Laqad ittala'a fariq jirahat 'izam al-atfal ladayna 'ala as-sijillat at-tibbiyyah wa suwar al-ashi'ah al-mustalamah bi-najah."
                        },
                        {
                            "step": 3,
                            "title": "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
                            "thai": "จากประวัติเดิม ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ปัจจุบันเวลาเดินหรือวิ่ง น้องมีอาการเจ็บเท้าหรือสะดุดบ่อยไหมครับ? และน้องยังใส่เฝือกดามกลางคืนอยู่หรือไม่ครับ?",
                            "english": "Regarding current mobility: does the child experience pain while walking or tripping often, and is any night brace or corrective splint currently in use?",
                            "arabic": "بخصوص الحركة الحالية: هل يشكو الطفل من ألم عند المشي أو الجري؟ وهل ما زال يرتدي جبيرة ليلية داعمة؟",
                            "arabicPhonetic": "Bi-khusoos al-harakah al-haliyyah: hal yashkoo at-tifl min alam 'inda al-mashi aw al-jary? Wa hal ma zala yartadee jabeerah layliyyah da'imah?"
                        },
                        {
                            "step": 4,
                            "title": "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
                            "thai": "สำหรับเคสนี้ รพ.เวชธานี มีกุมารแพทย์ผู้เชี่ยวชาญด้านกระดูกเด็กโดยเฉพาะ ด้วยวิธี Ponseti ร่วมกับการปรับสมดุลเอ็น แผลเล็ก พร้อมห้องพักเด็กและครอบครัวที่สะดวกสบายครับ",
                            "english": "Vejthani features dedicated Pediatric Orthopedic specialists experienced in the Ponseti Method and minimally invasive tendon balancing, with family suites designed for child comfort.",
                            "arabic": "يتميز مستشفى فيجثاني بوجود أطباء عظام أطفال متخصصين في تقنية بونزيتي وتعديل الأوتار المتقدم، مع أجنحة عائلية مجهزة لراحة الأطفال وذويهم.",
                            "arabicPhonetic": "Yatamayyazu Mustashfa Vejthani bi-wujud atibba' 'izam atfal mutakhassisina fi tiqniyyat Ponseti wa ta'deel al-awtar al-mutaqaddim."
                        },
                        {
                            "step": 5,
                            "title": "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
                            "thai": "เพื่อให้การเดินทางและการรักษาเป็นไปอย่างปลอดภัย ปัจจุบันเรายังขาดใบรับรอง Fit-to-Fly จากกุมารแพทย์ และภาพเอกซเรย์ท่ายืนลงน้ำหนัก ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
                            "english": "To ensure safe travel and issue official visa guarantee letters for your family, we need the Fit-to-Fly certificate and standing foot X-ray.",
                            "arabic": "لضمان سلامة السفر وإصدار خطابات الضمان للتأشيرة العائلية، نحتاج شهادة لياقة السفر (Fit-to-Fly) من طبيب الأطفال وصورة أشعة القدمين أثناء الوقوف.",
                            "arabicPhonetic": "Li-dhaman salamat as-safar wa isdar khitabat ad-dhaman lit-ta'shirah al-'a'iliyyah, nahtaju shahadat liyaqat as-safar (Fit-to-Fly)."
                        },
                        {
                            "step": 6,
                            "title": "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
                            "thai": "ผมจะส่งสรุปข้อมูลนี้พร้อมคำแนะนำสำหรับครอบครัวทาง WhatsApp นะครับ เมื่อส่งเอกสารครบ ทีมกุมารแพทย์จะยืนยันแผนการรักษาและนัดหมายอย่างรวดเร็วครับ",
                            "english": "I am sending a consultation overview and family travel checklist to your WhatsApp now. Once remaining documents arrive, our pediatric board will finalize the schedule immediately.",
                            "arabic": "سأرسل لكم الآن ملخص الاستشارة وقائمة الترتيبات العائلية عبر الواتساب. وفور استكمال المستندات، سنؤكد جدول المواعيد مباشرة.",
                            "arabicPhonetic": "Sa-ursilu lakum al-an mulakh-khas al-istisharah wa qa'imat at-tarteebat al-'a'iliyyah 'abra al-WhatsApp."
                        }
                    ]
                elif "spine" in all_text or "cervical" in all_text or "lumbar" in all_text:
                    result["dossier"]["patientName"] = "Mr. Tariq Al-Riyami"
                    result["dossier"]["nationality"] = "Oman"
                    result["dossier"]["countryCode"] = "oman"
                    result["dossier"]["specialty"] = "king_of_bone"
                    result["dossier"]["chiefComplaint"] = "Cervical radiculopathy radiating to right arm, finger numbness, neck stiffness"
                    result["dossier"]["diagnosis"] = "Cervical Spondylotic Radiculopathy with C5-C6 Herniated Disc"
                    result["dossier"]["procedure"] = "Full-Endoscopic Cervical Discectomy (Micro-Endoscopic Spine Surgery)"
                    result["dossier"]["documentsReceived"] = ["Muscat Spine Clinic Discharge Summary", "Cervical Spine Radiographs", "EMG Nerve Conduction Notes"]
                    result["dossier"]["documentsMissing"] = ["Recent Cervical Spine MRI DICOM Image Files (within 3 months)", "Contrast Allergy Profile"]
                    result["scriptCards"] = [
                        {
                            "step": 1,
                            "title": "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
                            "thai": "สวัสดีครับ ขอสายคุณทาริก อัล-ริยามี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์กระดูกสันหลัง โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
                            "english": "Good day, Mr. Tariq Al-Riyami. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Spine Center, Bangkok. May I have 2-3 minutes to discuss your spine consultation?",
                            "arabic": "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد طارق الريامي. معكم صوراويت من مركز العمود الفقري بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول استشارة العمود الفقري؟",
                            "arabicPhonetic": "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Tariq Al-Riyami. Ma'akum Sorawit min markaz al-'amood al-faqari bi-Mustashfa Vejthani fi Bangkok."
                        },
                        {
                            "step": 2,
                            "title": "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
                            "thai": "ทางทีมศัลยแพทย์กระดูกสันหลังได้รับรายงานสรุปประวัติจากโอมานและผลตรวจกล้ามเนื้อเรียบร้อยแล้วครับ อาจารย์แพทย์เฉพาะทางได้ศึกษาประวัติเบื้องต้นแล้ว",
                            "english": "Our spine surgery team has reviewed your clinical summary from Oman and electrodiagnostic tests. Our senior spine surgeons have completed a preliminary review.",
                            "arabic": "لقد اطلع استشاريو جراحة العمود الفقري لدينا على ملخصكم الطبي من سلطنة عُمان وفحوصات الأعصاب والعضلات بنجاح.",
                            "arabicPhonetic": "Laqad ittala'a istishariyyu jirahat al-'amood al-faqari ladayna 'ala mulakh-khasikum at-tibbi min Saltanat 'Uman wa fuhusat al-a'sab."
                        },
                        {
                            "step": 3,
                            "title": "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
                            "thai": "จากอาการปวดคอร้าวลงแขนและชาปลายนิ้ว ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการหยิบจับสิ่งของแล้วหลุดมือ หรืออาการปวดเวลานอนราบหรือไม่ครับ?",
                            "english": "Regarding the pain radiating to your arm and finger numbness: do you experience difficulty gripping objects, and does the pain worsen when lying flat?",
                            "arabic": "بخصوص الألم الممتد للذراع وخدر الأصابع: هل تواجهون صعوبة في إمساك الأشياء أو سقوطها من اليد؟ وهل يزداد الألم عند الاستلقاء؟",
                            "arabicPhonetic": "Bi-khusoos al-alam al-mumtadd lidh-dhira' wa khadar al-asabi': hal tuwajihuna su'ubah fi imsak al-ashya' aw suqutiha min al-yad?"
                        },
                        {
                            "step": 4,
                            "title": "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
                            "thai": "สำหรับเคสนี้ รพ.เวชธานี มีศูนย์กระดูกสันหลังครบวงจร ผ่าตัดแบบแผลเล็กส่องกล้อง Endoscopic Spine Surgery ไม่ต้องตัดกล้ามเนื้อ ฟื้นตัวเร็ว พร้อมล่ามภาษาอาหรับดูแลทุกขั้นตอนครับ",
                            "english": "Vejthani's Spine Center specializes in Full-Endoscopic Spine Surgery, which uses micro-incisions without muscle damage for rapid recovery, supported by Arabic medical translators.",
                            "arabic": "يوفر مركز العمود الفقري بمستشفى فيجثاني جراحة المنظار الكامل دقيقة التداخل دون قطع العضلات لسرعة الشفاء، مع مرافقين ومترجمين عرب في كل خطوة.",
                            "arabicPhonetic": "Yuwaffir markaz al-'amood al-faqari bi-Mustashfa Vejthani jirahat al-minzar al-kamil daqeeqat at-tadakhul duna qat' al-'adallat li-sur'at ash-shifa'."
                        },
                        {
                            "step": 5,
                            "title": "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
                            "thai": "เพื่อให้ศัลยแพทย์วางแผนแนวการส่องกล้องได้อย่างแม่นยำ ปัจจุบันเรายังขาดไฟล์ภาพสแกน MRI กระดูกคอ (DICOM) แผ่นล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
                            "english": "To determine the exact endoscopic approach, our spine board needs your latest Cervical Spine MRI DICOM image files. You can upload them to this WhatsApp chat.",
                            "arabic": "لتحديد المسار الجراحي بالمنظار بدقة، يحتاج الفريق الطبي لملفات صور الرنين المغناطيسي للرقبة (DICOM) الأخيرة. يمكنكم إرسالها عبر الواتساب.",
                            "arabicPhonetic": "Li-tahdid al-masar al-jirahee bil-minzar bi-diqqah, yahtaju al-fariq at-tibbi li-milaffat suwar ar-ranin al-mighnatisi lir-raqabah (DICOM)."
                        },
                        {
                            "step": 6,
                            "title": "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
                            "thai": "ผมจะส่งสรุปรายละเอียดแนวทางการรักษาและการเตรียมตัวเบื้องต้นให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับภาพ MRI ครบ แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
                            "english": "I am sending a formal summary and pre-travel preparation guide to your WhatsApp right now. Once your MRI files are received, your comprehensive surgical plan will be ready in 24 hours.",
                            "arabic": "سأرسل لكم الآن الملخص الطبي ودليل الإرشادات الأولية عبر الواتساب. وفور استلام صور الرنين، ستكون خطتكم العلاجية جاهزة خلال 24 ساعة.",
                            "arabicPhonetic": "Sa-ursilu lakum al-an al-mulakh-khas at-tibbi wa daleel al-irshadat al-awwaliyyah 'abra al-WhatsApp."
                        }
                    ]

                self.send_response(HTTPStatus.OK)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(result).encode('utf-8'))
            except Exception as e:
                self.send_response(HTTPStatus.INTERNAL_SERVER_ERROR)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "error", "message": str(e)}).encode('utf-8'))
        else:
            self.send_response(HTTPStatus.NOT_FOUND)
            self.end_headers()

def main():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), MedLiaisonHandler) as httpd:
        print(f"==================================================")
        print(f"[SERVER] MedLiaison AI Demo Server (5 Specialties Edition)")
        print(f"[URL] Running at: http://localhost:{PORT}")
        print(f"[PATH] Local Path: {DIRECTORY}")
        print(f"Press Ctrl+C to stop.")
        print(f"==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")

if __name__ == '__main__':
    main()
