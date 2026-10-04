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
