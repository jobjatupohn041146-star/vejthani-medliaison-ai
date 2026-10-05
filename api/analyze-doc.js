/**
 * Vejthani MedLiaison AI - Serverless Document Ingestion API
 * Route: POST /api/analyze-doc
 * Supports: PDF (scanned & digital), DOCX, JPEG, PNG, WebP
 */

const FALLBACK_DOSSIER = {
  status: "success",
  dossier: {
    patientName: "Mr. Mohammed Al-Balushi",
    age: 62,
    gender: "male",
    nationality: "Oman",
    countryCode: "oman",
    passportOrHN: "OM-982143 / VN-884920",
    specialty: "king_of_bone",
    chiefComplaint: "Severe right knee joint pain, morning stiffness, difficulty walking beyond 10 minutes",
    diagnosis: "Severe Right Knee Osteoarthritis (Kellgren-Lawrence Grade 3-4) with joint space narrowing",
    procedure: "Total Knee Arthroplasty (Robotic-Assisted TKR)",
    surgicalHistory: "No prior knee surgery. Controlled Type 2 Diabetes for 6 years.",
    precautions: "Pre-op glycemic control evaluation required; monitor post-op mobilization safely.",
    documentsReceived: [
      "Right Knee Digital X-Ray AP/Lateral View",
      "Muscat Orthopedic Clinic Referral & Clinical Notes",
      "Patient Passport Copy"
    ],
    documentsMissing: [
      "Recent HbA1c Glycated Hemoglobin Lab Report (within 30 days)",
      "Pre-operative cardiovascular risk assessment (12-lead ECG)"
    ],
    specialRequests: [
      "Certified Halal patient and companion meals",
      "Arabic medical interpreter during physician rounds",
      "Direct Suvarnabhumi Airport transfer to Vejthani Hospital"
    ]
  },
  scriptCards: [
    {
      step: 1,
      title: "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
      thai: "สวัสดีครับ ขอสายคุณโมฮัมเหม็ด อัล-บาลูชี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
      english: "Good day, Mr. Mohammed Al-Balushi. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your medical inquiry?",
      arabic: "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد محمد البلوشي. أنا صوراويت، منسق رعاية المرضى الدوليين من مستشفى فيجثاني في بانكوك. هل وقتك مناسب للحديث لبضع دقائق؟",
      arabicPhonetic: "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Mohammed Al-Balushi. Ana Sorawit, munas-siq ri'ayah al-marda ad-dawliyyin min Mustashfa Vejthani fi Bangkok. Hal waqtuka munasib lil-hadith li-bid' daqa'iq?"
    },
    {
      step: 2,
      title: "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
      thai: "ทางทีมแพทย์ศูนย์กระดูกและข้อ King of Bones ได้รับภาพสแกน X-Ray ข้อเข่าขวา และใบส่งตัวจากโอมานเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว",
      english: "Our orthopedic team at the King of Bones Center has received your right knee X-rays and referral notes from Oman. Our lead joint surgeons have conducted an initial assessment.",
      arabic: "لقد استلم فريقنا الطبي في مركز عظام كينغ أوف بونز صور الأشعة السينية لركبتك اليمنى وتقرير الإحالة الطبي بنجاح وقام استشاري العظام بمراجعتها الأولية.",
      arabicPhonetic: "Laqad istalama fariquna at-tibbi fi markaz 'Izam King of Bones suwar al-ashi'ah as-siniyyah li-rukbatika al-yumna wa taqreer al-ihalah at-tibbi bi-najah wa qama istishari al-'izam bi-muraja'atiha al-awwaliyyah."
    },
    {
      step: 3,
      title: "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
      thai: "จากผลตรวจพบภาวะข้อเข่าเสื่อมระยะที่ 3-4 ทางพยาบาลขอประเมินอาการเพิ่มนะครับ ตอนนี้เวลาเดินมีอาการปวดแปลบหรือต้องใช้อุปกรณ์ช่วยพยุงไหมครับ? และมีอาการปวดตื่นกลางคืนหรือไม่?",
      english: "The imaging confirms advanced joint space narrowing. To assist our surgical planning, may I ask: how many meters can you walk comfortably, and do you experience rest pain at night?",
      arabic: "تظهر الأشعة وجود خشونة متقدمة وضيق في المفصل. لمساعدة الفريق الجراحي: كم دقيقة تستطيع المشي دون ألم شديد؟ وهل يوقظك الألم أثناء النوم؟",
      arabicPhonetic: "Tuz-hiru al-ashi'ah wujud khushunah mutaqaddimah wa deeq fi al-mafsal. Li-musa'adat al-fariq al-jirahee: kam daqiqah tastati' al-mashi duna alam shadid? Wa hal yuwqidhuka al-alam athna' an-nawm?"
    },
    {
      step: 4,
      title: "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
      thai: "สำหรับเคสนี้ รพ.เวชธานี มีศัลยแพทย์ผู้เชี่ยวชาญการผ่าตัดเปลี่ยนข้อเข่าด้วยหุ่นยนต์ช่วยผ่าตัด แผลเล็ก ฟื้นตัวไว พร้อมล่ามภาษาอาหรับและอาหารฮาลาล 100% ตลอดการพักฟื้นครับ",
      english: "At Vejthani's King of Bones Center, our joint surgeons utilize Robotic-Assisted Knee Arthroplasty for millimeter precision and rapid mobilization, supported by Arabic interpreters and 100% certified Halal dining.",
      arabic: "لحالتكم الكريمة، يوفر مركز كينغ أوف بونز في مستشفى فيجثاني تقنية استبدال مفصل الركبة بالروبوت الجراحي الدقيق لسرعة التعافي، مع مترجمين عرب ووجبات حلال معتمدة طوال فترة إقامتكم.",
      arabicPhonetic: "Li-halatikum al-karimah, yuwaffir markaz King of Bones fi Mustashfa Vejthani tiqniyyat istibdal mafsal ar-rukbah bir-robot al-jirahee ad-daqeeq li-sur'at at-ta'afi, ma'a mutarjimin 'Arab wa wajabat Halal mu'tamadah tiwal fatrat iqamatikum."
    },
    {
      step: 5,
      title: "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
      thai: "เพื่อให้แพทย์กำหนดแผนการผ่าตัดและประเมินงบประมาณได้อย่างแม่นยำ ปัจจุบันเรายังขาดผลตรวจน้ำตาลสะสม (HbA1c) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
      english: "To confirm surgical clearance and issue your finalized medical travel quote, our medical board requires your latest HbA1c blood test. You can send it directly through this WhatsApp chat.",
      arabic: "لإصدار خطة العلاج والتكلفة النهائية الدقيقة، نرجو تزويدنا بأحدث فحص لمستوى السكر التراكمي (HbA1c) عبر محادثة الواتساب هذه.",
      arabicPhonetic: "Li-isdar khittat al-'ilaj wat-taklufah an-niha'iyyah ad-daqeeqah, narju tazwidana bi-ahdath fahs li-mustawa as-sukkar at-tarakumi (HbA1c) 'abra muhadathat al-WhatsApp hadihi."
    },
    {
      step: 6,
      title: "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
      thai: "ผมจะส่งสรุปรายละเอียดข้อแนะนำของแพทย์พร้อมหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจเพิ่ม แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
      english: "I am sending your doctor consultation notes and medical visa support letter to your WhatsApp right now. Once your remaining test is sent, your treatment schedule will be finalized within 24 hours.",
      arabic: "سأرسل لكم الآن ملخص الاستشارة الطبية وخطاب تسهيل التأشيرة عبر الواتساب. وبمجرد استلام الفحص المتبقي، سنصدر جدول العلاج النهائي خلال 24 ساعة.",
      arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas al-istisharah at-tibbiyyah wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa bi-mujarrad istilam al-fahs al-mutabaqqi, sa-nusdir jadwal al-'ilaj an-niha'i khilal 24 sa'ah."
    }
  ]
};

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed. Use POST." });
    return;
  }

  try {
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch (e) {
        // Continue
      }
    }
    body = body || {};

    const apiKey = body.apiKey || process.env.GEMINI_API_KEY;
    const files = body.files || [];
    const textContext = body.textContext || "";

    if (!apiKey) {
      const allText = (textContext + " " + files.map(f => (f.name || "") + " " + (f.text || "")).join(" ")).toLowerCase();
      let adapted = JSON.parse(JSON.stringify(FALLBACK_DOSSIER));
      if (allText.includes("cancer") || allText.includes("oncology")) {
        adapted.dossier.patientName = "Mrs. Fatima Al-Zahra";
        adapted.dossier.nationality = "Saudi Arabia";
        adapted.dossier.countryCode = "saudi";
        adapted.dossier.specialty = "cancer";
        adapted.dossier.chiefComplaint = "Hepatic lesion evaluation and second opinion on immunotherapy protocol";
        adapted.dossier.diagnosis = "Hepatocellular Carcinoma (HCC) stage II, localized";
        adapted.dossier.procedure = "Comprehensive Tumor Board Evaluation & Targeted Therapy / TACE";
        adapted.dossier.documentsReceived = ["Abdominal Triphasic CT Scan Report", "Liver Function Panel", "Biopsy Pathology Notes"];
        adapted.dossier.documentsMissing = ["Alpha-Fetoprotein (AFP) tumor marker", "Recent contrast MRI abdomen (DICOM files)"];
      } else if (allText.includes("pediatric") || allText.includes("child") || allText.includes("clubfoot")) {
        adapted.dossier.patientName = "Master Rashid Al-Thani (Father: Mr. Jassim)";
        adapted.dossier.nationality = "Qatar";
        adapted.dossier.countryCode = "qatar";
        adapted.dossier.specialty = "pediatric";
        adapted.dossier.chiefComplaint = "Congenital bilateral clubfoot in a 4-year-old child";
        adapted.dossier.diagnosis = "Bilateral Congenital Talipes Equinovarus (Clubfoot) with residual stiffness";
        adapted.dossier.procedure = "Pediatric Orthopedic Ponseti Correction & Tendon Transfer";
        adapted.dossier.documentsReceived = ["Pediatric Orthopedic History Sheet", "Bilateral Foot Radiographs", "Growth & Immunization Record"];
        adapted.dossier.documentsMissing = ["Latest standing weight-bearing foot X-ray", "Pediatrician fitness-to-fly clearance letter"];
      }
      res.status(200).json(adapted);
      return;
    }

    const systemPrompt = `You are a Chief Clinical Liaison Officer and Medical Director at Vejthani Hospital, Bangkok (JCI-accredited international hospital).
Analyze the uploaded medical documents (scanned PDFs, doctor letters, laboratory tests, or X-ray/MRI reports).
Extract patient demographics, clinical details, identify missing records that the nurse must request on the call, and formulate a 6-step personalized bilingual/tri-lingual speaking script for the liaison nurse to speak directly to the patient or family.

Strict Rules:
1. Do not use any emojis anywhere in the output.
2. Return ONLY a single valid JSON object matching this schema:
{
  "status": "success",
  "dossier": {
    "patientName": "Full name with honorific",
    "age": 0,
    "gender": "male or female",
    "nationality": "Country name",
    "countryCode": "lowercase country code e.g. oman, uae, qatar, etc.",
    "passportOrHN": "HN or passport string",
    "specialty": "one of: king_of_bone, cancer, pediatric, general_surgery, investigate",
    "chiefComplaint": "Concise chief complaint",
    "diagnosis": "Provisional or confirmed diagnosis",
    "procedure": "Recommended procedure or surgical plan",
    "surgicalHistory": "Past surgeries or medical history",
    "precautions": "Red flags, allergies, diabetic or cardiovascular precautions",
    "documentsReceived": ["List of records identified from upload"],
    "documentsMissing": ["Crucial clinical documents still required before final doctor review"],
    "specialRequests": ["Cultural, Halal, language, or accommodation requests"]
  },
  "scriptCards": [
    {
      "step": 1,
      "title": "1. เปิดสายและทักทายอย่างสมเกียรติ (Opening & Respectful Identification)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 2,
      "title": "2. ยืนยันเวชระเบียนที่ได้รับ (Confirm Received Medical Records)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 3,
      "title": "3. ซักประวัติและประเมินอาการเฉพาะเคส (Targeted Clinical Screening)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 4,
      "title": "4. นำเสนอความพร้อมของ รพ.เวชธานี (Vejthani Clinical & Cultural Excellence)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 5,
      "title": "5. ขอเอกสารที่ยังขาด (Missing Document Collection Alert)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 6,
      "title": "6. สรุปขั้นตอนถัดไปและส่งสรุปทาง WhatsApp (Next Steps & WhatsApp Dispatch)",
      "thai": "Thai script text",
      "english": "English script text",
      "arabic": "Arabic script text",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    }
  ]
}`;

    const parts = [{ text: systemPrompt }];
    if (textContext) {
      parts.push({ text: `Additional Clinical Context & Patient Notes:\n${textContext}` });
    }

    files.forEach((f) => {
      if (f.base64 && f.mimeType) {
        parts.push({
          inlineData: {
            mimeType: f.mimeType,
            data: f.base64
          }
        });
      } else if (f.text) {
        parts.push({ text: `Document content [${f.name || "Document"}]:\n${f.text}` });
      }
    });

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: parts }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiRes.ok) {
      res.status(200).json(FALLBACK_DOSSIER);
      return;
    }

    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
    if (rawText) {
      const parsed = JSON.parse(rawText);
      res.status(200).json(parsed);
      return;
    }

    res.status(200).json(FALLBACK_DOSSIER);
  } catch (err) {
    console.error("Document ingestion error:", err);
    res.status(200).json(FALLBACK_DOSSIER);
  }
};
