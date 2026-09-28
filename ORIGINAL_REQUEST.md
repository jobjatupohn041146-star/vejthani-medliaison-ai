# Original User Request

## 2026-09-28T10:51:04Z

ระบบ Vejthani MedLiaison AI ออกแบบและยกระดับสู่ Dark Glassmorphism ระดับองค์กร 4 พันล้าน (Ultra-Premium Hospital Tier) ตามภาพตัวอย่าง พร้อมตรวจสอบความถูกต้องทางภาษา (อังกฤษการแพทย์สากล, อาหรับทางการทูต GCC, ไทยตาม SOP เวชธานี) 100% ไร้ข้อผิดพลาด เพื่อใช้งานจริงกับคนไข้ VIP และสถานทูต

Working directory: /Users/job/Documents/antigravity/proud-pasteur
Integrity mode: development

## Requirements

### R1. Dark Glassmorphism UI Transformation (Ultra-Premium Aesthetic)
- แปลงโครงสร้าง UI ทั้งหมดให้เป็น Dark Glassmorphism เกรดพรีเมียมตามภาพตัวอย่าง:
  - Deep obsidian & dark charcoal frosted glass background (`backdrop-blur-2xl`, `#0b0d11`, `#12151c`)
  - Floating Left Navigation Dock พร้อมไอคอนมินิมอลสำหรับสลับหน้าจอ (📞 Vejthani Call Journey, 💬 5 Inquiry Groups, 🕌 Arabic Center, 🔍 Lead Investigation, ⚙️ Settings)
  - Ambient radial background glow (ส้มอำพัน Amber / เขียวมรกต Emerald / น้ำเงินคราม Royal Blue)
  - แผงการ์ดโปร่งแสง (Frosted Glass Panels) เส้นขอบบางเฉียบประกายแก้ว (`border border-white/10`)
  - การจัดวางและ Typography คมชัดสูง (High-contrast pure white & platinum text)

### R2. Zero-Defect Language & Cultural Localization (Arabic, English, Thai)
- ตรวจสอบและเกลาภาษาทั้ง 3 ภาษาให้สมบูรณ์แบบ 100% สำหรับการใช้งานจริงระดับองค์กร 4 พันล้าน:
  - **ภาษาอาหรับ (GCC Diplomatic Standard):** ใช้ไวยากรณ์ภาษาอาหรับมาตรฐานที่สุภาพสูงสุดสำหรับกลุ่มประเทศอ่าวอาหรับ (UAE, Saudi, Oman, Qatar, Kuwait) คำทักทายถูกต้องตามมารยาทอิสลาม คำศัพท์การแพทย์แม่นยำ พร้อมการจัดวางแบบ Right-to-Left (RTL) เต็มรูปแบบด้วยฟอนต์ Amiri
  - **ภาษาอังกฤษ (Medical Diplomatic English):** สำนวนระดับโรงพยาบาลมาตรฐาน JCI ถูกต้องตามหลักการสื่อสารระหว่างประเทศ ไร้ข้อผิดพลาดทางไวยากรณ์ (Grammar) และตัวสะกด (Spelling)
  - **ภาษาไทย:** สอดคล้องกับระเบียบปฏิบัติมาตรฐาน (SOP) บทพูดโทรติดตามของโรงพยาบาลเวชธานีครบถ้วน

### R3. Interactive 3-Step Vejthani Call Journey & 5 Inquiry Specialties
- คงฟังก์ชันและการคำนวณทางการแพทย์ครบทุกมิติ:
  - **Step 1:** ตรวจสอบประวัติ + ตัวคำนวณ Time Zone อาหรับแบบสด (GMT+3 / GMT+4) และป้ายเตือนเวลาละหมาด/เวลาพักผ่อน
  - **Step 2:** บทพูดโทรโต้ตอบตาม SOP เวชธานี พร้อมปุ่มเลือกผลการคุย (พร้อมนัด / ขอคิดดูก่อน / ปฏิเสธ)
  - **Step 3:** สร้างข้อความสรุปหลังโทรส่ง WhatsApp อัตโนมัติใน 1 คลิก
  - **5 Specialties Engine:** KING OF BONE, Cancer Center, Pediatric, General Surgery, Investigate Lead

## Acceptance Criteria

### Visual & UX Standards
- [ ] หน้าเว็บแสดงผลในธีม Dark Glassmorphism ตามสไตล์ภาพตัวอย่างอย่างสมบูรณ์แบบ มี Floating Left Dock และ Ambient Glow แสงมิติหรูหรา
- [ ] การแสดงผลบนทุกหน้าจอคมชัด อ่านง่าย สบายตา ไม่มีข้อความทับซ้อนหรือกล่องตกขอบ

### Linguistic Quality & Medical Integrity
- [ ] ข้อความภาษาอาหรับทุกจุดผ่านการตรวจสอบไวยากรณ์ (Nahw & Sarf) คำทักทาย การสะกดคำ และจัดวาง RTL สวยงามสมบูรณ์แบบ
- [ ] ข้อความภาษาอังกฤษทุกจุดถูกต้องตามมาตรฐาน Joint Commission International (JCI) และ International Patient Services
- [ ] ข้อความภาษาไทยสอดคล้องกับคู่มือบทพูดโทรติดตามของโรงพยาบาลเวชธานีเป๊ะทุกตัวอักษร

### Operational Functionality
- [ ] ตัวบอกเวลา Time Zone คำนวณเวลาท้องถิ่นของโอมาน UAE ซาอุดีอาระเบีย ฯลฯ ได้อย่างแม่นยำแบบ Real-time
- [ ] ปุ่ม Interactive Outcome และปุ่มส่ง WhatsApp Web ทำงานได้ทันที 100%
- [ ] ทั้ง 5 กลุ่มโรคมีเอกสารที่ต้องขอ และข้อความตอบกลับเฉพาะทางครบถ้วน
