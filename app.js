// Vejthani MedLiaison AI - Complete Interactive Follow-up System
// Incorporating Official Vejthani Hospital International Patient Follow-up SOP & 5 Specialty Inquiry Engine

// =========================================================================
// 1. TIME ZONE & COUNTRY CONFIGURATION (Gulf & International)
// =========================================================================
const COUNTRY_TIMEZONES = {
  // -------------------------------------------------------------------------
  // กลุ่มประเทศอาหรับ / ตะวันออกกลาง (Arab / Middle East - 19 ประเทศ)
  // -------------------------------------------------------------------------
  qatar: { code: "QA", thName: "กาตาร์", enName: "Qatar", name: "Doha, Qatar", capital: "Doha (GMT+3)", offset: 3, label: "กาตาร์ (AST / GMT+3)", diffFromTh: -4, prayers: ["04:25", "11:50", "15:15", "17:45", "19:00"], category: "arab", dialCode: "+974", isGcc: true },
  uae: { code: "AE", thName: "สหรัฐอาหรับเอมิเรตส์", enName: "UAE", name: "Dubai / Abu Dhabi, UAE", capital: "Dubai / Abu Dhabi (GMT+4)", offset: 4, label: "สหรัฐอาหรับเอมิเรตส์ (GST / GMT+4)", diffFromTh: -3, prayers: ["04:55", "12:20", "15:45", "18:15", "19:30"], category: "arab", dialCode: "+971", isGcc: true },
  kuwait: { code: "KW", thName: "คูเวต", enName: "Kuwait", name: "Kuwait City, Kuwait", capital: "Kuwait City (GMT+3)", offset: 3, label: "คูเวต (AST / GMT+3)", diffFromTh: -4, prayers: ["04:20", "11:45", "15:10", "17:40", "18:55"], category: "arab", dialCode: "+965", isGcc: true },
  oman: { code: "OM", thName: "สุลต่านโอมาน", enName: "Oman", name: "Muscat, Oman", capital: "Muscat (GMT+4)", offset: 4, label: "โอมาน (GST / GMT+4)", diffFromTh: -3, prayers: ["04:50", "12:15", "15:40", "18:10", "19:25"], category: "arab", dialCode: "+968", isGcc: true },
  yemen: { code: "YE", thName: "เยเมน", enName: "Yemen", name: "Sana'a / Aden, Yemen", capital: "Sana'a / Aden (GMT+3)", offset: 3, label: "เยเมน (AST / GMT+3)", diffFromTh: -4, prayers: ["04:40", "12:05", "15:25", "18:05", "19:15"], category: "arab", dialCode: "+967", isGcc: false },
  saudi: { code: "SA", thName: "ซาอุดีอาระเบีย", enName: "Saudi Arabia", name: "Riyadh / Jeddah, Saudi Arabia", capital: "Riyadh (GMT+3)", offset: 3, label: "ซาอุดีอาระเบีย (AST / GMT+3)", diffFromTh: -4, prayers: ["04:30", "11:55", "15:20", "17:50", "19:05"], category: "arab", dialCode: "+966", isGcc: true },
  sudan: { code: "SD", thName: "ซูดาน", enName: "Sudan", name: "Khartoum, Sudan", capital: "Khartoum (GMT+2)", offset: 2, label: "ซูดาน (CAT / GMT+2)", diffFromTh: -5, prayers: ["04:45", "12:00", "15:20", "18:00", "19:10"], category: "arab", dialCode: "+249", isGcc: false },
  comoros: { code: "KM", thName: "คอโมโรส", enName: "Comoros", name: "Moroni, Comoros", capital: "Moroni (GMT+3)", offset: 3, label: "คอโมโรส (EAT / GMT+3)", diffFromTh: -4, prayers: ["04:50", "12:10", "15:30", "18:15", "19:25"], category: "arab", dialCode: "+269", isGcc: false },
  bahrain: { code: "BH", thName: "บาห์เรน", enName: "Bahrain", name: "Manama, Bahrain", capital: "Manama (GMT+3)", offset: 3, label: "บาห์เรน (AST / GMT+3)", diffFromTh: -4, prayers: ["04:25", "11:50", "15:15", "17:45", "19:00"], category: "arab", dialCode: "+973", isGcc: true },
  morocco: { code: "MA", thName: "โมร็อกโก", enName: "Morocco", name: "Rabat / Casablanca, Morocco", capital: "Rabat (GMT+1)", offset: 1, label: "โมร็อกโก (WEST / GMT+1)", diffFromTh: -6, prayers: ["05:30", "12:40", "16:05", "18:45", "20:00"], category: "arab", dialCode: "+212", isGcc: false },
  jordan: { code: "JO", thName: "จอร์แดน", enName: "Jordan", name: "Amman, Jordan", capital: "Amman (GMT+3)", offset: 3, label: "จอร์แดน (AST / GMT+3)", diffFromTh: -4, prayers: ["04:35", "11:55", "15:25", "17:55", "19:15"], category: "arab", dialCode: "+962", isGcc: false },
  iraq: { code: "IQ", thName: "อิรัก", enName: "Iraq", name: "Baghdad, Iraq", capital: "Baghdad (GMT+3)", offset: 3, label: "อิรัก (AST / GMT+3)", diffFromTh: -4, prayers: ["04:25", "11:50", "15:20", "17:48", "19:05"], category: "arab", dialCode: "+964", isGcc: false },
  palestine: { code: "PS", thName: "ปาเลสไตน์", enName: "Palestine", name: "Jerusalem / Ramallah, Palestine", capital: "Jerusalem (GMT+3)", offset: 3, label: "ปาเลสไตน์ (EEST / GMT+3)", diffFromTh: -4, prayers: ["04:35", "11:55", "15:25", "17:55", "19:15"], category: "arab", dialCode: "+970", isGcc: false },
  egypt: { code: "EG", thName: "อียิปต์", enName: "Egypt", name: "Cairo, Egypt", capital: "Cairo (GMT+3)", offset: 3, label: "อียิปต์ (EEST / GMT+3)", diffFromTh: -4, prayers: ["04:35", "11:55", "15:25", "18:00", "19:15"], category: "arab", dialCode: "+20", isGcc: false },
  algeria: { code: "DZ", thName: "แอลจีเรีย", enName: "Algeria", name: "Algiers, Algeria", capital: "Algiers (GMT+1)", offset: 1, label: "แอลจีเรีย (CET / GMT+1)", diffFromTh: -6, prayers: ["05:15", "12:35", "16:00", "18:40", "19:55"], category: "arab", dialCode: "+213", isGcc: false },
  syria: { code: "SY", thName: "ซีเรีย", enName: "Syria", name: "Damascus, Syria", capital: "Damascus (GMT+3)", offset: 3, label: "ซีเรีย (AST / GMT+3)", diffFromTh: -4, prayers: ["04:30", "11:50", "15:20", "17:50", "19:10"], category: "arab", dialCode: "+963", isGcc: false },
  tunisia: { code: "TN", thName: "ตูนิเซีย", enName: "Tunisia", name: "Tunis, Tunisia", capital: "Tunis (GMT+1)", offset: 1, label: "ตูนิเซีย (CET / GMT+1)", diffFromTh: -6, prayers: ["05:10", "12:30", "15:55", "18:35", "19:50"], category: "arab", dialCode: "+216", isGcc: false },
  lebanon: { code: "LB", thName: "เลบานอน", enName: "Lebanon", name: "Beirut, Lebanon", capital: "Beirut (GMT+3)", offset: 3, label: "เลบานอน (EEST / GMT+3)", diffFromTh: -4, prayers: ["04:35", "11:55", "15:25", "17:55", "19:15"], category: "arab", dialCode: "+961", isGcc: false },
  mauritania: { code: "MR", thName: "มอริเตเนีย", enName: "Mauritania", name: "Nouakchott, Mauritania", capital: "Nouakchott (GMT+0)", offset: 0, label: "มอริเตเนีย (GMT / GMT+0)", diffFromTh: -7, prayers: ["05:40", "13:00", "16:20", "19:00", "20:15"], category: "arab", dialCode: "+222", isGcc: false },

  // -------------------------------------------------------------------------
  // กลุ่มประเทศนานาชาติ (International - 23 ประเทศ)
  // -------------------------------------------------------------------------
  myanmar: { code: "MM", thName: "เมียนมา", enName: "Myanmar", name: "Yangon, Myanmar", capital: "Yangon (GMT+6.5)", offset: 6.5, label: "เมียนมา (MMT / GMT+6.5)", diffFromTh: -0.5, prayers: [], category: "inter", dialCode: "+95", isGcc: false },
  ethiopia: { code: "ET", thName: "เอธิโอเปีย", enName: "Ethiopia", name: "Addis Ababa, Ethiopia", capital: "Addis Ababa (GMT+3)", offset: 3, label: "เอธิโอเปีย (EAT / GMT+3)", diffFromTh: -4, prayers: [], category: "inter", dialCode: "+251", isGcc: false },
  usa: { code: "US", thName: "สหรัฐอเมริกา", enName: "USA", name: "New York, USA", capital: "New York (GMT-4)", offset: -4, label: "สหรัฐอเมริกา (EDT / GMT-4)", diffFromTh: -11, prayers: [], category: "inter", dialCode: "+1", isGcc: false },
  bangladesh: { code: "BD", thName: "บังกลาเทศ", enName: "Bangladesh", name: "Dhaka, Bangladesh", capital: "Dhaka (GMT+6)", offset: 6, label: "บังกลาเทศ (BST / GMT+6)", diffFromTh: -1, prayers: ["04:30", "11:55", "15:15", "17:50", "19:05"], category: "inter", dialCode: "+880", isGcc: false },
  vietnam: { code: "VN", thName: "เวียดนาม", enName: "Vietnam", name: "Hanoi / Ho Chi Minh, Vietnam", capital: "Hanoi (GMT+7)", offset: 7, label: "เวียดนาม (ICT / GMT+7)", diffFromTh: 0, prayers: [], category: "inter", dialCode: "+84", isGcc: false },
  uk: { code: "GB", thName: "สหราชอาณาจักร", enName: "UK", name: "London, UK", capital: "London (GMT+1)", offset: 1, label: "สหราชอาณาจักร (BST / GMT+1)", diffFromTh: -6, prayers: [], category: "inter", dialCode: "+44", isGcc: false },
  china: { code: "CN", thName: "จีน", enName: "China", name: "Beijing / Shanghai, China", capital: "Beijing (GMT+8)", offset: 8, label: "จีน (CST / GMT+8)", diffFromTh: 1, prayers: [], category: "inter", dialCode: "+86", isGcc: false },
  canada: { code: "CA", thName: "แคนาดา", enName: "Canada", name: "Toronto / Montreal, Canada", capital: "Toronto (GMT-4)", offset: -4, label: "แคนาดา (EDT / GMT-4)", diffFromTh: -11, prayers: [], category: "inter", dialCode: "+1", isGcc: false },
  singapore: { code: "SG", thName: "สิงคโปร์", enName: "Singapore", name: "Singapore", capital: "Singapore (GMT+8)", offset: 8, label: "สิงคโปร์ (SGT / GMT+8)", diffFromTh: 1, prayers: [], category: "inter", dialCode: "+65", isGcc: false },
  australia: { code: "AU", thName: "ออสเตรเลีย", enName: "Australia", name: "Sydney, Australia", capital: "Sydney (GMT+10)", offset: 10, label: "ออสเตรเลีย (AEST / GMT+10)", diffFromTh: 3, prayers: [], category: "inter", dialCode: "+61", isGcc: false },
  russia: { code: "RU", thName: "รัสเซีย", enName: "Russia", name: "Moscow, Russia", capital: "Moscow (GMT+3)", offset: 3, label: "รัสเซีย (MSK / GMT+3)", diffFromTh: -4, prayers: [], category: "inter", dialCode: "+7", isGcc: false },
  germany: { code: "DE", thName: "เยอรมนี", enName: "Germany", name: "Berlin / Frankfurt, Germany", capital: "Berlin (GMT+2)", offset: 2, label: "เยอรมนี (CEST / GMT+2)", diffFromTh: -5, prayers: [], category: "inter", dialCode: "+49", isGcc: false },
  cambodia: { code: "KH", thName: "กัมพูชา", enName: "Cambodia", name: "Phnom Penh, Cambodia", capital: "Phnom Penh (GMT+7)", offset: 7, label: "กัมพูชา (ICT / GMT+7)", diffFromTh: 0, prayers: [], category: "inter", dialCode: "+855", isGcc: false },
  philippines: { code: "PH", thName: "ฟิลิปปินส์", enName: "Philippines", name: "Manila, Philippines", capital: "Manila (GMT+8)", offset: 8, label: "ฟิลิปปินส์ (PST / GMT+8)", diffFromTh: 1, prayers: [], category: "inter", dialCode: "+63", isGcc: false },
  france: { code: "FR", thName: "ฝรั่งเศส", enName: "France", name: "Paris, France", capital: "Paris (GMT+2)", offset: 2, label: "ฝรั่งเศส (CEST / GMT+2)", diffFromTh: -5, prayers: [], category: "inter", dialCode: "+33", isGcc: false },
  india: { code: "IN", thName: "อินเดีย", enName: "India", name: "New Delhi / Mumbai, India", capital: "New Delhi (GMT+5.5)", offset: 5.5, label: "อินเดีย (IST / GMT+5.5)", diffFromTh: -1.5, prayers: [], category: "inter", dialCode: "+91", isGcc: false },
  netherlands: { code: "NL", thName: "เนเธอร์แลนด์", enName: "Netherlands", name: "Amsterdam, Netherlands", capital: "Amsterdam (GMT+2)", offset: 2, label: "เนเธอร์แลนด์ (CEST / GMT+2)", diffFromTh: -5, prayers: [], category: "inter", dialCode: "+31", isGcc: false },
  maldives: { code: "MV", thName: "มัลดีฟส์", enName: "Maldives", name: "Male, Maldives", capital: "Male (GMT+5)", offset: 5, label: "มัลดีฟส์ (MVT / GMT+5)", diffFromTh: -2, prayers: ["04:55", "12:05", "15:25", "18:10", "19:20"], category: "inter", dialCode: "+960", isGcc: false },
  swiss: { code: "CH", thName: "สวิตเซอร์แลนด์", enName: "Switzerland", name: "Zurich / Geneva, Switzerland", capital: "Zurich (GMT+2)", offset: 2, label: "สวิตเซอร์แลนด์ (CEST / GMT+2)", diffFromTh: -5, prayers: [], category: "inter", dialCode: "+41", isGcc: false },
  turkey: { code: "TR", thName: "ตุรกี", enName: "Turkey", name: "Istanbul / Ankara, Turkey", capital: "Istanbul (GMT+3)", offset: 3, label: "ตุรกี (TRT / GMT+3)", diffFromTh: -4, prayers: ["05:10", "12:50", "16:20", "19:00", "20:25"], category: "inter", dialCode: "+90", isGcc: false },
  ukraine: { code: "UA", thName: "ยูเครน", enName: "Ukraine", name: "Kyiv, Ukraine", capital: "Kyiv (GMT+3)", offset: 3, label: "ยูเครน (EEST / GMT+3)", diffFromTh: -4, prayers: [], category: "inter", dialCode: "+380", isGcc: false },
  iran: { code: "IR", thName: "อิหร่าน", enName: "Iran", name: "Tehran, Iran", capital: "Tehran (GMT+3.5)", offset: 3.5, label: "อิหร่าน (IRST / GMT+3.5)", diffFromTh: -3.5, prayers: ["04:40", "12:05", "15:35", "18:15", "19:35"], category: "inter", dialCode: "+98", isGcc: false },
  south_africa: { code: "ZA", thName: "แอฟริกาใต้", enName: "South Africa", name: "Johannesburg / Cape Town, South Africa", capital: "Johannesburg (GMT+2)", offset: 2, label: "แอฟริกาใต้ (SAST / GMT+2)", diffFromTh: -5, prayers: [], category: "inter", dialCode: "+27", isGcc: false }
};

function calculateCountryTime(countryKey) {
  const config = COUNTRY_TIMEZONES[countryKey] || COUNTRY_TIMEZONES.oman;
  const now = new Date();
  // UTC time in ms
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const countryDate = new Date(utc + (3600000 * config.offset));

  const hours = countryDate.getHours();
  const minutes = countryDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const seconds = countryDate.getSeconds();
  const displayHours = hours % 12 || 12;
  const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
  const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
  const timeStr = `${displayHours}:${displayMinutes}:${displaySeconds} ${ampm}`;

  // Check appropriateness
  let suitability = {
    badge: "เหมาะสมในการโทร (Business Hours)",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-300",
    desc: `ห่างจากเวลาไทย ${Math.abs(config.diffFromTh)} ชม. อยู่ในช่วงเวลาทำงาน (Business Hours) ที่สะดวกในการติดต่อ`
  };

  const isFriday = countryDate.getDay() === 5;
  const totalMinutes = hours * 60 + minutes;

  // Friday Jummah check (11:30 - 13:30)
  if (isFriday && totalMinutes >= (11 * 60 + 30) && totalMinutes <= (13 * 60 + 30)) {
    suitability = {
      badge: "ช่วงเวลาละหมาดวันศุกร์ (Friday Jummah / صلاة الجمعة)",
      badgeClass: "bg-purple-50 text-purple-700 border-purple-300",
      desc: "วันศุกร์เวลา 11:30 - 13:30 น. เป็นช่วงละหมาดวันศุกร์ร่วมกันที่มัสยิด (Friday Jummah Congregational Prayer) กรุณาหลีกเลี่ยงการโทรในช่วงเวลานี้เด็ดขาด"
    };
  } else if (hours >= 4 && hours < 6 && config.prayers.length > 0) {
    suitability = {
      badge: "ช่วงเวลาละหมาดฟัจญร์ (Fajr / ฟัจญร์ / صلاة الفجر)",
      badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-300",
      desc: "ช่วงเวลาประมาณ 04:20 - 05:45 น. เป็นเวลาละหมาดย่ำรุ่ง (Fajr / ฟัจญร์) และเวลาพักผ่อน ไม่ควรโทรติดต่อ"
    };
  } else if (hours < 9) {
    suitability = {
      badge: "เช้าตรู่เกินไป (Early Morning)",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-300",
      desc: `เวลาท้องถิ่นยังไม่ถึง 09:00 AM แนะนำให้รอเวลาเปิดทำการของประเทศปลายทางเพื่อความสุภาพ`
    };
  } else if (hours >= 12 && hours < 13 && config.prayers.length > 0) {
    suitability = {
      badge: "ช่วงเวลาละหมาดซุฮรี (Dhuhr / صلاة الظهر)",
      badgeClass: "bg-blue-50 text-blue-700 border-blue-300",
      desc: `ช่วงเวลาประมาณ 12:00 - 13:00 น. เป็นเวลาละหมาดกลางวัน หากโทรติดแล้วคนไข้ไม่สะดวก ให้ขอเวลานัดหมายใหม่`
    };
  } else if (hours >= 15 && hours < 16 && minutes >= 10 && config.prayers.length > 0) {
    suitability = {
      badge: "ช่วงเวลาละหมาดอัศรี (Asr / صلاة العصر)",
      badgeClass: "bg-cyan-50 text-cyan-700 border-cyan-300",
      desc: `ช่วงเวลาประมาณ 15:10 - 16:30 น. เป็นเวลาละหมาดยามบ่าย (Asr)`
    };
  } else if (hours >= 18 && hours < 19 && config.prayers.length > 0) {
    suitability = {
      badge: "ช่วงเวลาละหมาดมัฆริบ (Maghrib / صلاة المغرب)",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-300",
      desc: `ช่วงเวลาพลบค่ำเป็นเวลาละหมาด (Maghrib) และรับประทานอาหารร่วมกับครอบครัว`
    };
  } else if (hours >= 19 && hours < 20 && config.prayers.length > 0) {
    suitability = {
      badge: "ช่วงเวลาละหมาดอิชาอ์ (Isha / صلاة العشاء)",
      badgeClass: "bg-violet-50 text-violet-700 border-violet-300",
      desc: `ช่วงเวลาประมาณ 19:00 - 20:00 น. เป็นเวลาละหมาดค่ำ (Isha)`
    };
  } else if (hours >= 20 || hours < 4) {
    suitability = {
      badge: "ดึกเกินไป ไม่ควรโทร (Late Night)",
      badgeClass: "bg-rose-50 text-rose-700 border-rose-300",
      desc: `เป็นเวลาพักผ่อนของคนไข้ ไม่ควรโทรติดตาม แนะนำให้ส่งข้อความ WhatsApp ทิ้งไว้แทน`
    };
  }

  const tzSign = config.offset >= 0 ? `+${config.offset}` : `${config.offset}`;
  const tzBadge = `GMT${tzSign}`;

  return {
    timeStr,
    countryLabel: config.name,
    tzBadge,
    config,
    suitability
  };
}

// =========================================================================
// 2. VEJTHANI CALL SCRIPT SOP DATA & TEMPLATES (Verbatim Hospital SOP)
// =========================================================================
const CALL_SOP_PRESETS = {
  oman_knee: {
    patientName: "Mr. Mohammed Al-Balushi",
    patientNameAr: "السيد / محمد البلوشي",
    patientNameTh: "คุณโมฮัมเหม็ด อัล-บาลูชี",
    country: "oman",
    phone: "+968 9123-4567",
    hn: "VN-884920",
    staffName: "Sorawit",
    staffNameEn: "Sorawit",
    staffNameTh: "ศรวิทย์",
    staffNameAr: "سوراويت",
    topic: "ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
    topicEn: "Robotic-Assisted Total Knee Replacement (King of Bones)",
    topicTh: "การผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
    topicAr: "جراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (كينغ أوف بونز)",
    priorChannel: "WhatsApp",
    priorChannelEn: "WhatsApp",
    priorChannelTh: "WhatsApp",
    priorChannelAr: "واتساب",
    remainingIssue: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และหนังสือค้ำประกันค่ารักษาจากสถานทูตโอมาน",
    remainingIssueEn: "VIP family suite arrangements, 100% Halal dining verification, and Royal Embassy of Oman Financial Guarantee Letter coordination",
    remainingIssueTh: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และหนังสือค้ำประกันค่ารักษาจากสถานทูตโอมาน",
    remainingIssueAr: "ترتيبات الأجنحة العائلية الفاخرة، وشهادة الوجبات الحلال 100%، وتنسيق خطاب الضمان المالي الصادر من الملحقية الصحية بسفارة سلطنة عُمان"
  },
  saudi_cancer: {
    patientName: "Mrs. Aisha Al-Husseini",
    patientNameAr: "السيدة / عائشة الحسيني",
    patientNameTh: "คุณไอชา อัล-ฮุสเซนี",
    country: "saudi",
    phone: "+966 50 123 4567",
    hn: "VN-773104",
    staffName: "Patcharee",
    staffNameEn: "Patcharee",
    staffNameTh: "พัชรี",
    staffNameAr: "باتشاري",
    topic: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
    topicEn: "Oncology Second Opinion & MDT Tumor Board Review",
    topicTh: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
    topicAr: "طلب رأي طبي ثانٍ في طب الأورام ومراجعة اللجنة الطبية متعددة التخصصات (Tumor Board)",
    priorChannel: "WhatsApp & Email",
    priorChannelEn: "WhatsApp & Email",
    priorChannelTh: "WhatsApp และ Email",
    priorChannelAr: "واتساب والبريد الإلكتروني",
    remainingIssue: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
    remainingIssueEn: "Female oncologist coordination, pathology biopsy review, and medical visa invitation letter",
    remainingIssueTh: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
    remainingIssueAr: "تنسيق كادر طبي نسائي متخصص، ومراجعة تقرير فحص العينة (Biopsy)، وإصدار خطاب الدعوة لتأشيرة العلاج"
  },
  uae_pediatric: {
    patientName: "Mr. Mansoor (Father of Master Rashid)",
    patientNameEn: "Mr. Mansoor (Father of Master Rashid)",
    patientNameAr: "السيد / منصور (والد الطفل راشد)",
    patientNameTh: "คุณมันซูร์ (บิดาของ ด.ช. ราชิด)",
    country: "uae",
    phone: "+971 50 987 6543",
    hn: "VN-654219",
    staffName: "Yasmin",
    staffNameEn: "Yasmin",
    staffNameTh: "ยัสมิน",
    staffNameAr: "ياسمين",
    topic: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
    topicEn: "Pediatric Orthopedic Gait Correction & Limb Realignment",
    topicTh: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
    topicAr: "تصحيح المشي وتشوهات عظام الأطراف لدى الأطفال (Pediatric Orthopedics)",
    priorChannel: "WhatsApp",
    priorChannelEn: "WhatsApp",
    priorChannelTh: "WhatsApp",
    priorChannelAr: "واتساب",
    remainingIssue: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
    remainingIssueEn: "Pre-travel surgeon video consultation and child-friendly family suite accommodation",
    remainingIssueTh: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
    remainingIssueAr: "ترتيب استشارة فيديو مسبقة مع الجراح، وتفاصيل أجنحة الأطفال العائلية المجهزة"
  },
  uk_surgery: {
    patientName: "Mr. Johnathan Brooks",
    patientNameAr: "السيد / جوناثان بروكس",
    patientNameTh: "คุณโจนาธาน บรูคส์",
    country: "uk",
    phone: "+44 7911 123456",
    hn: "VN-991203",
    staffName: "Amanda Clark",
    staffNameEn: "Amanda Clark",
    staffNameTh: "อแมนด้า คลาร์ก",
    staffNameAr: "أماندا كلارك",
    topic: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
    topicEn: "Minimally Invasive Laparoscopic Cholecystectomy",
    topicTh: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
    topicAr: "جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)",
    priorChannel: "Email",
    priorChannelEn: "Email",
    priorChannelTh: "Email",
    priorChannelAr: "البريد الإلكتروني",
    remainingIssue: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
    remainingIssueEn: "5-day Fit-to-Fly medical certificate clearance and international health insurance direct billing",
    remainingIssueTh: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
    remainingIssueAr: "تأكيد شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly) في غضون 5 أيام وإجراءات التأمين الصحي الدولي"
  },
  king_of_bone: {
    patientName: "Mr. Mohammed Al-Balushi",
    patientNameAr: "السيد / محمد البلوشي",
    patientNameTh: "คุณโมฮัมเหม็ด อัล-บาลูชี",
    country: "oman",
    phone: "+968 9123-4567",
    hn: "VN-884920",
    staffName: "Sorawit",
    staffNameEn: "Sorawit",
    staffNameTh: "ศรวิทย์",
    staffNameAr: "سوراويت",
    topic: "ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
    topicEn: "Robotic-Assisted Total Knee Replacement (King of Bones)",
    topicTh: "การผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
    topicAr: "جراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (كينغ أوف بونز)",
    priorChannel: "WhatsApp",
    priorChannelEn: "WhatsApp",
    priorChannelTh: "WhatsApp",
    priorChannelAr: "واتساب",
    remainingIssue: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และหนังสือค้ำประกันค่ารักษาจากสถานทูตโอมาน",
    remainingIssueEn: "VIP family suite arrangements, 100% Halal dining verification, and Royal Embassy of Oman Financial Guarantee Letter coordination",
    remainingIssueTh: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และหนังสือค้ำประกันค่ารักษาจากสถานทูตโอมาน",
    remainingIssueAr: "ترتيبات الأجنحة العائلية الفاخرة، وشهادة الوجبات الحلال 100%، وتنسيق خطاب الضمان المالي الصادر من الملحقية الصحية بسفارة سلطنة عُمان"
  },
  cancer: {
    patientName: "Mrs. Aisha Al-Husseini",
    patientNameAr: "السيدة / عائشة الحسيني",
    patientNameTh: "คุณไอชา อัล-ฮุสเซนี",
    country: "saudi",
    phone: "+966 50 123 4567",
    hn: "VN-773104",
    staffName: "Patcharee",
    staffNameEn: "Patcharee",
    staffNameTh: "พัชรี",
    staffNameAr: "باتشاري",
    topic: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
    topicEn: "Oncology Second Opinion & MDT Tumor Board Review",
    topicTh: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
    topicAr: "طلب رأي طبي ثانٍ في طب الأورام ومراجعة اللجنة الطبية متعددة التخصصات (Tumor Board)",
    priorChannel: "WhatsApp & Email",
    priorChannelEn: "WhatsApp & Email",
    priorChannelTh: "WhatsApp และ Email",
    priorChannelAr: "واتساب والبريد الإلكتروني",
    remainingIssue: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
    remainingIssueEn: "Female oncologist coordination, pathology biopsy review, and medical visa invitation letter",
    remainingIssueTh: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
    remainingIssueAr: "تنسيق كادر طبي نسائي متخصص، ومراجعة تقرير فحص العينة (Biopsy)، وإصدار خطاب الدعوة لتأشيرة العلاج"
  },
  pediatric: {
    patientName: "Mr. Mansoor (Father of Master Rashid)",
    patientNameEn: "Mr. Mansoor (Father of Master Rashid)",
    patientNameAr: "السيد / منصور (والد الطفل راشد)",
    patientNameTh: "คุณมันซูร์ (บิดาของ ด.ช. ราชิด)",
    country: "uae",
    phone: "+971 50 987 6543",
    hn: "VN-654219",
    staffName: "Yasmin",
    staffNameEn: "Yasmin",
    staffNameTh: "ยัสมิน",
    staffNameAr: "ياسمين",
    topic: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
    topicEn: "Pediatric Orthopedic Gait Correction & Limb Realignment",
    topicTh: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
    topicAr: "تصحيح المشي وتشوهات عظام الأطراف لدى الأطفال (Pediatric Orthopedics)",
    priorChannel: "WhatsApp",
    priorChannelEn: "WhatsApp",
    priorChannelTh: "WhatsApp",
    priorChannelAr: "واتساب",
    remainingIssue: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
    remainingIssueEn: "Pre-travel surgeon video consultation and child-friendly family suite accommodation",
    remainingIssueTh: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
    remainingIssueAr: "ترتيب استشارة فيديو مسبقة مع الجراح، وتفاصيل أجنحة الأطفال العائلية المجهزة"
  },
  general_surgery: {
    patientName: "Mr. Johnathan Brooks",
    patientNameAr: "السيد / جوناثان بروكس",
    patientNameTh: "คุณโจนาธาน บรูคส์",
    country: "uk",
    phone: "+44 7911 123456",
    hn: "VN-991203",
    staffName: "Amanda Clark",
    staffNameEn: "Amanda Clark",
    staffNameTh: "อแมนด้า คลาร์ก",
    staffNameAr: "أماندا كلارك",
    topic: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
    topicEn: "Minimally Invasive Laparoscopic Cholecystectomy",
    topicTh: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
    topicAr: "جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)",
    priorChannel: "Email",
    priorChannelEn: "Email",
    priorChannelTh: "Email",
    priorChannelAr: "البريد الإلكتروني",
    remainingIssue: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
    remainingIssueEn: "5-day Fit-to-Fly medical certificate clearance and international health insurance direct billing",
    remainingIssueTh: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
    remainingIssueAr: "تأكيد شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly) في غضون 5 أيام وإجراءات التأمين الصحي الدولي"
  },
  investigate: {
    patientName: "Mr. Hamad Al-Kuwari",
    patientNameAr: "السيد / حمد الكواري",
    patientNameTh: "คุณฮาหมัด อัล-คูวารี",
    country: "qatar",
    phone: "+974 5512 3456",
    hn: "VN-552190",
    staffName: "Sorawit",
    staffNameEn: "Sorawit",
    staffNameTh: "ศรวิทย์",
    staffNameAr: "سوراويت",
    topic: "การคัดกรองความพร้อมคนไข้และวางแผนการเดินทางเพื่อการรักษา (4D Lead Qualification)",
    topicEn: "4D International Patient Clinical & Travel Assessment",
    topicTh: "การคัดกรองความพร้อมคนไข้และวางแผนการเดินทางเพื่อการรักษา (4D Lead Qualification)",
    topicAr: "التقييم الطبي الشامل وخطة السفر للعلاج (4D Medical Assessment)",
    priorChannel: "WhatsApp",
    priorChannelEn: "WhatsApp",
    priorChannelTh: "WhatsApp",
    priorChannelAr: "واتساب",
    remainingIssue: "การประสานงานเอกสารรับรองสถานทูต การตรวจเช็คประวัติการรักษา และจัดทำใบเสนอราคาอย่างเป็นทางการ",
    remainingIssueEn: "Embassy guarantee letter coordination, medical history evaluation, and official quotation preparation",
    remainingIssueTh: "การประสานงานเอกสารรับรองสถานทูต การตรวจเช็คประวัติการรักษา และจัดทำใบเสนอราคาอย่างเป็นทางการ",
    remainingIssueAr: "تنسيق خطابات الضمان المالي الصادرة من السفارة ومراجعة التقارير الطبية وإصدار التقدير المالي المعتمد"
  }
};

// =========================================================================
// MEDICAL LOCALIZER & DICTIONARY (Zero Language Leakage Engine)
// =========================================================================
const MEDICAL_LOCALIZER = {
  topics: [
    {
      keywords: ["ข้อเข่า", "เข่า", "หุ่นยนต์", "ข้อสะโพก", "สะโพก", "กระดูก", "ข้อเสื่อม", "กระดูกพรุน", "เอ็นไขว้หน้า", "หมอนรองกระดูก", "knee", "robotic", "ركبة", "عظام", "bone", "orthopedic", "hip", "joint", "joints", "king of bone"],
      th: "การผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
      en: "Robotic-Assisted Total Knee Replacement (King of Bones)",
      ar: "جراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (كينغ أوف بونز)"
    },
    {
      keywords: ["มะเร็ง", "ก้อนเนื้อ", "เนื้องอก", "ชิ้นเนื้อ", "เคมีบำบัด", "คีโม", "ฉายแสง", "เต้านม", "ลำไส้", "ปอด", "ตับ", "cancer", "oncology", "tumor", "أورام", "سرطان"],
      th: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
      en: "Oncology Second Opinion & MDT Tumor Board Review",
      ar: "طلب رأي طبي ثانٍ في طب الأورام ومراجعة اللجنة الطبية متعددة التخصصات (Tumor Board)"
    },
    {
      keywords: ["เด็ก", "กุมาร", "ขาโก่ง", "ทารก", "ลูก", "ราชิด", "pediatric", "child", "أطفال", "طفل", "rashid"],
      th: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
      en: "Pediatric Orthopedic Gait Correction & Limb Realignment",
      ar: "تصحيح المشي وتشوهات عظام الأطراف لدى الأطفال (Pediatric Orthopedics)"
    },
    {
      keywords: ["ถุงน้ำดี", "ส่องกล้อง", "ผ่าตัด", "นิ่ว", "ไส้ติ่ง", "ไส้เลื่อน", "แผลเล็ก", "cholecystectomy", "gallbladder", "مرارة", "منظار", "surgery", "laparoscopic"],
      th: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
      en: "Minimally Invasive Laparoscopic Cholecystectomy",
      ar: "جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)"
    },
    {
      keywords: ["กระดูกสันหลัง", "สันหลัง", "ปวดหลัง", "ทับเส้น", "spine", "spinal", "فقري"],
      th: "การรักษาโรคกระดูกสันหลังและหมอนรองกระดูกกดทับเส้นประสาท (Comprehensive Spine Care)",
      en: "Comprehensive Spine Surgery & Endoscopic Care",
      ar: "جراحة العمود الفقري المتقدمة ورعاية الانزلاق الغضروفي (Spine Care)"
    },
    {
      keywords: ["หัวใจ", "หลอดเลือด", "บายพาส", "บอลลูน", "cardio", "cardiac", "heart", "قلب"],
      th: "การรักษาโรคหัวใจและหลอดเลือดขั้นสูง (Advanced Heart & Vascular Center)",
      en: "Advanced Cardiology & Cardiovascular Care",
      ar: "مركز رعاية وجراحة القلب والأوعية الدموية المتقدم (Cardiology Center)"
    },
    {
      keywords: ["สมอง", "ระบบประสาท", "สโตรก", "อัมพฤกษ์", "neuro", "brain", "stroke"],
      th: "การรักษาโรคหลอดเลือดสมองและระบบประสาท (Neuroscience Center)",
      en: "Comprehensive Neuroscience & Stroke Center",
      ar: "مركز العلوم العصبية المتكامل ورعاية السكتات الدماغية"
    },
    {
      keywords: ["คัดกรอง", "ตรวจสุขภาพ", "เช็คอัพ", "สืบค้น", "ตรวจร่างกาย", "ความพร้อม", "investigate", "lead", "4d", "تقييم", "checkup", "screening"],
      th: "การคัดกรองความพร้อมคนไข้และวางแผนการเดินทางเพื่อการรักษา (4D Lead Qualification)",
      en: "4D International Patient Clinical & Travel Assessment",
      ar: "التقييم الطبي الشامل وخطة السفر للعلاج (4D Medical Assessment)"
    }
  ],
  remainingIssues: [
    {
      keywords: ["ห้องพักครอบครัว", "ครอบครัว", "วีซ่า", "สถานทูต", "โอมาน", "ฮาลาล", "อาหารฮาลาล", "ที่พัก", "โรงแรม", "family suite", "visa", "halal", "عائلية", "تأشيرة", "سفارة", "ضمان", "accommodation", "hotel", "embassy"],
      th: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และขั้นตอนการทำวีซ่าแพทย์",
      en: "VIP family suite arrangements, 100% Halal dining verification, and medical visa processing",
      ar: "ترتيبات الأجنحة العائلية الفاخرة، وتأكيد الوجبات الحلال 100%، وتنسيق إجراءات التأشيرة الطبية"
    },
    {
      keywords: ["แพทย์หญิง", "หมอผู้หญิง", "ชิ้นเนื้อ", "ผลตรวจ", "biopsy", "female oncologist", "female doctor", "عينة", "نسائي", "طبيبة"],
      th: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
      en: "Female oncologist coordination, pathology biopsy review, and medical visa invitation letter",
      ar: "تنسيق كادر طبي نسائي متخصص، ومراجعة تقرير فحص العينة (Biopsy)، وإصدار خطاب الدعوة لتأشيرة العلاج"
    },
    {
      keywords: ["video call", "วิดีโอคอล", "เทเลเมด", "telemed", "ปรึกษาแพทย์", "ออนไลน์", "استشارة فيديو", "فيديو", "consultation"],
      th: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
      en: "Pre-travel surgeon video consultation and child-friendly family suite accommodation",
      ar: "ترتيب استشارة فيديو مسبقة مع الجراح، وتفاصيل أجنحة الأطفال العائلية المجهزة"
    },
    {
      keywords: ["fit-to-fly", "ฟิตทูฟลาย", "พักฟื้น", "ประกัน", "เคลม", "บิน", "เครื่องบิน", "ใบรับรองแพทย์", "لياقة", "تأمين", "insurance", "flight", "certificate"],
      th: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
      en: "5-day Fit-to-Fly medical certificate clearance and international health insurance direct billing",
      ar: "تأكيد شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly) في غضون 5 أيام وإجراءات التأمين الصحي الدولي"
    },
    {
      keywords: ["สถานทูต", "รับรอง", "ใบเสนอราคา", "ประวัติการรักษา", "ราคา", "ค่ารักษา", "ค่าใช้จ่าย", "ประมาณการ", "quotation", "price", "cost", "guarantee letter", "ضمان", "تقدير"],
      th: "การประสานงานเอกสารรับรองสถานทูต การตรวจเช็คประวัติการรักษา และจัดทำใบเสนอราคาอย่างเป็นทางการ",
      en: "Embassy guarantee letter coordination, medical history evaluation, and official quotation preparation",
      ar: "تنسيق خطابات الضمان المالي الصادرة من السفارة ومراجعة التقارير الطبية وإصدار التقدير المالي المعتمد"
    },
    {
      keywords: ["สนามบิน", "รับส่ง", "ลีมูซีน", "รถพยาบาล", "airport", "transfer", "limousine", "مطار"],
      th: "บริการรถลีมูซีนรับ-ส่งสนามบินสุวรรณภูมิและการประสานงานแผนกต้อนรับ",
      en: "Complimentary Suvarnabhumi Airport VIP limousine transfer and arrival coordination",
      ar: "خدمة الاستقبال المجاني بسيارات ليموزين فاخرة من مطار سوفارنابومي الدولي"
    },
    {
      keywords: ["ล่าม", "ภาษา", "แปล", "interpreter", "translation", "مترجم"],
      th: "การจัดสรรล่ามภาษาอาหรับและภาษาอังกฤษส่วนตัวดูแลตลอดการรักษา",
      en: "Dedicated Arabic and English medical interpreter allocation throughout the hospital stay",
      ar: "تنسيق وتخصيص المترجم الطبي المعتمد لمرافقتكم في كافة المواعิด مجاناً"
    }
  ],
  staffNames: [
    {
      keywords: ["ศรวิทย์", "sorawit", "سوراويت"],
      th: "ศรวิทย์",
      en: "Sorawit",
      ar: "سوراويت (Sorawit)"
    },
    {
      keywords: ["พัชรี", "patcharee", "باتشاري"],
      th: "พัชรี",
      en: "Patcharee",
      ar: "باتشاري (Patcharee)"
    },
    {
      keywords: ["ยัสมิน", "yasmin", "ياسمين"],
      th: "ยัสมิน",
      en: "Yasmin",
      ar: "ياسمين (Yasmin)"
    },
    {
      keywords: ["อแมนด้า", "amanda", "أماندا"],
      th: "อแมนด้า คลาร์ก",
      en: "Amanda Clark",
      ar: "أماندا كلارك (Amanda Clark)"
    },
    {
      keywords: ["สมชาย", "somchai"],
      th: "สมชาย",
      en: "Somchai",
      ar: "สมชาย (Somchai)"
    }
  ],
  patients: [
    {
      keywords: ["mohammed", "balushi", "โมฮัมเหม็ด", "บาลูชี", "البلوشي"],
      th: "คุณโมฮัมเหม็ด อัล-บาลูชี",
      en: "Mr. Mohammed Al-Balushi",
      ar: "محمد البلوشي"
    },
    {
      keywords: ["aisha", "husseini", "ไอชา", "ฮุสเซนี", "الحسيني", "عائشة"],
      th: "คุณไอชา อัล-ฮุสเซนี",
      en: "Mrs. Aisha Al-Husseini",
      ar: "عائشة الحسيني"
    },
    {
      keywords: ["mansoor", "rashid", "มันซูร์", "ราชิด", "منصور", "راشد"],
      th: "คุณมันซูร์ (บิดาของ ด.ช. ราชิด)",
      en: "Mr. Mansoor (Father of Master Rashid)",
      ar: "منصور (والد الطفل راشد)"
    },
    {
      keywords: ["brooks", "johnathan", "บรูคส์", "โจนาธาน", "بروكس", "جوناثان"],
      th: "คุณโจนาธาน บรูคส์",
      en: "Mr. Johnathan Brooks",
      ar: "جوناثان بروكس"
    },
    {
      keywords: ["hamad", "kuwari", "ฮาหมัด", "คูวารี", "حمد", "الكواري"],
      th: "คุณฮาหมัด อัล-คูวารี",
      en: "Mr. Hamad Al-Kuwari",
      ar: "حمد الكواري"
    },
    {
      keywords: ["abdullah", "อับดุลลาห์", "อับดุลลอฮ์", "عبد الله"],
      th: "คุณอับดุลลาห์",
      en: "Mr. Abdullah",
      ar: "عبد الله"
    },
    {
      keywords: ["ahmed", "อาห์เหม็ด", "أحمد"],
      th: "คุณอาห์เหม็ด",
      en: "Mr. Ahmed",
      ar: "أحمد"
    },
    {
      keywords: ["khalid", "คาลิด", "خالد"],
      th: "คุณคาลิด",
      en: "Mr. Khalid",
      ar: "خالد"
    },
    {
      keywords: ["salem", "ซาเล็ม", "سالم"],
      th: "คุณซาเล็ม",
      en: "Mr. Salem",
      ar: "سالم"
    },
    {
      keywords: ["sultan", "สุลต่าน", "سلطان"],
      th: "คุณสุลต่าน",
      en: "Mr. Sultan",
      ar: "سلطان"
    },
    {
      keywords: ["fatima", "ฟาติมา", "فاطمة"],
      th: "คุณฟาติมา",
      en: "Mrs. Fatima",
      ar: "فاطمة"
    },
    {
      keywords: ["maryam", "มัรยัม", "مريم"],
      th: "คุณมัรยัม",
      en: "Ms. Maryam",
      ar: "مريم"
    },
    {
      keywords: ["nasser", "นัสเซอร์", "ناصر"],
      th: "คุณนัสเซอร์",
      en: "Mr. Nasser",
      ar: "ناصر"
    },
    {
      keywords: ["omar", "โอมาร์", "อุมัร", "عمر"],
      th: "คุณโอมาร์",
      en: "Mr. Omar",
      ar: "عمر"
    },
    {
      keywords: ["ali", "อาลี", "علي"],
      th: "คุณอาลี",
      en: "Mr. Ali",
      ar: "علي"
    }
  ]
};

function localizeField(value, targetLang, fieldType) {
  if (!value || typeof value !== "string") return value || "";
  const trimmed = value.trim();
  const lower = trimmed.toLowerCase();

  // If targetLang is "th" and value already has Thai, preserve the user's custom Thai input!
  if (targetLang === "th" && /[\u0E00-\u0E7F]/.test(trimmed)) {
    return trimmed;
  }

  let dictList = [];
  if (fieldType === "topic") dictList = MEDICAL_LOCALIZER.topics;
  else if (fieldType === "remainingIssue") dictList = MEDICAL_LOCALIZER.remainingIssues;
  else if (fieldType === "staffName") dictList = MEDICAL_LOCALIZER.staffNames;
  else if (fieldType === "patientName") dictList = MEDICAL_LOCALIZER.patients;

  for (const item of dictList) {
    if (item.keywords.some(k => lower.includes(k.toLowerCase()))) {
      return item[targetLang] || item.en || trimmed;
    }
  }

  // Fallbacks avoiding language leakage
  if (targetLang === "ar") {
    let cleaned = trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
    cleaned = cleaned.replace(/\(\s*\)/g, "").trim();
    if (!cleaned) {
      if (fieldType === "topic") return "العلاج الطبي والرعاية التخصصية بمستشفى فيجثاني";
      if (fieldType === "remainingIssue") return "الترتيبات الطبية اللوجستية وتأكيد موعد السفر";
      if (fieldType === "staffName") return "منسق التنسيق الطبي الدولي";
      if (fieldType === "patientName") return "المريض الكريم";
    }
    return cleaned;
  }

  if (targetLang === "en") {
    let cleaned = trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
    cleaned = cleaned.replace(/\(\s*\)/g, "").trim();
    if (!cleaned) {
      if (fieldType === "topic") return "Specialized Medical Treatment at Vejthani Hospital";
      if (fieldType === "remainingIssue") return "Medical travel logistics and hospital appointments";
      if (fieldType === "staffName") return "International Patient Coordinator";
      if (fieldType === "patientName") return "Esteemed Patient";
    }
    return cleaned;
  }

  return trimmed;
}

// Dynamic salutation formatter preventing double salutations and language leakage
function formatPatientSalutation(name, lang = "en") {
  if (!name) {
    if (lang === "ar") return "حضرة الفاضل المحترم";
    if (lang === "th") return "ท่านคนไข้";
    return "Esteemed Patient";
  }
  const trimmed = name.trim();

  if (lang === "ar") {
    const cleanAr = trimmed
      .replace(/^(mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ)\s+/i, "")
      .replace(/[\u0E00-\u0E7F]/g, "")
      .trim();
    if (!cleanAr || cleanAr.startsWith("حضرة") || cleanAr.startsWith("السيد") || cleanAr.startsWith("السيدة") || cleanAr.startsWith("سعادة") || cleanAr.startsWith("معالي") || cleanAr === "المريض الكريم") {
      return cleanAr || "حضرة الفاضل المحترم / المريض الكريم";
    }
    return `حضرة الفاضل المحترم / ${cleanAr}`;
  }

  if (lang === "th") {
    const cleanTh = trimmed
      .replace(/^(mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?)\s+/i, "")
      .replace(/^(คุณ|ท่าน)\s*/, "")
      .trim();
    return `คุณ ${cleanTh || 'คนไข้'}`;
  }

  // English
  const cleanEn = trimmed.replace(/^(คุณ|ท่าน)\s*/, "").replace(/[\u0E00-\u0E7F]/g, "").trim();
  if (!cleanEn || cleanEn.toLowerCase().startsWith("esteemed") || cleanEn.toLowerCase() === "patient") {
    return cleanEn || "Esteemed Patient";
  }
  const hasHonorific = /^(mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|sheikh|sheikha|h\.e\.)\s+/i.test(cleanEn);
  if (hasHonorific) {
    return cleanEn;
  }
  return `Mr./Ms. ${cleanEn}`;
}

// Generate Vejthani Hospital Call Script
function generateVejthaniCallScript(data, lang, outcome, staffGender = "male", summaryLang = null) {
  const { patientName, staffName, topic, priorChannel, remainingIssue } = data;
  const isEn = (lang === "en");
  const isAr = (lang === "ar");

  // Localize values specifically for Teleprompter cards (matching lang)
  const scriptTopic = localizeField(topic, lang, "topic");
  const scriptRemainingIssue = localizeField(remainingIssue, lang, "remainingIssue");
  const scriptStaffName = localizeField(staffName, lang, "staffName");
  const scriptPatientName = localizeField(patientName, lang, "patientName");

  let p1, p2, p3, p4, closing, p6, summaryWA;

  // Channel localization
  let channelDisplay = priorChannel;
  if (lang === "th") {
    if (priorChannel.includes("&") || priorChannel === "WhatsApp & Email") {
      channelDisplay = "WhatsApp และ Email";
    }
  } else if (lang === "ar") {
    if (priorChannel.toLowerCase().includes("whatsapp") && priorChannel.toLowerCase().includes("email")) {
      channelDisplay = "واتساب والبريد الإلكتروني";
    } else if (priorChannel.toLowerCase().includes("whatsapp")) {
      channelDisplay = "الواتساب (WhatsApp)";
    } else if (priorChannel.toLowerCase().includes("email")) {
      channelDisplay = "البريد الإلكتروني (Email)";
    }
  } else {
    if (priorChannel.toLowerCase().includes("whatsapp") && priorChannel.toLowerCase().includes("email")) {
      channelDisplay = "WhatsApp & Email";
    } else if (priorChannel.toLowerCase().includes("whatsapp")) {
      channelDisplay = "WhatsApp";
    } else if (priorChannel.toLowerCase().includes("email")) {
      channelDisplay = "Email";
    }
  }

  if (lang === "ar") {
    // =========================================================================
    // Arabic (GCC Diplomatic Standard — Royal Protocol & Ministry of Health)
    // =========================================================================
    const arGreeting = "السلام عليكم ورحمة الله وبركاته،";
    const formalPatientName = formatPatientSalutation(scriptPatientName, "ar");

    // Card 1: الافتتاح والاستئذان الموقر (Opening & Permission)
    p1 = `“${arGreeting} ${formalPatientName}. معكم ${scriptStaffName} من مكتب التنسيق الطبي الدولي بمستشفى فيجثاني في بانكوك. نسأل الله أن تكونوا وعائلتكم الكريمة بأحسن حال. هل يتسع وقتكم الكريم لمحادثة قصيرة لمدة دقيقتين للاطمئنان والتأكد من إمكانية تقديم أي مساعدة لتيسير خطة قدومكم ومقابلة الطبيب الاستشاري؟”`;

    // Card 2: الإشارة الراقية إلى الاستفسار السابق (Referencing Prior Inquiry)
    p2 = `“في تواصلنا السابق، تفضلتم بالاستفسار عن ${scriptTopic}. وقد تشرفنا بتزويدكم بالخطة العلاجية والتقدير المالي عبر ${channelDisplay}. نود الاطمئنان، هل أتيحت لكم الفرصة الكريمة للاطلاع عليها؟ وهل هناك أية تفاصيل طبية أو لوجستية تودون منا توضيحها لسعادتكم؟”`;

    // Card 3: الاستماع بدقة لاهتمامات المريض (Active Listening to Concerns)
    p3 = `“ما هي أهم الأمور التي تشغل بالكم في الوقت الحالي، أو الترتيبات التي تودون التنسيق بشأنها قبل موعد السفر وتأكيد الرحلة العلاجية؟”
(إرشادات للمنسق الطبي: طرح سؤال واحد في كل مرة، إعطاء مهلة كافية للمريض للرد دون مقاطعة، ثم إعادة تأكيد الفهم بدقة واحترام.)`;

    // Card 4: مرافق مستشفى فيجثاني والجاهزية الثقافية (Hospital Facilities & Cultural Readiness)
    p4 = `<p>• <strong>التميز الطبي والاعتماد الدولي:</strong> كبار الاستشاريين الحاصلين على أعلى الزمالات الدولية واعتماد اللجنة المشتركة الدولية (JCI).</p>
          <p>• <strong>الرعاية الثقافية والخصوصية:</strong> وجبات طعام حلال 100% معتمدة، ومصلى مخصص مجهز بأماكن الوضوء، مع كادر نسائي متخصص لخصوصية المريضات.</p>
          <p>• <strong>مترجمون عرب معتمدون:</strong> مرافق شخصي يتحدث العربية بطلاقة يرافقكم في كافة المواعيد والاستشارات الطبية مجاناً.</p>
          <p>• <strong>الضيافة والخدمات اللوجستية:</strong> استقبال مجاني من مطار سوفارنابومي الدولي بسيارات ليموزين مجهزة، وأجنحة عائلية فاخرة (VIP Suites).</p>`;

    // Card 5: الاتفاق على الموعد والخطوة القادمة (Interactive Closing by Outcome)
    if (outcome === "ready") {
      closing = `“بناءً على حديثنا الموقر، سأتولى شخصياً متابعة ${scriptRemainingIssue}. بخصوص موعد مقابلة الطبيب، هل تفضلون أن نحجز لكم خلال هذا الشهر، أم هناك فترة أخرى تناسب جدول سفركم بشكل أفضل؟ سأقوم بالتنسيق مع جدول العمليات وتأكيد المترجم الخاص بكم. هل ستسافرون بمفردكم أم بصحبة مرافقين؟ وهل توجد أية ترتيبات إضافية تودون منا التحقق منها قبل مغادرتكم؟”`;
    } else if (outcome === "not_ready") {
      closing = `“بكل تأكيد وسرور. سأقوم بتجهيز وموافاتكم بكافة المعلومات التفصيلية حول ${scriptRemainingIssue} أولاً. ما هو اليوم والوقت المحلي الأنسب لسعادتكم حتى أقوم بإعادة الاتصال بكم؟ وإذا كنتم تفضلون التريث حالياً، فنرجو ألا تترددوا بإبلاغنا، ونحن في خدمتكم دائماً.”`;
    } else {
      closing = `“لا بأس على الإطلاق، ونشكركم جزيل الشكر على إفادتنا ووقتكم الثمين. إذا سمحتم لنا بسؤال سريع، هل هناك سبب رئيسي يمكننا الاستفادة منه لتطوير خدماتنا ومراعاته مستقبلاً؟ نود التأكيد على أن أبواب مستشفى فيجثاني مفتوحة لكم دائماً، ويسعدنا تقديم الرعاية لكم ولعائلتكم في أي وقت تشاؤون. دمتم بحفظ الله ورعايته.”`;
    }

    // Card 6: تلخيص ما تم الاتفاق عليه (Summarizing Agreed Actions)
    p6 = `“تلخيصاً لما تم الاتفاق عليه مع سعادتكم، سأقوم بالتأكد والمتابعة الدقيقة بشأن ${scriptRemainingIssue} وموافاتكم بالرد الرسمي عبر الواتساب في غضون 24 ساعة، كما سأرسل المستندات المطلوبة عبر ${channelDisplay}. وإذا طرأ أي استفسار آخر، فبإمكانكم مراسلتي في أي وقت. شاكرين لكم طيب حديثكم ووقتكم الكريم.”`;

  } else if (isEn) {
    // =========================================================================
    // English (Medical Diplomatic English — JCI International Standard)
    // =========================================================================
    const formalPatientName = formatPatientSalutation(scriptPatientName, 'en');

    p1 = `“Hello, ${formalPatientName}. This is ${scriptStaffName} from Vejthani Hospital. We spoke on ${channelDisplay} earlier. How are you? Would now be a good time to talk for 2–3 minutes? I’m calling to see if there is anything else we can help arrange before you plan your visit with the doctor.”`;

    p2 = `“Last time, you asked about ${scriptTopic}. We sent the information to you via ${channelDisplay}. Have you had a chance to look at it? Is there anything you would like us to explain in more detail?”`;

    p3 = `“Is there anything you are still concerned about or need to arrange before traveling for treatment?”
(Staff Guideline: Ask one question at a time, give the patient time to answer, and repeat key points to confirm understanding.)`;

    p4 = `<p>• <strong>Medical Excellence:</strong> Internationally trained subspecialists & JCI-accredited clinical safety</p>
          <p>• <strong>Cultural Care:</strong> 100% certified Halal dining & on-site prayer rooms (Musalla)</p>
          <p>• <strong>Language Support:</strong> Dedicated Arabic interpreters accompanying you throughout every step</p>
          <p>• <strong>Travel Logistics:</strong> Complimentary airport pickup & VIP Family Companion Suites</p>`;

    if (outcome === "ready") {
      closing = `“From what we have discussed, I will help coordinate ${scriptRemainingIssue}. For your appointment with the doctor, would you like me to check the available dates this month, or would another time be more convenient for you? I’ll check the schedule around your preferred dates and arrange an interpreter as requested. Will you be traveling alone, or will someone be accompanying you? Is there anything else you would like us to check before your trip?”`;
    } else if (outcome === "not_ready") {
      closing = `“Of course. I’ll help find more information about ${scriptRemainingIssue} first. Would it be convenient for me to call you back in a couple of days at your preferred local time? If you would prefer not to receive a follow-up call at the moment, please feel free to let me know.”`;
    } else {
      closing = `“No problem at all. Thank you for letting us know. If you don’t mind sharing, may I ask the main reason so we can improve our service? If you need any medical assistance in the future, you are always welcome to contact Vejthani Hospital. Thank you for your time.”`;
    }

    p6 = `“Just to summarize, ${formalPatientName}, I will check ${scriptRemainingIssue} and update you via WhatsApp by tomorrow. I will send the documents through ${channelDisplay}. If you have any other questions, please feel free to message me. Thank you for your time today.”`;

  } else {
    // =========================================================================
    // Thai (Vejthani Hospital SOP — Single Gender Register, Zero Slash Clutter)
    // =========================================================================
    const isMale = (staffGender === "male");
    const pronoun = isMale ? "ผม" : "ดิฉัน";
    const polite = isMale ? "ครับ" : "ค่ะ";
    const politeEnd = isMale ? "นะครับ" : "นะคะ";
    const politeQuestion = isMale ? "ไหมครับ" : "ไหมคะ";
    const formalPatientName = formatPatientSalutation(scriptPatientName, 'th');
    const displayPatientName = scriptPatientName.replace(/^(คุณ|ท่าน)\s*/, '');

    p1 = `“อัสสลามุอะลัยกุม ${formalPatientName} ${pronoun} ${scriptStaffName} จากโรงพยาบาลเวชธานี${polite} ที่เราเคยคุยกันทาง ${channelDisplay} ก่อนหน้านี้ คุณสบายดี${politeQuestion}? ตอนนี้สะดวกคุยสัก 2–3 นาที${politeQuestion}? ${pronoun}โทรมาเพื่อดูว่ามีอะไรที่เราช่วยเตรียมเพิ่มเติมให้คุณได้ ก่อนวางแผนมาพบแพทย์${polite}”`;

    p2 = `“ครั้งก่อนคุณ ${displayPatientName} แจ้งว่าอยากทราบเรื่อง ${scriptTopic} เราได้ส่งข้อมูลให้ทาง ${channelDisplay} แล้ว${polite} คุณได้ดูข้อมูลหรือยัง${politeQuestion}? มีส่วนไหนที่อยากให้เราอธิบายเพิ่มเติม${politeQuestion}?”`;

    p3 = `“ตอนนี้เรื่องไหนที่ยังทำให้คุณไม่สบายใจ หรือยังต้องจัดเตรียมก่อนเดินทางมารักษา${politeQuestion}?”
(คำแนะนำสำหรับเจ้าหน้าที่: ถามทีละคำถาม เว้นจังหวะให้ตอบ แล้วทวนความเข้าใจ)`;

    p4 = `<p>• <strong>ศูนย์ความเป็นเลิศทางการแพทย์:</strong> ทีมแพทย์เฉพาะทางระดับสากล และหัตถการมาตรฐาน JCI</p>
          <p>• <strong>ความพร้อมด้านวัฒนธรรม:</strong> อาหารฮาลาลที่ได้รับการรับรอง 100%, ห้องละหมาด (Musalla) พร้อมที่อาบน้ำละหมาด</p>
          <p>• <strong>บริการล่ามภาษาอาหรับ:</strong> ล่ามประจำตัวดูแลตลอดทุกขั้นตอนการรักษา</p>
          <p>• <strong>ความสะดวกสบาย:</strong> รถพยาบาล/ลีมูซีนรับ-ส่งสนามบินสุวรรณภูมิฟรี และห้องพักรับรองครอบครัว VIP Suite</p>`;

    if (outcome === "ready") {
      closing = `“จากที่คุยกัน ยังมีเรื่อง ${scriptRemainingIssue} ที่${pronoun}จะช่วยประสาน${polite} สำหรับการมาพบแพทย์ คุณอยากให้ช่วยตรวจสอบนัดในเดือนนี้ หรือมีช่วงอื่นที่สะดวกกว่า${politeQuestion}? ${pronoun}จะตรวจสอบตารางช่วงวันที่คุณสะดวก และประสานล่ามตามที่ต้องการ${polite} คุณวางแผนมาคนเดียวหรือมีผู้ติดตามด้วย${politeQuestion}? มีเรื่องใดอยากให้เราช่วยตรวจสอบก่อนเดินทางอีก${politeQuestion}?”`;
    } else if (outcome === "not_ready") {
      closing = `“ได้เลย${polite} ${pronoun}จะช่วยหาข้อมูลเรื่อง ${scriptRemainingIssue} ให้ก่อน คุณสะดวกให้โทรกลับวันที่เท่าไหร่ และเวลาท้องถิ่นใด${politeQuestion}? หากยังไม่ต้องการให้ติดตามช่วงนี้ สามารถแจ้งได้เลย${politeEnd}”`;
    } else { // decline
      closing = `“ไม่เป็นไร${polite} ขอบคุณที่แจ้งให้ทราบ${politeEnd} หากไม่สะดวก ขออนุญาตสอบถามเหตุผลหลักสั้นๆ เพื่อให้โรงพยาบาลนำไปปรับปรุงบริการได้${politeQuestion}? หากต้องการความช่วยเหลือหรือปรึกษาเรื่องสุขภาพในอนาคต ติดต่อเวชธานีได้เสมอเลย${politeEnd} ขอบคุณมาก${polite}”`;
    }

    p6 = `“ขอสรุป${politeEnd} คุณ ${displayPatientName} ${pronoun}จะตรวจสอบเรื่อง ${scriptRemainingIssue} และแจ้งกลับทาง WhatsApp ${polite} ส่วนเอกสารจะส่งทาง ${channelDisplay} หากมีคำถามเพิ่มเติม ฝากข้อความถึง${pronoun}ได้ตลอดเวลาเลย${politeEnd} ขอบคุณที่สละเวลาคุยกัน${politeEnd}”`;
  }

  // =========================================================================
  // Post-Call WhatsApp Summary Generator (Independent Language Decoupling)
  // =========================================================================
  const targetSummaryLang = summaryLang || (isAr ? "ar" : isEn ? "en" : "th");
  const waTopic = localizeField(topic, targetSummaryLang, "topic");
  const waRemainingIssue = localizeField(remainingIssue, targetSummaryLang, "remainingIssue");
  const waStaffName = localizeField(staffName, targetSummaryLang, "staffName");
  const waPatientName = localizeField(patientName, targetSummaryLang, "patientName");

  if (targetSummaryLang === "ar") {
    const formalArName = formatPatientSalutation(waPatientName, "ar");
    const arOutcomeText = (outcome === "ready")
      ? `• حالة الموعد: جاري مراجعة جدول العمليات وحجز المترجم العربي الخاص
• الترتيبات اللوجستية: تم وضع سيارة ليموزين المطار والجناح العائلي قيد الحجز المسبق`
      : (outcome === "not_ready")
      ? "• الحالة: سنقوم بتجهيز المعلومات التفصيلية المطلوبة وإعادة التواصل معكم في الوقت الأنسب لسعادتكم"
      : "• الحالة: تم حفظ وتحديث الملف. ويسعدنا دائماً خدمتكم ورعايتكم الطبية متى ما رغبتم في المستقبل.";

    summaryWA = `السلام عليكم ورحمة الله وبركاته،
${formalArName}،

نتقدم إليكم بجزيل الشكر والامتنان على طيب وقتكم ومحادثتكم الهاتفية الكريمة معنا اليوم نيابة عن مستشفى فيجثاني الدولي في بانكوك.

*ملخص ما تم مناقشته والخطوات التنفيذية التالية:*
• التخصص الطبي / الإجراء: ${waTopic}
• الإجراءات الجاري متابعتها وتنسيقها: ${waRemainingIssue}
${arOutcomeText}

إذا كان لديكم أو لدى عائلتكم الكريمة أي استفسار آخر، فنرجو التفضل بالرد المباشر على هذه الرسالة عبر الواتساب على مدار الساعة.

وتفضلوا بقبول فائق التقدير والاحترام،
${waStaffName}
مكتب التنسيق الطبي الدولي ورعاية المرضى العرب
مستشفى فيجثاني الدولي (Vejthani Hospital)، بانكوك، تايلاند
هاتف / واتساب: +66 2 734 0000`;

  } else if (targetSummaryLang === "en") {
    const formalPatientName = formatPatientSalutation(waPatientName, 'en');
    summaryWA = `Assalamu Alaikum wa Rahmatullahi wa Barakatuh
Dear ${formalPatientName},

Thank you very much for your time speaking with me on the phone today on behalf of Vejthani Hospital, Bangkok.

*Summary of our discussion & agreed next steps:*
• Medical Topic: ${waTopic}
• Action Item: We are currently following up on ${waRemainingIssue}
${outcome === "ready" ? `• Appointment Status: Checking doctor's surgical schedule & reserving your Arabic medical interpreter
• Travel Logistics: Airport limousine transfer & family accommodation on hold` : outcome === "not_ready" ? "• Status: We will gather the requested details and follow up at your convenient time" : "• Status: File noted. We remain at your full service whenever you need future care."}

Should you or your esteemed family have any questions, please feel free to reply directly to this WhatsApp chat.

Warmest regards,
${waStaffName}
International Patient Coordination Team
Vejthani Hospital, Bangkok, Thailand`;

  } else {
    // Thai summary
    const isMale = (staffGender === "male");
    const polite = isMale ? "ครับ" : "ค่ะ";
    const formalPatientName = formatPatientSalutation(waPatientName, 'th');

    summaryWA = `السلام عليكم ورحمة الله وبركاته
เรียน ${formalPatientName},

ขอขอบพระคุณที่สละเวลาพูดคุยสายกับทางโรงพยาบาลเวชธานีในวันนี้${polite}

*สรุปสิ่งที่พูดคุยและขั้นตอนถัดไป:*
• หัตถการที่ปรึกษา: ${waTopic}
• เรื่องที่ รพ. เวชธานี กำลังประสานงานให้: ${waRemainingIssue}
${outcome === "ready" ? `• สถานะการนัดหมาย: อยู่ระหว่างตรวจสอบตารางแพทย์และจัดเตรียมล่ามประจำตัว
• การเดินทาง: ประสานงานรถรับส่งสนามบินและห้องพักครอบครัว` : outcome === "not_ready" ? "• สถานะ: เจ้าหน้าที่จะค้นหาข้อมูลเพิ่มเติมและติดต่อกลับตามเวลาที่นัดหมาย" : "• สถานะ: บันทึกข้อมูลเรียบร้อย หากต้องการความช่วยเหลือในอนาคตติดต่อเราได้ตลอดเวลา"}

หากคุณ ${waPatientName.replace(/^(คุณ|ท่าน)\s*/, '')} หรือครอบครัวมีข้อสงสัยเพิ่มเติม สามารถตอบกลับทางข้อความ WhatsApp นี้ได้ตลอด 24 ชั่วโมง${polite}

ด้วยความเคารพอย่างสูง,
${waStaffName}
International Patient Liaison
โรงพยาบาลเวชธานี (Vejthani Hospital), กรุงเทพฯ
Tel / WhatsApp: +66 2 734 0000`;
  }

  // CRM Log Snippet
  const crmSnippet = `[CALL LOG: ${new Date().toLocaleDateString('th-TH')}]
• คนไข้ / Patient: ${patientName}
• หัตถการ / Procedure: ${topic}
• เจ้าหน้าที่ / Staff: ${staffName}
• สถานะผลลัพธ์: ${outcome === 'ready' ? 'พร้อมนัดหมาย (Ready to Book)' : outcome === 'not_ready' ? 'อยู่ระหว่างพิจารณา (Considering / Follow-up)' : 'ปฏิเสธการรักษา (Declined)'}
• ประเด็นที่ประสานต่อ: ${remainingIssue}
• การดำเนินการ: ส่งข้อความสรุปทาง WhatsApp (${targetSummaryLang.toUpperCase()}) เรียบร้อย`;

  return {
    p1, p2, p3, p4, closing, p6, summaryWA, crmSnippet
  };
}

// =========================================================================
// 3. 5 INQUIRY SPECIALTIES DATA (View 2)
// =========================================================================
const INQUIRY_SPECIALTIES = {
  king_of_bone: {
    name: "KING OF BONE Surgery (ศูนย์กระดูกและข้อ)",
    procedure: "Robotic Total Knee Replacement (ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ Vejthani King of Bones)",
    docs: [
      "ฟิล์ม X-ray ข้อเข่า/ข้อสะโพก/กระดูกสันหลัง (Weight-bearing)",
      "ผลสแกน MRI / CT Scan แผ่นและรายงานผล",
      "ประวัติการผ่าตัดเดิม และระดับการเดิน (ใช้วอล์กเกอร์/วีลแชร์)"
    ],
    waEn: `*السلام عليكم ورحمة الله وبركاته*
*Assalamu Alaikum wa Rahmatullahi wa Barakatuh*

Respected Mr. Mohammed Al-Balushi,

We pray you and your esteemed family are in radiant health and peace.

I am following up from *Vejthani Hospital (King of Bones)* regarding the robotic knee replacement treatment plan sent 48 hours ago.

Our Chief Orthopedic Surgeon is ready to review your case. We provide:
• Advanced Robotic-Assisted Surgery with rapid recovery (walking within 24–48 hours)
• Dedicated Arabic interpreters, 100% Halal certified food & private prayer rooms
• Embassy guarantee letters & complimentary airport transfer

Would you be open to a complimentary 10-minute video consultation with the surgeon?

Warmest regards,
Vejthani Hospital, Bangkok`,
    waAr: `السلام عليكم ورحمة الله وبركاته،
حضرة الفاضل المحترم / محمد البلوشي،

نسأل الله لكم ولعائلتكم الكريمة موفور الصحة والعافية والبركة.

نتابع تواصلنا معكم من مستشفى فيجثاني في بانكوك - مركز كينغ أوف بونز لجراحة العظام المتطورة (King of Bones) بخصوص الخطة العلاجية والتقدير المالي لجراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (Robotic Total Knee Replacement).

يسرنا إحاطتكم بتوفير مرافق متكاملة تشمل مترجماً عربياً مخصصاً يرافقكم مجاناً، ووجبات طعام حلال 100% معتمدة، وأجنحة عائلية فاخرة (VIP Suites)، مع تيسير إجراءات خطاب الضمان المالي وتأشيرة العلاج الرسمية.

يسعدنا ترتيب استشارة طبية مرئية عبر الفيديو (Video Consultation) مع كبير جراحي العظام للإجابة عن كافة استفساراتكم الطبية.

وتفضلوا بقبول فائق الاحترام والتقدير،
مكتب التنسيق الطبي الدولي - مركز كينغ أوف بونز
مستشفى فيجثاني الدولي، بانكوك`,
    emailSub: "Medical Treatment Plan & Robotic Orthopedics Evaluation - Vejthani Hospital",
    emailBody: `Dear Respected Patient,

Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

Thank you for your trust in Vejthani Hospital's King of Bones Center. Following your inquiry regarding Robotic Knee Replacement, our Senior Orthopedic Board has evaluated your case.

We offer:
1. JCI-Accredited surgical precision with FDA-certified implants.
2. Complete cultural concierge: Native Arabic interpreters, Halal dining, and prayer rooms.
3. Official Embassy Guarantee Letter coordination and VIP airport transport.

Please feel free to connect via WhatsApp or reply to this email to book your doctor consultation.

Respectfully yours,
Vejthani Hospital International Medical Center`,
    emailSubAr: "الخطة العلاجية والتقييم الجراحي لجراحة العظام بالروبوت - مستشفى فيجثاني الدولي",
    emailBodyAr: `حضرة الفاضل المحترم / المريض الكريم وعائلته الموقرة،

السلام عليكم ورحمة الله وبركاته،

تحية طيبة مباركة من مكتب التنسيق الطبي الدولي بمستشفى فيجثاني في بانكوك.

نود إفادتكم بأن اللجنة الطبية الاستشارية بمركز كينغ أوف بونز (King of Bones) لجراحة العظام قد اطلعت على تقاريركم الطبية المتعلقة بجراحة استبدال مفصل الركبة بمساعدة الروبوت المتطور.

ويسرنا تقديم التسهيلات والخدمات المعتمدة التالية:
١. دقة جراحية فائقة معتمدة من اللجنة المشتركة الدولية (JCI) ومفاصل معتمدة من هيئة الغذاء والدواء الأمريكية (US-FDA).
٢. رعاية ثقافية متكاملة: مترجمون عرب متخصصون يرافقونكم في كافة المراحل مجاناً، ووجبات طعام حلال 100%، ومصلى مخصص للرجال والنساء.
٣. تنسيق كامل مع الملحقية الصحية والسفارة لإصدار خطابات الضمان المالي وتأشيرات العلاج والاستقبال بسيارات ليموزين من مطار سوفارنابومي الدولي.

نرجو التفضل بالرد على هذا البريد الإلكتروني أو التواصل المباشر عبر الواتساب لتأكيد موعد الاستشارة الطبية وتنسيق قدومكم.

وتفضلوا بقبول خالص التقدير والاحترام،
مكتب رعاية المرضى الدوليين
مستشفى فيجثاني الدولي، بانكوك، تايلاند`
  },
  cancer: {
    name: "Cancer Center (ศูนย์มะเร็งวิทยา)",
    procedure: "Comprehensive Oncology Second Opinion & MDT Tumor Board Review",
    docs: [
      "ผลตรวจชิ้นเนื้อทางพยาธิวิทยา (Biopsy / Pathology Report)",
      "ผลสแกน PET-CT หรือ CT Scan ล่าสุด (ไม่เกิน 1-2 เดือน)",
      "ประวัติการให้ยาเคมีบำบัด / ยามุ่งเป้า / ฉายแสงเดิม"
    ],
    waEn: `*السلام عليكم ورحمة الله وبركاته*

Respected Mrs. Aisha,

We pray for your swift healing, comfort, and peace.

From the Oncology Coordination Office at *Vejthani Hospital*, we have received your request for an oncology second opinion.

Our Multi-Disciplinary Tumor Board (MDT) is prepared to review your pathology and PET-CT scans to determine the most effective personalized protocol. We also provide dedicated female specialists and all-female nursing staff for complete privacy.

Please feel free to send your latest medical reports in this chat.

Warmest regards,
Vejthani Oncology Center`,
    waAr: `السلام عليكم ورحمة الله وبركاته،
الأخت الكريمة وعائلتها الموقرة،

ندعو الله العلي القدير أن يمنّ عليكم بالشفاء العاجل وتمام العافية والسكينة.

نؤكد لكم في مستشفى فيجثاني أن حالتكم تحظى بأعلى درجات الاهتمام من قِبل اللجنة الطبية متعددة التخصصات (MDT Tumor Board). نرجو تزويدنا بتقرير فحص العينة النسيجية (Biopsy / Pathology Report) ونتائج الفحص الإشعاعي (PET-CT) لوضع البروتوكول العلاجي الدقيق.

يتوفر لدينا كادر طبي وتمريضي نسائي متخصص لضمان أعلى مستويات الراحة والخصوصية التامة للمريضات، بالإضافة إلى مترجمات عربيات متخصصات.

دمتم في حفظ الله ورعايته،
مركز علاج الأورام الدولي - مستشفى فيجثاني بانكوك`,
    emailSub: "Oncology Second Opinion & Multi-Disciplinary Board Review - Vejthani Hospital",
    emailBody: `Dear Respected Patient,

Assalamu Alaikum wa Rahmatullahi wa Barakatuh,

Our specialized Oncology Board at Vejthani Hospital is ready to evaluate your case through our Multi-Disciplinary Tumor Board (MDT).

To provide you with a comprehensive treatment protocol:
1. Please share your pathology/biopsy reports and recent PET-CT scans.
2. Female specialists and interpreters are prepared for your arrival.

Sincerely,
Vejthani Hospital International Center`,
    emailSubAr: "الرأي الطبي الثاني ومراجعة لجنة الأورام المشتركة (Tumor Board) - مستشفى فيجثاني",
    emailBodyAr: `حضرة المريض الكريم وعائلته الموقرة،

السلام عليكم ورحمة الله وبركاته،

نهديكم أطيب التحيات من مركز الأورام الدولي بمستشفى فيجثاني في بانكوك، متمنين لكم دوام الصحة والعافية والشفاء التام.

نود إعلامكم بأن فريقنا الطبي الاستشاري متعدد التخصصات (Multi-Disciplinary Tumor Board) مستعد لمراجعة نتائج الفحوصات والتقارير الطبية الخاصة بكم لتقديم خطة علاجية مخصصة ومبنية على أحدث البروتوكولات العالمية المعتمدة.

للبدء في دراسة الحالة:
١. نرجو إرسال التقرير النسيجي للورم (Biopsy / Pathology Report) وصور الفحوصات الإشعاعية الحديثة (PET-CT / MRI).
٢. نوفر كادراً طبياً وتمريضياً نسائياً متكاملاً لضمان الخصوصية التامة، مع مرافقة مترجمة عربية متخصصة مجاناً.

يسعدنا استقبال استفساراتكم عبر البريد الإلكتروني أو الواتساب على مدار الساعة.

وتفضلوا بقبول فائق الاحترام والتقدير،
مركز الأورام الدولي ورعاية المرضى العرب
مستشفى فيجثاني الدولي، بانكوك`
  },
  pediatric: {
    name: "Pediatric Center (กุมารเวชศาสตร์)",
    procedure: "Pediatric Orthopedic Correction & Gait Rehabilitation",
    docs: [
      "ประวัติน้ำหนัก ส่วนสูง และพัฒนาการของเด็ก",
      "ใบสรุปการรักษาจากกุมารแพทย์เดิม",
      "สมุดบันทึกประวัติการรับวัคซีน"
    ],
    waEn: `*السلام عليكم ورحمة الله وبركاته*

Respected Parents of Master Rashid,

May God protect your children and bless them with continuous health.

From the Pediatric Specialty Center at *Vejthani Hospital*, we are following up regarding your inquiry for pediatric limb correction.

We understand parental concerns deeply and prioritize gentle, child-friendly care. We would be pleased to schedule a video call with our pediatric surgeon so you can discuss the procedure and recovery timeline directly.

Warm regards,
Vejthani Pediatric Services`,
    waAr: `السلام عليكم ورحمة الله وبركاته،
أولياء أمور الطفل الأعزاء وعائلتكم الكريمة،

حفظ الله لكم أطفالكم ومتعهم بالصحة والسلامة دائماً.

نتابع معكم من مركز طب وجراحة الأطفال بمستشفى فيجثاني بخصوص الخطة العلاجية للطفل. نتفهم تماماً حرصكم ويسرنا ترتيب استشارة فيديو مباشرة مع استشاري جراحة عظام الأطفال لشرح خطة العلاج ومراحل التعافي بكل طمأنينة.

مرافقنا مجهزة بأجنحة عائلية مريحة صديقة للأطفال، مع توفير كافة سبل الراحة والرعاية الثقافية والوجبات الحلال المعتمدة.

وتفضلوا بقبول فائق الاحترام والتقدير،
فريق رعاية الأطفال الدولي - مستشفى فيجثاني`,
    emailSub: "Pediatric Consultation & Treatment Plan - Vejthani Hospital",
    emailBody: `Dear Respected Parents,

Vejthani Hospital's Pediatric Specialty Center is dedicated to providing gentle, world-class surgical care for your child.

Our child-friendly hospital suites and Arabic-speaking liaisons ensure your family's comfort throughout the medical journey.

Sincerely,
Pediatric Care Team, Vejthani Hospital`,
    emailSubAr: "الاستشارة الطبية والخطة العلاجية لطب وجراحة الأطفال - مستشفى فيجثاني",
    emailBodyAr: `حضرة أولياء أمور الطفل الأعزاء والمحترمين،

السلام عليكم ورحمة الله وبركاته،

نسأل الله تعالى أن يحفظ طفلكم ويباركใน صحته وسلامته.

يسر مركز طب وجراحة الأطفال بمستشفى فيجثاني الدولي أن يقدم لكم أعلى مستويات الرعاية الطبية الجراحية المتخصصة في علاج وتصحيح عظام الأطفال وإعادة التأهيل الحركي.

نقدم لكم:
١. أجنحة إقامة عائلية فاخرة ومصممة لتكون صديقة للأطفال لتوفير بيئة مطمئنة ومريحة.
٢. مرافقون ومترجمون عرب معتمدون على مدار الساعة لتسهيل تواصلكم مع الاستشاريين.
٣. إمكانية إجراء استشارة مرئية مباشرة عبر الفيديو قبل السفر لمناقشة كافة التفاصيل مع الجراح.

نحن في خدمتكم دائماً للإجابة على أي تساؤل.

وتفضلوا بقبول فائق التقدير والاحترام،
فريق رعاية الأطفال الدولي - مستشفى فيجثاني الدولي، بانكوك`
  },
  general_surgery: {
    name: "General Surgery (ศัลยกรรมทั่วไป & ส่องกล้อง)",
    procedure: "Laparoscopic Cholecystectomy (ผ่าตัดส่องกล้องถุงน้ำดี แผลเล็ก ฟื้นตัวเร็ว)",
    docs: [
      "ผลตรวจอัลตราซาวด์ช่องท้อง / CT Scan",
      "รายการยาประจำตัว (ยาละลายลิ่มเลือด)",
      "ผลตรวจการทำงานของตับและเลือด"
    ],
    waEn: `Dear Mr. Johnathan Brooks,

Greetings from the International Medical Coordination Center at *Vejthani Hospital*, Bangkok. We hope this message finds you in excellent health.

Following up on your inquiry for Laparoscopic Cholecystectomy (gallbladder removal) at Vejthani Hospital.

Our minimally invasive technique ensures minimal discomfort, tiny incisions, and rapid recovery — allowing you to receive official Fit-to-Fly medical certificate clearance to return home safely within 5 days.

Our surgical package is fully transparent with zero hidden costs. Please let us know your preferred dates so we may hold surgeon availability for your procedure.

Warmest regards,
International Surgical Concierge
Vejthani Hospital, Bangkok`,
    waAr: `السلام عليكم ورحمة الله وبركاته،
حضرة الفاضل المحترم،

تحية طيبة مباركة وأمنياتنا الصادقة لكم بموفور الصحة والعافية.

نتابع معكم استفساركم الكريم بخصوص جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy) بمستشفى فيجثاني في بانكوك.

نضمن لسعادتكم تقنيات جراحية دقيقة وشقوقاً بالغة الصغر مع سرعة فائقة في التعافي تتيح لكم الحصول على شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly) في غضون 5 أيام بأمان واطمئنان تام، مع باقة علاجية شفافة دون أي تكاليف خفية.

في خدمتكم دائماً،
مكتب التنسيق الجراحي الدولي
مستشفى فيجثاني الدولي، بانكوك`,
    emailSub: "Minimally Invasive Surgery Proposal & Fit-to-Fly Timeline - Vejthani Hospital",
    emailBody: `Dear Respected Patient,

Greetings from Vejthani Hospital, Bangkok.

Our surgical center at Vejthani Hospital specializes in advanced laparoscopic procedures designed for international travelers requiring swift recovery and safe flight clearance.

Our Laparoscopic Cholecystectomy protocol provides:
1. Minimally invasive surgery with sub-centimeter incisions and reduced post-operative discomfort.
2. Official Fit-to-Fly medical certificate issued within 5 days of surgery.
3. Transparent, all-inclusive international package pricing with direct insurance coordination.

Please let us know your preferred dates for admission and consultation.

Warmest regards,
International Surgical Concierge, Vejthani Hospital`,
    emailSubAr: "عرض جراحة المنظار المتقدمة وجدول اللياقة للطيران (Fit-to-Fly) - مستشفى فيجثاني",
    emailBodyAr: `حضرة الفاضل المحترم / المريض الكريم،

السلام عليكم ورحمة الله وبركاته،

تحية طيبة من مركز الجراحة العامة والمنظار بمستشفى فيجثاني الدولي في بانكوك.

يسعدنا موافاتكم بتفاصيل جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)، والتي يشرف عليها نخبة من كبار الجراحين الاستشاريين المعتمدين دولياً.

أهم مزايا البرنامج العلاجي:
١. شقوق جراحية مجهرية بالغة الصغر تضمن سرعة الالتئام ومغادرة المستشفى في غضون 24-48 ساعة.
٢. إصدار شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly Certificate) بأمان تام خلال 5 أيام من العملية.
٣. أسعار باقات جراحية شفافة وشاملة، مع تنسيق مباشر للتأمين الصحي الدولي.

نرجو التكرم بإفادتنا بمواعيد السفر المناسبة لسعادتكم لنقوم بحجز المواعيد اللازمة.

وتفضلوا بقبول وافر الاحترام والتقدير،
مكتب التنسيق الجراحي الدولي
مستشفى فيجثاني الدولي، بانكوك`
  },
  investigate: {
    name: "Investigate Lead (คัดกรอง 4 มิติ)",
    procedure: "Pre-screening & Comprehensive Medical Travel Assessment",
    docs: [
      "ใบสรุปประวัติการรักษาเบื้องต้น (Primary Medical Summary)",
      "สำเนาพาสปอร์ตคนไข้และผู้ติดตาม",
      "หนังสือรับรองค่ารักษาจากสถานทูต / ประกันอินเตอร์"
    ],
    waEn: `*السلام عليكم ورحمة الله وبركاته*

Respected Patient & Family,

We have initiated your comprehensive medical travel assessment at *Vejthani Hospital*.

To issue official hospital documentation for your Embassy Medical Guarantee Letter or international health insurance pre-authorization:
1. Please share your passport copies and latest clinical summaries.
2. Our international liaison will coordinate the official medical quotation and surgeon invitation within 24 hours.

At your honored service,
Vejthani International Office`,
    waAr: `السلام عليكم ورحمة الله وبركاته،
الأخ الكريم وعائلتكم الموقرة،

يسعدنا إفادتكم بأن فريق التنسيق الطبي الدولي بمستشفى فيجثاني جاهز لإصدار التقارير الطبية الرسمية وخطابات الضمان المطلوبة لتقديمها إلى الملحقية الصحية لبلدكم الكريم.

نرجو تزويدنا بصورة التقارير والجوازات للبدء الفوري في استخراج خطاب الدعوة الطبية الرسمية وتسهيل إجراءات السفر.

في خدمتكم بكل ترحيب واعتزاز،
مكتب التنسيق الطبي الدولي ورعاية المرضى العرب
مستشفى فيجثاني الدولي، بانكوك`,
    emailSub: "Medical Pre-Screening & Embassy Guarantee Documentation - Vejthani Hospital",
    emailBody: `Dear Respected Coordinator,

Vejthani Hospital's International Coordination Team is ready to facilitate official Medical Invitation and Guarantee letters for your medical travel visa and Embassy sponsorship.

Please reply with the required patient identification and records.

Sincerely,
Vejthani Hospital Liaison Office`,
    emailSubAr: "التقييم الطبي المبدئي ووثائق الضمان المالي للسفارة - مستشفى فيجثاني",
    emailBodyAr: `حضرة المنسق الطبي الموقر / عائلة المريض الكريمة،

السلام عليكم ورحمة الله وبركاته،

يَسُر فريق التنسيق الطبي الدولي بمستشفى فيجثاني في بانكوك إحاطتكم بجاهزيتنا الكاملة لإصدار التقارير الطبية المعتمدة وخطابات الدعوة الرسمية لتسهيل إجراءات الحصول على تأشيرة العلاج وتغطية الملحقية الصحية والسفارة.

المستندات المطلوبة للبدء الفوري:
١. صور جوازات السفر للمريض والمرافقين.
٢. التقارير الطبية الحديثة والفحوصات المخبرية والإشعاعية المتوفرة.

سنوافيكم بالتقدير المالي الرسمي والخطة المقترحة خلال 24 ساعة من استلام المستندات.

وتفضلوا بقبول فائق التقدير والامتنان،
مكتب التنسيق الطبي الدولي
مستشفى فيجثاني الدولي، بانكوك`
  }
};

// =========================================================================
// 4. EVENT LISTENERS & DOM MANIPULATION
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // State Management
  let currentCallLang = "th"; // "th" | "en" | "ar"
  let currentSummaryLang = "th"; // "ar" | "en" | "th"
  let currentStaffGender = "male"; // "male" | "female"
  let currentCallOutcome = "ready"; // "ready" | "not_ready" | "decline"
  let activeInqCat = "king_of_bone";
  let currentLoadedPresetKey = "oman_knee";

  // --- View Mode Switching (Call Journey vs Inquiry) ---
  const navModeCall = document.getElementById("navModeCall");
  const navModeInquiry = document.getElementById("navModeInquiry");
  const viewCallJourney = document.getElementById("viewCallJourney");
  const viewInquiryConsole = document.getElementById("viewInquiryConsole");

  if (navModeCall && navModeInquiry && viewCallJourney && viewInquiryConsole) {
    navModeCall.addEventListener("click", () => {
      if (typeof window.activateView === "function") {
        window.activateView("viewCallJourney");
      } else {
        navModeCall.classList.add("bg-blue-600", "text-white");
        navModeCall.classList.remove("text-slate-600");
        navModeInquiry.classList.remove("bg-blue-600", "text-white");
        navModeInquiry.classList.add("text-slate-600");

        viewCallJourney.classList.remove("hidden");
        viewInquiryConsole.classList.add("hidden");
      }
    });

    navModeInquiry.addEventListener("click", () => {
      if (typeof window.activateView === "function") {
        window.activateView("viewInquiryConsole");
      } else {
        navModeInquiry.classList.add("bg-blue-600", "text-white");
        navModeInquiry.classList.remove("text-slate-600");
        navModeCall.classList.remove("bg-blue-600", "text-white");
        navModeCall.classList.add("text-slate-600");

        viewInquiryConsole.classList.remove("hidden");
        viewCallJourney.classList.add("hidden");
      }
    });
  }

  // --- Step 1: Time Zone Updates & Quick Country Selectors ---
  const callPatientCountry = document.getElementById("callPatientCountry");
  const quickCountrySelect1 = document.getElementById("quickCountrySelect1");
  const quickCountrySelect2 = document.getElementById("quickCountrySelect2");
  const patientCountryTime = document.getElementById("patientCountryTime");
  const patientCountryLabel = document.getElementById("patientCountryLabel");
  const patientPrayerNotice = document.getElementById("patientPrayerNotice");
  const callTimeSuitabilityBadge = document.getElementById("callTimeSuitabilityBadge");
  const countryLocalClock = document.getElementById("countryLocalClock");
  const countryTimeZoneBadge = document.getElementById("countryTimeZoneBadge");

  function updateCountryClock() {
    if (!callPatientCountry) return;
    const countryKey = callPatientCountry.value;
    const calc = calculateCountryTime(countryKey);
    if (patientCountryTime) patientCountryTime.textContent = calc.timeStr;
    if (countryLocalClock) countryLocalClock.textContent = calc.timeStr;
    if (patientCountryLabel) patientCountryLabel.textContent = calc.countryLabel;
    if (countryTimeZoneBadge) countryTimeZoneBadge.textContent = calc.tzBadge;
    if (patientPrayerNotice) patientPrayerNotice.textContent = calc.suitability.desc;
    if (callTimeSuitabilityBadge) {
      callTimeSuitabilityBadge.textContent = calc.suitability.badge;
      callTimeSuitabilityBadge.className = `text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${calc.suitability.badgeClass}`;
    }

    // Dual-clock header widgets
    const bkkHeaderClock = document.getElementById("bkkHeaderClock");
    if (bkkHeaderClock) {
      const now = new Date();
      const bkkHours = now.getHours();
      const bkkMins = now.getMinutes();
      const bkkSecs = now.getSeconds();
      const bkkAmpm = bkkHours >= 12 ? 'PM' : 'AM';
      const bkkDispH = bkkHours % 12 || 12;
      const bkkDispM = bkkMins < 10 ? '0' + bkkMins : bkkMins;
      const bkkDispS = bkkSecs < 10 ? '0' + bkkSecs : bkkSecs;
      bkkHeaderClock.textContent = `${bkkDispH}:${bkkDispM}:${bkkDispS} ${bkkAmpm}`;
    }

    const patientCountryHeaderLabel = document.getElementById("patientCountryHeaderLabel");
    if (patientCountryHeaderLabel) {
      const cityPart = calc.config.capital ? calc.config.capital.split(' ')[0] : '';
      patientCountryHeaderLabel.textContent = `${calc.config.thName || calc.countryLabel} (${cityPart})`;
    }

    const patientCountryHeaderClock = document.getElementById("patientCountryHeaderClock");
    if (patientCountryHeaderClock) {
      patientCountryHeaderClock.textContent = calc.timeStr;
    }

    const headerTimeDiffBadge = document.getElementById("headerTimeDiffBadge");
    if (headerTimeDiffBadge) {
      const diff = calc.config.diffFromTh;
      if (diff === 0) headerTimeDiffBadge.textContent = "เวลาเดียวกับไทย";
      else if (diff < 0) headerTimeDiffBadge.textContent = `ช้ากว่าไทย ${Math.abs(diff)} ชม.`;
      else headerTimeDiffBadge.textContent = `เร็วกว่าไทย ${diff} ชม.`;
    }

    const headerSuitabilityBadge = document.getElementById("headerSuitabilityBadge");
    if (headerSuitabilityBadge) {
      const shortBadge = calc.suitability.badge.split('(')[0].trim();
      headerSuitabilityBadge.textContent = shortBadge;
      headerSuitabilityBadge.className = `text-[10px] font-bold px-2 py-0.5 rounded-full border ${calc.suitability.badgeClass}`;
    }
  }

  function syncCountrySelection(countryKey) {
    if (!countryKey) return;
    if (callPatientCountry && callPatientCountry.value !== countryKey) {
      callPatientCountry.value = countryKey;
    }
    if (quickCountrySelect1 && quickCountrySelect1.value !== countryKey) {
      quickCountrySelect1.value = countryKey;
    }
    if (quickCountrySelect2 && quickCountrySelect2.value !== countryKey) {
      quickCountrySelect2.value = countryKey;
    }
    const countryData = COUNTRY_TIMEZONES[countryKey];
    if (countryData && callPatientPhone) {
      const currentVal = callPatientPhone.value.trim();
      callPatientPhone.placeholder = `${countryData.dialCode}...`;
      // If phone is empty or has a standard GCC template or previous prefix, adjust dial code
      if (!currentVal || /^\+\d{1,4}\s*$/.test(currentVal)) {
        callPatientPhone.value = `${countryData.dialCode} `;
      }
    }
    updateCountryClock();
    refreshCallScript();
  }

  [quickCountrySelect1, quickCountrySelect2].forEach(sel => {
    if (sel) {
      sel.addEventListener("change", (e) => {
        syncCountrySelection(e.target.value);
      });
    }
  });

  const btnRefreshClock = document.getElementById("btnRefreshClock");
  if (btnRefreshClock) {
    btnRefreshClock.addEventListener("click", () => {
      updateCountryClock();
      updateGccRadar();
      btnRefreshClock.classList.add("rotate-180");
      setTimeout(() => btnRefreshClock.classList.remove("rotate-180"), 400);
    });
  }

  // =========================================================================
  // GLOBAL 42-COUNTRY LIVE RADAR ENGINE (View 3: Arabic & International Center)
  // =========================================================================
  // Backward-compatibility GCC core reference
  const GCC_RADAR_COUNTRIES = [
    { key: "saudi", code: "SA", name: "ซาอุดีอาระเบีย (Saudi Arabia)", city: "Riyadh (GMT+3)", offset: 3, diff: "4 ชม.", prayer: "ดุฮริ (11:58)", status: "เวลาทำการราชการ" },
    { key: "uae", code: "AE", name: "สหรัฐอาหรับเอมิเรตส์ (UAE)", city: "Dubai / Abu Dhabi (GMT+4)", offset: 4, diff: "3 ชม.", prayer: "ดุฮริ (12:20)", status: "เวลาทำการราชการ" },
    { key: "oman", code: "OM", name: "สุลต่านโอมาน (Oman)", city: "Muscat (GMT+4)", offset: 4, diff: "3 ชม.", prayer: "ดุฮริ (12:15)", status: "เวลาทำการราชการ" },
    { key: "qatar", code: "QA", name: "กาตาร์ (Qatar)", city: "Doha (GMT+3)", offset: 3, diff: "4 ชม.", prayer: "ดุฮริ (11:50)", status: "เวลาทำการราชการ" },
    { key: "kuwait", code: "KW", name: "คูเวต (Kuwait)", city: "Kuwait City (GMT+3)", offset: 3, diff: "4 ชม.", prayer: "ดุฮริ (11:45)", status: "เวลาทำการราชการ" },
    { key: "bahrain", code: "BH", name: "บาห์เรน (Bahrain)", city: "Manama (GMT+3)", offset: 3, diff: "4 ชม.", prayer: "ดุฮริ (11:52)", status: "เวลาทำการราชการ" }
  ];

  let activeRadarFilter = "all";
  let radarSearchQuery = "";

  // One-click country selector that immediately opens SOP Call Journey
  window.selectCountryAndOpenSOP = function(countryKey) {
    if (!countryKey) return;
    syncCountrySelection(countryKey);
    if (typeof window.activateView === "function") {
      window.activateView("viewCallJourney");
    }
    const view = document.getElementById("viewCallJourney");
    if (view) {
      view.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Wire up category filter buttons
  const radarFilterButtonGroup = document.getElementById("radarFilterButtonGroup");
  if (radarFilterButtonGroup) {
    const filterBtns = radarFilterButtonGroup.querySelectorAll(".radar-filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter") || "all";
        activeRadarFilter = filter;
        filterBtns.forEach(b => {
          if (b === btn) {
            b.className = "radar-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs bg-[#1B365D] text-white";
          } else {
            b.className = "radar-filter-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#1B365D] border border-slate-200";
          }
        });
        updateGccRadar();
      });
    });
  }

  // Wire up radar search input
  const radarSearchInput = document.getElementById("radarSearchInput");
  if (radarSearchInput) {
    radarSearchInput.addEventListener("input", (e) => {
      radarSearchQuery = e.target.value.trim().toLowerCase();
      updateGccRadar();
    });
  }

  function renderRadarCard(c, key, now, utc) {
    const d = new Date(utc + (3600000 * c.offset));
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const dispH = hours % 12 || 12;
    const dispM = minutes < 10 ? '0' + minutes : minutes;
    const dispS = seconds < 10 ? '0' + seconds : seconds;
    const timeStr = `${dispH}:${dispM}:${dispS} ${ampm}`;

    // Time difference relative to Thailand (ICT / GMT+7)
    let diffText = "";
    if (c.diffFromTh === 0) {
      diffText = "เวลาเดียวกับไทย (ICT)";
    } else if (c.diffFromTh < 0) {
      diffText = `ช้ากว่าไทย ${Math.abs(c.diffFromTh)} ชม.`;
    } else {
      diffText = `เร็วกว่าไทย ${c.diffFromTh} ชม.`;
    }

    // Call suitability status & prayer/business schedule
    let suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>เวลาทำการ (Business Hours)';
    let badgeCls = "bg-emerald-50 text-emerald-700 border-emerald-200";

    const isFriday = d.getDay() === 5;
    const totalMins = hours * 60 + minutes;

    let nextScheduleLabel = "เวลาทำการ:";
    let nextScheduleValue = "09:00 - 17:00 (เวลาท้องถิ่น)";

    if (c.prayers && c.prayers.length > 0) {
      const prayerNames = ["ฟัจญร์ (Fajr)", "ดุฮริ (Dhuhr)", "อัศริ (Asr)", "มัฆริบ (Maghrib)", "อิชาอ์ (Isha)"];
      let nextPName = prayerNames[0];
      let nextPTime = c.prayers[0];
      for (let i = 0; i < c.prayers.length; i++) {
        const parts = c.prayers[i].split(":");
        const pMins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        if (pMins > totalMins) {
          nextPName = prayerNames[i];
          nextPTime = c.prayers[i];
          break;
        }
      }
      nextScheduleLabel = "เวลาละหมาดถัดไป:";
      nextScheduleValue = `${nextPName} (${nextPTime})`;

      if (isFriday && totalMins >= (11 * 60 + 30) && totalMins <= (13 * 60 + 30)) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-purple-500 mr-1.5"></span>ละหมาดวันศุกร์ (Jummah)';
        badgeCls = "bg-purple-50 text-purple-700 border-purple-200";
      } else if (hours >= 21 || hours < 5) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-rose-500 mr-1.5"></span>พักผ่อน (Resting)';
        badgeCls = "bg-rose-50 text-rose-700 border-rose-200";
      } else if (hours < 9) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>เช้าตรู่ (Early Morning)';
        badgeCls = "bg-amber-50 text-amber-700 border-amber-200";
      }
    } else {
      if (hours >= 9 && hours < 17) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>เวลาทำการ (Business Hours)';
        badgeCls = "bg-emerald-50 text-emerald-700 border-emerald-200";
      } else if (hours >= 6 && hours < 9) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1.5"></span>เช้าตรู่ (Early Morning)';
        badgeCls = "bg-amber-50 text-amber-700 border-amber-200";
      } else if (hours >= 17 && hours < 21) {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>นอกเวลาทำการ (After Hours)';
        badgeCls = "bg-blue-50 text-blue-700 border-blue-200";
      } else {
        suitBadge = '<span class="inline-block w-2 h-2 rounded-full bg-rose-500 mr-1.5"></span>พักผ่อน (Resting)';
        badgeCls = "bg-rose-50 text-rose-700 border-rose-200";
      }
    }

    const gccBadge = c.isGcc 
      ? '<span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shrink-0">GCC</span>' 
      : '';

    return `
      <div class="bg-white rounded-2xl border border-slate-200 p-4 space-y-2.5 shadow-2xs hover:border-[#1B365D] hover:shadow-md transition group">
        <div class="flex items-center justify-between gap-1.5">
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-7 h-6 rounded-md bg-[#1B365D] text-white text-[11px] font-mono font-black flex items-center justify-center shrink-0 shadow-2xs">${c.code}</span>
            <div class="min-w-0">
              <div class="text-xs font-bold text-slate-900 truncate flex items-center gap-1">
                <span>${c.thName}</span>
                ${gccBadge}
              </div>
              <div class="text-[10px] text-slate-500 truncate">${c.enName}</div>
            </div>
          </div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeCls} shrink-0">${c.capital}</span>
        </div>

        <div class="flex items-baseline justify-between pt-1 border-t border-slate-100">
          <span class="text-xl font-mono font-black text-[#1B365D] tracking-tight">${timeStr}</span>
          <span class="text-[10px] font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200">${diffText}</span>
        </div>

        <div class="text-[11px] text-slate-600 space-y-1 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
          <div class="flex justify-between items-center text-[10.5px]">
            <span class="text-slate-500">${nextScheduleLabel}</span>
            <strong class="text-slate-800 font-semibold truncate ml-1">${nextScheduleValue}</strong>
          </div>
          <div class="flex justify-between items-center text-[10.5px]">
            <span class="text-slate-500">สถานะการโทร:</span>
            <span class="font-semibold text-slate-700 flex items-center">${suitBadge}</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1 gap-2">
          <span class="text-[10px] font-mono font-bold text-[#1B365D] bg-blue-50 px-2 py-1 rounded-lg border border-blue-200 flex items-center gap-1 shrink-0">
            <svg class="w-3 h-3 text-[#1B365D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            ${c.dialCode}
          </span>
          <button type="button" onclick="window.selectCountryAndOpenSOP('${key}')" class="text-[10px] font-bold px-2.5 py-1 bg-white hover:bg-[#1B365D] text-[#1B365D] hover:text-white border border-[#1B365D]/30 hover:border-[#1B365D] rounded-lg transition-all flex items-center gap-1 shadow-2xs ml-auto">
            <span>เลือก & เปิดบทพูดโทร</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </div>
      </div>
    `;
  }

  function updateGccRadar() {
    const container = document.getElementById("gccRadarContainer");
    if (!container) return;

    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);

    // Get all 42 country keys
    let keys = Object.keys(COUNTRY_TIMEZONES);

    // Apply search filter if query is provided
    if (radarSearchQuery) {
      keys = keys.filter(k => {
        const c = COUNTRY_TIMEZONES[k];
        return k.includes(radarSearchQuery) ||
          (c.code && c.code.toLowerCase().includes(radarSearchQuery)) ||
          (c.thName && c.thName.toLowerCase().includes(radarSearchQuery)) ||
          (c.enName && c.enName.toLowerCase().includes(radarSearchQuery)) ||
          (c.name && c.name.toLowerCase().includes(radarSearchQuery)) ||
          (c.capital && c.capital.toLowerCase().includes(radarSearchQuery)) ||
          (c.dialCode && c.dialCode.toLowerCase().includes(radarSearchQuery));
      });
    }

    // Apply category tab filter
    if (activeRadarFilter === "arab") {
      keys = keys.filter(k => COUNTRY_TIMEZONES[k].category === "arab");
    } else if (activeRadarFilter === "inter") {
      keys = keys.filter(k => COUNTRY_TIMEZONES[k].category === "inter");
    } else if (activeRadarFilter === "gcc") {
      keys = keys.filter(k => COUNTRY_TIMEZONES[k].isGcc === true);
    }

    // Update count badge
    const radarCountBadge = document.getElementById("radarCountBadge");
    if (radarCountBadge) {
      radarCountBadge.textContent = `แสดง ${keys.length} / 42 ประเทศ`;
    }

    // If no matching countries found
    if (keys.length === 0) {
      container.innerHTML = `
        <div class="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs shadow-2xs space-y-2">
          <p class="font-bold text-slate-700 text-sm">ไม่พบประเทศที่ตรงกับการค้นหา "${radarSearchQuery}"</p>
          <p>กรุณาลองค้นหาด้วยชื่อประเทศ ภาษาไทย ภาษาอังกฤษ หรือรหัสโทรระหว่างประเทศ</p>
        </div>
      `;
      return;
    }

    // Categorized grouping
    const arabList = keys.filter(k => COUNTRY_TIMEZONES[k].category === "arab");
    const interList = keys.filter(k => COUNTRY_TIMEZONES[k].category === "inter");

    let html = "";

    // Section 1: Arab & Middle East (Render if active filter is "all", "arab", or "gcc")
    if ((activeRadarFilter === "all" || activeRadarFilter === "arab" || activeRadarFilter === "gcc") && arabList.length > 0) {
      const sectionTitle = activeRadarFilter === "gcc" 
        ? "กลุ่มประเทศความร่วมมืออ่าวอาหรับ (GCC 6 ประเทศ)" 
        : "กลุ่มประเทศอาหรับและตะวันออกกลาง (Arab & Middle East - 19 ประเทศ)";
      const sectionBadge = activeRadarFilter === "gcc"
        ? "GCC Diplomatic Core"
        : "Islamic Prayer & Diplomatic Protocol";

      html += `
        <div class="space-y-3">
          <div class="flex items-center justify-between border-b border-emerald-200/80 pb-2">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h4 class="text-xs font-bold text-slate-900 tracking-wide uppercase">
                ${sectionTitle}
              </h4>
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                ${sectionBadge}
              </span>
            </div>
            <span class="text-xs font-semibold text-slate-500">${arabList.length} ประเทศ</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${arabList.map(k => renderRadarCard(COUNTRY_TIMEZONES[k], k, now, utc)).join('')}
          </div>
        </div>
      `;
    }

    // Section 2: International Patients (Render if active filter is "all" or "inter")
    if ((activeRadarFilter === "all" || activeRadarFilter === "inter") && interList.length > 0) {
      html += `
        <div class="space-y-3 pt-4">
          <div class="flex items-center justify-between border-b border-blue-200/80 pb-2">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#1B365D]"></span>
              <h4 class="text-xs font-bold text-slate-900 tracking-wide uppercase">
                กลุ่มประเทศนานาชาติ (International Patient Hub - 23 ประเทศ)
              </h4>
              <span class="text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                Global Business Hours & Timezones
              </span>
            </div>
            <span class="text-xs font-semibold text-slate-500">${interList.length} ประเทศ</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${interList.map(k => renderRadarCard(COUNTRY_TIMEZONES[k], k, now, utc)).join('')}
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  if (callPatientCountry) {
    callPatientCountry.addEventListener("change", () => {
      syncCountrySelection(callPatientCountry.value);
    });
  }
  setInterval(() => {
    updateCountryClock();
    updateGccRadar();
  }, 1000); // live clock update every 1000ms (1s)
  updateCountryClock();
  updateGccRadar();

  // --- Step 2: Call Tele-Prompt Elements ---
  const callPatientName = document.getElementById("callPatientName");
  const callStaffName = document.getElementById("callStaffName");
  const callTopic = document.getElementById("callTopic");
  const callPriorChannel = document.getElementById("callPriorChannel");
  const callRemainingIssue = document.getElementById("callRemainingIssue");

  const scriptPrompt1 = document.getElementById("scriptPrompt1");
  const scriptPrompt2 = document.getElementById("scriptPrompt2");
  const scriptPrompt3 = document.getElementById("scriptPrompt3");
  const scriptPrompt4 = document.getElementById("scriptPrompt4");
  const scriptClosingDynamic = document.getElementById("scriptClosingDynamic");
  const scriptPrompt6 = document.getElementById("scriptPrompt6");
  const postCallWhatsAppSummary = document.getElementById("postCallWhatsAppSummary");
  const callCrmLogSummary = document.getElementById("callCrmLogSummary");

  // Call Language Buttons (TH, EN, AR)
  const btnCallLangThai = document.getElementById("btnCallLangThai");
  const btnCallLangEn = document.getElementById("btnCallLangEn");
  const btnCallLangAr = document.getElementById("btnCallLangAr");

  function setCallLanguage(lang) {
    currentCallLang = lang;
    if (btnCallLangThai) {
      btnCallLangThai.className = (lang === "th")
        ? "px-2 py-0.5 rounded bg-[#1B365D] text-white shadow-xs transition font-bold"
        : "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900 transition";
    }
    if (btnCallLangEn) {
      btnCallLangEn.className = (lang === "en")
        ? "px-2 py-0.5 rounded bg-[#1B365D] text-white shadow-xs transition font-bold"
        : "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900 transition";
    }
    if (btnCallLangAr) {
      btnCallLangAr.className = (lang === "ar")
        ? "px-2 py-0.5 rounded bg-[#1B365D] text-white shadow-xs transition font-arabic text-xs font-bold"
        : "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900 transition font-arabic text-xs";
    }

    // Changing script language in Step 2 updates the teleprompter cards & summary
    // without wiping or altering the user's typed Thai inputs in Step 1.
    refreshCallScript();
  }

  if (btnCallLangThai) btnCallLangThai.addEventListener("click", () => setCallLanguage("th"));
  if (btnCallLangEn) btnCallLangEn.addEventListener("click", () => setCallLanguage("en"));
  if (btnCallLangAr) btnCallLangAr.addEventListener("click", () => setCallLanguage("ar"));

  // Staff Gender Toggle (ครับ vs ค่ะ)
  const btnStaffGenderMale = document.getElementById("btnStaffGenderMale");
  const btnStaffGenderFemale = document.getElementById("btnStaffGenderFemale");

  function setStaffGender(gender) {
    currentStaffGender = gender;
    if (gender === "male") {
      if (btnStaffGenderMale) btnStaffGenderMale.className = "px-2 py-0.5 rounded bg-white text-[#1B365D] shadow-xs font-bold";
      if (btnStaffGenderFemale) btnStaffGenderFemale.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900";
    } else {
      if (btnStaffGenderFemale) btnStaffGenderFemale.className = "px-2 py-0.5 rounded bg-white text-[#1B365D] shadow-xs font-bold";
      if (btnStaffGenderMale) btnStaffGenderMale.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900";
    }
    refreshCallScript();
  }

  if (btnStaffGenderMale) btnStaffGenderMale.addEventListener("click", () => setStaffGender("male"));
  if (btnStaffGenderFemale) btnStaffGenderFemale.addEventListener("click", () => setStaffGender("female"));

  // Summary Language Buttons (AR, EN, TH)
  const btnSummaryLangAr = document.getElementById("btnSummaryLangAr");
  const btnSummaryLangEn = document.getElementById("btnSummaryLangEn");
  const btnSummaryLangTh = document.getElementById("btnSummaryLangTh");

  function setSummaryLanguage(lang) {
    currentSummaryLang = lang;
    if (btnSummaryLangAr) {
      btnSummaryLangAr.className = (lang === "ar")
        ? "px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold font-arabic shadow-2xs"
        : "px-1.5 py-0.5 rounded text-slate-600 hover:text-slate-900 font-arabic";
    }
    if (btnSummaryLangEn) {
      btnSummaryLangEn.className = (lang === "en")
        ? "px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold shadow-2xs"
        : "px-1.5 py-0.5 rounded text-slate-600 hover:text-slate-900";
    }
    if (btnSummaryLangTh) {
      btnSummaryLangTh.className = (lang === "th")
        ? "px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold shadow-2xs"
        : "px-1.5 py-0.5 rounded text-slate-600 hover:text-slate-900";
    }
    refreshCallScript();
  }

  if (btnSummaryLangAr) btnSummaryLangAr.addEventListener("click", () => setSummaryLanguage("ar"));
  if (btnSummaryLangEn) btnSummaryLangEn.addEventListener("click", () => setSummaryLanguage("en"));
  if (btnSummaryLangTh) btnSummaryLangTh.addEventListener("click", () => setSummaryLanguage("th"));

  // Outcome Buttons (Ready / Not Ready / Decline)
  const outcomeButtons = document.querySelectorAll(".outcome-btn");
  outcomeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      outcomeButtons.forEach(b => {
        b.classList.remove("bg-emerald-600", "bg-amber-600", "bg-rose-600", "text-white");
        b.classList.add("bg-white/[0.04]", "text-slate-300");
      });

      currentCallOutcome = btn.getAttribute("data-outcome");
      btn.classList.remove("bg-white/[0.04]", "text-slate-300");
      if (currentCallOutcome === "ready") {
        btn.classList.add("bg-emerald-600", "text-white");
      } else if (currentCallOutcome === "not_ready") {
        btn.classList.add("bg-amber-600", "text-white");
      } else {
        btn.classList.add("bg-rose-600", "text-white");
      }
      refreshCallScript();
      if (typeof recordCurrentCallOutcome === "function") {
        recordCurrentCallOutcome(currentCallOutcome);
      }
    });
  });

  const callStaffPosition = document.getElementById("callStaffPosition");
  const callStaffExt = document.getElementById("callStaffExt");
  const callStaffWhatsApp = document.getElementById("callStaffWhatsApp");
  const callPatientHN = document.getElementById("callPatientHN");
  const callPatientPhone = document.getElementById("callPatientPhone");

  function getCallFormData() {
    return {
      patientName: (callPatientName && callPatientName.value.trim()) || (currentCallLang === "ar" ? "المريض" : currentCallLang === "th" ? "คนไข้" : "Patient"),
      staffName: (callStaffName && callStaffName.value.trim()) || (currentCallLang === "ar" ? "منسق فيجثاني" : currentCallLang === "th" ? "เจ้าหน้าที่เวชธานี" : "Vejthani Coordinator"),
      staffPosition: (callStaffPosition && callStaffPosition.value.trim()) || "International Patient Coordinator",
      staffExt: (callStaffExt && callStaffExt.value.trim()) || "Ext. 2222 (King of Bones)",
      staffWhatsApp: (callStaffWhatsApp && callStaffWhatsApp.value.trim()) || "+66 81 234 5678",
      patientHN: (callPatientHN && callPatientHN.value.trim()) || "",
      patientPhone: (callPatientPhone && callPatientPhone.value.trim()) || "",
      topic: (callTopic && callTopic.value.trim()) || (currentCallLang === "ar" ? "العلاج الطبي" : currentCallLang === "th" ? "การรักษา" : "Medical Treatment"),
      priorChannel: (callPriorChannel && callPriorChannel.value) || "WhatsApp",
      remainingIssue: (callRemainingIssue && callRemainingIssue.value.trim()) || (currentCallLang === "ar" ? "ترتيبات السفر والعلاج" : currentCallLang === "th" ? "ข้อมูลที่ต้องการสอบถามเพิ่มเติม" : "Pending Arrangements")
    };
  }

  function refreshCallScript() {
    const data = getCallFormData();
    const result = generateVejthaniCallScript(data, currentCallLang, currentCallOutcome, currentStaffGender, currentSummaryLang);

    // RTL and typography styling for tele-prompter cards
    const isArScript = (currentCallLang === "ar");
    [scriptPrompt1, scriptPrompt2, scriptPrompt3, scriptClosingDynamic, scriptPrompt6].forEach(el => {
      if (el) {
        if (isArScript) {
          el.setAttribute("dir", "rtl");
          el.classList.add("text-right", "font-arabic", "leading-loose");
          el.classList.remove("text-left", "font-sans", "leading-relaxed");
        } else {
          el.setAttribute("dir", "ltr");
          el.classList.add("text-left", "font-sans", "leading-relaxed");
          el.classList.remove("text-right", "font-arabic", "leading-loose");
        }
      }
    });

    if (scriptPrompt4) {
      if (isArScript) {
        scriptPrompt4.setAttribute("dir", "rtl");
        scriptPrompt4.classList.add("text-right", "font-arabic", "leading-loose");
        scriptPrompt4.classList.remove("text-left", "font-sans", "leading-relaxed");
      } else {
        scriptPrompt4.setAttribute("dir", "ltr");
        scriptPrompt4.classList.add("text-left", "font-sans", "leading-relaxed");
        scriptPrompt4.classList.remove("text-right", "font-arabic", "leading-loose");
      }
    }

    if (scriptPrompt1) scriptPrompt1.textContent = result.p1;
    if (scriptPrompt2) scriptPrompt2.textContent = result.p2;
    if (scriptPrompt3) scriptPrompt3.textContent = result.p3;
    if (scriptPrompt4) scriptPrompt4.innerHTML = result.p4;
    if (scriptClosingDynamic) scriptClosingDynamic.textContent = result.closing;
    if (scriptPrompt6) scriptPrompt6.textContent = result.p6;

    // RTL and typography styling for Step 3 WhatsApp summary
    const isArSummary = (currentSummaryLang === "ar");
    if (postCallWhatsAppSummary) {
      if (isArSummary) {
        postCallWhatsAppSummary.setAttribute("dir", "rtl");
        postCallWhatsAppSummary.classList.add("text-right", "font-arabic", "leading-loose");
        postCallWhatsAppSummary.classList.remove("text-left", "font-sans", "leading-relaxed");
      } else {
        postCallWhatsAppSummary.setAttribute("dir", "ltr");
        postCallWhatsAppSummary.classList.add("text-left", "font-sans", "leading-relaxed");
        postCallWhatsAppSummary.classList.remove("text-right", "font-arabic", "leading-loose");
      }
      postCallWhatsAppSummary.textContent = result.summaryWA;
    }

    if (callCrmLogSummary) {
      callCrmLogSummary.textContent = result.crmSnippet;
    }

    // Link WhatsApp Web Button
    const btnOpenPostCallWhatsApp = document.getElementById("btnOpenPostCallWhatsApp");
    if (btnOpenPostCallWhatsApp) {
      btnOpenPostCallWhatsApp.onclick = () => {
        const encoded = encodeURIComponent(result.summaryWA);
        const callPatientPhone = document.getElementById("callPatientPhone");
        const phone = (callPatientPhone && callPatientPhone.value.trim()) ? callPatientPhone.value.replace(/[^0-9]/g, '') : '';
        const waUrl = phone ? `https://wa.me/${phone}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
        window.open(waUrl, '_blank');
      };
    }
  }

  // Input listeners
  [callPatientName, callStaffName, callStaffPosition, callStaffExt, callStaffWhatsApp, callPatientHN, callPatientPhone, callTopic, callRemainingIssue, callPriorChannel].forEach(el => {
    if (el) {
      el.addEventListener("input", refreshCallScript);
      el.addEventListener("change", refreshCallScript);
    }
  });

  // Call Preset Buttons
  document.querySelectorAll(".call-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-call-preset");
      const p = CALL_SOP_PRESETS[key];
      if (!p) return;

      currentLoadedPresetKey = key;

      // Update active tab style on all call-preset-btn
      document.querySelectorAll(".call-preset-btn").forEach(b => {
        b.classList.remove("bg-[#1B365D]", "text-white", "font-bold");
        b.classList.add("bg-slate-50", "text-slate-700", "font-semibold");
      });
      btn.classList.add("bg-[#1B365D]", "text-white", "font-bold");
      btn.classList.remove("bg-slate-50", "text-slate-700", "font-semibold");

      if (currentCallLang === "en") {
        if (callPatientName) callPatientName.value = p.patientName;
        if (callStaffName) callStaffName.value = p.staffNameEn || p.staffName;
        if (callTopic) callTopic.value = p.topicEn || p.topic;
        if (callPriorChannel) callPriorChannel.value = p.priorChannelEn || p.priorChannel;
        if (callRemainingIssue) callRemainingIssue.value = p.remainingIssueEn || p.remainingIssue;
      } else if (currentCallLang === "ar") {
        if (callPatientName) callPatientName.value = p.patientNameAr || p.patientName;
        if (callStaffName) callStaffName.value = p.staffNameAr || p.staffName;
        if (callTopic) callTopic.value = p.topicAr || p.topic;
        if (callPriorChannel) callPriorChannel.value = p.priorChannelAr || p.priorChannel;
        if (callRemainingIssue) callRemainingIssue.value = p.remainingIssueAr || p.remainingIssue;
      } else {
        if (callPatientName) callPatientName.value = p.patientNameTh || p.patientName;
        if (callStaffName) callStaffName.value = p.staffNameTh || p.staffName;
        if (callTopic) callTopic.value = p.topicTh || p.topic;
        if (callPriorChannel) callPriorChannel.value = p.priorChannel;
        if (callRemainingIssue) callRemainingIssue.value = p.remainingIssueTh || p.remainingIssue;
      }

      if (p.country) {
        syncCountrySelection(p.country);
      }

      const callPatientHN = document.getElementById("callPatientHN");
      if (callPatientHN && p.hn) callPatientHN.value = p.hn;

      const callPatientPhone = document.getElementById("callPatientPhone");
      if (callPatientPhone && p.phone) callPatientPhone.value = p.phone;

      updateCountryClock();
      refreshCallScript();
    });
  });

  // Copy Post Call Summary Button
  const btnCopyPostCallSummary = document.getElementById("btnCopyPostCallSummary");
  const copyCallSummaryText = document.getElementById("copyCallSummaryText");
  if (btnCopyPostCallSummary && postCallWhatsAppSummary) {
    btnCopyPostCallSummary.addEventListener("click", () => {
      navigator.clipboard.writeText(postCallWhatsAppSummary.textContent).then(() => {
        if (copyCallSummaryText) copyCallSummaryText.textContent = "คัดลอกเรียบร้อยแล้ว!";
        btnCopyPostCallSummary.classList.add("bg-emerald-500/20", "text-emerald-300");
        setTimeout(() => {
          if (copyCallSummaryText) copyCallSummaryText.textContent = "คัดลอกข้อความสรุป";
          btnCopyPostCallSummary.classList.remove("bg-emerald-500/20", "text-emerald-300");
        }, 1500);
      });
    });
  }

  // --- View 2: Inquiry Console Handling ---
  const inqTabs = document.querySelectorAll(".inquiry-cat-tab");
  const inqStage = document.getElementById("inqStage");
  const inqProcedure = document.getElementById("inqProcedure");
  const inqDocsList = document.getElementById("inqDocsList");
  const inqWhatsAppText = document.getElementById("inqWhatsAppText");
  const inqArabicText = document.getElementById("inqArabicText");
  const inqEmailSubject = document.getElementById("inqEmailSubject");
  const inqEmailBody = document.getElementById("inqEmailBody");

  const INQUIRY_STAGE_MODIFIERS = {
    stage_1: {
      enSuffix: "\n\n[Stage 1 Focus: Requesting preliminary diagnostic reports & scans for Board evaluation.]",
      arSuffix: "\n\n[المرحلة 1: طلب السجلات والتقارير الطبية الأولية وصور الأشعة لتقييم مجلس الاستشاريين.]"
    },
    stage_2: {
      enSuffix: "\n\n[Stage 2 Focus: 48-Hour follow-up on customized treatment plan & official cost estimation.]",
      arSuffix: "\n\n[المرحلة 2: متابعة بعد 48 ساعة من إرسال الخطة العلاجية والتكلفة التقديرية المعتمدة.]"
    },
    stage_3: {
      enSuffix: "\n\n[Stage 3 Focus: Day 5-7 supportive check-in to assist patient & family decision making.]",
      arSuffix: "\n\n[المرحلة 3: استفسار ودي للمساندة بعد 5-7 أيام والإجابة عن أية تساؤلات لدى الأسرة الكريمة.]"
    },
    stage_4: {
      enSuffix: "\n\n[Stage 4 Focus: Medical visa issuance, embassy guarantee letter & flight arrival logistics.]",
      arSuffix: "\n\n[المرحلة 4: استكمال خطابات تأشيرة العلاج الرسمية وضمان السفارة وتنسيق الاستقبال بالمطار.]"
    },
    stage_5: {
      enSuffix: "\n\n[Stage 5 Focus: Clarifying itemized coverage, transparent bundle package & flexible treatment options.]",
      arSuffix: "\n\n[المرحلة 5: توضيح شمولية باقة العلاج وضمان الشفافية المالية لتسهيل القرار على المريض.]"
    }
  };

  const inqNewDocInput = document.getElementById("inqNewDocInput");
  const btnAddInqDoc = document.getElementById("btnAddInqDoc");

  function updateInquiryOutputs() {
    const currentStage = inqStage ? inqStage.value : "stage_1";
    const stageMod = INQUIRY_STAGE_MODIFIERS[currentStage] || INQUIRY_STAGE_MODIFIERS.stage_1;
    const cat = INQUIRY_SPECIALTIES[activeInqCat] || INQUIRY_SPECIALTIES.king_of_bone;
    const customProc = (inqProcedure && inqProcedure.value.trim()) ? inqProcedure.value.trim() : cat.procedure;

    // Checkbox and missing documents logic
    const docItems = inqDocsList ? Array.from(inqDocsList.querySelectorAll(".doc-item-row")) : [];
    const missingDocs = [];
    docItems.forEach(item => {
      const cb = item.querySelector("input[type='checkbox']");
      const txtEl = item.querySelector(".doc-item-text");
      const docName = txtEl ? txtEl.textContent.trim() : "";
      if (docName && cb && !cb.checked) {
        missingDocs.push(docName);
      }
    });

    let waEnText = cat.waEn;
    let waArText = cat.waAr;
    let emailSubText = `Medical Treatment Plan & ${customProc} Evaluation - Vejthani Hospital`;
    let emailBodyText = cat.emailBody;

    // Reflect procedure change
    if (customProc && customProc !== cat.procedure) {
      if (waEnText.includes(cat.procedure)) {
        waEnText = waEnText.replaceAll(cat.procedure, customProc);
      } else {
        waEnText = waEnText.replace(/(regarding the )([^.]+?)( treatment plan)/i, `$1${customProc}$3`);
      }
      if (emailBodyText.includes(cat.procedure)) {
        emailBodyText = emailBodyText.replaceAll(cat.procedure, customProc);
      } else {
        emailBodyText = emailBodyText.replace(/(Following your inquiry regarding )([^,]+)/i, `$1${customProc}`);
      }
    }

    // Append pending docs notice if any checkbox is unchecked
    if (missingDocs.length > 0) {
      const missingEn = `\n\n*Pending Documents Needed for Doctor Review:*\n` + missingDocs.map(d => `• ${d}`).join('\n');
      const missingAr = `\n\n*المستندات المطلوبة لاستكمال دراسة الحالة:*\n` + missingDocs.map(d => `• ${d}`).join('\n');
      waEnText += missingEn;
      waArText += missingAr;
      emailBodyText += missingEn;
    }

    if (inqWhatsAppText) inqWhatsAppText.textContent = waEnText + stageMod.enSuffix;
    if (inqArabicText) inqArabicText.textContent = waArText + stageMod.arSuffix;
    if (inqEmailSubject) inqEmailSubject.textContent = emailSubText;
    if (inqEmailBody) inqEmailBody.textContent = emailBodyText + stageMod.enSuffix;
  }

  function bindDocItemEvents() {
    if (!inqDocsList) return;
    inqDocsList.querySelectorAll(".btn-remove-doc").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const row = btn.closest(".doc-item-row");
        if (row) row.remove();
        updateInquiryOutputs();
      };
    });
    inqDocsList.querySelectorAll(".inq-doc-checkbox").forEach(cb => {
      cb.onchange = () => {
        updateInquiryOutputs();
      };
    });
  }

  function addNewInquiryDoc() {
    if (!inqNewDocInput || !inqDocsList) return;
    const docVal = inqNewDocInput.value.trim();
    if (!docVal) return;

    const row = document.createElement("div");
    row.className = "doc-item-row flex items-center justify-between gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-[11px] group";
    row.innerHTML = `
      <label class="flex items-center gap-2 flex-1 cursor-pointer">
        <input type="checkbox" class="inq-doc-checkbox rounded text-emerald-600 focus:ring-emerald-500" checked>
        <span class="doc-item-text text-slate-800 font-medium">${docVal}</span>
      </label>
      <button type="button" class="btn-remove-doc text-slate-400 hover:text-rose-500 p-0.5 rounded transition" title="ลบรายการ">
        <i data-lucide="x" class="w-3.5 h-3.5"></i>
      </button>
    `;
    inqDocsList.appendChild(row);
    inqNewDocInput.value = "";
    bindDocItemEvents();
    if (window.lucide) lucide.createIcons();
    updateInquiryOutputs();
  }

  if (btnAddInqDoc) {
    btnAddInqDoc.addEventListener("click", addNewInquiryDoc);
  }
  if (inqNewDocInput) {
    inqNewDocInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addNewInquiryDoc();
      }
    });
  }

  if (inqProcedure) {
    inqProcedure.addEventListener("input", updateInquiryOutputs);
    inqProcedure.addEventListener("change", updateInquiryOutputs);
  }

  function renderInquiryCategory(catKey, stageKey) {
    activeInqCat = catKey;
    const cat = INQUIRY_SPECIALTIES[catKey] || INQUIRY_SPECIALTIES.king_of_bone;

    inqTabs.forEach(t => {
      if (t.getAttribute("data-inq-cat") === catKey) {
        t.className = "inquiry-cat-tab active px-3 py-1.5 rounded-xl bg-[#1B365D] text-white font-bold shadow-sm transition";
      } else {
        t.className = "inquiry-cat-tab px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold transition";
      }
    });

    if (inqProcedure) inqProcedure.value = cat.procedure;

    if (inqDocsList) {
      inqDocsList.innerHTML = cat.docs.map(d => `
        <div class="doc-item-row flex items-center justify-between gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-[11px] group">
          <label class="flex items-center gap-2 flex-1 cursor-pointer">
            <input type="checkbox" class="inq-doc-checkbox rounded text-emerald-600 focus:ring-emerald-500" checked>
            <span class="doc-item-text text-slate-800 font-medium">${d}</span>
          </label>
          <button type="button" class="btn-remove-doc text-slate-400 hover:text-rose-500 p-0.5 rounded transition" title="ลบรายการ">
            <i data-lucide="x" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `).join('');
      bindDocItemEvents();
    }

    updateInquiryOutputs();

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  inqTabs.forEach(t => {
    t.addEventListener("click", () => {
      renderInquiryCategory(t.getAttribute("data-inq-cat"), inqStage ? inqStage.value : "stage_1");
    });
  });

  if (inqStage) {
    inqStage.addEventListener("change", () => {
      renderInquiryCategory(activeInqCat, inqStage.value);
    });
  }

  // Subtabs inside Inquiry Output (WA, AR, Email)
  const inqSubtabs = document.querySelectorAll(".inq-subtab");
  inqSubtabs.forEach(tab => {
    tab.addEventListener("click", () => {
      inqSubtabs.forEach(t => {
        t.classList.remove("active", "bg-blue-600", "text-white", "shadow-blue-glow");
        t.classList.add("text-slate-400");
      });
      tab.classList.add("active", "bg-blue-600", "text-white", "shadow-blue-glow");
      tab.classList.remove("text-slate-400");

      document.querySelectorAll(".inq-subtab-content").forEach(c => c.classList.add("hidden"));
      const targetEl = document.getElementById(tab.getAttribute("data-target"));
      if (targetEl) targetEl.classList.remove("hidden");
    });
  });

  // Copy Inquiry active subtab
  const btnCopyInqActive = document.getElementById("btnCopyInqActive");
  if (btnCopyInqActive) {
    btnCopyInqActive.addEventListener("click", () => {
      const activeTabEl = document.querySelector(".inq-subtab.active");
      const activeSubtab = activeTabEl ? activeTabEl.getAttribute("data-target") : "inqTabWA";
      let text = "";
      if (activeSubtab === "inqTabWA" && inqWhatsAppText) text = inqWhatsAppText.textContent;
      else if (activeSubtab === "inqTabAR" && inqArabicText) text = inqArabicText.textContent;
      else if (activeSubtab === "inqTabEmail" && inqEmailSubject && inqEmailBody) text = `Subject: ${inqEmailSubject.textContent}\n\n${inqEmailBody.textContent}`;

      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          alert("คัดลอกเรียบร้อยแล้ว!");
        });
      }
    });
  }

  // Inquiry Send WhatsApp Action
  const btnSendInqWhatsApp = document.getElementById("btnSendInqWhatsApp");
  if (btnSendInqWhatsApp) {
    btnSendInqWhatsApp.addEventListener("click", () => {
      let textToSend = "";
      const activeSubtab = document.querySelector(".inq-subtab.active");
      const targetId = activeSubtab ? activeSubtab.getAttribute("data-target") : "inqTabWA";

      if (targetId === "inqTabAR" && inqArabicText) {
        textToSend = inqArabicText.textContent;
      } else if (targetId === "inqTabEmail" && inqEmailBody) {
        textToSend = `Subject: ${inqEmailSubject ? inqEmailSubject.textContent : ''}\n\n${inqEmailBody.textContent}`;
      } else if (inqWhatsAppText) {
        textToSend = inqWhatsAppText.textContent;
      }

      const patientPhone = (callPatientPhone && callPatientPhone.value) ? callPatientPhone.value : "+968 9123-4567";
      const cleanPhone = patientPhone.replace(/[^\d]/g, '');
      const encodedText = encodeURIComponent(textToSend.trim());
      const url = cleanPhone ? `https://wa.me/${cleanPhone}?text=${encodedText}` : `https://wa.me/?text=${encodedText}`;
      window.open(url, "_blank");
    });
  }

  // Inquiry Refresh Scripts Action
  const btnRefreshInquiryScripts = document.getElementById("btnRefreshInquiryScripts");
  if (btnRefreshInquiryScripts) {
    btnRefreshInquiryScripts.addEventListener("click", () => {
      renderInquiryCategory(activeInqCat, inqStage ? inqStage.value : "stage_1");
      btnRefreshInquiryScripts.classList.add("bg-emerald-600");
      setTimeout(() => btnRefreshInquiryScripts.classList.remove("bg-emerald-600"), 800);
    });
  }

  // View 4: 4D Lead Qualification Scoring
  const leadCheckboxes = document.querySelectorAll("#viewLeadInvestigation input[type='checkbox']");
  const leadScoreBadge = document.getElementById("leadScoreBadge");

  function updateLeadScore() {
    if (!leadScoreBadge) return;
    let checkedCount = 0;
    leadCheckboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });
    const total = leadCheckboxes.length || 12;
    const score = Math.round((checkedCount / total) * 100);

    if (score >= 80) {
      leadScoreBadge.className = "text-sm font-extrabold text-[#EC7825] flex items-center gap-1.5";
      leadScoreBadge.innerHTML = `<span class="inline-block w-2.5 h-2.5 rounded-full bg-[#EC7825]"></span> VIP Diamond Priority (Score: ${score}/100)`;
    } else if (score >= 60) {
      leadScoreBadge.className = "text-sm font-extrabold text-[#1B365D] flex items-center gap-1.5";
      leadScoreBadge.innerHTML = `<span class="inline-block w-2.5 h-2.5 rounded-full bg-[#1B365D]"></span> High Priority (Score: ${score}/100)`;
    } else if (score >= 40) {
      leadScoreBadge.className = "text-sm font-extrabold text-blue-600 flex items-center gap-1.5";
      leadScoreBadge.innerHTML = `<span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-600"></span> Standard Evaluation (Score: ${score}/100)`;
    } else {
      leadScoreBadge.className = "text-sm font-extrabold text-slate-500 flex items-center gap-1.5";
      leadScoreBadge.innerHTML = `<span class="inline-block w-2.5 h-2.5 rounded-full bg-slate-400"></span> Initial Inquiry (Score: ${score}/100)`;
    }
  }

  leadCheckboxes.forEach(cb => cb.addEventListener("change", updateLeadScore));
  updateLeadScore();

  const btnGenLeadWhatsApp = document.getElementById("btnGenLeadWhatsApp");
  if (btnGenLeadWhatsApp) {
    btnGenLeadWhatsApp.addEventListener("click", () => {
      updateLeadScore();
      btnGenLeadWhatsApp.classList.add("bg-emerald-500", "scale-95");
      setTimeout(() => btnGenLeadWhatsApp.classList.remove("bg-emerald-500", "scale-95"), 300);
    });
  }

  // --- EHR & Call Log History + Excel Export Engine ---
  const CRM_STORAGE_KEY = "vejthani_call_records";
  const crmDateFilter = document.getElementById("crmDateFilter");
  const btnShowAllDates = document.getElementById("btnShowAllDates");
  const btnExportExcel = document.getElementById("btnExportExcel");
  const btnExportInqExcel = document.getElementById("btnExportInqExcel");
  const crmCallRecordsTableBody = document.getElementById("crmCallRecordsTableBody");
  const crmRecordsCount = document.getElementById("crmRecordsCount");

  const SEED_CALL_RECORDS = [
    {
      id: "REC-2026-001",
      dateTime: "2026-09-29 10:30",
      date: "2026-09-29",
      hn: "VN-884920",
      patientName: "Mr. Mohammed Al-Balushi",
      country: "โอมาน (Oman, GMT+4)",
      topic: "ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Knee)",
      outcome: "พร้อมนัดหมาย (Ready / Booked)",
      outcomeBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      staff: "ศรวิทย์ (Sorawit) - Ext. 2222",
      issue: "ห้องพักครอบครัว VIP และการทำวีซ่าแพทย์",
      phone: "+968 9123-4567"
    },
    {
      id: "REC-2026-002",
      dateTime: "2026-09-29 09:15",
      date: "2026-09-29",
      hn: "VN-773104",
      patientName: "Mrs. Aisha Al-Husseini",
      country: "ซาอุดีอาระเบีย (Saudi Arabia, GMT+3)",
      topic: "ขอความเห็นที่สองด้านมะเร็งวิทยา (Tumor Board)",
      outcome: "อยู่ระหว่างพิจารณา (Considering)",
      outcomeBadge: "bg-amber-50 text-amber-700 border-amber-200",
      staff: "พัชรี (Patcharee) - Ext. 3311",
      issue: "ประสานงานแพทย์หญิงเฉพาะทางและผลตรวจชิ้นเนื้อ",
      phone: "+966 50 123 4567"
    },
    {
      id: "REC-2026-003",
      dateTime: "2026-09-28 15:45",
      date: "2026-09-28",
      hn: "VN-654219",
      patientName: "Mr. Mansoor (Master Rashid)",
      country: "สหรัฐอาหรับเอมิเรตส์ (UAE, GMT+4)",
      topic: "แก้ไขกระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Gait)",
      outcome: "พร้อมนัดหมาย (Ready / Booked)",
      outcomeBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      staff: "ยัสมิน (Yasmin) - Ext. 4105",
      issue: "นัดปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง",
      phone: "+971 50 987 6543"
    },
    {
      id: "REC-2026-004",
      dateTime: "2026-09-28 14:10",
      date: "2026-09-28",
      hn: "VN-991203",
      patientName: "Mr. Johnathan Brooks",
      country: "สหราชอาณาจักร (UK, GMT+1)",
      topic: "ผ่าตัดส่องกล้องนิ่วถุงน้ำดี (Cholecystectomy)",
      outcome: "พร้อมนัดหมาย (Ready / Booked)",
      outcomeBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      staff: "Amanda Clark - Ext. 1190",
      issue: "ยืนยันระยะเวลาพักฟื้น Fit-to-fly 5 วัน",
      phone: "+44 7911 123456"
    },
    {
      id: "REC-2026-005",
      dateTime: "2026-09-27 11:20",
      date: "2026-09-27",
      hn: "VN-552190",
      patientName: "Mr. Hamad Al-Kuwari",
      country: "กาตาร์ (Qatar, GMT+3)",
      topic: "คัดกรองความพร้อมคนไข้และวางแผนการเดินทาง (4D Lead)",
      outcome: "อยู่ระหว่างพิจารณา (Considering)",
      outcomeBadge: "bg-amber-50 text-amber-700 border-amber-200",
      staff: "ศรวิทย์ (Sorawit) - Ext. 2222",
      issue: "การประสานงานเอกสารรับรองจากสถานทูต",
      phone: "+974 5512 3456"
    }
  ];

  function getCallRecords() {
    try {
      const data = localStorage.getItem(CRM_STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    try {
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(SEED_CALL_RECORDS));
    } catch (e) {}
    return SEED_CALL_RECORDS;
  }

  function saveCallRecords(records) {
    try {
      localStorage.setItem(CRM_STORAGE_KEY, JSON.stringify(records));
    } catch (e) {}
  }

  function renderCallRecordsTable(filteredDate = null) {
    if (!crmCallRecordsTableBody) return;
    const records = getCallRecords();
    const displayRecords = filteredDate
      ? records.filter(r => r.date === filteredDate || r.dateTime.startsWith(filteredDate))
      : records;

    if (displayRecords.length === 0) {
      crmCallRecordsTableBody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center py-6 text-slate-400">
            ไม่พบข้อมูลบันทึกเวชระเบียนสำหรับวันที่เลือก
          </td>
        </tr>
      `;
    } else {
      crmCallRecordsTableBody.innerHTML = displayRecords.map(r => `
        <tr class="hover:bg-slate-50/80 transition">
          <td class="py-2.5 px-3 font-mono text-[11px] text-slate-600 whitespace-nowrap">${r.dateTime}</td>
          <td class="py-2.5 px-3 font-mono font-bold text-[#1B365D] whitespace-nowrap">${r.hn}</td>
          <td class="py-2.5 px-3 font-semibold text-slate-800">${r.patientName}</td>
          <td class="py-2.5 px-3 whitespace-nowrap text-slate-600">${r.country}</td>
          <td class="py-2.5 px-3 text-slate-700 max-w-xs truncate" title="${r.topic}">${r.topic}</td>
          <td class="py-2.5 px-3 whitespace-nowrap">
            <span class="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold border ${r.outcomeBadge || 'bg-slate-100 text-slate-700 border-slate-200'}">
              ${r.outcome}
            </span>
          </td>
          <td class="py-2.5 px-3 text-slate-600 whitespace-nowrap">${r.staff}</td>
          <td class="py-2.5 px-3 text-slate-600 max-w-xs truncate" title="${r.issue}">${r.issue}</td>
        </tr>
      `).join('');
    }

    if (crmRecordsCount) {
      crmRecordsCount.textContent = filteredDate
        ? `แสดง ${displayRecords.length} รายการ (วันที่ ${filteredDate})`
        : `แสดง ${displayRecords.length} รายการทั้งหมด`;
    }
  }

  function recordCurrentCallOutcome(outcomeKey) {
    const data = getCallFormData();
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;
    const dateTimeStr = `${dateStr} ${hours}:${minutes}`;

    const outcomeLabels = {
      ready: "พร้อมนัดหมาย (Ready / Booked)",
      not_ready: "อยู่ระหว่างพิจารณา (Considering)",
      decline: "ปฏิเสธการรักษา (Declined)"
    };

    const outcomeBadges = {
      ready: "bg-emerald-50 text-emerald-700 border-emerald-200",
      not_ready: "bg-amber-50 text-amber-700 border-amber-200",
      decline: "bg-rose-50 text-rose-700 border-rose-200"
    };

    const countrySelect = document.getElementById("callPatientCountry");
    const countryName = countrySelect ? countrySelect.options[countrySelect.selectedIndex].text : "โอมาน (Oman)";

    const newRecord = {
      id: `REC-${Date.now().toString().slice(-4)}`,
      dateTime: dateTimeStr,
      date: dateStr,
      hn: data.patientHN || "VN-Pending",
      patientName: data.patientName,
      country: countryName,
      topic: data.topic,
      outcome: outcomeLabels[outcomeKey] || outcomeKey,
      outcomeBadge: outcomeBadges[outcomeKey] || "bg-slate-100 text-slate-700 border-slate-200",
      staff: `${data.staffName} (${data.staffExt})`,
      issue: data.remainingIssue,
      phone: data.patientPhone || ""
    };

    const records = getCallRecords();
    records.unshift(newRecord);
    saveCallRecords(records);
    renderCallRecordsTable(crmDateFilter ? crmDateFilter.value : null);
  }

  if (crmDateFilter) {
    crmDateFilter.addEventListener("change", (e) => {
      renderCallRecordsTable(e.target.value);
    });
  }

  if (btnShowAllDates) {
    btnShowAllDates.addEventListener("click", () => {
      if (crmDateFilter) crmDateFilter.value = "";
      renderCallRecordsTable(null);
    });
  }

  function exportRecordsToExcel() {
    const records = getCallRecords();
    const filterDate = crmDateFilter ? crmDateFilter.value : null;
    const recordsToExport = filterDate
      ? records.filter(r => r.date === filterDate || r.dateTime.startsWith(filterDate))
      : records;

    if (!recordsToExport.length) {
      alert("ไม่พบข้อมูลบันทึกสำหรับการส่งออก Excel");
      return;
    }

    const headers = [
      "ลำดับ",
      "วันที่-เวลา",
      "เลข HN",
      "ชื่อคนไข้",
      "เบอร์โทรศัพท์",
      "ประเทศ",
      "กลุ่มโรค / หัตถการ",
      "ผลการโทร",
      "เจ้าหน้าที่ประสานงาน",
      "ประเด็นติดตาม / สิ่งที่ติดขัด"
    ];

    const rows = recordsToExport.map((r, i) => [
      i + 1,
      r.dateTime,
      r.hn,
      r.patientName,
      r.phone || "",
      r.country,
      r.topic,
      r.outcome,
      r.staff,
      r.issue
    ]);

    const csvContent = [
      headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(","),
      ...rows.map(row => row.map(cell => `"${String(cell || '').replace(/"/g, '""')}"`).join(","))
    ].join("\r\n");

    const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const todayStr = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", `Vejthani_Call_Records_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    if (btnExportExcel) {
      const origText = btnExportExcel.innerHTML;
      btnExportExcel.classList.add("bg-emerald-700");
      btnExportExcel.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>ส่งออกสำเร็จ</span>`;
      if (window.lucide) lucide.createIcons();
      setTimeout(() => {
        btnExportExcel.classList.remove("bg-emerald-700");
        btnExportExcel.innerHTML = origText;
        if (window.lucide) lucide.createIcons();
      }, 1500);
    }
  }

  if (btnExportExcel) {
    btnExportExcel.addEventListener("click", exportRecordsToExcel);
  }

  // Also support exporting Inquiry Plan in View 2
  if (btnExportInqExcel) {
    btnExportInqExcel.addEventListener("click", () => {
      const cat = INQUIRY_SPECIALTIES[activeInqCat] || INQUIRY_SPECIALTIES.king_of_bone;
      const customProc = (inqProcedure && inqProcedure.value.trim()) ? inqProcedure.value.trim() : cat.procedure;
      const docItems = inqDocsList ? Array.from(inqDocsList.querySelectorAll(".doc-item-text")).map(el => el.textContent.trim()) : [];
      const pName = document.getElementById("inqPatientName") ? document.getElementById("inqPatientName").value.trim() : "Patient";
      const pMarket = document.getElementById("inqPatientMarket") ? document.getElementById("inqPatientMarket").value.trim() : "GCC";
      const pStage = inqStage ? inqStage.options[inqStage.selectedIndex].text : "Stage 1";

      const headers = ["หัวข้อข้อมูล", "รายละเอียด"];
      const rows = [
        ["ชื่อคนไข้", pName],
        ["ตลาดคนไข้", pMarket],
        ["ขั้นตอนการติดตาม (Stage)", pStage],
        ["กลุ่มโรคเฉพาะทาง", cat.name],
        ["หัตถการที่สอบถาม", customProc],
        ["เอกสารที่ต้องตรวจเช็ค", docItems.join("; ")],
        ["ข้อความ WhatsApp (EN)", inqWhatsAppText ? inqWhatsAppText.textContent : ""],
        ["ข้อความ Arabic (العربية)", inqArabicText ? inqArabicText.textContent : ""],
        ["หัวข้ออีเมล (Official Email)", inqEmailSubject ? inqEmailSubject.textContent : ""],
        ["เนื้อหาอีเมล (Email Body)", inqEmailBody ? inqEmailBody.textContent : ""]
      ];

      const csvContent = [
        headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(","),
        ...rows.map(row => row.map(cell => `"${String(cell || '').replace(/"/g, '""')}"`).join(","))
      ].join("\r\n");

      const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const todayStr = new Date().toISOString().slice(0, 10);
      link.setAttribute("href", url);
      link.setAttribute("download", `Vejthani_Inquiry_Plan_${todayStr}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  // Initial trigger
  refreshCallScript();
  renderInquiryCategory("king_of_bone");
  renderCallRecordsTable();
});
