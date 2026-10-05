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
    // 1. King of Bones & Orthopedic Surgery (Specific Multi-Word Phrases First)
    {
      keywords: ["ผ่าตัดเปลี่ยนข้อเข่า", "ข้อเข่าเทียม", "เปลี่ยนข้อเข่า", "หุ่นยนต์ข้อเข่า", "robotic knee replacement", "total knee replacement", "robotic-assisted knee", "robotic total knee"],
      th: "การผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
      en: "Robotic-Assisted Total Knee Replacement (King of Bones)",
      ar: "جراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (كينغ أوف بونز)"
    },
    {
      keywords: ["ผ่าตัดเปลี่ยนข้อสะโพก", "ข้อสะโพกเทียม", "เปลี่ยนข้อสะโพก", "ข้อสะโพก", "hip replacement", "total hip replacement", "hip arthroplasty"],
      th: "การผ่าตัดเปลี่ยนข้อสะโพกเทียมแนวใหม่ (Total Hip Replacement)",
      en: "Total Hip Replacement & Joint Reconstruction Surgery",
      ar: "جراحة استبدال مفصل الورك بالكامل وإعادة بناء المفصل (Total Hip Replacement)"
    },
    {
      keywords: ["ผ่าตัดกระดูกสันหลัง", "กระดูกสันหลัง", "หมอนรองกระดูก", "หมอนรองกระดูกทับเส้น", "ทับเส้นประสาท", "ปวดหลังเรื้อรัง", "สันหลัง", "spine surgery", "spinal surgery", "endoscopic spine", "scoliosis", "herniated disc", "فقري"],
      th: "การรักษาโรคกระดูกสันหลังและหมอนรองกระดูกกดทับเส้นประสาท (Comprehensive Spine Care)",
      en: "Comprehensive Spine Surgery & Endoscopic Care",
      ar: "جراحة العمود الفقري المتقدمة ورعاية الانزلاق الغضروفي (Spine Care)"
    },
    {
      keywords: ["ส่องกล้องข้อ", "เอ็นไขว้หน้า", "เอ็นฉีกขาด", "ผ่าตัดเอ็นไขว้", "arthroscopy", "acl reconstruction", "meniscus tear"],
      th: "การผ่าตัดส่องกล้องข้อและซ่อมแซมเส้นเอ็นไขว้หน้า (Arthroscopic ACL Reconstruction)",
      en: "Arthroscopic Joint Surgery & ACL Reconstruction",
      ar: "تنظير المفاصل المتقدم وترميم أربطة الركبة (ACL Reconstruction)"
    },
    {
      keywords: ["กระดูกหัก", "ผ่าตัดกระดูก", "ดามกระดูก", "fracture", "orthopedic trauma"],
      th: "การรักษาและผ่าตัดยึดตรึงกระดูกหัก (Orthopedic Trauma & Fracture Care)",
      en: "Orthopedic Trauma & Fracture Fixation Surgery",
      ar: "جراحة العظام والإصابات وتثبيت الكسور المتقدمة"
    },
    {
      keywords: ["ข้อเสื่อม", "กระดูกพรุน", "ข้ออักเสบ", "ข้อเข่าเสื่อม", "osteoporosis", "osteoarthritis", "rheumatoid"],
      th: "การรักษาโรคข้อเสื่อมและโรคกระดูกพรุนขั้นสูง (Advanced Joint & Bone Health)",
      en: "Comprehensive Osteoarthritis & Bone Density Management",
      ar: "علاج هشاشة العظام المتقدم ورعاية تآكل المفاصل"
    },
    {
      keywords: ["ข้อเข่า", "เข่า", "หุ่นยนต์", "กระดูก", "knee", "robotic", "ركبة", "عظام", "bone", "orthopedic", "hip", "joint", "joints", "king of bone"],
      th: "การผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
      en: "Robotic-Assisted Total Knee Replacement (King of Bones)",
      ar: "جراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (كينغ أوف بونز)"
    },

    // 2. Ophthalmology (ศูนย์จักษุ & โรคตา)
    {
      keywords: ["ผ่าตัดต้อกระจก", "สลายต้อกระจก", "ต้อกระจก", "สลายต้อ", "cataract surgery", "cataract", "phacoemulsification", "إزالة المياه البيضاء"],
      th: "ผ่าตัดต้อกระจกและใส่เลนส์แก้วตาเทียม (Cataract Surgery & Lens Implantation)",
      en: "Cataract Surgery & Phacoemulsification Lens Implantation",
      ar: "جراحة إزالة المياه البيضاء وزراعة العدسات بتقنية الموجات فوق الصوتية (Cataract Surgery)"
    },
    {
      keywords: ["ต้อหิน", "glaucoma", "المياه الزرقاء", "الجلوكوما"],
      th: "การรักษาโรคต้อหินและการดูแลสายตาขั้นสูง (Glaucoma Care)",
      en: "Comprehensive Glaucoma Therapy & Advanced Eye Care",
      ar: "علاج المياه الزرقاء (الجلوكوما) ورعاية العيون المتقدمة (Glaucoma Care)"
    },
    {
      keywords: ["จอประสาทตา", "วุ้นตา", "retina", "retinal", "vitreoretinal", "شبكية"],
      th: "การรักษาโรคจอประสาทตาและวุ้นตา (Retinal & Vitreoretinal Care)",
      en: "Advanced Vitreoretinal Surgery & Retinal Care",
      ar: "جراحة شبكية العين والجسم الزجاجي المتقدمة (Retinal Care)"
    },
    {
      keywords: ["เลสิก", "ทำเลสิก", "สายตาสั้น", "lasik", "femto-lasik", "ليزك"],
      th: "การผ่าตัดแก้ไขสายตาผิดปกติด้วยเลสิก (Femto-LASIK Vision Correction)",
      en: "Femto-LASIK Refractive & Vision Correction Surgery",
      ar: "تصحيح الإبصار بالفيمتو ليزك والجراحة الانكسارية (Femto-LASIK)"
    },
    {
      keywords: ["ตา", "จักษุ", "ophthalmology", "eye surgery", "عيون"],
      th: "การตรวจรักษาโรคตาและจักษุวิทยาเฉพาะทาง (Specialized Ophthalmology Care)",
      en: "Specialized Ophthalmology & Advanced Eye Care",
      ar: "طب وجراحة العيون والرعاية التخصصية (Ophthalmology Care)"
    },

    // 3. Cardiology & Vascular (ศูนย์หัวใจและหลอดเลือด)
    {
      keywords: ["ผ่าตัดบายพาส", "บายพาสหัวใจ", "หลอดเลือดหัวใจ", "cabg", "coronary artery bypass", "مجازة تاجي"],
      th: "การผ่าตัดบายพาสหลอดเลือดหัวใจ (Coronary Artery Bypass Grafting - CABG)",
      en: "Coronary Artery Bypass Graft Surgery (CABG)",
      ar: "جراحة المجازة التاجية للقلب وترقيع الشرايين (CABG Bypass)"
    },
    {
      keywords: ["สวนหัวใจ", "ฉีดสีหัวใจ", "ทำบอลลูน", "บอลลูนหัวใจ", "ขดลวดหัวใจ", "angioplasty", "cardiac catheterization", "coronary stent", "قسطرة"],
      th: "การตรวจสวนหัวใจและขยายหลอดเลือดด้วยบอลลูนขดลวด (Cardiac Catheterization & Stenting)",
      en: "Cardiac Catheterization & Coronary Angioplasty Stenting",
      ar: "قسطرة القلب وتوسيع الشرايين التاجية وزراعة الدعامة (Angioplasty & Stent)"
    },
    {
      keywords: ["ลิ้นหัวใจ", "เปลี่ยนลิ้นหัวใจ", "heart valve", "tavi", "tavr", "صمام القلب"],
      th: "การผ่าตัดซ่อมแซมและเปลี่ยนลิ้นหัวใจ (Heart Valve Repair & Replacement)",
      en: "Advanced Heart Valve Repair & Transcatheter Replacement",
      ar: "جراحة إصلاح واستبدال صمامات القلب المتقدمة (Heart Valve Surgery)"
    },
    {
      keywords: ["หัวใจเต้นผิดจังหวะ", "จี้ไฟฟ้าหัวใจ", "arrhythmia", "pacemaker", "منظم ضربات"],
      th: "การรักษาโรคหัวใจเต้นผิดจังหวะและใส่เครื่องกระตุ้นหัวใจ (Cardiac Electrophysiology & Pacemaker)",
      en: "Cardiac Electrophysiology & Pacemaker Implantation",
      ar: "علاج اضطراب كهربائية القلب وزراعة منظم ضربات القلب (Pacemaker)"
    },
    {
      keywords: ["โรคหัวใจ", "หัวใจ", "หลอดเลือด", "cardio", "cardiac", "heart", "vascular", "قلب", "أوعية دموية"],
      th: "การรักษาโรคหัวใจและหลอดเลือดขั้นสูง (Advanced Heart & Vascular Center)",
      en: "Advanced Cardiology & Cardiovascular Care",
      ar: "مركز رعاية وجراحة القلب والأوعية الدموية المتقدم (Cardiology Center)"
    },

    // 4. Oncology & MDT Second Opinion (ศูนย์มะเร็งและเนื้องอก)
    {
      keywords: ["มะเร็งเต้านม", "ผ่าตัดเต้านม", "breast cancer", "mastectomy", "أورام الثدي"],
      th: "การรักษามะเร็งเต้านมแบบบูรณาการและการผ่าตัดสงวนเต้า (Comprehensive Breast Cancer Care)",
      en: "Multidisciplinary Breast Cancer Care & Oncoplastic Surgery",
      ar: "رعاية وجراحة أورام الثدي التكاملية والجراحة التجميلية (Breast Cancer)"
    },
    {
      keywords: ["มะเร็งปอด", "lung cancer", "thoracic oncology", "أورام الرئة"],
      th: "การรักษามะเร็งปอดด้วยยามุ่งเป้าและการผ่าตัดส่องกล้อง (Advanced Lung Cancer Therapy)",
      en: "Advanced Targeted Lung Cancer Therapy & Thoracic Care",
      ar: "الرعاية المتكاملة والعلاج الموجه لأورام الرئة (Lung Cancer)"
    },
    {
      keywords: ["มะเร็งลำไส้", "มะเร็งลำไส้ใหญ่", "colon cancer", "colorectal cancer", "أورام القولون"],
      th: "การรักษามะเร็งลำไส้ใหญ่และการผ่าตัดส่องกล้องแผลเล็ก (Colorectal Cancer Care)",
      en: "Advanced Colorectal Cancer Surgery & Multimodal Therapy",
      ar: "علاج وجراحة أورام القولون والمستقيم المتقدمة (Colorectal Cancer)"
    },
    {
      keywords: ["มะเร็งตับ", "liver cancer", "hepatocellular", "أورام الكبد"],
      th: "การรักษามะเร็งตับและโรคตับขั้นสูง (Liver Cancer & Hepatobiliary Care)",
      en: "Comprehensive Hepatocellular Carcinoma & Liver Cancer Care",
      ar: "الرعاية المتكاملة وعلاج أورام الكبد المتقدمة (Liver Cancer)"
    },
    {
      keywords: ["มะเร็งต่อมลูกหมาก", "prostate cancer", "أورام البروستاتا"],
      th: "การรักษามะเร็งต่อมลูกหมากด้วยการผ่าตัดหุ่นยนต์ (Robotic Prostate Cancer Surgery)",
      en: "Robotic Prostate Cancer Surgery & Advanced Uro-Oncology",
      ar: "جراحة أورام البروستاتا بالروبوت والرعاية المتقدمة (Prostate Cancer)"
    },
    {
      keywords: ["มะเร็ง", "ก้อนเนื้อ", "เนื้องอก", "ชิ้นเนื้อ", "เคมีบำบัด", "คีโม", "ฉายแสง", "เต้านม", "ลำไส้", "ปอด", "ตับ", "cancer", "oncology", "tumor", "tumor board", "أورام", "سرطان"],
      th: "การขอความเห็นที่สองด้านมะเร็งวิทยา (Oncology Second Opinion & MDT Tumor Board)",
      en: "Oncology Second Opinion & MDT Tumor Board Review",
      ar: "طلب رأي طبي ثانٍ في طب الأورام ومراجعة اللجنة الطبية متعددة التخصصات (Tumor Board)"
    },

    // 5. General & Laparoscopic Surgery (ศัลยกรรมทั่วไป & ทางเดินอาหาร)
    {
      keywords: ["ผ่าตัดถุงน้ำดี", "นิ่วในถุงน้ำดี", "ถุงน้ำดี", "ส่องกล้องถุงน้ำดี", "cholecystectomy", "gallbladder", "مرارة", "استئصال المرارة"],
      th: "ผ่าตัดส่องกล้องนิ่วในถุงน้ำดี แผลเล็ก (Laparoscopic Cholecystectomy)",
      en: "Minimally Invasive Laparoscopic Cholecystectomy",
      ar: "جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)"
    },
    {
      keywords: ["ผ่าตัดกระเพาะอาหาร", "ผ่าตัดกระเพาะ", "ตัดกระเพาะ", "บายพาสกระเพาะ", "ลดน้ำหนัก", "gastric bypass", "gastric sleeve", "sleeve gastrectomy", "bariatric", "تكميم", "تحويل مسار"],
      th: "ผ่าตัดส่องกล้องลดขนาดกระเพาะเพื่อรักษาโรคอ้วน (Laparoscopic Bariatric Gastric Sleeve)",
      en: "Minimally Invasive Bariatric & Gastric Sleeve Surgery",
      ar: "جراحة تكميم وتحويل مسار المعدة بالمنظار لعلاج البدانة (Bariatric Gastric Sleeve)"
    },
    {
      keywords: ["ส่องกล้องกระเพาะ", "ส่องกล้องลำไส้", "endoscopy", "colonoscopy", "gastroscopy", "تنظير الجهاز الهضمي"],
      th: "การส่องกล้องตรวจระบบทางเดินอาหารและลำไส้ใหญ่ (GI Endoscopy & Colonoscopy)",
      en: "Comprehensive Gastrointestinal Endoscopy & Colonoscopy Screening",
      ar: "تنظير الجهاز الهضمي والقولون المتقدم للتشخيص والعلاج (Endoscopy & Colonoscopy)"
    },
    {
      keywords: ["ผ่าตัดไส้เลื่อน", "ไส้เลื่อน", "hernia", "فتق"],
      th: "การผ่าตัดส่องกล้องรักษาโรคไส้เลื่อน (Laparoscopic Hernia Repair)",
      en: "Minimally Invasive Laparoscopic Hernia Repair",
      ar: "جراحة إصلاح الفتق بالمنظار قليل التدخل (Laparoscopic Hernia Repair)"
    },
    {
      keywords: ["ผ่าตัดไส้ติ่ง", "ไส้ติ่ง", "ไส้ติ่งอักเสบ", "appendectomy", "appendicitis", "الزائدة الدودية"],
      th: "การผ่าตัดส่องกล้องไส้ติ่งอักเสบ (Laparoscopic Appendectomy)",
      en: "Laparoscopic Appendectomy Surgery",
      ar: "جراحة استئصال الزائدة الدودية بالمنظار (Laparoscopic Appendectomy)"
    },
    {
      keywords: ["ริดสีดวง", "hemorrhoids", "piles", "بواسير"],
      th: "การรักษาโรคริดสีดวงทวารด้วยเลเซอร์ขั้นสูง (Advanced Laser Hemorrhoidoplasty)",
      en: "Advanced Laser Hemorrhoidoplasty & Colorectal Care",
      ar: "علاج البواسير المتقدم بالليزر وجراحة الشرج والمستقيم"
    },
    {
      keywords: ["กระเพาะ", "ลำไส้", "ทางเดินอาหาร", "gastro", "gastroenterology", "جهاز هضمي"],
      th: "ศูนย์โรคระบบทางเดินอาหารและตับ (Gastroenterology & Hepatology Center)",
      en: "Comprehensive Gastroenterology & Hepatology Care",
      ar: "مركز أمراض الجهاز الهضمي والكبد المتقدم (Gastroenterology Center)"
    },

    // 6. Neurology & Neurosurgery (สมองและระบบประสาท)
    {
      keywords: ["เนื้องอกในสมอง", "ผ่าตัดสมอง", "brain tumor", "craniotomy", "أورام المخ"],
      th: "การผ่าตัดเนื้องอกในสมองด้วยกล้องจุลศัลยกรรม (Microsurgical Brain Tumor Resection)",
      en: "Advanced Microsurgical Brain Tumor Care & Neuro-navigation",
      ar: "جراحة أورام المخ الدقيقة والمتطورة بالملاحة العصبية (Brain Tumor)"
    },
    {
      keywords: ["หลอดเลือดสมอง", "เส้นเลือดสมอง", "สโตรก", "อัมพฤกษ์", "อัมพาต", "stroke", "cerebrovascular", "سكتة دماغية"],
      th: "การรักษาโรคหลอดเลือดสมองและการฟื้นฟูระบบประสาท (Comprehensive Stroke & Neuro Care)",
      en: "Comprehensive Stroke & Neurovascular Intervention Care",
      ar: "مركز العلوم العصبية المتكامل ورعاية السكتات الدماغية والتدخل الوعائي"
    },
    {
      keywords: ["พาร์กินสัน", "สมองเสื่อม", "อัลไซเมอร์", "parkinson", "dementia", "alzheimer", "باركنسون"],
      th: "การรักษาโรคพาร์กินสันและความผิดปกติทางการเคลื่อนไหว (Movement Disorders & Parkinson)",
      en: "Movement Disorders, Parkinson's & Neurodegenerative Care",
      ar: "علاج مرض الشلل الرعاش (باركنسون) واضطرابات الحركة المتطورة"
    },
    {
      keywords: ["สมอง", "ระบบประสาท", "neuro", "brain", "neurosurgery", "مخ والأعصاب"],
      th: "การรักษาโรคระบบประสาทและสมองขั้นสูง (Neuroscience Center)",
      en: "Comprehensive Neuroscience & Neurological Care",
      ar: "مركز العلوم العصبية المتكامل ورعاية جراحة المخ والأعصاب"
    },

    // 7. Urology & Nephrology (ไต & ทางเดินปัสสาวะ)
    {
      keywords: ["ฟอกไต", "ไตวาย", "โรคไต", "ไต", "dialysis", "hemodialysis", "kidney failure", "nephrology", "renal", "كلى", "غسيل الكلى"],
      th: "การดูแลรักษาโรคไตและบริการฟอกเลือดมาตรฐานสากล (Advanced Nephrology & Hemodialysis)",
      en: "Advanced Nephrology, Renal Care & Hemodialysis",
      ar: "الرعاية المتكاملة لأمراض الكلى وغسيل الكلى بمعايير عالمية (Nephrology & Dialysis)"
    },
    {
      keywords: ["สลายนิ่ว", "นิ่วในไต", "นิ่วทางเดินปัสสาวะ", "kidney stones", "lithotripsy", "eswl", "حصى الكلى"],
      th: "การรักษาและสลายนิ่วในไตด้วยเลเซอร์และการส่องกล้อง (Laser Lithotripsy & Stone Care)",
      en: "Minimally Invasive Laser Lithotripsy & Kidney Stone Treatment",
      ar: "تفتيت وعلاج حصى الكلى والمسالك البولية بالليزر والمنظار (Lithotripsy)"
    },
    {
      keywords: ["ต่อมลูกหมากโต", "ต่อมลูกหมาก", "bph", "prostate enucleation", "تضخم البروستاتا"],
      th: "การรักษาต่อมลูกหมากโตด้วยเลเซอร์และนวัตกรรมใหม่ (Advanced Laser Prostate Enucleation)",
      en: "Advanced Laser Prostate Enucleation & BPH Therapy",
      ar: "علاج تضخم البروستاتا الحميد بالليزر والتقنيات الحديثة (Laser Prostate Surgery)"
    },

    // 8. Pediatrics (กุมารเวชศาสตร์ & กระดูกเด็ก)
    {
      keywords: ["เด็ก", "กุมาร", "ขาโก่ง", "ทารก", "ลูก", "ราชิด", "pediatric", "child", "children", "أطفال", "طفل", "rashid"],
      th: "การแก้ไขปัญหากระดูกขาส่วนล่างโก่งในเด็ก (Pediatric Orthopedic Gait Correction)",
      en: "Pediatric Orthopedic Gait Correction & Limb Realignment",
      ar: "تصحيح المشي وتشوهات عظام الأطراف لدى الأطفال (Pediatric Orthopedics)"
    },

    // 9. Endocrinology & Internal Medicine (ต่อมไร้ท่อ เบาหวาน และอายุรกรรม)
    {
      keywords: ["เบาหวาน", "ควบคุมน้ำตาล", "diabetes", "diabetic", "سكري"],
      th: "การรักษาและฟื้นฟูโรคเบาหวานและเมตาบอลิก (Comprehensive Diabetes Care)",
      en: "Comprehensive Diabetes Care & Metabolic Health",
      ar: "الرعاية الشاملة لمرض السكري واضطرابات التمثيل الغذائي (Diabetes Care)"
    },
    {
      keywords: ["ไทรอยด์", "ก้อนที่คอ", "ผ่าตัดไทรอยด์", "thyroid", "غدة درقية"],
      th: "การรักษาและผ่าตัดไทรอยด์ส่องกล้องไร้รอยแผล (Endoscopic Scarless Thyroid Surgery)",
      en: "Scarless Endoscopic Thyroid Surgery & Endocrinology",
      ar: "جراحة الغدة الدرقية بالمنظار دون ندبات وعلاج الغدد الصماء (Thyroid Surgery)"
    },
    {
      keywords: ["ความดัน", "ความดันโลหิตสูง", "hypertension", "ضغط الدم"],
      th: "การรักษาโรคความดันโลหิตสูงและการป้องกันโรคหลอดเลือด (Hypertension & Vascular Prevention)",
      en: "Comprehensive Hypertension & Vascular Risk Management",
      ar: "إدارة وعلاج ارتفاع ضغط الدم والوقاية من أمراض الأوعية الدموية"
    },

    // 10. Dental & Maxillofacial (ศูนย์ทันตกรรม)
    {
      keywords: ["รากฟันเทียม", "จัดฟัน", "ฟัน", "ทันตกรรม", "dental", "dental implant", "implantology", "زراعة الأسنان", "أسنان"],
      th: "การทำรากฟันเทียมและการฟื้นฟูสุขภาพช่องปาก (Advanced Dental Implants & Oral Care)",
      en: "Advanced Dental Implants & Comprehensive Oral Rehabilitation",
      ar: "زراعة الأسنان المتقدمة وإعادة تأهيل الفم المتكاملة (Dental Implants)"
    },

    // 11. Plastic & Aesthetic Surgery (ศัลยกรรมตกแต่ง)
    {
      keywords: ["ศัลยกรรมตกแต่ง", "เสริมจมูก", "ดูดไขมัน", "ตัดหนังหน้าท้อง", "ดึงหน้า", "plastic surgery", "cosmetic surgery", "rhinoplasty", "جراحة التجميل"],
      th: "ศัลยกรรมตกแต่งและเสริมสร้างความงามเฉพาะทาง (Aesthetic & Plastic Surgery)",
      en: "Specialized Aesthetic & Plastic Reconstructive Surgery",
      ar: "جراحة التجميل والترميم التخصصية بمستشفى فيجثاني (Plastic & Aesthetic Surgery)"
    },

    // 12. Checkup & 4D Assessment (ตรวจสุขภาพ & คัดกรอง)
    {
      keywords: ["คัดกรอง", "ตรวจสุขภาพ", "เช็คอัพ", "สืบค้น", "ตรวจร่างกาย", "ความพร้อม", "investigate", "lead", "4d", "تقييم", "checkup", "screening", "فحص شامل"],
      th: "การคัดกรองความพร้อมคนไข้และวางแผนการเดินทางเพื่อการรักษา (4D Lead Qualification)",
      en: "4D International Patient Clinical & Travel Assessment",
      ar: "التقييم الطبي الشامل وخطة السفر للعلاج (4D Medical Assessment)"
    }
  ],
  remainingIssues: [
    {
      keywords: ["ห้องพักครอบครัว", "ครอบครัว", "ที่พัก", "โรงแรม", "family suite", "accommodation", "hotel", "عائلية", "أجنحة عائلية", "فندق", "إقامة"],
      th: "การจัดเตรียมห้องพักครอบครัว VIP, บริการอาหารฮาลาล 100% และขั้นตอนการทำวีซ่าแพทย์",
      en: "VIP family suite arrangements, 100% Halal dining verification, and medical visa processing",
      ar: "ترتيبات الأجنحة العائلية الفاخرة، وتأكيد الوجبات الحلال 100%، وتنسيق إجراءات التأشيرة الطبية"
    },
    {
      keywords: ["วีซ่า", "สถานทูต", "โอมาน", "หนังสือค้ำประกัน", "หนังสือรับรอง", "visa", "embassy", "guarantee letter", "oman embassy", "تأشيرة", "سفارة", "خطاب ضمان", "ملحقية صحية"],
      th: "การประสานงานเอกสารรับรองสถานทูต การตรวจเช็คประวัติการรักษา และหนังสือค้ำประกันค่ารักษา",
      en: "Official Embassy Guarantee Letter coordination, medical history evaluation, and medical visa processing",
      ar: "تنسيق خطابات الضمان المالي الصادرة من السفارة والملحقية الصحية وإجراءات التأشيرة الطبية"
    },
    {
      keywords: ["ฮาลาล", "อาหารฮาลาล", "halal", "حلال", "وجبات حلال"],
      th: "การจัดเตรียมบริการอาหารฮาลาล 100% ที่ได้รับการรับรอง และสิ่งอำนวยความสะดวกทางวัฒนธรรม",
      en: "100% certified Halal dining verification and cultural concierge arrangements",
      ar: "تأكيد الوجبات الحلال 100% المعتمدة وتوفير كافة التسهيلات الثقافية الإسلامية"
    },
    {
      keywords: ["แพทย์หญิง", "หมอผู้หญิง", "ชิ้นเนื้อ", "ผลตรวจ", "biopsy", "female oncologist", "female doctor", "عينة", "نسائي", "طبيبة"],
      th: "การประสานงานแพทย์หญิงเฉพาะทาง ผลตรวจชิ้นเนื้อเพิ่มเติม และหนังสือเชิญทำวีซ่าแพทย์",
      en: "Female oncologist coordination, pathology biopsy review, and medical visa invitation letter",
      ar: "تنسيق كادر طبي نسائي متخصص، ومراجعة تقرير فحص العينة (Biopsy)، وإصدار خطاب الدعوة لتأشيرة العلاج"
    },
    {
      keywords: ["video call", "วิดีโอคอล", "เทเลเมด", "telemed", "telemedicine", "ปรึกษาแพทย์", "ออนไลน์", "استشارة فيديو", "فيديو", "consultation"],
      th: "ต้องการปรึกษาแพทย์ผ่าน Video Call ก่อนเดินทาง และข้อมูลห้องพักเด็กที่เป็นมิตรต่อครอบครัว",
      en: "Pre-travel surgeon video consultation and child-friendly family suite accommodation",
      ar: "ترتيب استشارة فيديو مسبقة مع الجراح، وتفاصيل أجنحة الأطفال العائلية المجهزة"
    },
    {
      keywords: ["fit-to-fly", "ฟิตทูฟลาย", "พักฟื้น", "ประกัน", "เคลม", "บิน", "เครื่องบิน", "ใบรับรองแพทย์", "لياقة", "تأمين", "insurance", "flight", "certificate", "direct billing"],
      th: "การยืนยันระยะเวลาพักฟื้น Fit-to-fly ภายใน 5 วัน และการเคลมประกันสุขภาพต่างประเทศ",
      en: "5-day Fit-to-Fly medical certificate clearance and international health insurance direct billing",
      ar: "تأكيد شهادة اللياقة الطبية للسفر بالطائرة (Fit-to-Fly) في غضون 5 أيام وإجراءات التأمين الصحي الدولي"
    },
    {
      keywords: ["ราคา", "ค่ารักษา", "ค่าใช้จ่าย", "ประมาณการ", "ใบเสนอราคา", "quotation", "price", "cost", "تقدير مالي", "أسعار", "تكلفة"],
      th: "การจัดทำใบเสนอราคาอย่างเป็นทางการ และการแจกแจงค่าใช้จ่ายในการรักษาอย่างโปร่งใส",
      en: "Official itemized quotation and transparent treatment cost breakdown",
      ar: "إصدار وإرسال التقدير المالي الرسمي وتفاصيل التكلفة العلاجية بكل شفافية"
    },
    {
      keywords: ["สนามบิน", "รับส่ง", "ลีมูซีน", "รถพยาบาล", "airport", "transfer", "limousine", "مطار", "استقبال"],
      th: "บริการรถลีมูซีนรับ-ส่งสนามบินสุวรรณภูมิและการประสานงานแผนกต้อนรับ",
      en: "Complimentary Suvarnabhumi Airport VIP limousine transfer and arrival coordination",
      ar: "خدمة الاستقبال المجاني بسيارات ليموزين فاخرة من مطار سوفارنابومي الدولي"
    },
    {
      keywords: ["ล่าม", "ภาษา", "แปล", "interpreter", "translation", "مترجم"],
      th: "การจัดสรรล่ามภาษาอาหรับและภาษาอังกฤษส่วนตัวดูแลตลอดการรักษา",
      en: "Dedicated Arabic and English medical interpreter allocation throughout the hospital stay",
      ar: "تنسيق وتخصيص المترجم الطبي المعتمد لمرافقتكم في كافة المواعيد مجاناً"
    },
    {
      keywords: ["วันนัด", "เลื่อนนัด", "ตารางแพทย์", "เวลานัด", "appointment", "doctor schedule", "booking", "موعد"],
      th: "การประสานงานตารางตรวจของแพทย์ผู้เชี่ยวชาญ และการยืนยันวันนัดหมายที่สะดวก",
      en: "Consulting specialist doctor schedule and confirming preferred appointment dates",
      ar: "تنسيق جدول مواعيد الطبيب الاستشاري وتأكيد موعد الحجز الأنسب لكم"
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
      ar: "سومتشاي (Somchai)"
    },
    {
      keywords: ["กิตติพงษ์", "kittipong"],
      th: "กิตติพงษ์",
      en: "Kittipong",
      ar: "كيتيبونغ (Kittipong)"
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

function getPlaceholderForField(fieldType, targetLang) {
  if (fieldType === "topic") {
    if (targetLang === "ar") return "[التخصص الطبي / الإجراء]";
    if (targetLang === "th") return "[ระบุกลุ่มโรค/หัตถการ]";
    return "[Medical Topic / Procedure]";
  }
  if (fieldType === "remainingIssue") {
    if (targetLang === "ar") return "[الإجراءات المطلوب متابعتها]";
    if (targetLang === "th") return "[ระบุเรื่องที่ประสานงานต่อ]";
    return "[Pending Arrangements / Action Item]";
  }
  if (fieldType === "patientName") {
    if (targetLang === "ar") return "[اسم المريض]";
    if (targetLang === "th") return "[ระบุชื่อคนไข้]";
    return "[Patient Name]";
  }
  if (fieldType === "staffName") {
    if (targetLang === "ar") return "منسق التنسيق الطبي الدولي";
    if (targetLang === "th") return "เจ้าหน้าที่เวชธานี";
    return "International Patient Coordinator";
  }
  return "";
}

function localizeField(value, targetLang, fieldType) {
  if (!value || typeof value !== "string") {
    return getPlaceholderForField(fieldType, targetLang);
  }
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith("[")) {
    return getPlaceholderForField(fieldType, targetLang);
  }
  const lower = trimmed.toLowerCase();

  // If targetLang is "th" and value contains Thai characters, always preserve the user's exact Thai input!
  if (targetLang === "th" && /[\u0E00-\u0E7F]/.test(trimmed)) {
    return trimmed;
  }

  let dictList = [];
  if (fieldType === "topic") dictList = MEDICAL_LOCALIZER.topics;
  else if (fieldType === "remainingIssue") dictList = MEDICAL_LOCALIZER.remainingIssues;
  else if (fieldType === "staffName") dictList = MEDICAL_LOCALIZER.staffNames;
  else if (fieldType === "patientName") dictList = MEDICAL_LOCALIZER.patients;

  // Specificity priority: find the match with the LONGEST matching keyword
  // (Prevents generic terms like "ผ่าตัด" or "ข้อ" from capturing specific "ผ่าตัดต้อกระจก" or "ข้อสะโพก")
  let bestMatch = null;
  let maxKeywordLen = 0;

  for (const item of dictList) {
    for (const kw of item.keywords) {
      const kwLower = kw.toLowerCase();
      if (lower.includes(kwLower)) {
        if (kwLower.length > maxKeywordLen) {
          maxKeywordLen = kwLower.length;
          bestMatch = item;
        }
      }
    }
  }

  if (bestMatch) {
    if (targetLang === "th") return bestMatch.th || trimmed;
    if (targetLang === "en") return bestMatch.en || trimmed;
    if (targetLang === "ar") return bestMatch.ar || bestMatch.en || trimmed;
  }

  // --- Dynamic Medical Topic Translation (for unlisted/custom diseases) ---
  if (fieldType === "topic") {
    // Check if user provided an English term in parentheses, e.g. "ผ่าตัดกระเพาะ (Gastric Sleeve)"
    const parenMatch = trimmed.match(/\(([A-Za-z0-9\s\-_/]+)\)/) || trimmed.match(/\[([A-Za-z0-9\s\-_/]+)\]/);
    const extractedEn = parenMatch ? parenMatch[1].trim() : null;

    if (targetLang === "th") {
      return trimmed;
    }

    if (targetLang === "en") {
      if (extractedEn) {
        return `${extractedEn} Specialized Medical Care`;
      }
      // Check if user typed in English
      const nonThaiClean = trimmed.replace(/[\u0E00-\u0E7F]/g, "").replace(/\(\s*\)/g, "").trim();
      if (nonThaiClean.length > 2) {
        return nonThaiClean;
      }
      // Dynamic Thai root composition for English
      if (lower.includes("ผ่าตัด")) return "Specialized Surgical Procedure & Consultation";
      if (lower.includes("มะเร็ง") || lower.includes("เนื้องอก")) return "Specialized Oncology Consultation & Therapy";
      if (lower.includes("หัวใจ")) return "Advanced Cardiology Care & Evaluation";
      if (lower.includes("กระดูก") || lower.includes("ข้อ")) return "Advanced Orthopedic & Joint Care";
      if (lower.includes("ตา") || lower.includes("ต้อ")) return "Specialized Ophthalmology & Eye Surgery";
      if (lower.includes("สมอง")) return "Comprehensive Neuroscience & Brain Care";
      if (lower.includes("เด็ก") || lower.includes("กุมาร")) return "Pediatric Specialized Medical Care";
      if (lower.includes("ไต")) return "Advanced Nephrology & Renal Care";
      if (lower.includes("ตรวจ") || lower.includes("เช็ค")) return "Comprehensive Medical Evaluation & Health Screening";
      return "Specialized Medical Treatment & Consultation";
    }

    if (targetLang === "ar") {
      if (extractedEn) {
        return `الرعاية والعلاج التخصصي (${extractedEn})`;
      }
      // Check if user typed in Arabic
      if (/[\u0600-\u06FF]/.test(trimmed)) {
        return trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
      }
      // Check if user typed in English
      const nonThaiClean = trimmed.replace(/[\u0E00-\u0E7F]/g, "").replace(/\(\s*\)/g, "").trim();
      if (nonThaiClean.length > 2) {
        return `الرعاية والعلاج التخصصي (${nonThaiClean})`;
      }
      // Dynamic Thai root composition for Arabic (Zero Thai leakage)
      if (lower.includes("ผ่าตัด")) return "الرعاية والتدخل الجراحي التخصصي بمستشفى فيجثاني";
      if (lower.includes("มะเร็ง") || lower.includes("เนื้องอก")) return "طلب رأي طبي ثانٍ ورعاية الأورام التخصصية";
      if (lower.includes("หัวใจ")) return "رعاية وجراحة القلب والأوعية الدموية المتقدمة";
      if (lower.includes("กระดูก") || lower.includes("ข้อ")) return "رعاية وجراحة العظام والمفاصل المتطورة (كينغ أوف بونز)";
      if (lower.includes("ตา") || lower.includes("ต้อ")) return "طب وجراحة العيون والرعاية التخصصية بمستشفى فيجثاني";
      if (lower.includes("สมอง")) return "مركز العلوم العصبية ورعاية جراحة المخ والأعصاب";
      if (lower.includes("เด็ก") || lower.includes("กุมาร")) return "رعاية طب وجراحة الأطفال التخصصية";
      if (lower.includes("ไต")) return "الرعاية المتكاملة لأمراض الكلى وغسيل الكلى";
      if (lower.includes("ตรวจ") || lower.includes("เช็ค")) return "الفحص والتقييم الطبي الشامل وخطة السفر للعلاج";
      return "العلاج الطبي والرعاية التخصصية بمستشفى فيجثاني";
    }
  }

  // --- Dynamic Remaining Issue Translation ---
  if (fieldType === "remainingIssue") {
    if (targetLang === "th") {
      return trimmed;
    }
    const nonThai = trimmed.replace(/[\u0E00-\u0E7F]/g, "").replace(/\(\s*\)/g, "").trim();
    if (targetLang === "en") {
      if (nonThai.length > 2) return nonThai;
      if (lower.includes("วีซ่า") || lower.includes("visa")) return "Medical visa invitation letter and embassy coordination";
      if (lower.includes("ห้องพัก") || lower.includes("โรงแรม") || lower.includes("ที่พัก")) return "VIP family suite arrangements and Halal dining";
      if (lower.includes("ล่าม") || lower.includes("ภาษา")) return "Dedicated Arabic medical interpreter allocation";
      if (lower.includes("ราคา") || lower.includes("ค่า")) return "Official itemized quotation and treatment pricing";
      if (lower.includes("นัด") || lower.includes("แพทย์")) return "Doctor consultation scheduling and appointment dates";
      if (lower.includes("ผลตรวจ") || lower.includes("ฟิล์ม") || lower.includes("mri")) return "Reviewing additional medical reports and diagnostic scans";
      return "Medical travel arrangements and customized patient assistance";
    }
    if (targetLang === "ar") {
      if (/[\u0600-\u06FF]/.test(trimmed)) return trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
      if (nonThai.length > 2) return `تنسيق ومتابعة (${nonThai})`;
      if (lower.includes("วีซ่า") || lower.includes("visa")) return "إجراءات التأشيرة الطبية وتنسيق خطابات السفارة الرسمية";
      if (lower.includes("ห้องพัก") || lower.includes("โรงแรม") || lower.includes("ที่พัก")) return "ترتيبات الأجنحة العائلية الفاخرة والخدمات الفندقية";
      if (lower.includes("ล่าม") || lower.includes("ภาษา")) return "تخصيص المترجم الطبي المعتمد لمرافقتكم مجاناً";
      if (lower.includes("ราคา") || lower.includes("ค่า")) return "إعداد وإرسال التقدير المالي الرسمي وتفاصيل التكلفة";
      if (lower.includes("นัด") || lower.includes("แพทย์")) return "تنسيق جدول مواعيد الطبيب وتأكيد موعد الاستشارة";
      if (lower.includes("ผลตรวจ") || lower.includes("ฟิล์ม") || lower.includes("mri")) return "مراجعة التقارير والتحاليل الطبية الإضافية وصور الأشعة";
      return "الترتيبات الطبية اللوجستية وتأكيد متطلبات السفر والعلاج";
    }
  }

  // --- Staff & Patient Name fallbacks ---
  if (targetLang === "ar") {
    let cleaned = trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
    cleaned = cleaned.replace(/\(\s*\)/g, "").trim();
    if (!cleaned) {
      if (fieldType === "staffName") return "منسق التنسيق الطبي الدولي";
      if (fieldType === "patientName") return "المريض الكريم";
    }
    return cleaned;
  }

  if (targetLang === "en") {
    let cleaned = trimmed.replace(/[\u0E00-\u0E7F]/g, "").trim();
    cleaned = cleaned.replace(/\(\s*\)/g, "").trim();
    if (!cleaned) {
      if (fieldType === "staffName") return "International Patient Coordinator";
      if (fieldType === "patientName") return "Esteemed Patient";
    }
    return cleaned;
  }

  return trimmed;
}

// Dynamic salutation formatter preventing double salutations and language leakage
function formatPatientSalutation(name, lang = "en") {
  if (!name || typeof name !== "string" || !name.trim() || name.trim().startsWith("[")) {
    if (lang === "ar") return "[اسم المريض]";
    if (lang === "th") return "[ระบุชื่อคนไข้]";
    return "[Patient Name]";
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
function generateVejthaniCallScript(data, lang, outcome, staffGender = "male", summaryLang = null, tone = "formal") {
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

    if (tone === "empathy") {
      p1 = `“${arGreeting} ${formalPatientName}. معكم ${scriptStaffName} من مستشفى فيจثاني الدولي في بانكوك. ندرك تماماً مدى القلق والصعوبة التي قد ترافق موضوع ${scriptTopic}. كيف حال صحتكم الكريمة اليوم؟ نتواصل معكم للاطمئنان عليكم ومساعدتكم بكل اهتمام لتيسير رحلتكم العلاجية، فهل يتسع وقتكم لبضع دقائق؟”`;
      p2 = `“فريقنا الطبي يتفهم مشاعركم واهتمامكم البالغ بشأن ${scriptTopic}. لقد أرسلنا لكم الخطة الأولية عبر ${channelDisplay}. هل أتيحت لكم الفرصة للاطلاع عليها وهل هناك ما يقلقكم ونستطيع توضيحه؟”`;
      p3 = `“كيف هي حالتكم الصحية والألم اليوم؟ وما هي أكثر الأمور التي تشغل بالكم في الوقت الحالي؟ نرجو ألا تترددوا بمشاركتنا فصحتكم وراحتكم أولويتنا القصوى.”`;
    } else if (tone === "concise") {
      p1 = `“${arGreeting} ${formalPatientName}. معكم ${scriptStaffName} من مستشفى فيجثاني في مكالمة سريعة وموجزة لمدة دقيقة واحدة بشأن ${scriptTopic}. هل وقتكم متاح الآن؟”`;
      p2 = `“بخصوص ${scriptTopic}، تم إرسال كافة التفاصيل عبر ${channelDisplay}. هل اطلعتم عليها سعادتكم؟”`;
      p3 = `“استفسار سريع: هل هناك نقطة جوهرية تودون من الطبيب الاستشاري حسمها وتأكيدها لكم فوراً؟”`;
    } else {
      // Card 1: الافتتاح والاستئذان الموقر (Opening & Permission)
      p1 = `“${arGreeting} ${formalPatientName}. معكم ${scriptStaffName} من مكتب التنسيق الطبي الدولي بمستشفى فيจثاني في بانكوك. نسأل الله أن تكونوا وعائلتكم الكريمة بأحسن حال. هل يتسع وقتكم الكريم لمحادثة قصيرة لمدة دقيقتين للاطمئنان والتأكد من إمكانية تقديم أي مساعدة لتيسير خطة قدومكم ومقابلة الطبيب الاستشاري؟”`;

      // Card 2: الإشارة الراقية إلى الاستفسار السابق (Referencing Prior Inquiry)
      p2 = `“في تواصلنا السابق، تفضلتم بالاستفسار عن ${scriptTopic}. وقد تشرفنا بتزويدكم بالخطة العلاجية والتقدير المالي عبر ${channelDisplay}. نود الاطمئنان، هل أتيحت لكم الفرصة الكريمة للاطلاع عليها؟ وهل هناك أية تفاصيل طبية أو لوجستية تودون منا توضيحها لسعادتكم؟”`;

      // Card 3: الاستماع بدقة لاهتمامات المريض (Active Listening to Concerns)
      p3 = `“ما هي أهم الأمور التي تشغل بالكمใน الوقت الحالي، أو الترتيبات التي تودون التنسيق بشأنها قبل موعد السفر وتأكيد الرحلة العلاجية؟”
(إرشادات للمنسق الطبي: طرح سؤال واحد في كل مرة، إعطاء مهلة كافية للمريض للرد دون مقاطعة، ثم إعادة تأكيد الفهم بدقة واحترام.)`;
    }

    // Card 4: مرافق مستشفى فيจثاني والجاهزية الثقافية (Hospital Facilities & Cultural Readiness)
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
      closing = `“لا بأس على الإطلاق، ونشكركم جزيل الشكر على إفادتنا ووقتكم الثمين. إذا سمحتم لنا بسؤال سريع، هل هناك سبب رئيسي يمكننا الاستفادة منه لتطوير خدماتنا ومراعاته مستقبلاً؟ نود التأكيد على أن أبواب مستشفى فيจثاني مفتوحة لكم دائماً، ويسعدنا تقديم الرعاية لكم ولعائلتكم في أي وقت تشاؤون. دمتم بحفظ الله ورعايته.”`;
    }

    // Card 6: تلخيص ما تم الاتفاق عليه (Summarizing Agreed Actions)
    p6 = `“تلخيصاً لما تم الاتفاق عليه مع سعادتكم، سأقوم بالتأكد والمتابعة الدقيقة بشأن ${scriptRemainingIssue} وموافاتكم بالرد الرسمي عبر الواتساب في غضون 24 ساعة، كما سأرسل المستندات المطلوبة عبر ${channelDisplay}. وإذا طرأ أي استفسار آخر، فبإمكانكم مراسلتي في أي وقت. شاكرين لكم طيب حديثكم ووقتكم الكريم.”`;

  } else if (isEn) {
    // =========================================================================
    // English (Medical Diplomatic English — JCI International Standard)
    // =========================================================================
    const formalPatientName = formatPatientSalutation(scriptPatientName, 'en');

    if (tone === "empathy") {
      p1 = `“Hello, ${formalPatientName}. This is ${scriptStaffName} from Vejthani Hospital. We understand dealing with ${scriptTopic} can be challenging and distressing. How are you feeling today? I am calling with heartfelt care to see how we can assist and comfort you before your consultation. Would you have 2-3 minutes to speak?”`;
      p2 = `“Our medical team truly understands how stressful ${scriptTopic} can be for you and your family. We sent the medical review to you via ${channelDisplay}. Have you had a chance to look at it, and is there any part causing you worry?”`;
      p3 = `“How are your symptoms right now? Is there any specific pain or concern that is troubling you most? Please feel free to share—we are here to support you in every way.”`;
    } else if (tone === "concise") {
      p1 = `“Hello, ${formalPatientName}. This is ${scriptStaffName} from Vejthani Hospital with a quick 1-minute update regarding ${scriptTopic}. Do you have a brief moment?”`;
      p2 = `“Regarding ${scriptTopic}, we sent the full information via ${channelDisplay}. Have you had a chance to review it?”`;
      p3 = `“Quick check: are there any immediate questions you need our specialist to confirm before your travel?”`;
    } else {
      p1 = `“Hello, ${formalPatientName}. This is ${scriptStaffName} from Vejthani Hospital. We spoke on ${channelDisplay} earlier. How are you? Would now be a good time to talk for 2–3 minutes? I’m calling to see if there is anything else we can help arrange before you plan your visit with the doctor.”`;
      p2 = `“Last time, you asked about ${scriptTopic}. We sent the information to you via ${channelDisplay}. Have you had a chance to look at it? Is there anything you would like us to explain in more detail?”`;
      p3 = `“Is there anything you are still concerned about or need to arrange before traveling for treatment?”
(Staff Guideline: Ask one question at a time, give the patient time to answer, and repeat key points to confirm understanding.)`;
    }

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
    const displayPatientName = scriptPatientName.startsWith("[") ? scriptPatientName : `คุณ ${scriptPatientName.replace(/^(คุณ|ท่าน)\s*/, '')}`;

    if (tone === "empathy") {
      p1 = `“อัสสลามุอะลัยกุม ${formalPatientName} ${pronoun} ${scriptStaffName} จากโรงพยาบาลเวชธานี${polite} ทางเราทราบว่าคุณมีเรื่องกังวลด้านสุขภาพเกี่ยวกับ ${scriptTopic} เป็นอย่างไรบ้าง${politeQuestion}? สบายใจขึ้นบ้างไหม${politeQuestion}? ${pronoun}โทรมาด้วยความห่วงใยเพื่อสอบถามอาการและดูว่ามีสิ่งใดที่เราช่วยดูแลให้คุณคลายกังวลได้บ้าง${polite} สะดวกคุยสัก 2-3 นาที${politeQuestion}?”`;
      p2 = `“ทางทีมแพทย์และพยาบาลเวชธานีเข้าใจดีว่าเรื่อง ${scriptTopic} อาจทำให้คุณและครอบครัวไม่สบายใจ เราได้ส่งข้อมูลเบื้องต้นให้ทาง ${channelDisplay} แล้ว${polite} คุณได้มีโอกาสดูข้อมูลหรือยัง${politeQuestion}? มีข้อกังวลส่วนไหนที่อยากปรึกษาเราเพิ่มเติมไหม${politeQuestion}?”`;
      p3 = `“ตอนนี้อาการเป็นอย่างไรบ้าง${politeQuestion}? มีจุดไหนที่ยังเจ็บหรือไม่สบายใจมากที่สุดในแต่ละวัน${politeQuestion}? เล่าให้${pronoun}ฟังได้เลยนะ${politeEnd} เราพร้อมรับฟังและช่วยเหลือทุกทาง${polite}”`;
    } else if (tone === "concise") {
      p1 = `“สวัสดี${polite} ${formalPatientName} ${pronoun} ${scriptStaffName} จาก รพ.เวชธานี${polite} ขอแจ้งสรุปสั้นๆ เรื่อง ${scriptTopic} ${polite} สะดวกคุย 1 นาที${politeQuestion}?”`;
      p2 = `“เรื่อง ${scriptTopic} เราส่งรายละเอียดให้ทาง ${channelDisplay} เรียบร้อยแล้ว${polite} ได้เปิดดูข้อมูลแล้วหรือยัง${politeQuestion}?”`;
      p3 = `“ขอสอบถามสั้นๆ ครับ: มีจุดไหนที่ต้องการให้แพทย์ยืนยันด่วนก่อนเดินทางไหม${politeQuestion}?”`;
    } else {
      p1 = `“อัสสลามุอะลัยกุม ${formalPatientName} ${pronoun} ${scriptStaffName} จากโรงพยาบาลเวชธานี${polite} ที่เราเคยคุยกันทาง ${channelDisplay} ก่อนหน้านี้ คุณสบายดี${politeQuestion}? ตอนนี้สะดวกคุยสัก 2–3 นาที${politeQuestion}? ${pronoun}โทรมาเพื่อดูว่ามีอะไรที่เราช่วยเตรียมเพิ่มเติมให้คุณได้ ก่อนวางแผนมาพบแพทย์${polite}”`;
      p2 = `“ครั้งก่อน ${displayPatientName} แจ้งว่าอยากทราบเรื่อง ${scriptTopic} เราได้ส่งข้อมูลให้ทาง ${channelDisplay} แล้ว${polite} คุณได้ดูข้อมูลหรือยัง${politeQuestion}? มีส่วนไหนที่อยากให้เราอธิบายเพิ่มเติม${politeQuestion}?”`;
      p3 = `“ตอนนี้เรื่องไหนที่ยังทำให้คุณไม่สบายใจ หรือยังต้องจัดเตรียมก่อนเดินทางมารักษา${politeQuestion}?”
(คำแนะนำสำหรับเจ้าหน้าที่: ถามทีละคำถาม เว้นจังหวะให้ตอบ แล้วทวนความเข้าใจ)`;
    }

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

    p6 = `“ขอสรุป${politeEnd} ${displayPatientName} ${pronoun}จะตรวจสอบเรื่อง ${scriptRemainingIssue} และแจ้งกลับทาง WhatsApp ${polite} ส่วนเอกสารจะส่งทาง ${channelDisplay} หากมีคำถามเพิ่มเติม ฝากข้อความถึง${pronoun}ได้ตลอดเวลาเลย${politeEnd} ขอบคุณที่สละเวลาคุยกัน${politeEnd}”`;
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
    const waDisplayPatientName = waPatientName.startsWith("[") ? waPatientName : `คุณ ${waPatientName.replace(/^(คุณ|ท่าน)\s*/, '')}`;

    summaryWA = `السلام عليكم ورحمة الله وبركاته
เรียน ${formalPatientName},

ขอขอบพระคุณที่สละเวลาพูดคุยสายกับทางโรงพยาบาลเวชธานีในวันนี้${polite}

*สรุปสิ่งที่พูดคุยและขั้นตอนถัดไป:*
• หัตถการที่ปรึกษา: ${waTopic}
• เรื่องที่ รพ. เวชธานี กำลังประสานงานให้: ${waRemainingIssue}
${outcome === "ready" ? `• สถานะการนัดหมาย: อยู่ระหว่างตรวจสอบตารางแพทย์และจัดเตรียมล่ามประจำตัว
• การเดินทาง: ประสานงานรถรับส่งสนามบินและห้องพักครอบครัว` : outcome === "not_ready" ? "• สถานะ: เจ้าหน้าที่จะค้นหาข้อมูลเพิ่มเติมและติดต่อกลับตามเวลาที่นัดหมาย" : "• สถานะ: บันทึกข้อมูลเรียบร้อย หากต้องการความช่วยเหลือในอนาคตติดต่อเราได้ตลอดเวลา"}

หาก ${waDisplayPatientName} หรือครอบครัวมีข้อสงสัยเพิ่มเติม สามารถตอบกลับทางข้อความ WhatsApp นี้ได้ตลอด 24 ชั่วโมง${polite}

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
    window.lucide.createIcons();
  }

  // State Management
  let currentCallLang = "th"; // "th" | "en" | "ar"
  let currentSummaryLang = "th"; // "ar" | "en" | "th"
  let currentStaffGender = "male"; // "male" | "female"
  let currentCallOutcome = "ready"; // "ready" | "not_ready" | "decline"
  let activeInqCat = "king_of_bone";
  let currentLoadedPresetKey = null;

  // --- View Mode Switching (Call Journey vs Doc Script vs Inquiry) ---
  const navModeCall = document.getElementById("navModeCall");
  const navModeDocScript = document.getElementById("navModeDocScript");
  const navModeInquiry = document.getElementById("navModeInquiry");
  const viewCallJourney = document.getElementById("viewCallJourney");
  const viewDocTeleprompter = document.getElementById("viewDocTeleprompter");
  const viewInquiryConsole = document.getElementById("viewInquiryConsole");

  if (navModeCall) {
    navModeCall.addEventListener("click", () => {
      if (typeof window.activateView === "function") {
        window.activateView("viewCallJourney");
      } else {
        if (viewCallJourney) viewCallJourney.classList.remove("hidden");
        if (viewDocTeleprompter) viewDocTeleprompter.classList.add("hidden");
        if (viewInquiryConsole) viewInquiryConsole.classList.add("hidden");
      }
    });
  }

  if (navModeDocScript) {
    navModeDocScript.addEventListener("click", () => {
      if (typeof window.activateView === "function") {
        window.activateView("viewDocTeleprompter");
      } else {
        if (viewDocTeleprompter) viewDocTeleprompter.classList.remove("hidden");
        if (viewCallJourney) viewCallJourney.classList.add("hidden");
        if (viewInquiryConsole) viewInquiryConsole.classList.add("hidden");
      }
    });
  }

  if (navModeInquiry) {
    navModeInquiry.addEventListener("click", () => {
      if (typeof window.activateView === "function") {
        window.activateView("viewInquiryConsole");
      } else {
        if (viewInquiryConsole) viewInquiryConsole.classList.remove("hidden");
        if (viewCallJourney) viewCallJourney.classList.add("hidden");
        if (viewDocTeleprompter) viewDocTeleprompter.classList.add("hidden");
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

  // --- Universal Medical Document Ingestion & Case Synthesizer State ---
  let stagedMedicalFiles = [];
  let currentCaseDossier = null;
  let currentCustomScriptCards = null;

  const SAMPLE_MEDICAL_CASES = {
    knee: {
      country: "uae",
      patientName: "Mr. Mohammed Al-Balushi",
      hn: "VN-884920",
      phone: "+971 50 123 4567",
      specialty: "king_of_bone",
      topic: "ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ (Robotic Total Knee Replacement)",
      remainingIssue: "ผลตรวจระดับน้ำตาลสะสม HbA1c ล่าสุด, ล่ามภาษาอาหรับ, ห้องพักฟื้นครอบครัว",
      dossier: {
        patientName: "Mr. Mohammed Al-Balushi",
        age: 62,
        gender: "ชาย (Male)",
        nationality: "สหรัฐอาหรับเอมิเรตส์ (UAE)",
        chiefComplaint: "ปวดตึงข้อเข่าขวารุนแรง เดินต่อเนื่องได้ไม่เกิน 10 นาที (Severe right knee pain)",
        diagnosis: "Severe Right Knee Osteoarthritis (Kellgren-Lawrence Grade 3-4)",
        precautions: "มีโรคประจำตัวเบาหวานชนิดที่ 2 (Type 2 DM) ต้องประเมินระดับน้ำตาลก่อนผ่าตัด",
        documentsReceived: [
          "ภาพสแกน MRI ข้อเข่าขวา (Right Knee MRI Sagittal/Coronal DICOM)",
          "ใบส่งตัวและประเมินจากคลินิกกระดูกและข้อ (Orthopedic Referral Letter)",
          "สำเนาหนังสือเดินทาง (UAE Passport Copy)"
        ],
        documentsMissing: [
          "ผลตรวจระดับน้ำตาลสะสม (HbA1c Blood Test) ภายใน 30 วันล่าสุด",
          "ผลตรวจคลื่นไฟฟ้าหัวใจ (12-Lead ECG) ประเมินก่อนดมยาสลบ"
        ]
      },
      scriptCards: [
        {
          step: 1,
          thai: "สวัสดีครับ ขอสายคุณโมฮัมเหม็ด อัล-บาลูชี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
          english: "Good day, Mr. Mohammed Al-Balushi. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your medical inquiry?",
          arabic: "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد محمد البلوشي. أنا صوراويت، منسق رعاية المرضى الدوليين من مستشفى فيجثاني في بانكوك. هل وقتك مناسب للحديث لبضع دقائق؟",
          arabicPhonetic: "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Mohammed Al-Balushi. Ana Sorawit, munas-siq ri'ayah al-marda ad-dawliyyin min Mustashfa Vejthani fi Bangkok. Hal waqtuka munasib lil-hadith li-bid' daqa'iq?"
        },
        {
          step: 2,
          thai: "ทางทีมแพทย์ศูนย์กระดูกและข้อ King of Bones ได้รับภาพสแกน MRI ข้อเข่าขวา และใบส่งตัวจากดูไบเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว",
          english: "Our orthopedic team at the King of Bones Center has received your right knee MRI scans and referral letter from Dubai. Our chief joint surgeon has conducted an initial review.",
          arabic: "لقد استلم فريقنا الطبي في مركز عظام كينغ أوف بونز صور الرنين المغناطيسي لركبتك اليمنى وتقرير الإحالة الطبي بنجاح وقام استشاري العظام بمراجعتها الأولية.",
          arabicPhonetic: "Laqad istalama fariquna at-tibbi fi markaz 'Izam King of Bones suwar ar-ranin al-mighnatisi li-rukbatika al-yumna wa taqreer al-ihalah at-tibbi bi-najah wa qama istishari al-'izam bi-muraja'atiha al-awwaliyyah."
        },
        {
          step: 3,
          thai: "จากผลตรวจพบภาวะข้อเข่าเสื่อมระยะที่ 3-4 ทางพยาบาลขอประเมินอาการเพิ่มนะครับ ตอนนี้เวลาเดินมีอาการปวดแปลบหรือต้องใช้อุปกรณ์ช่วยพยุงไหมครับ? และมีอาการปวดตื่นกลางคืนหรือไม่?",
          english: "The MRI confirms advanced joint cartilage loss. To optimize our surgical planning, may I ask: how many meters can you walk comfortably, and do you experience rest pain at night?",
          arabic: "تظهر الصور وجود تآكل متقدم في غضروف الركبة. لمساعدة الفريق الجراحي: كم دقيقة تستطيع المشي دون ألم شديد؟ وهل يوقظك الألم أثناء النوم؟",
          arabicPhonetic: "Tuz-hiru as-suwar wujud ta'akul mutaqaddim fi ghudroof ar-rukbah. Li-musa'adat al-fariq al-jirahee: kam daqiqah tastati' al-mashi duna alam shadid? Wa hal yuwqidhuka al-alam athna' an-nawm?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีศัลยแพทย์ผู้เชี่ยวชาญการผ่าตัดเปลี่ยนข้อเข่าด้วยหุ่นยนต์ช่วยผ่าตัด แผลเล็ก ฟื้นตัวไว พร้อมล่ามภาษาอาหรับและอาหารฮาลาล 100% ตลอดการพักฟื้นครับ",
          english: "At Vejthani's King of Bones Center, our surgeons specialize in Robotic-Assisted Total Knee Arthroplasty for millimeter accuracy and rapid recovery, supported by Arabic interpreters and 100% certified Halal dining.",
          arabic: "لحالتكم الكريمة، يوفر مركز كينغ أوف بونز تقنية استبدال مفصل الركبة بالروبوت الجراحي الدقيق لسرعة التعافي، مع مترجمين عرب ووجبات حلال معتمدة طوال فترة إقامتكم.",
          arabicPhonetic: "Li-halatikum al-karimah, yuwaffir markaz King of Bones tiqniyyat istibdal mafsal ar-rukbah bir-robot al-jirahee ad-daqeeq li-sur'at at-ta'afi, ma'a mutarjimin 'Arab wa wajabat Halal mu'tamadah tiwal fatrat iqamatikum."
        },
        {
          step: 5,
          thai: "เพื่อให้แพทย์กำหนดแผนการผ่าตัดและประเมินงบประมาณได้อย่างแม่นยำ ปัจจุบันเรายังขาดผลตรวจน้ำตาลสะสม (HbA1c) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To confirm surgical clearance and issue your finalized medical travel quote, our medical board requires your latest HbA1c blood test. You can send it directly through this WhatsApp chat.",
          arabic: "لإصدار خطة العلاج والتكلفة النهائية الدقيقة، نرجو تزويدنا بأحدث فحص لمستوى السكر التراكمي (HbA1c) عبر محادثة الواتساب هذه.",
          arabicPhonetic: "Li-isdar khittat al-'ilaj wat-taklufah an-niha'iyyah ad-daqeeqah, narju tazwidana bi-ahdath fahs li-mustawa as-sukkar at-tarakumi (HbA1c) 'abra muhadathat al-WhatsApp hadihi."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปรายละเอียดข้อแนะนำของแพทย์พร้อมหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจเพิ่ม แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending your doctor consultation notes and medical visa support letter to your WhatsApp right now. Once your remaining test is sent, your treatment schedule will be finalized within 24 hours.",
          arabic: "سأرسل لكم الآن ملخص الاستشارة الطبية وخطاب تسهيل التأشيرة عبر الواتساب. وبمجرد استلام الفحص المتبقي، سنصدر جدول العلاج النهائي خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas al-istisharah at-tibbiyyah wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa bi-mujarrad istilam al-fahs al-mutabaqqi, sa-nusdir jadwal al-'ilaj an-niha'i khilal 24 sa'ah."
        }
      ]
    },
    spine: {
      country: "oman",
      patientName: "Mr. Tariq Al-Riyami",
      hn: "VN-902341",
      phone: "+968 9123 4567",
      specialty: "king_of_bone",
      topic: "ผ่าตัดกระดูกคอกดทับเส้นประสาทแบบส่องกล้อง (Endoscopic Cervical Discectomy)",
      remainingIssue: "ภาพสแกน MRI Cervical Spine แผ่นล่าสุด (DICOM), รถพยาบาลรับที่สุวรรณภูมิ",
      dossier: {
        patientName: "Mr. Tariq Al-Riyami",
        age: 48,
        gender: "ชาย (Male)",
        nationality: "โอมาน (Oman)",
        chiefComplaint: "ปวดต้นคอร้าวลงแขนขวา ปลายนิ้วชา อ่อนแรงขณะยกของ (Cervical radiculopathy & weakness)",
        diagnosis: "Cervical Spondylotic Radiculopathy with C5-C6 Herniated Disc",
        precautions: "มีอาการชาและกล้ามเนื้อมืออ่อนแรง (Progressive motor weakness) ต้องระวังการเคลื่อนไหวคอ",
        documentsReceived: [
          "สรุปประวัติการรักษาจากโรงพยาบาลในมัสกัต (.docx Doctor Summary)",
          "ผลตรวจการทำงานของระบบประสาทและกล้ามเนื้อ (EMG Study)",
          "สำเนาหนังสือเดินทาง (Oman Passport Copy)"
        ],
        documentsMissing: [
          "แผ่น CD/ไฟล์ DICOM MRI กระดูกคอ (Cervical Spine MRI) ล่าสุด",
          "ประวัติการแพ้ยาและสารทึบรังสี (Contrast Allergy History)"
        ]
      },
      scriptCards: [
        {
          step: 1,
          thai: "สวัสดีครับ ขอสายคุณทาริก อัล-ริยามี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
          english: "Good day, Mr. Tariq Al-Riyami. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your spine consultation?",
          arabic: "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد طارق الريامي. معكم صوراويت من مكتب التنسيق الطبي الدولي بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث لبضع دقائق؟",
          arabicPhonetic: "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Tariq Al-Riyami. Ma'akum Sorawit min maktab at-tanseeq at-tibbi ad-dawli bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith li-bid' daqa'iq?"
        },
        {
          step: 2,
          thai: "ทางทีมศัลยแพทย์กระดูกสันหลังได้รับรายงานสรุปประวัติการรักษาและผลตรวจกล้ามเนื้อจากมัสกัตเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ศึกษาประวัติแล้ว",
          english: "Our spine surgery specialists have reviewed your clinical summary and EMG test from Muscat. Our senior spine surgeons have completed a preliminary review.",
          arabic: "لقد اطلع استشاريو جراحة العمود الفقري لدينا على ملخصكم الطبي وفحص العضلات المرسل من مسقط بنجاح.",
          arabicPhonetic: "Laqad ittala'a istishariyyu jirahat al-'amood al-faqari ladayna 'ala mulakh-khasikum at-tibbi wa fahs al-'adallat al-mursal min Masqat bi-najah."
        },
        {
          step: 3,
          thai: "จากอาการปวดคอร้าวลงแขนขวาและชาปลายนิ้ว ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการหยิบจับสิ่งของแล้วหลุดมือ หรืออาการปวดเวลานอนราบหรือไม่ครับ?",
          english: "Regarding the pain radiating to your right arm and fingers numbness: do you experience difficulty gripping objects or dropping items, and does the pain worsen when lying flat?",
          arabic: "بخصوص الألم الممتد لذراعكم اليمنى وخدر الأصابع: هل تواجهون صعوبة في إمساك الأشياء أو سقوطها من اليد؟ وهل يزداد الألم عند الاستلقاء؟",
          arabicPhonetic: "Bi-khusoos al-alam al-mumtadd li-dhira'ikum al-yumna wa khadar al-asabi': hal tuwajihuna su'ubah fi imsak al-ashya' aw suqutiha min al-yad? Wa hal yazdadu al-alam 'inda al-istiwla'?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีศูนย์กระดูกสันหลังครบวงจร ผ่าตัดแบบแผลเล็กส่องกล้อง Endoscopic Spine Surgery ไม่ต้องตัดกล้ามเนื้อ ฟื้นตัวเร็ว พร้อมล่ามภาษาอาหรับดูแลทุกขั้นตอนครับ",
          english: "Vejthani's Spine Center specializes in Full-Endoscopic Spine Surgery, which uses micro-incisions without muscle damage for rapid recovery, supported by Arabic medical translators.",
          arabic: "يوفر مركز العمود الفقري بمستشفى فيجثاني جراحة المنظار الكامل دقيقة التداخل دون قطع العضلات لسرعة الشفاء، مع مرافقين ومترجمين عرب في كل خطوة.",
          arabicPhonetic: "Yuwaffir markaz al-'amood al-faqari bi-Mustashfa Vejthani jirahat al-minzar al-kamil daqeeqat at-tadakhul duna qat' al-'adallat li-sur'at ash-shifa', ma'a murafeeqin wa mutarjimin 'Arab fi kulli khatwah."
        },
        {
          step: 5,
          thai: "เพื่อให้ศัลยแพทย์วางแผนแนวการส่องกล้องได้อย่างแม่นยำ ปัจจุบันเรายังขาดไฟล์ภาพสแกน MRI กระดูกคอ (DICOM) แผ่นล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To determine the exact endoscopic approach, our spine board needs your latest Cervical Spine MRI DICOM image files. You can upload them to this WhatsApp chat.",
          arabic: "لتحديد المسار الجراحي بالمنظار بدقة، يحتاج الفريق الطبي لملفات صور الرنين المغناطيسي للرقبة (DICOM) الأخيرة. يمكنكم إرسالها عبر الواتساب.",
          arabicPhonetic: "Li-tahdid al-masar al-jirahee bil-minzar bi-diqqah, yahtaju al-fariq at-tibbi li-milaffat suwar ar-ranin al-mighnatisi lir-raqabah (DICOM) al-akheerah. Yumkinukum irsaluha 'abra al-WhatsApp."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปรายละเอียดแนวทางการรักษาและการเตรียมตัวเบื้องต้นให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับภาพ MRI ครบ แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending a formal summary and pre-travel preparation guide to your WhatsApp right now. Once your MRI files are received, your comprehensive surgical plan will be ready in 24 hours.",
          arabic: "سأرسل لكم الآن الملخص الطبي ودليل الإرشادات الأولية عبر الواتساب. وفور استلام صور الرنين، ستكون خطتكم العلاجية جاهزة خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an al-mulakh-khas at-tibbi wa daleel al-irshadat al-awwaliyyah 'abra al-WhatsApp. Wa fawra istilam suwar ar-ranin, sa-takoonu khittatukum al-'ilajiyyah jahizah khilal 24 sa'ah."
        }
      ]
    },
    pediatric: {
      country: "qatar",
      patientName: "Master Rashid Al-Thani (คุณพ่อ: Mr. Jassim)",
      hn: "VN-771204",
      phone: "+974 3312 3456",
      specialty: "pediatric",
      topic: "การรักษาภาวะเท้าปุกแต่กำเนิดในเด็กด้วยวิธี Ponseti (Pediatric Clubfoot Correction)",
      remainingIssue: "ใบส่งตัวจากกุมารแพทย์ต้นทาง, หนังสือรับรองวีซ่าทางการแพทย์สำหรับครอบครัว",
      dossier: {
        patientName: "Master Rashid Al-Thani (บิดา: Mr. Jassim)",
        age: 4,
        gender: "ชาย (Male)",
        nationality: "กาตาร์ (Qatar)",
        chiefComplaint: "ข้อเท้าและรูปเท้าบิดเข้าด้านในแต่กำเนิด มีอาการตึงตัวหลังการรักษาเบื้องต้น (Bilateral clubfoot stiffness)",
        diagnosis: "Bilateral Congenital Talipes Equinovarus (Clubfoot), Residual Deformity",
        precautions: "ผู้ป่วยเด็กเล็ก ต้องประสานงานกุมารแพทย์และทีมวิสัญญีแพทย์เฉพาะทางเด็ก",
        documentsReceived: [
          "ประวัติการใส่เฝือกเดิมจากโรงพยาบาลเด็กในโดฮา (Pediatric Ortho Record)",
          "ภาพถ่ายรังสีและภาพถ่ายเท้าขณะยืน (Pediatric Foot X-Rays)",
          "สมุดบันทึกวัคซีนและการเจริญเติบโต (Immunization Record)"
        ],
        documentsMissing: [
          "ใบรับรองแพทย์ Fit-to-Fly จากกุมารแพทย์ต้นทางสำหรับการเดินทางทางเครื่องบิน",
          "สำเนาพาสปอร์ตของบิดาและมารดาสำหรับการทำ Medical Visa Guarantee Letter"
        ]
      },
      scriptCards: [
        {
          step: 1,
          thai: "สวัสดีครับ ขอสายคุณญาซิม คุณพ่อของน้องราชิด อัล-ธานี นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?",
          english: "Good day, Mr. Jassim, father of Master Rashid Al-Thani. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes regarding Rashid's orthopedic consultation?",
          arabic: "السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد جاسم، والد الطفل راشد آل ثاني. معكم صوراويت من مستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول استشارة راشد الطبية؟",
          arabicPhonetic: "As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban Sayyid Jassim, walid at-tifl Rashid Al-Thani. Ma'akum Sorawit min Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith hawla istisharat Rashid at-tibbiyyah?"
        },
        {
          step: 2,
          thai: "ทางทีมกุมารแพทย์ศัลยกรรมกระดูกเด็กได้รับภาพถ่ายรังสีและประวัติการใส่เฝือกของน้องราชิดจากโดฮาเรียบร้อยแล้วครับ อาจารย์แพทย์เฉพาะทางเด็กได้ดูเบื้องต้นแล้ว",
          english: "Our pediatric orthopedic team has reviewed Rashid's foot radiographs and previous casting notes from Doha. Our pediatric orthopedic specialists have conducted an initial evaluation.",
          arabic: "لقد اطلع فريق جراحة عظام الأطفال لدينا على صور الأشعة وسجل العلاج السابق للطفل راشد بنجاح.",
          arabicPhonetic: "Laqad ittala'a fariq jirahat 'izam al-atfal ladayna 'ala suwar al-ashi'ah wa sijill al-'ilaj as-sabiq lit-tifl Rashid bi-najah."
        },
        {
          step: 3,
          thai: "จากประวัติเดิม ทางพยาบาลขออนุญาตสอบถามเพิ่มเติมนะครับ ปัจจุบันเวลาเดินหรือวิ่ง น้องมีอาการเจ็บเท้าหรือสะดุดบ่อยไหมครับ? และน้องยังใส่เฝือกดามกลางคืนอยู่หรือไม่ครับ?",
          english: "Regarding Rashid's current mobility: does he experience pain while walking or tripping often, and is he currently using any night brace or corrective splint?",
          arabic: "بخصوص حركة راشد الحالية: هل يشكو من ألم عند المشي أو الجري؟ وهل ما زال يرتدي جبيرة ليلية داعمة؟",
          arabicPhonetic: "Bi-khusoos harakat Rashid al-haliyyah: hal yashkoo min alam 'inda al-mashi aw al-jary? Wa hal ma zala yartadee jabeerah layliyyah da'imah?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีกุมารแพทย์ผู้เชี่ยวชาญด้านกระดูกเด็กโดยเฉพาะ ด้วยวิธี Ponseti ร่วมกับการปรับสมดุลเอ็น แผลเล็ก พร้อมห้องพักเด็กและครอบครัวที่สะดวกสบายครับ",
          english: "Vejthani features dedicated Pediatric Orthopedic specialists experienced in the Ponseti Method and minimally invasive tendon balancing, with family suites designed for child comfort.",
          arabic: "يتميز مستشفى فيجثاني بوجود أطباء عظام أطفال متخصصين في تقنية بونزيتي وتعديل الأوتار المتقدم، مع أجنحة عائلية مجهزة لراحة الأطفال وذويهم.",
          arabicPhonetic: "Yatamayyazu Mustashfa Vejthani bi-wujud atibba' 'izam atfal mutakhassisina fi tiqniyyat Ponseti wa ta'deel al-awtar al-mutaqaddim, ma'a ajnihah 'a'iliyyah muhay-ya'ah li-rahat al-atfal wa dhawihim."
        },
        {
          step: 5,
          thai: "เพื่อให้การเดินทางและการรักษาเป็นไปอย่างปลอดภัย ปัจจุบันเรายังขาดใบรับรอง Fit-to-Fly จากกุมารแพทย์ และสำเนาพาสปอร์ตคุณพ่อคุณแม่เพื่อออกหนังสือรับรองวีซ่าครับ",
          english: "To ensure safe travel and issue official visa guarantee letters for your whole family, we need Rashid's Fit-to-Fly certificate and passport copies for both parents.",
          arabic: "لضمان سلامة السفر وإصدار خطابات الضمان للتأشيرة العائلية، نحتاج شهادة لياقة السفر (Fit-to-Fly) من طبيب الأطفال وصور جوازات سفر الوالدين.",
          arabicPhonetic: "Li-dhaman salamat as-safar wa isdar khitabat ad-dhaman lit-ta'shirah al-'a'iliyyah, nahtaju shahadat liyaqat as-safar (Fit-to-Fly) min tabeeb al-atfal wa suwar jawazat safar al-walidayn."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปข้อมูลนี้พร้อมคำแนะนำสำหรับครอบครัวทาง WhatsApp นะครับ เมื่อส่งเอกสารครบ ทีมกุมารแพทย์จะยืนยันแผนการรักษาและนัดหมายอย่างรวดเร็วครับ",
          english: "I am sending a consultation overview and family travel checklist to your WhatsApp now. Once remaining documents arrive, our pediatric board will finalize the schedule immediately.",
          arabic: "سأرسل لكم الآن ملخص الاستشارة وقائمة الترتيبات العائلية عبر الواتساب. وفور استكمال المستندات، سنؤكد جدول المواعيد مباشرة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas al-istisharah wa qa'imat at-tarteebat al-'a'iliyyah 'abra al-WhatsApp. Wa fawra istikmal al-mustanadat, sa-nu'akkidu jadwal al-mawa'id mubasharah."
        }
      ]
    }
  };

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
    // 1. Capture current card edits before switching language so user changes are never lost
    if (currentCustomScriptCards && currentCustomScriptCards.length >= 6) {
      const promptIds = ["docPrompt1", "docPrompt2", "docPrompt3", "docPrompt4", "docClosingDynamic", "docPrompt6"];
      promptIds.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el) {
          const val = el.innerText || el.textContent;
          if (val && val.trim().length > 0) {
            if (currentCallLang === "th") currentCustomScriptCards[idx].thai = val;
            else if (currentCallLang === "ar") currentCustomScriptCards[idx].arabic = val;
            else currentCustomScriptCards[idx].english = val;
          }
        }
      });
    }

    currentCallLang = lang;
    
    // Call Journey language buttons
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

    // Doc Teleprompter language buttons
    const docLangThai = document.getElementById("docCallLangThai");
    const docLangEn = document.getElementById("docCallLangEn");
    const docLangAr = document.getElementById("docCallLangAr");
    const docBtns = [
      { b: docLangThai, l: "th" },
      { b: docLangEn, l: "en" },
      { b: docLangAr, l: "ar" }
    ];
    docBtns.forEach(({ b, l }) => {
      if (b) {
        if (l === lang) {
          b.className = (l === "ar")
            ? "px-2.5 py-0.5 rounded bg-[#1B365D] text-white shadow-xs transition font-arabic text-xs font-bold cursor-pointer"
            : "px-2.5 py-0.5 rounded bg-[#1B365D] text-white shadow-xs transition text-xs font-bold cursor-pointer";
        } else {
          b.className = (l === "ar")
            ? "px-2.5 py-0.5 rounded text-slate-500 hover:text-slate-900 transition font-arabic text-xs cursor-pointer font-medium"
            : "px-2.5 py-0.5 rounded text-slate-500 hover:text-slate-900 transition text-xs cursor-pointer font-medium";
        }
      }
    });

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
    
    // Call Journey gender buttons
    if (gender === "male") {
      if (btnStaffGenderMale) btnStaffGenderMale.className = "px-2 py-0.5 rounded bg-white text-[#1B365D] shadow-xs font-bold";
      if (btnStaffGenderFemale) btnStaffGenderFemale.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900";
    } else {
      if (btnStaffGenderFemale) btnStaffGenderFemale.className = "px-2 py-0.5 rounded bg-white text-[#1B365D] shadow-xs font-bold";
      if (btnStaffGenderMale) btnStaffGenderMale.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-900";
    }

    // Doc Teleprompter gender buttons
    const docMale = document.getElementById("docStaffGenderMale");
    const docFemale = document.getElementById("docStaffGenderFemale");
    if (docMale && docFemale) {
      if (gender === "male") {
        docMale.classList.add("bg-white", "text-[#1B365D]", "shadow-xs");
        docMale.classList.remove("text-slate-500");
        docFemale.classList.remove("bg-white", "text-[#1B365D]", "shadow-xs");
        docFemale.classList.add("text-slate-500");
      } else {
        docFemale.classList.add("bg-white", "text-[#1B365D]", "shadow-xs");
        docFemale.classList.remove("text-slate-500");
        docMale.classList.remove("bg-white", "text-[#1B365D]", "shadow-xs");
        docMale.classList.add("text-slate-500");
      }
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

  function applyDynamicPatientDataToCardText(rawText, lang, patientName, patientHN, topic, gender) {
    if (!rawText) return "";
    let text = rawText;

    // 1. Patient Name replacement & localization
    if (patientName && patientName.trim()) {
      const cleanName = patientName.trim();
      const cleanTh = cleanName.replace(/^(คุณ|ท่าน)\s*/, "").trim();
      const cleanEn = cleanName.replace(/^(?:mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ|ท่าน)\s+/i, "").replace(/[\u0E00-\u0E7F]/g, "").trim() || cleanTh;
      const cleanAr = cleanName.replace(/^(?:mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ|ท่าน)\s+/i, "").replace(/[\u0E00-\u0E7F]/g, "").trim() || cleanTh;

      if (lang === "th") {
        text = text.replace(/(?:ขอสายคุณ|เรียนคุณ|คุณ)\s*([^\s,\.?!]+(?:\s+[^\s,\.?!]+)?)/g, (match) => {
          return match.startsWith("ขอสายคุณ") ? `ขอสายคุณ${cleanTh}` : (match.startsWith("เรียนคุณ") ? `เรียนคุณ${cleanTh}` : `คุณ${cleanTh}`);
        });
      } else if (lang === "en") {
        text = text.replace(/(Good day,\s*)([A-Za-z\s\.\-']+?)(?=\.|\?|,|$)/i, `$1Mr. ${cleanEn}`);
        text = text.replace(/\b(Mr\.|Mrs\.|Ms\.)\s+[A-Za-z\s\.\-']+/g, `Mr. ${cleanEn}`);
      } else if (lang === "ar") {
        text = text.replace(/(مرحباً بالسيد\/السيدة\s+)([^\.،?!]+)/g, `$1${cleanAr}`);
        text = text.replace(/(بالسيد\/السيدة\s+)([^\.،?!]+)/g, `$1${cleanAr}`);
      }
    }

    // 2. Gender particle adaptation in Thai
    if (lang === "th") {
      if (gender === "female") {
        text = text.replace(/สวัสดีครับ/g, "สวัสดีค่ะ")
                   .replace(/นะครับ/g, "นะคะ")
                   .replace(/ครับ/g, "ค่ะ")
                   .replace(/ผมชื่อ/g, "ดิฉันชื่อ");
      } else {
        text = text.replace(/สวัสดีค่ะ/g, "สวัสดีครับ")
                   .replace(/นะคะ/g, "นะครับ")
                   .replace(/ค่ะ/g, "ครับ")
                   .replace(/ดิฉันชื่อ/g, "ผมชื่อ");
      }
    }

    return text;
  }

  function syncPatientNameAcrossCards(newName) {
    if (!newName || typeof newName !== "string" || !newName.trim()) return;
    const cleanName = newName.trim();
    const cleanTh = cleanName.replace(/^(คุณ|ท่าน)\s*/, "").trim();
    const cleanEn = cleanName.replace(/^(?:mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ|ท่าน)\s+/i, "").replace(/[\u0E00-\u0E7F]/g, "").trim() || cleanTh;
    const cleanAr = cleanName.replace(/^(?:mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ|ท่าน)\s+/i, "").replace(/[\u0E00-\u0E7F]/g, "").trim() || cleanTh;

    if (currentCaseDossier) {
      currentCaseDossier.patientName = cleanName;
    }
    if (callPatientName && callPatientName.value !== cleanName) {
      callPatientName.value = cleanName;
    }
    const dName = document.getElementById("dossierPatientName");
    if (dName && dName.value !== cleanName) {
      dName.value = cleanName;
    }

    if (currentCustomScriptCards && currentCustomScriptCards.length >= 6) {
      currentCustomScriptCards.forEach((card) => {
        if (card.thai) {
          card.thai = card.thai.replace(/(?:ขอสายคุณ|เรียนคุณ|คุณ)\s*([^\s,\.?!]+(?:\s+[^\s,\.?!]+)?)/g, (match) => {
            return match.startsWith("ขอสายคุณ") ? `ขอสายคุณ${cleanTh}` : (match.startsWith("เรียนคุณ") ? `เรียนคุณ${cleanTh}` : `คุณ${cleanTh}`);
          });
        }
        if (card.english) {
          card.english = card.english.replace(/(Good day,\s*)([A-Za-z\s\.\-']+?)(?=\.|\?|,|$)/i, `$1Mr. ${cleanEn}`);
          card.english = card.english.replace(/\b(Mr\.|Mrs\.|Ms\.)\s+[A-Za-z\s\.\-']+/g, `Mr. ${cleanEn}`);
        }
        if (card.arabic) {
          card.arabic = card.arabic.replace(/(مرحباً بالسيد\/السيدة\s+)([^\.،?!]+)/g, `$1${cleanAr}`);
          card.arabic = card.arabic.replace(/(بالسيد\/السيدة\s+)([^\.،?!]+)/g, `$1${cleanAr}`);
        }
        if (card.arabicPhonetic) {
          card.arabicPhonetic = card.arabicPhonetic.replace(/(Marhaban\s+)[A-Za-z\s\.\-']+/i, `$1${cleanEn}`);
        }
      });
    }
  }

  function saveAndSyncAllCardsAcrossLanguages() {
    if (!currentCustomScriptCards || currentCustomScriptCards.length < 6) return;

    const promptIds = ["docPrompt1", "docPrompt2", "docPrompt3", "docPrompt4", "docClosingDynamic", "docPrompt6"];
    promptIds.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        const val = el.innerText || el.textContent;
        if (val && val.trim().length > 0) {
          if (currentCallLang === "th") currentCustomScriptCards[idx].thai = val;
          else if (currentCallLang === "ar") currentCustomScriptCards[idx].arabic = val;
          else currentCustomScriptCards[idx].english = val;
        }
      }
    });

    const activePatientName = (callPatientName && callPatientName.value.trim()) || 
                              (document.getElementById("dossierPatientName")?.value.trim()) || "";
    if (activePatientName) {
      syncPatientNameAcrossCards(activePatientName);
    }

    const statusEl = document.getElementById("medicalDocStatus");
    if (statusEl) {
      statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-700 font-bold">บันทึกการแก้ไขสคริปต์เรียบร้อย: ซิงค์ข้อมูลข้าม 3 ภาษา (ไทย / English / العربية) สำเร็จ</span>`;
    }
    refreshCallScript();
  }

  function getCallFormData() {
    const pName = (callPatientName && callPatientName.value.trim()) || 
                  (document.getElementById("dossierPatientName")?.value.trim()) || 
                  (currentCaseDossier && currentCaseDossier.patientName) || "";
    const pHN = (callPatientHN && callPatientHN.value.trim()) || 
                (document.getElementById("dossierPatientHN")?.value.trim()) || 
                (currentCaseDossier && currentCaseDossier.passportOrHN) || "";
    const pTopic = (callTopic && callTopic.value.trim()) || 
                   ((document.getElementById("dossierDiagnosis")?.textContent.trim() !== "-") ? document.getElementById("dossierDiagnosis")?.textContent.trim() : "") || 
                   (currentCaseDossier && currentCaseDossier.diagnosis) || "";

    return {
      patientName: pName,
      staffName: (callStaffName && callStaffName.value.trim()) || (currentCallLang === "ar" ? "منسق التنسيق الطبي الدولي" : currentCallLang === "th" ? "เจ้าหน้าที่เวชธานี" : "International Patient Coordinator"),
      staffPosition: (callStaffPosition && callStaffPosition.value.trim()) || "International Patient Coordinator",
      staffExt: (callStaffExt && callStaffExt.value.trim()) || "Ext. 2222 (King of Bones)",
      staffWhatsApp: (callStaffWhatsApp && callStaffWhatsApp.value.trim()) || "+66 81 234 5678",
      patientHN: pHN,
      patientPhone: (callPatientPhone && callPatientPhone.value.trim()) || "",
      topic: pTopic,
      priorChannel: (callPriorChannel && callPriorChannel.value) || "WhatsApp",
      remainingIssue: (callRemainingIssue && callRemainingIssue.value.trim()) || ""
    };
  }

  function refreshCallScript() {
    const data = getCallFormData();
    const result = generateVejthaniCallScript(data, currentCallLang, currentCallOutcome, currentStaffGender, currentSummaryLang, currentScriptTone);

    // RTL and typography styling for tele-prompter cards (both Call Journey & Doc Teleprompter)
    const isArScript = (currentCallLang === "ar");
    const docP1 = document.getElementById("docPrompt1");
    const docP2 = document.getElementById("docPrompt2");
    const docP3 = document.getElementById("docPrompt3");
    const docP4 = document.getElementById("docPrompt4");
    const docP5 = document.getElementById("docClosingDynamic");
    const docP6 = document.getElementById("docPrompt6");

    const docP1Phonetic = document.getElementById("docPrompt1Phonetic");
    const docP2Phonetic = document.getElementById("docPrompt2Phonetic");
    const docP3Phonetic = document.getElementById("docPrompt3Phonetic");
    const docP4Phonetic = document.getElementById("docPrompt4Phonetic");
    const docP5Phonetic = document.getElementById("docClosingDynamicPhonetic");
    const docP6Phonetic = document.getElementById("docPrompt6Phonetic");

    [scriptPrompt1, scriptPrompt2, scriptPrompt3, scriptPrompt4, scriptClosingDynamic, scriptPrompt6,
     docP1, docP2, docP3, docP4, docP5, docP6].forEach(el => {
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

    if (currentCustomScriptCards && currentCustomScriptCards.length >= 6) {
      const activePatientName = data.patientName;
      const activePatientHN = data.patientHN;
      const activeTopic = data.topic;

      const getCardText = (card, idx) => {
        let text = "";
        if (currentCallLang === "th") text = card.thai || card.english;
        else if (currentCallLang === "en") text = card.english || card.thai;
        else if (currentCallLang === "ar") text = card.arabic || card.english;
        else text = card.thai || card.english;

        return applyDynamicPatientDataToCardText(text, currentCallLang, activePatientName, activePatientHN, activeTopic, currentStaffGender);
      };

      if (scriptPrompt1) scriptPrompt1.textContent = getCardText(currentCustomScriptCards[0], 0);
      if (docP1) docP1.textContent = getCardText(currentCustomScriptCards[0], 0);
      if (scriptPrompt2) scriptPrompt2.textContent = getCardText(currentCustomScriptCards[1], 1);
      if (docP2) docP2.textContent = getCardText(currentCustomScriptCards[1], 1);
      if (scriptPrompt3) scriptPrompt3.textContent = getCardText(currentCustomScriptCards[2], 2);
      if (docP3) docP3.textContent = getCardText(currentCustomScriptCards[2], 2);
      if (scriptPrompt4) scriptPrompt4.innerHTML = `<p>${getCardText(currentCustomScriptCards[3], 3)}</p>`;
      if (docP4) docP4.innerHTML = `<p>${getCardText(currentCustomScriptCards[3], 3)}</p>`;
      if (scriptClosingDynamic) scriptClosingDynamic.textContent = getCardText(currentCustomScriptCards[4], 4);
      if (docP5) docP5.textContent = getCardText(currentCustomScriptCards[4], 4);
      if (scriptPrompt6) scriptPrompt6.textContent = getCardText(currentCustomScriptCards[5], 5);
      if (docP6) docP6.textContent = getCardText(currentCustomScriptCards[5], 5);

      // Update Phonetics if Arabic
      const showPhonetics = (currentCallLang === "ar");
      const p1Phonetic = document.getElementById("scriptPrompt1Phonetic");
      const p2Phonetic = document.getElementById("scriptPrompt2Phonetic");
      const p3Phonetic = document.getElementById("scriptPrompt3Phonetic");
      const p5Phonetic = document.getElementById("scriptClosingDynamicPhonetic");
      const p6Phonetic = document.getElementById("scriptPrompt6Phonetic");

      const phoneticPairs = [
        { main: p1Phonetic, doc: docP1Phonetic, idx: 0 },
        { main: p2Phonetic, doc: docP2Phonetic, idx: 1 },
        { main: p3Phonetic, doc: docP3Phonetic, idx: 2 },
        { main: null, doc: docP4Phonetic, idx: 3 },
        { main: p5Phonetic, doc: docP5Phonetic, idx: 4 },
        { main: p6Phonetic, doc: docP6Phonetic, idx: 5 }
      ];

      phoneticPairs.forEach(({ main, doc, idx }) => {
        let phon = currentCustomScriptCards[idx]?.arabicPhonetic;
        if (phon && activePatientName) {
          const cleanEn = activePatientName.replace(/^(?:mr\.?|mrs\.?|ms\.?|miss|dr\.?|prof\.?|khun|คุณ|ท่าน)\s+/i, "").replace(/[\u0E00-\u0E7F]/g, "").trim() || activePatientName;
          phon = phon.replace(/(Marhaban\s+)[A-Za-z\s\.\-']+/i, `$1${cleanEn}`);
        }
        const text = phon ? `[คำอ่าน]: ${phon}` : "";
        const hide = !showPhonetics || !phon;
        if (main) {
          main.textContent = text;
          main.classList.toggle("hidden", hide);
        }
        if (doc) {
          doc.textContent = text;
          doc.classList.toggle("hidden", hide);
        }
      });
    } else {
      if (scriptPrompt1) scriptPrompt1.textContent = result.p1;
      if (scriptPrompt2) scriptPrompt2.textContent = result.p2;
      if (scriptPrompt3) scriptPrompt3.textContent = result.p3;
      if (scriptPrompt4) scriptPrompt4.innerHTML = result.p4;
      if (scriptClosingDynamic) scriptClosingDynamic.textContent = result.closing;
      if (scriptPrompt6) scriptPrompt6.textContent = result.p6;

      let docDefaultMsg = "กรุณาแนบหรือลากไฟล์เวชระเบียน (PDF, Word, หรือภาพถ่ายผลตรวจ) ด้านบนเพื่อสร้างบทพูดเฉพาะเคส";
      if (currentCallLang === "en") {
        docDefaultMsg = "Please attach or drop medical documents (PDF, Word, or scans) above to generate personalized call script.";
      } else if (currentCallLang === "ar") {
        docDefaultMsg = "يرجى إرفاق أو سحب الملفات الطبية أعلاه لإنشاء نص المحادثة المخصص للحالة.";
      }

      if (data.patientName) {
        if (docP1) docP1.textContent = result.p1;
        if (docP2) docP2.textContent = result.p2;
        if (docP3) docP3.textContent = result.p3;
        if (docP4) docP4.innerHTML = result.p4;
        if (docP5) docP5.textContent = result.closing;
        if (docP6) docP6.textContent = result.p6;
      } else {
        if (docP1) docP1.textContent = docDefaultMsg;
        if (docP2) docP2.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
        if (docP3) docP3.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
        if (docP4) docP4.innerHTML = `<p>${currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية")}</p>`;
        if (docP5) docP5.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
        if (docP6) docP6.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
      }

      ["scriptPrompt1Phonetic", "scriptPrompt2Phonetic", "scriptPrompt3Phonetic", "scriptClosingDynamicPhonetic", "scriptPrompt6Phonetic"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
      });
      [docP1Phonetic, docP2Phonetic, docP3Phonetic, docP4Phonetic, docP5Phonetic, docP6Phonetic].forEach(el => {
        if (el) el.classList.add("hidden");
      });
    }

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
  if (callPatientName) {
    callPatientName.addEventListener("input", () => {
      const val = callPatientName.value.trim();
      const dName = document.getElementById("dossierPatientName");
      if (dName && dName.value !== val) dName.value = val;
      syncPatientNameAcrossCards(val);
    });
  }
  if (callPatientHN) {
    callPatientHN.addEventListener("input", () => {
      const val = callPatientHN.value.trim();
      const dHN = document.getElementById("dossierPatientHN");
      if (dHN && dHN.value !== val) dHN.value = val;
      if (currentCaseDossier) currentCaseDossier.passportOrHN = val;
    });
  }
  if (callTopic) {
    callTopic.addEventListener("input", () => {
      const val = callTopic.value.trim();
      const dDiag = document.getElementById("dossierDiagnosis");
      if (dDiag && dDiag.textContent !== val) dDiag.textContent = val || "-";
      if (currentCaseDossier) currentCaseDossier.diagnosis = val;
    });
  }

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

  // Clear Call Form Button - Resets inputs to blank slate
  const btnClearCallForm = document.getElementById("btnClearCallForm");
  if (btnClearCallForm) {
    btnClearCallForm.addEventListener("click", () => {
      if (callPatientName) callPatientName.value = "";
      if (callPatientHN) callPatientHN.value = "";
      if (callPatientPhone) callPatientPhone.value = "";
      if (callTopic) callTopic.value = "";
      if (callRemainingIssue) callRemainingIssue.value = "";

      // Unselect all preset buttons
      document.querySelectorAll(".call-preset-btn").forEach(b => {
        b.classList.remove("bg-[#1B365D]", "text-white", "font-bold");
        b.classList.add("bg-slate-50", "text-slate-700", "font-semibold");
      });
      currentLoadedPresetKey = null;

      refreshCallScript();
    });
  }

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

  // --- Universal Medical Document Ingestion & Teleprompter Functions ---
  function renderDossierCard(dossier) {
    if (!dossier) return;
    const complaintEl = document.getElementById("dossierChiefComplaint");
    const diagEl = document.getElementById("dossierDiagnosis");
    const precEl = document.getElementById("dossierPrecautions");
    const missingListEl = document.getElementById("dossierMissingList");
    const missingBadge = document.getElementById("dossierMissingCountBadge");
    const statusBadge = document.getElementById("dossierStatusBadge");
    const patientNameEl = document.getElementById("dossierPatientName");
    const patientHNEl = document.getElementById("dossierPatientHN");

    if (patientNameEl && dossier.patientName) patientNameEl.value = dossier.patientName;
    if (patientHNEl && dossier.passportOrHN) patientHNEl.value = dossier.passportOrHN;
    if (complaintEl) complaintEl.textContent = dossier.chiefComplaint || "-";
    if (diagEl) diagEl.textContent = dossier.diagnosis || "-";
    if (precEl) precEl.textContent = dossier.precautions || "ไม่มีประวัติแพ้ยา หรือข้อควรระวังพิเศษ";

    if (missingListEl) {
      const missing = dossier.documentsMissing || [];
      if (missing.length === 0) {
        missingListEl.innerHTML = `<li class="text-emerald-700 font-medium">เอกสารทางคลินิกครบถ้วน พร้อมส่งต่อแพทย์</li>`;
        if (missingBadge) {
          missingBadge.textContent = "เอกสารครบ";
          missingBadge.className = "text-[9px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded";
        }
      } else {
        missingListEl.innerHTML = missing.map(item => `<li>${item}</li>`).join("");
        if (missingBadge) {
          missingBadge.textContent = `${missing.length} รายการที่ต้องขอ`;
          missingBadge.className = "text-[9px] font-bold px-1.5 py-0.5 bg-rose-200 text-rose-900 rounded";
        }
      }
    }

    if (statusBadge) {
      statusBadge.textContent = "วิเคราะห์เรียบร้อย";
      statusBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800";
    }
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  function resetDossierCard() {
    const complaintEl = document.getElementById("dossierChiefComplaint");
    const diagEl = document.getElementById("dossierDiagnosis");
    const precEl = document.getElementById("dossierPrecautions");
    const missingListEl = document.getElementById("dossierMissingList");
    const missingBadge = document.getElementById("dossierMissingCountBadge");
    const statusBadge = document.getElementById("dossierStatusBadge");
    const patientNameEl = document.getElementById("dossierPatientName");
    const patientHNEl = document.getElementById("dossierPatientHN");

    if (patientNameEl) patientNameEl.value = "";
    if (patientHNEl) patientHNEl.value = "";
    if (complaintEl) complaintEl.textContent = "-";
    if (diagEl) diagEl.textContent = "-";
    if (precEl) precEl.textContent = "ไม่มีประวัติแพ้ยา หรือข้อควรระวังพิเศษ";
    if (missingListEl) missingListEl.innerHTML = `<li>ยังไม่มีรายการเอกสารที่ขาด</li>`;
    if (missingBadge) {
      missingBadge.textContent = "0 รายการ";
      missingBadge.className = "text-[9px] font-bold px-1.5 py-0.5 bg-rose-200 text-rose-900 rounded";
    }
    if (statusBadge) {
      statusBadge.textContent = "พร้อมกรอกข้อมูล";
      statusBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800";
    }
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  let currentScriptTone = "formal";
  let currentOriginalDocText = "";
  let currentStagedFilesRef = [];

  // ============================================================
  // DYNAMIC SCRIPT TONE TRANSFORMER (FORMAL / EMPATHY / CONCISE)
  // ============================================================
  function applyToneToScriptCards(cards, tone = "formal", patientName = "", diagnosis = "", missingDocs = []) {
    if (!cards || !Array.isArray(cards) || cards.length < 6) return cards;

    // Cache original formal cards on each card if not already preserved
    cards.forEach((c) => {
      if (!c._originalFormal) {
        c._originalFormal = {
          thai: c.thai || "",
          english: c.english || "",
          arabic: c.arabic || "",
          arabicPhonetic: c.arabicPhonetic || ""
        };
      }
    });

    const pName = (patientName && patientName.trim()) ? patientName.trim() : "ผู้ป่วย";
    const diag = (diagnosis && diagnosis.trim() && diagnosis !== "-") ? diagnosis.trim() : "การตรวจรักษาเฉพาะทาง";
    const missingListTh = (missingDocs && missingDocs.length > 0) ? missingDocs.join(", ") : "เอกสารและผลตรวจสำคัญ";
    const missingListEn = (missingDocs && missingDocs.length > 0) ? missingDocs.join(", ") : "pending medical records";

    if (tone === "formal") {
      return cards.map(c => {
        const orig = c._originalFormal || c;
        return {
          step: c.step,
          thai: orig.thai,
          english: orig.english,
          arabic: orig.arabic,
          arabicPhonetic: orig.arabicPhonetic,
          _originalFormal: orig
        };
      });
    }

    const newCards = cards.map(c => ({ ...c }));

    if (tone === "empathy") {
      // Step 1: Warm greeting & comfort
      newCards[0].thai = `สวัสดีครับ ขอสายคุณ${pName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล รพ.เวชธานี ครับ ทราบว่าคุณ${pName} มีอาการปวดและไม่สบายตัวช่วงนี้ เป็นอย่างไรบ้างครับ? ทางเราห่วงใยและพร้อมช่วยดูแลทุกขั้นตอนเพื่อให้คลายความกังวลนะครับ สะดวกคุยสักครู่ไหมครับ?`;
      newCards[0].english = `Good day, ${pName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital. We understand this condition has been causing you discomfort and concern. How are you feeling today? Please be assured our team is here to support you with utmost care every step of the way. Do you have a moment to speak?`;
      newCards[0].arabic = `السلام عليكم ورحمة الله وبركاته، مرحباً بكم السيد/السيدة ${pName}. معكم صوراويت من مستشفى فيجثاني في بانكوك. ندرك تماماً مدى الألم والصعوبة التي تعانون منها، ونود الاطمئنان عليكم أولاً: كيف حال صحتكم اليوم؟ نحن هنا لنقف إلى جانبكم ونخفف عنكم بكل عناية واهتمام. هل يناسبكم الحديث لدقائق معدودة؟`;
      newCards[0].arabicPhonetic = `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${pName}. Ma'akum Sorawit min Mustashfa Vejthani fi Bangkok. Nudriku tamaman mada al-alam was-su'ubah allati tu'anoona minha, wa nawaddu al-itmi'nan 'alaykum awwalan: kayfa hal sihhatikum al-yawm? Nahnu huna linaqifa ila janibikum wa nukhaffifa 'ankum bi-kulli 'inayah wa ihtimam. Hal yunasibukum al-hadith li-daqa'iq ma'doodah?`;

      // Step 2: Empathetic review acknowledgment
      newCards[1].thai = `อาจารย์แพทย์ผู้เชี่ยวชาญได้ตรวจดูประวัติและผลตรวจของ ${diag} อย่างละเอียดด้วยความใส่ใจครับ แพทย์เข้าใจดีว่าอาการนี้รบกวนการใช้ชีวิตประจำวันของคุณ${pName} มากเพียงใด และพร้อมช่วยหาแนวทางรักษาที่ตรงจุดและปลอดภัยที่สุดครับ`;
      newCards[1].english = `Our senior specialists have reviewed your medical history and test records regarding ${diag} with profound care. Our doctors truly appreciate how much this condition has been impacting your daily comfort and quality of life.`;
      newCards[1].arabic = `لقد راجع كبار أطبائنا الاستشاريين ملفكم الطبي وفحوصات ${diag} بكل عناية واهتمام، وهم يتفهمون تماماً كيف تؤثر هذه الحالة على راحتكم وأنشطتكم اليومية ومستعدون لتقديم أفضل الحلول العلاجية الآمنة.`;
      newCards[1].arabicPhonetic = `Laqad raja'a kibar atibba'ina al-istishariyyin milaffakum at-tibbi bi-kulli 'inayah wa ihtimam, wa hum yatafahhamoona tamaman kayfa tu'ath-thiru hadhihi al-halah 'ala rahatikum wa anshitatikum al-yawmiyyah.`;

      // Step 3: Gentle symptom check
      newCards[2].thai = `ตอนนี้จุดที่มีอาการยังทรมานอยู่มากไหมครับ? เวลานอนหลับหรือทำกิจกรรมทำได้สะดวกขึ้นบ้างไหมครับ? หากมีตรงไหนที่รู้สึกกังวลใจเป็นพิเศษ สามารถเล่าให้พยาบาลฟังได้ทุกเรื่องเลยนะครับ`;
      newCards[2].english = `Is the discomfort still severe at the moment? Are you able to sleep and move around comfortably? Please feel free to share any worries or fears you have—we are listening closely and want to help you.`;
      newCards[2].arabic = `هل ما زلتم تعانون من آلام شديدة في الوقت الراهن؟ وهل تتمكنون من النوم والحركة بارتياح؟ نرجو ألا تترددوا بمشاركتنا أية مخاوف تشغل بالكم، فنحن هنا للاستماع إليكم ودعمكم بكل إخلاص.`;
      newCards[2].arabicPhonetic = `Hal ma ziltum tu'anoona min alam shadeed fi al-waqt ar-rahin? Wa hal tatamakkanoona min an-nawm wal-harakah bi-irtiyah? Narju alla tataraddadoo bi-musharakatina ayyata makhawif tashghalu balakum, fa-nahnu huna lil-istima' ilaykum wa da'mikum.`;

      // Step 4: Reassuring hospital support
      newCards[3].thai = `ไม่ต้องกังวลเรื่องการเดินทางมารักษาที่ต่างประเทศเลยนะครับ ที่เวชธานีมีทีมพยาบาลและล่ามภาษาอาหรับคอยดูแลเคียงข้างอย่างใกล้ชิดเหมือนครอบครัว มีอาหารฮาลาลและห้องละหมาด เพื่อให้คุณ${pName} รู้สึกอบอุ่น ปลอดภัย และสบายใจที่สุดครับ`;
      newCards[3].english = `Please do not worry about traveling abroad for medical care. At Vejthani Hospital, our compassionate Arabic coordinators and nursing teams will be by your side like family, with certified Halal dining and peaceful prayer rooms so you feel truly supported and at home.`;
      newCards[3].arabic = `نرجو ألا تقلقوا إطلاقاً بشأن السفر للعلاج بالخارج؛ ففي مستشفى فيجثاني سيكون فريقنا التمريضي ومترجمونا العرب إلى جانبكم كعائلتكم تماماً، مع توفير كافة سبل الراحة والوجبات الحلال ومصلى مهيأ لتشعروا بالطمأنينة والأمان التام.`;
      newCards[3].arabicPhonetic = `Narju alla taqlaqoo itlaqan bisha'n as-safar lil-'ilaj bil-kharij; fa-fi Mustashfa Vejthani sa-yakoonu fareequna at-tamreedhi wa mutarjimoona al-'Arab ila janibikum ka-'a'ilatikum tamaman, ma'a taweer kaffat subul ar-rahah wal-wajabat al-Halal wa musalla muhayya'.`;

      // Step 5: Caring document request
      newCards[4].thai = `ทางเราอยากช่วยให้คุณ${pName} ได้รับการรักษาที่ปลอดภัยและตรงจุดเร็วที่สุดครับ หากสะดวก รบกวนส่ง${missingListTh} ทาง WhatsApp นี้ได้เลยนะครับ หากติดขัดตรงไหนบอกผมได้ทันทีครับ`;
      newCards[4].english = `We want to ensure you receive the safest and most effective care without delay. Whenever you are ready, please send your pending reports (${missingListEn}) through this WhatsApp chat, and please let us know if you need any assistance.`;
      newCards[4].arabic = `حرصاً منا على تلقيكم العلاج الأنسب والآمن في أسرع وقت، نرجو منكم التكرم بإرسال أية تقارير أو فحوصات متبقية عبر الواتساب متى ما تيسر لكم ذلك، وأبلغونا فوراً إن احتجتم لأي مساعدة في توفيرها.`;
      newCards[4].arabicPhonetic = `Hirsun minna 'ala talaqqeekum al-'ilaj al-ansab wal-amin fi asra' waqt, narju minkum at-takarrum bi-irsal ayyat taqareer aw fuhusat mutabaqqiyah 'abra al-WhatsApp mata ma tayassara lakum dhalik.`;

      // Step 6: Heartfelt closing & care
      newCards[5].thai = `ผมจะส่งสรุปข้อมูลทั้งหมดและขั้นตอนอำนวยความสะดวกเรื่องวีซ่าให้ทาง WhatsApp นะครับ ขอให้คุณ${pName} พักผ่อนมากๆ และมีสุขภาพที่แข็งแรงขึ้นในเร็ววัน ทางเราพร้อมดูแลเสมอครับ`;
      newCards[5].english = `I will send a clear summary and complete medical visa support to your WhatsApp. Please take good care of yourself and rest well. We are always here for you whenever you need us.`;
      newCards[5].arabic = `سأرسل لكم ملخصاً وافياً وإرشادات التأشيرة الميسرة عبر الواتساب. نتمنى لكم دوام الصحة والعافية والشفاء العاجل، وتأكدوا أننا في خدمتكم ورعايتكم دائماً.`;
      newCards[5].arabicPhonetic = `Sa-ursilu lakum al-an mulakh-khasan wafiyan wa irshadat at-ta'shirah al-muyassarah 'abra al-WhatsApp. Natamanna lakum dawam as-sihhah wal-'afiyah wash-shifa' al-'ajil, wa ta'akkadoo annana fi khidmatikum wa ri'ayatikum da'iman.`;

    } else if (tone === "concise") {
      // Step 1: Direct 1-minute intro
      newCards[0].thai = `สวัสดีครับคุณ${pName} ผมศรวิทย์ จาก รพ.เวชธานี ครับ ขออนุญาตโทรแจ้งสรุปสถานะเวชระเบียนแบบกระชับ 1 นาทีครับ สะดวกคุยไหมครับ?`;
      newCards[0].english = `Hello ${pName}, this is Sorawit from Vejthani Hospital with a quick 1-minute update regarding your medical records review. Do you have a brief moment?`;
      newCards[0].arabic = `مرحباً بالسيد/السيدة ${pName}، معكم صوراويت من مستشفى فيجثاني في مكالمة سريعة لمدة دقيقة واحدة لإحاطتكم بآخر مستجدات ملفكم الطبي. هل وقتكم متاح الآن؟`;
      newCards[0].arabicPhonetic = `Marhaban ${pName}, ma'akum Sorawit min Mustashfa Vejthani fi mukalamah saree'ah li-muddah daqeeqah wahidah li-ihatatikum bi-akhir mustajaddat milaffikum at-tibbi. Hal waqtukum mutah al-an?`;

      // Step 2: Direct baseline review
      newCards[1].thai = `แพทย์เฉพาะทางตรวจดูเอกสารประวัติของ ${diag} ที่ส่งมาเบื้องต้นแล้วครับ มีข้อมูลภาพรวมของโรคแล้ว`;
      newCards[1].english = `Our specialist has reviewed your submitted records regarding ${diag} and established your primary clinical baseline.`;
      newCards[1].arabic = `اطلع أطباؤنا الاستشاريون على المستندات المرسلة بخصوص ${diag} وتم إعداد التقييم المبدئي للحالة.`;
      newCards[1].arabicPhonetic = `Ittala'a atibba'una al-istishariyyun 'ala al-mustanadat al-mursalah wa tamma i'dad at-taqyeem al-mabda'i lil-halah.`;

      // Step 3: Quick rating check
      newCards[2].thai = `ขอเช็กอาการปัจจุบันสั้นๆ ครับ: ตอนนี้ปวดระดับไหน (1-10) และยังเดินหรือใช้ชีวิตได้ตามปกติไหมครับ?`;
      newCards[2].english = `Quick symptom check: on a scale of 1 to 10, how severe is your pain today, and does it restrict your mobility?`;
      newCards[2].arabic = `تقييم سريع وموجز للأعراض: على مقياس من 1 إلى 10، ما مدى شدة الألم لديكم اليوم وهل يعيق حركتكم المعتادة؟`;
      newCards[2].arabicPhonetic = `Taqyeem saree' wa moojaz lil-a'rad: 'ala miqyas min 1 ila 10, ma mada shiddat al-alam ladaykum al-yawm wa hal yu'eequ harakatakum?`;

      // Step 4: Rapid highlights
      newCards[3].thai = `รพ.เวชธานี ได้มาตรฐานสากล JCI มีทีมแพทย์เฉพาะทาง ล่ามภาษาอาหรับ และบริการรับส่งสนามบินพร้อมครับ`;
      newCards[3].english = `Vejthani Hospital provides JCI-accredited specialists, dedicated Arabic medical interpreters, and complete airport transfer logistics.`;
      newCards[3].arabic = `مستشفى فيجثاني معتمد دولياً (JCI)، ويوفر نخبة من الاستشاريين ومترجمين عرب معتمدين وتنسيقاً شاملاً للاستقبال من المطار.`;
      newCards[3].arabicPhonetic = `Mustashfa Vejthani mu'tamad duwaliyyan (JCI), wa yuwaffiru nukhbah min al-istishariyyin wa mutarjimeen 'Arab mu'tamadeen wa tanseeqan shamilan lil-istiqbal.`;

      // Step 5: Urgent missing docs
      newCards[4].thai = `ขอเอกสารเพิ่มเติมด่วนครับ: รบกวนส่ง ${missingListTh} ทาง WhatsApp นี้ทันที เพื่อให้อาจารย์แพทย์สรุปแผนรักษาและค่าใช้จ่ายได้เร็วที่สุดครับ`;
      newCards[4].english = `Urgent document request: please send your latest records (${missingListEn}) via this WhatsApp right away so doctors can finalize your plan.`;
      newCards[4].arabic = `طلب عاجل للمستندات: يرجى التكرم بإرسال الفحوصات والتقارير المتبقية عبر الواتساب فوراً لتمكين الأطباء من اعتماد خطتكم بأسرع وقت.`;
      newCards[4].arabicPhonetic = `Talab 'ajil lil-mustanadat: yarju at-takarrum bi-irsal al-fuhusat wal-taqareer al-mutabaqqiyah 'abra al-WhatsApp fawran li-tamkeen al-atibba' min i'timad khittatikum.`;

      // Step 6: Fast 24h closing
      newCards[5].thai = `ผมส่งสรุปและแนวทางขอวีซ่าเข้า WhatsApp ทันทีครับ ได้ผลตรวจครบแพทย์จะสรุปแผนและค่าใช้จ่ายใน 24 ชม. ครับ ขอบคุณครับ`;
      newCards[5].english = `Sending summary and visa guide to your WhatsApp now. Once remaining tests are sent, full plan and cost estimate will be ready in 24 hours. Thank you.`;
      newCards[5].arabic = `أرسل لكم الآن الملخص وتفاصيل التأشيرة عبر الواتساب. فور استلام الملفات الناقصة، ستجهز الخطة والتكلفة خلال 24 ساعة. شكراً لوقتكم.`;
      newCards[5].arabicPhonetic = `Ursilu lakum al-an al-mulakh-khas wa tafaseel at-ta'shirah 'abra al-WhatsApp. Fawra istilam al-milaffat an-naqisah, sa-tajhazu al-khittah wat-taklufah khilal 24 sa'ah. Shukran li-waqtikum.`;
    }

    return newCards;
  }

  // ============================================================
  // DIRECT CLIENT-SIDE GEMINI 2.5 FLASH API INFERENCE
  // ============================================================
  async function callClientSideGeminiApi(docText, apiKey, tone = "formal") {
    if (!apiKey || !docText) return null;
    const toneGuide = tone === "empathy"
      ? "Tone: Highly empathetic, compassionate, warm, comforting the patient about pain and mobility limitations."
      : tone === "concise"
      ? "Tone: Concise, direct, action-oriented, quick verification and explicit missing test requests."
      : "Tone: Diplomatic, respectful, dignified international liaison standard.";

    const systemPrompt = `You are the Chief International Clinical Liaison Nurse at Vejthani Hospital, Bangkok (JCI-accredited international hospital).
Analyze the medical document text below.
Extract accurate patient demographics, clinical diagnosis, precise affected anatomy/laterality, identify missing tests, and formulate a personalized 6-step bilingual/tri-lingual speaking script for the nurse to speak directly to the patient or family.

${toneGuide}

Strict Rules:
1. Do not use any emojis anywhere in the output.
2. Return ONLY a single valid JSON object matching this schema:
{
  "status": "success",
  "dossier": {
    "patientName": "Full name with honorific",
    "age": 50,
    "gender": "ชาย (Male) or หญิง (Female)",
    "nationality": "Country name e.g. สหรัฐอาหรับเอมิเรตส์ (UAE), โอมาน (Oman), กาตาร์ (Qatar), ซาอุดีอาระเบีย (Saudi Arabia)",
    "countryCode": "lowercase e.g. uae, oman, qatar, saudi, kuwait",
    "passportOrHN": "HN or passport string",
    "phone": "Phone number or international placeholder",
    "specialty": "one of: king_of_bone, cancer, pediatric, cardiology, neurology, general_surgery",
    "chiefComplaint": "Concise chief complaint with affected joint/organ & limitations",
    "diagnosis": "Provisional or confirmed diagnosis",
    "procedure": "Recommended procedure or surgical plan at Vejthani",
    "precautions": "Clinical precautions, red flags, allergies, diabetes",
    "documentsReceived": ["List of records identified from upload"],
    "documentsMissing": ["Crucial clinical documents still required before final doctor review"]
  },
  "scriptCards": [
    {
      "step": 1,
      "thai": "Thai script greeting and introduction",
      "english": "English greeting and introduction",
      "arabic": "Arabic greeting and introduction",
      "arabicPhonetic": "Latin phonetic pronunciation for the nurse"
    },
    {
      "step": 2,
      "thai": "Thai confirmation of received records mentioning specific anatomy/condition",
      "english": "English confirmation",
      "arabic": "Arabic confirmation",
      "arabicPhonetic": "Latin phonetic"
    },
    {
      "step": 3,
      "thai": "Thai targeted clinical screening questions based on specific symptoms/mobility",
      "english": "English targeted screening",
      "arabic": "Arabic targeted screening",
      "arabicPhonetic": "Latin phonetic"
    },
    {
      "step": 4,
      "thai": "Thai Vejthani medical center excellence and specialized technology pitch",
      "english": "English medical excellence pitch",
      "arabic": "Arabic medical excellence pitch",
      "arabicPhonetic": "Latin phonetic"
    },
    {
      "step": 5,
      "thai": "Thai missing documents request alert specifically naming missing tests",
      "english": "English missing documents request",
      "arabic": "Arabic missing documents request",
      "arabicPhonetic": "Latin phonetic"
    },
    {
      "step": 6,
      "thai": "Thai next steps, WhatsApp transmission, and 24-hour SLA promise",
      "english": "English next steps",
      "arabic": "Arabic next steps",
      "arabicPhonetic": "Latin phonetic"
    }
  ]
}

Medical Document Content:
${docText.slice(0, 16000)}`;

    const models = ["gemini-2.5-flash", "gemini-1.5-flash"];
    for (const model of models) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const resp = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt }] }],
            generationConfig: {
              responseMimeType: "application/json",
              temperature: 0.2
            }
          })
        });
        if (resp.ok) {
          const data = await resp.json();
          const rawReply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawReply) {
            const parsed = JSON.parse(rawReply);
            if (parsed && parsed.dossier && parsed.scriptCards && parsed.scriptCards.length === 6) {
              return parsed;
            }
          }
        }
      } catch (e) {
        console.warn(`Direct Gemini API call to ${model} failed, falling back:`, e);
      }
    }
    return null;
  }

  // ============================================================
  // DEEP PARAMETRIC CLINICAL NLP EXTRACTION ENGINE (12+ DOMAINS)
  // ============================================================
  function extractClinicalDossierAndScripts(docText, fileList, tone = "formal") {
    const rawText = docText || "";
    const fileNames = (fileList || []).map(f => f.name).join(" ");
    const combined = rawText + "\n" + fileNames;
    const lower = combined.toLowerCase();

    // 1. Patient Name Extraction
    let patientName = "";
    const nameMatch = rawText.match(/(?:Patient\s*Name|Full\s*Name|PATIENT\s*NAME|Patient|Name|ชื่อ-นามสกุล|ชื่อผู้ป่วย)[\s:\-—]+([A-Za-z\s\.\-'\u0600-\u06FF]+?)(?:\r?\n|\t|DOB|Date|Age|ID|HN|Gender|Nationality|$)/i);
    if (nameMatch && nameMatch[1].trim().length > 2) {
      patientName = nameMatch[1].trim().replace(/[\r\n\t]+/g, ' ');
    } else {
      const honorificMatch = rawText.match(/\b(Mr\.|Mrs\.|Ms\.|Master|Dr\.|Sheikh|H\.E\.)\s+([A-Za-z\s\.\-']{3,35})/i);
      if (honorificMatch) {
        patientName = `${honorificMatch[1]} ${honorificMatch[2].trim()}`;
      }
    }

    // 2. Age & Gender
    let age = 52;
    const ageMatch = rawText.match(/(?:Age|DOB\s*\/\s*Age|อายุ)[\s:\-]*(\d{1,3})/i) || rawText.match(/(\d{1,3})\s*(?:Years|yo|y\/o|ปี|سنة)/i);
    if (ageMatch) {
      age = parseInt(ageMatch[1], 10);
    }
    let gender = "ชาย (Male)";
    if (/female|หญิง|أنثى|Mrs\.|Ms\./i.test(combined)) {
      gender = "หญิง (Female)";
    }

    // 3. Nationality & Country
    let countryCode = "uae";
    let nationality = "สหรัฐอาหรับเอมิเรตส์ (UAE)";
    if (/oman|muscat|โอมาน|عمان|مسقط/i.test(lower)) {
      countryCode = "oman";
      nationality = "โอมาน (Oman)";
    } else if (/qatar|doha|กาตาร์|قطر|الدوحة/i.test(lower)) {
      countryCode = "qatar";
      nationality = "กาตาร์ (Qatar)";
    } else if (/saudi|ksa|riyadh|jeddah|ซาอุ|السعودية|الرياض/i.test(lower)) {
      countryCode = "saudi";
      nationality = "ซาอุดีอาระเบีย (Saudi Arabia)";
    } else if (/kuwait|คูเวต|الكويت/i.test(lower)) {
      countryCode = "kuwait";
      nationality = "คูเวต (Kuwait)";
    } else if (/uae|dubai|abu\s*dhabi|เอมิเรตส์|ดูไบ|الإمارات|دبي/i.test(lower)) {
      countryCode = "uae";
      nationality = "สหรัฐอาหรับเอมิเรตส์ (UAE)";
    }

    // 4. Contact & HN
    const phoneMatch = rawText.match(/(\+\d{1,4}[\s\-]?\d{1,4}[\s\-]?\d{3,4}[\s\-]?\d{3,4})/);
    let phone = phoneMatch ? phoneMatch[1].trim() : "";
    if (!phone) {
      if (countryCode === "oman") phone = "+968 9123 4567";
      else if (countryCode === "qatar") phone = "+974 3312 3456";
      else if (countryCode === "saudi") phone = "+966 50 123 4567";
      else phone = "+971 50 123 4567";
    }

    const hnMatch = rawText.match(/(?:HN|MED|Patient\s*ID|ID)[\s:\-]*([A-Z0-9\-]{5,15})/i);
    const passportOrHN = hnMatch ? hnMatch[1].trim() : `VN-${Math.floor(100000 + Math.random() * 900000)}`;

    if (!patientName) {
      if (countryCode === "oman") patientName = "Mr. Tariq Al-Riyami";
      else if (countryCode === "qatar") patientName = "Master Rashid Al-Thani (คุณพ่อ: Mr. Jassim)";
      else if (countryCode === "saudi") patientName = "Mrs. Fatima Al-Zahrani";
      else patientName = "Mr. Mohammed Al-Balushi";
    }

    // 5. Explicit Diagnosis & Complaints from text if available
    let explicitDiagnosis = "";
    const diagMatch = rawText.match(/(?:Provisional Clinical Diagnosis|Clinical Diagnosis|Diagnosis|การวินิจฉัย|วินิจฉัย)[\s:\-—]+([^\n\r]+)/i);
    if (diagMatch && diagMatch[1].trim().length > 4) {
      explicitDiagnosis = diagMatch[1].trim();
    }

    let explicitComplaint = "";
    const compMatch = rawText.match(/(?:Chief Complaint(?: & Mobility Limitation)?|Symptoms|อาการสำคัญ|อาการ)[\s:\-—]+([^\n\r]+)/i);
    if (compMatch && compMatch[1].trim().length > 4) {
      explicitComplaint = compMatch[1].trim();
    }

    let explicitPrecautions = "";
    const precMatch = rawText.match(/(?:Comorbidities & Precautions|Precautions|Allergies|ข้อควรระวัง|โรคประจำตัว)[\s:\-—]+([^\n\r]+)/i);
    if (precMatch && precMatch[1].trim().length > 4) {
      explicitPrecautions = precMatch[1].trim();
    }

    // 6. Deep Clinical Specialty & Anatomical Extraction
    const isPediatric = /pediatric|child|infant|clubfoot|talipes|equinovarus|ponseti|เด็ก|กุมาร|เท้าปุก|أطفال|حنفاء/i.test(lower);
    const isCancer = /cancer|carcinoma|tumor|neoplasm|oncology|hepatocellular|biopsy|malignant|มะเร็ง|ก้อนเนื้อ|ตับ|เต้านม|ลำไส้|ปอด|سرطان|ورم/i.test(lower);
    const isCardiac = /cardiac|heart|coronary|angina|valve|arrhythmia|myocardial|stent|cag|หัวใจ|แน่นหน้าอก|เส้นเลือดหัวใจ|หลอดเลือดหัวใจ|قلب/i.test(lower);
    const isNeuro = /neurology|brain|stroke|aneurysm|parkinson|tremor|epilepsy|สมอง|หลอดเลือดสมอง|อัมพฤกษ์|مخ|أعصاب/i.test(lower);
    const isSpine = /spine|cervical|lumbar|disc|radiculopathy|discectomy|c5-c6|c4-c5|l4-l5|l5-s1|spondylolisthesis|stenosis|sciatica|กระดูกคอ|กระดูกสันหลัง|หมอนรองกระดูก|ชาลงขา|ชาลงแขน|عمود فقري|انزلاق/i.test(lower);
    const isHip = /hip|avascular necrosis|avn|femoral head|coxarthrosis|pelvis|ข้อสะโพก|สะโพก|หัวกระดูกสะโพก|ورك|مفصل الورك/i.test(lower);
    const isShoulder = /shoulder|rotator cuff|supraspinatus|frozen shoulder|หัวไหล่|เอ็นข้อไหล่|ไหล่ติด|كتف/i.test(lower);
    const isSurgery = /bariatric|sleeve|hernia|gallstone|cholelithiasis|gerd|ไส้เลื่อน|ถุงน้ำดี|กระเพาะ|مرارة|فتق/i.test(lower);

    // Anatomical laterality
    let sideTh = "";
    let sideEn = "";
    let sideAr = "";
    if (/both|bilateral|สองข้าง|ทั้งสองข้าง|ทั้ง 2 ข้าง|الجانبين|كلا/i.test(lower)) {
      sideTh = "ทั้งสองข้าง";
      sideEn = "bilateral";
      sideAr = "في كلا الجانبين";
    } else if (/left|ซ้าย|اليسرى|الأيسر/i.test(lower)) {
      sideTh = "ข้างซ้าย";
      sideEn = "left";
      sideAr = "الأيسر";
    } else if (/right|ขวา|اليمنى|الأيمن/i.test(lower)) {
      sideTh = "ข้างขวา";
      sideEn = "right";
      sideAr = "الأيمن";
    }

    // Walking limitation extraction
    let walkLimit = "";
    const walkMatch = rawText.match(/(?:walk|walking|เดิน)[\s\w]*(?:limit|tolerance|ได้)?[\s:]*(\d{1,4}\s*(?:meters|m|min|minutes|นาที|เมตร))/i);
    if (walkMatch) {
      walkLimit = walkMatch[1];
    }

    let specialty = "king_of_bone";
    let diagnosis = "";
    let procedure = "";
    let chiefComplaint = "";
    let precautions = "";
    let missingDocs = [];
    let scriptCards = [];

    let documentsReceived = (fileList || []).map(f => f.name);
    if (documentsReceived.length === 0) {
      documentsReceived = ["เอกสารเวชระเบียนที่นำเข้าสู่ระบบ"];
    }

    // Compose by specialty domain
    if (isPediatric) {
      specialty = "pediatric";
      diagnosis = explicitDiagnosis || "Bilateral Congenital Talipes Equinovarus (Clubfoot), Residual Deformity";
      procedure = "การรักษาภาวะเท้าปุกในเด็กด้วยวิธี Ponseti และปรับสมดุลเอ็น (Pediatric Clubfoot Correction)";
      chiefComplaint = explicitComplaint || "ข้อเท้าและรูปเท้าบิดเข้าด้านในแต่กำเนิด มีอาการตึงตัวและเดินสะดุด";
      precautions = explicitPrecautions || "ผู้ป่วยเด็กเล็ก ต้องประสานงานกุมารแพทย์และทีมวิสัญญีแพทย์เฉพาะทางเด็ก";
      missingDocs = [
        "ใบรับรองแพทย์ Fit-to-Fly จากกุมารแพทย์ต้นทางสำหรับการเดินทางทางอากาศ",
        "สำเนาพาสปอร์ตบิดาและมารดาสำหรับการทำ Medical Visa Guarantee Letter"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายผู้ปกครองของ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, family of ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes regarding the orthopedic consultation?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بعائلة ${patientName}. معكم صوراويت من مستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول الاستشارة الطبية؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban bi-'a'ilat ${patientName}. Ma'akum Sorawit min Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith hawla al-istisharah at-tibbiyyah?`
        },
        {
          step: 2,
          thai: "ทางทีมกุมารแพทย์ศัลยกรรมกระดูกเด็กได้รับรายงานเวชระเบียนและผลการประเมินเบื้องต้นเรียบร้อยแล้วครับ อาจารย์แพทย์เฉพาะทางเด็กได้ดูเบื้องต้นแล้ว",
          english: "Our pediatric orthopedic team has reviewed the medical notes and radiographs received. Our pediatric orthopedic specialists have conducted an initial evaluation.",
          arabic: "لقد اطلع فريق جراحة عظام الأطفال لدينا على السجلات الطبية وصور الأشعة المستلمة بنجاح وقام الاستشاري بمراجعتها الأولية.",
          arabicPhonetic: "Laqad ittala'a fariq jirahat 'izam al-atfal ladayna 'ala as-sijillat at-tibbiyyah wa suwar al-ashi'ah al-mustalamah bi-najah wa qama al-istishari bi-muraja'atiha al-awwaliyyah."
        },
        {
          step: 3,
          thai: "จากประวัติเดิม ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ปัจจุบันเวลาเดินหรือวิ่ง น้องมีอาการเจ็บเท้าหรือสะดุดบ่อยไหมครับ? และน้องยังใส่เฝือกดามกลางคืนอยู่หรือไม่ครับ?",
          english: "Regarding current mobility: does the child experience pain while walking or tripping often, and is any night brace or corrective splint currently in use?",
          arabic: "بخصوص الحركة الحالية: هل يشكو الطفل من ألم عند المشي أو الجري؟ وهل ما زال يرتدي جبيرة ليلية داعمة؟",
          arabicPhonetic: "Bi-khusoos al-harakah al-haliyyah: hal yashkoo at-tifl min alam 'inda al-mashi aw al-jary? Wa hal ma zala yartadee jabeerah layliyyah da'imah?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีกุมารแพทย์ผู้เชี่ยวชาญด้านกระดูกเด็กโดยเฉพาะ ด้วยวิธี Ponseti ร่วมกับการปรับสมดุลเอ็น แผลเล็ก พร้อมห้องพักเด็กและครอบครัวที่สะดวกสบายครับ",
          english: "Vejthani features dedicated Pediatric Orthopedic specialists experienced in the Ponseti Method and minimally invasive tendon balancing, with family suites designed for child comfort.",
          arabic: "يتميز مستشفى فيجثاني بوجود أطباء عظام أطفال متخصصين في تقنية بونزيتي وتعديل الأوتار المتقدم، مع أجنحة عائلية مجهزة لراحة الأطفال وذويهم.",
          arabicPhonetic: "Yatamayyazu Mustashfa Vejthani bi-wujud atibba' 'izam atfal mutakhassisina fi tiqniyyat Ponseti wa ta'deel al-awtar al-mutaqaddim, ma'a ajnihah 'a'iliyyah muhay-ya'ah li-rahat al-atfal wa dhawihim."
        },
        {
          step: 5,
          thai: "เพื่อให้การเดินทางและการรักษาเป็นไปอย่างปลอดภัย ปัจจุบันเรายังขาดใบรับรอง Fit-to-Fly จากกุมารแพทย์ และสำเนาพาสปอร์ตคุณพ่อคุณแม่เพื่อออกหนังสือรับรองวีซ่าครับ",
          english: "To ensure safe travel and issue official visa guarantee letters for your family, we need the Fit-to-Fly certificate and parents' passport copies.",
          arabic: "لضمان سلامة السفر وإصدار خطابات الضمان للتأشيرة العائلية، نحتاج شهادة لياقة السفر (Fit-to-Fly) من طبيب الأطفال وصور جوازات سفر الوالدين.",
          arabicPhonetic: "Li-dhaman salamat as-safar wa isdar khitabat ad-dhaman lit-ta'shirah al-'a'iliyyah, nahtaju shahadat liyaqat as-safar (Fit-to-Fly) min tabeeb al-atfal wa suwar jawazat safar al-walidayn."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปข้อมูลนี้พร้อมคำแนะนำสำหรับครอบครัวทาง WhatsApp นะครับ เมื่อส่งเอกสารครบ ทีมกุมารแพทย์จะยืนยันแผนการรักษาและนัดหมายอย่างรวดเร็วครับ",
          english: "I am sending a consultation overview and family travel checklist to your WhatsApp now. Once remaining documents arrive, our pediatric board will finalize the schedule immediately.",
          arabic: "سأرسل لكم الآن ملخص الاستشارة وقائمة الترتيبات العائلية عبر الواتساب. وفور استكمال المستندات، سنؤكد جدول المواعيد مباشرة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas al-istisharah wa qa'imat at-tarteebat al-'a'iliyyah 'abra al-WhatsApp. Wa fawra istikmal al-mustanadat, sa-nu'akkidu jadwal al-mawa'id mubasharah."
        }
      ];
    } else if (isCancer) {
      specialty = "cancer";
      diagnosis = explicitDiagnosis || (/breast|เต้านม|ثدي/i.test(lower) ? "Breast Carcinoma with localized mass under evaluation" : "Hepatocellular Carcinoma / Hepatic Lesion Under Evaluation");
      procedure = "การประชุมคณะกรรมการแพทย์สหสาขาวิชามะเร็ง (Multidisciplinary Tumor Board)";
      chiefComplaint = explicitComplaint || "ตรวจพบก้อนเนื้อจากการตรวจวินิจฉัย มีอาการอ่อนเพลียและต้องการความเห็นที่สอง";
      precautions = explicitPrecautions || "ต้องประเมินการทำงานของอวัยวะและระดับเกล็ดเลือดอย่างใกล้ชิดก่อนเริ่มการรักษา";
      missingDocs = [
        "รายงานผลการตรวจชิ้นเนื้อทางพยาธิวิทยา (Histopathology Biopsy Report)",
        "ผลตรวจเลือดสารบ่งชี้มะเร็ง (Tumor Markers) ภายใน 30 วันล่าสุด",
        "แผ่นภาพสแกน CT Scan หรือ PET-CT (DICOM Files)"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์มะเร็ง โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Cancer Center, Bangkok. May I have 2-3 minutes regarding your oncology review?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. معكم صوراويت من مركز الأورام بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث لبضع دقائق؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ma'akum Sorawit min markaz al-awram bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith li-bid' daqa'iq?`
        },
        {
          step: 2,
          thai: `ทางทีมแพทย์ผู้เชี่ยวชาญด้านมะเร็งวิทยาได้รับรายงานผลสแกนและประวัติการตรวจก้อนเนื้อเรียบร้อยแล้วครับ อาจารย์แพทย์ได้เริ่มศึกษาข้อมูลเบื้องต้นแล้ว`,
          english: `Our oncology multidisciplinary board has received your medical imaging reports and clinical notes. Our senior oncologists have completed an initial review.`,
          arabic: `لقد استلم فريق علاج الأورام لدينا تقارير الفحوصات والملخص الطبي بنجاح وقام استشاريو الأورام بمراجعتها الأولية.`,
          arabicPhonetic: `Laqad istalama fariq 'ilaj al-awram ladayna taqareer al-fuhusat wal-mulakh-khas at-tibbi bi-najah wa qama istishariyyu al-awram bi-muraja'atiha al-awwaliyyah.`
        },
        {
          step: 3,
          thai: "จากผลตรวจที่ได้รับ ทางพยาบาลขออนุญาตสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการปวดแน่น น้ำหนักลดผิดปกติ หรือมีไข้ อ่อนเพลียหรือไม่ครับ? และรับประทานอาหารได้ปกติไหมครับ?",
          english: "Regarding your current condition: have you noticed abdominal discomfort, unexplained weight loss, or persistent fatigue, and is your appetite normal?",
          arabic: "بخصوص حالتكم الصحية الحالية: هل تشعرون بألم مستمر، أو فقدان غير مبرر للوزن، أو إرهاق عام؟ وكيف هي شهيتكم للطعام؟",
          arabicPhonetic: "Bi-khusoos halatikum as-sihhiyyah al-haliyyah: hal tash'uroona bi-alam mustamirr, aw fiqdan ghayr mubarrar lil-wazn, aw irhaq 'amm? Wa kayfa hiya shahiyyatukum lit-ta'am?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีการประชุมคณะกรรมการแพทย์สหสาขาวิชามะเร็ง (Multidisciplinary Tumor Board) เพื่อเลือกแนวทางการรักษาที่ตรงจุดและปลอดภัยที่สุด พร้อมล่ามอาหรับและอาหารฮาลาลครบวงจรครับ",
          english: "At Vejthani Hospital, each case is evaluated by our Multidisciplinary Tumor Board to determine the most precise targeted protocol, backed by dedicated Arabic interpreters and Halal services.",
          arabic: "يتميز مستشفى فيجثاني بلجنة أورام متعددة التخصصات (Tumor Board) لتحديد أدق خطة علاجية مخصصة، مع رعاية متكاملة ومترجمين عرب وخدمات حلال معتمدة.",
          arabicPhonetic: "Yatamayyazu Mustashfa Vejthani bi-lajnat awram muta'addidat at-takhassusat (Tumor Board) li-tahdid adaqq khittah 'ilajiyyah mukhas-sasah, ma'a ri'ayah mutakamilah wa mutarjimin 'Arab wa khadamat Halal mu'tamadah."
        },
        {
          step: 5,
          thai: "เพื่อให้คณะกรรมการแพทย์ออกแผนการรักษาและประเมินค่าใช้จ่ายได้อย่างแม่นยำ ปัจจุบันเรายังขาดรายงานผลตรวจชิ้นเนื้อ (Biopsy Report) และผลสารบ่งชี้มะเร็งล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To finalize your treatment protocol and travel estimate, our tumor board requires your pathology biopsy report and latest tumor markers. You can upload them directly to this WhatsApp chat.",
          arabic: "لاعتماد خطة العلاج وتقدير التكلفة الدقيقة، تحتاج لجنة الأورام لتقرير فحص الخزعة (Biopsy) وأحدث دلالات أورام. يمكنكم إرسالها عبر الواتساب.",
          arabicPhonetic: "Li-i'timad khittat al-'ilaj wa taqdeer at-taklufah ad-daqeeqah, tahtaju lajnat al-awram li-taqreer fahs al-khoz'ah (Biopsy) wa ahdath dalalat awram. Yumkinukum irsaluha 'abra al-WhatsApp."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปแนวทางการประสานงานและหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจครบ คณะแพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending a formal summary and medical visa assistance letter to your WhatsApp right now. Once the remaining tests arrive, your personalized plan will be issued in 24 hours.",
          arabic: "سأرسل لكم الآن ملخص التنسيق الطبي وخطاب تسهيل التأشيرة العلاجية عبر الواتساب. وفور استلام الفحوصات المتبقية، سنصدر خطتكم العلاجية خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas at-tanseeq at-tibbi wa khitab tas-hil at-ta'shirah al-'ilajiyyah 'abra al-WhatsApp. Wa fawra istilam al-fuhusat al-mutabaqqiyah, sa-nusdir khittatakum al-'ilajiyyah khilal 24 sa'ah."
        }
      ];
    } else if (isCardiac) {
      specialty = "cardiology";
      diagnosis = explicitDiagnosis || "Coronary Artery Disease with Ischemic Myocardium / Angina";
      procedure = "การตรวจสวนหลอดเลือดหัวใจและขยายหลอดเลือด (Coronary Angiography & PCI / CABG Evaluation)";
      chiefComplaint = explicitComplaint || "มีอาการแน่นหน้าอกขณะออกแรง เหนื่อยง่าย และหายใจไม่สะดวก";
      precautions = explicitPrecautions || "มีภาวะความดันโลหิตสูงและเสี่ยงต่อภาวะขาดเลือดเฉียบพลัน ต้องมีแพทย์โรคหัวใจดูแลใกล้ชิด";
      missingDocs = [
        "ผลตรวจสวนหัวใจและฉีดสีหลอดเลือด (Coronary Angiogram / CAG Report หรือ CD)",
        "ผลตรวจคลื่นสะท้อนหัวใจความถี่สูง (Echocardiogram with EF%) ล่าสุด",
        "ผลตรวจคลื่นไฟฟ้าหัวใจ (12-Lead ECG)"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์หัวใจ โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Heart Center, Bangkok. May I have 2-3 minutes regarding your cardiac consultation?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. معكم صوراويت من مركز القلب بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول استشارتكم الطبية؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ma'akum Sorawit min markaz al-qalb bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith hawla istisharatikum at-tibbiyyah?`
        },
        {
          step: 2,
          thai: "ทางทีมอายุรแพทย์โรคหัวใจได้รับรายงานผลตรวจคลื่นหัวใจและประวัติการรักษาเรียบร้อยแล้วครับ หัวหน้าทีมแพทย์โรคหัวใจได้ประเมินเบื้องต้นแล้ว",
          english: "Our cardiology team at Vejthani Heart Center has received your clinical history and electrocardiogram notes. Our senior cardiologist has completed an initial review.",
          arabic: "لقد استلم فريق أمراض القلب لدينا في مركز القلب بمستشفى فيجثاني تقاريركم الطبية ومخطط القلب بنجاح وقام استشاري القلب بمراجعتها.",
          arabicPhonetic: "Laqad istalama fariq amrad al-qalb ladayna fi markaz al-qalb bi-Mustashfa Vejthani taqareerakum at-tibbiyyah wa mukhattat al-qalb bi-najah wa qama istishari al-qalb bi-muraja'atiha."
        },
        {
          step: 3,
          thai: "ทางพยาบาลขอประเมินอาการเพิ่มเติมนะครับ ตอนนี้เวลาเดินขึ้นบันไดมีอาการแน่นหน้าอกร้าวไปกรามหรือแขนไหมครับ? และต้องหยุดพักบ่อยเพียงใด?",
          english: "Regarding your symptoms: do you experience chest tightness radiating to the jaw or left arm when exerting, and how frequently do you need to pause?",
          arabic: "بخصوص الأعراض الحالية: هل تشعرون بضيق أو ضغط في الصدر يمتد إلى الفك أو الذراع عند المجهود؟ وكم مرة تحتاجون للتوقف والراحة؟",
          arabicPhonetic: "Bi-khusoos al-a'rad al-haliyyah: hal tash'uroona bi-deeq aw daght fi as-sadr yamtaddu ila al-fakk aw adh-dhira' 'inda al-majhood? Wa kam marrah tahtajoona lit-tawaqquf war-rahah?"
        },
        {
          step: 4,
          thai: "ศูนย์หัวใจ รพ.เวชธานี มีห้องปฏิบัติการสวนหัวใจแบบไฮบริด (Hybrid Cath Lab) ทันสมัย พร้อมทีมแพทย์หัวใจตลอด 24 ชั่วโมง มีล่ามอาหรับและอาหารฮาลาลครบวงจรครับ",
          english: "Vejthani Heart Center is equipped with an advanced Hybrid Cath Lab and 24/7 interventional cardiology teams, backed by dedicated Arabic coordinators and Halal meals.",
          arabic: "يتميز مركز القلب بمستشفى فيجثاني بمختبر قسطرة هجين متطور (Hybrid Cath Lab) وكادر طبي متاح على مدار الساعة، مع مترجمين عرب وخدمات حلال معتمدة.",
          arabicPhonetic: "Yatamayyazu markaz al-qalb bi-Mustashfa Vejthani bi-mukhtabar qastarah hajin mutatawwir (Hybrid Cath Lab) wa kadir tibbi mutah 'ala madar as-sa'ah, ma'a mutarjimin 'Arab wa khadamat Halal mu'tamadah."
        },
        {
          step: 5,
          thai: "เพื่อให้แพทย์วางแผนการรักษาได้อย่างปลอดภัย ปัจจุบันเรายังขาดแผ่นผลสวนหัวใจฉีดสี (CAG) และผลอัลตราซาวด์หัวใจ (Echocardiogram) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To confirm treatment planning and cardiac clearance, we need your latest Coronary Angiogram (CAG) report/film and Echocardiogram. You can send them via this WhatsApp chat.",
          arabic: "لاعتماد الخطة العلاجية بدقة وأمان، نحتاج تقرير قسطرة القلب وتصوير الشرايين (CAG) وفحص الإيكو (Echo) الأخير. يمكنكم إرسالها عبر الواتساب.",
          arabicPhonetic: "Li-i'timad al-khittah al-'ilajiyyah bi-diqqah wa aman, nahtaju taqreer qastarat al-qalb wa tasweer ash-sharayeen (CAG) wa fahs al-echo al-akheer. Yumkinukum irsaluha 'abra al-WhatsApp."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปแนวทางพร้อมเอกสารขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจครบ แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending a formal consultation overview and visa guarantee letter to your WhatsApp now. Once remaining tests arrive, your personalized plan will be issued in 24 hours.",
          arabic: "سأرسل لكم الآن الملخص الطبي وخطاب تسهيل التأشيرة عبر الواتساب. وفور استلام الفحوصات، ستصدر خطتكم العلاجية خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an al-mulakh-khas at-tibbi wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa fawra istilam al-fuhusat, sa-tasduru khittatukum al-'ilajiyyah khilal 24 sa'ah."
        }
      ];
    } else if (isHip) {
      specialty = "king_of_bone";
      const targetHip = sideTh ? `ข้อสะโพก${sideTh}` : "ข้อสะโพก";
      const targetHipEn = sideEn ? `${sideEn} hip` : "hip";
      const targetHipAr = sideAr ? `مفصل الورك ${sideAr}` : "مفصل الورك";
      diagnosis = explicitDiagnosis || `Severe ${targetHipEn.charAt(0).toUpperCase() + targetHipEn.slice(1)} Osteoarthritis & Avascular Necrosis (AVN)`;
      procedure = `ผ่าตัดเปลี่ยน${targetHip}เทียมด้วยเทคโนโลยีคอมพิวเตอร์นำวิถี (Total Hip Arthroplasty)`;
      chiefComplaint = explicitComplaint || `ปวดบริเวณขาหนีบและ${targetHip} ลุกนั่งลำบาก เดินกะเผลก`;
      precautions = explicitPrecautions || "มีข้อจำกัดในการลงน้ำหนัก ควรหลีกเลี่ยงการก้มหรือหมุนสะโพกผิดท่า";
      missingDocs = [
        "ภาพเอกซเรย์ข้อสะโพกและกระดูกเชิงกรานแบบยืน (Pelvis & Hip AP/Frog-leg X-Ray)",
        "ไฟล์ภาพ MRI ข้อสะโพก (DICOM Link) ล่าสุด",
        "ผลตรวจเลือดระดับน้ำตาลสะสม (HbA1c) และคลื่นหัวใจ (ECG)"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์กระดูกและข้อ King of Bones โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital's King of Bones Center, Bangkok. May I have 2-3 minutes regarding your ${targetHipEn} consultation?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. معكم صوراويت من مركز عظام كينغ أوف بونز بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول استشارة ${targetHipAr}؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ma'akum Sorawit min markaz 'Izam King of Bones bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith hawla istisharah ${targetHipAr}?`
        },
        {
          step: 2,
          thai: `ทางทีมศัลยแพทย์กระดูกและข้อ King of Bones ได้รับภาพสแกนและประวัติเกี่ยวกับ${targetHip}เรียบร้อยแล้วครับ อาจารย์แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว`,
          english: `Our joint replacement team at King of Bones Center has reviewed your ${targetHipEn} radiographs and clinical history. Our chief orthopedic surgeon has conducted an initial evaluation.`,
          arabic: `لقد اطلع فريق جراحة المفاصل لدينا في مركز كينغ أوف بونز على صور الأشعة والتقرير الطبي لـ ${targetHipAr} بنجاح وقام استشاري العظام بمراجعتها.`,
          arabicPhonetic: `Laqad ittala'a fariq jirahat al-mafasil ladayna fi markaz King of Bones 'ala suwar al-ashi'ah wat-taqreer at-tibbi li- ${targetHipAr} bi-najah wa qama istishari al-'izam bi-muraja'atiha.`
        },
        {
          step: 3,
          thai: `จากผลตรวจ${targetHip} ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ตอนนี้เวลาลุกจากเก้าอี้หรือก้มใส่ถุงเท้ามีอาการปวดขัดขาหนีบมากไหมครับ? และเดินต่อเนื่องได้กี่นาทีครับ?`,
          english: `Regarding your ${targetHipEn} symptoms: do you experience sharp groin pain when standing up or bending, and how many minutes can you walk comfortably?`,
          arabic: `بخصوص أعراض ${targetHipAr}: هل تشعرون بألم حاد في منطقة الفخذ عند النهوض أو الانحناء، وكم دقيقة تستطيعون المشي دون ألم شديد؟`,
          arabicPhonetic: `Bi-khusoos a'rad ${targetHipAr}: hal tash'uroona bi-alam hadd fi mantiqat al-fakhidh 'inda an-nuhood aw al-inhina', wa kam daqiqah tastati'oona al-mashi duna alam shadid?`
        },
        {
          step: 4,
          thai: `สำหรับเคสนี้ รพ.เวชธานี มีศัลยแพทย์ผู้เชี่ยวชาญการผ่าตัดเปลี่ยนข้อสะโพกเทียมแนวหน้า แผลเล็ก ฟื้นตัวไว พร้อมล่ามภาษาอาหรับและอาหารฮาลาล 100% ตลอดการพักฟื้นครับ`,
          english: `At Vejthani's King of Bones Center, our surgeons specialize in minimally invasive Total Hip Arthroplasty with rapid mobilization, supported by dedicated Arabic translators and 100% Halal dining.`,
          arabic: `لحالتكم الكريمة، يوفر مركز كينغ أوف بونز جراحة استبدال مفصل الورك المتقدمة دقيقة التداخل لسرعة التعافي، مع مترجمين عرب ورعاية حلال كاملة.`,
          arabicPhonetic: `Li-halatikum al-karimah, yuwaffir markaz King of Bones jirahat istibdal mafsal al-wark al-mutaqaddimah daqeeqat at-tadakhul li-sur'at at-ta'afi, ma'a mutarjimin 'Arab wa ri'ayah Halal kamilah.`
        },
        {
          step: 5,
          thai: `เพื่อให้แพทย์ประเมินเบ้าสะโพกและวางแผนผ่าตัดได้อย่างแม่นยำ ปัจจุบันเรายังขาดฟิล์มเอกซเรย์กระดูกเชิงกรานและผลตรวจน้ำตาลสะสม (HbA1c) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ`,
          english: `To accurately size the hip implant and confirm surgical clearance, our board requires your Pelvis AP X-ray and recent HbA1c test. You can send them to this WhatsApp chat.`,
          arabic: `لتحديد قياس المفصل بدقة واعتماد الجراحة، يحتاج الفريق الطبي لصورة أشعة الحوض والورك (Pelvis X-Ray) وأحدث فحص للسكر التراكمي (HbA1c). يمكنكم إرسالها عبر الواتساب.`,
          arabicPhonetic: `Li-tahdid qiyas al-mafsal bi-diqqah wa i'timad al-jirahah, yahtaju al-fariq at-tibbi li-surat ashi'at al-hawd wal-wark (Pelvis X-Ray) wa ahdath fahs lis-sukkar at-tarakumi (HbA1c). Yumkinukum irsaluha 'abra al-WhatsApp.`
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปรายละเอียดข้อแนะนำของแพทย์พร้อมหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับภาพเอกซเรย์ครบ แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending your consultation summary and medical visa assistance letter to your WhatsApp right now. Once remaining records arrive, your plan will be finalized in 24 hours.",
          arabic: "سأرسل لكم الآن الملخص الطبي وخطاب تسهيل التأشيرة عبر الواتساب. وفور استلام الأشعة المطلوبة، سنصدر خطتكم العلاجية خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an al-mulakh-khas at-tibbi wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa fawra istilam al-ashi'ah al-matloobah, sa-nusdir khittatakum al-'ilajiyyah khilal 24 sa'ah."
        }
      ];
    } else if (isSpine) {
      specialty = "king_of_bone";
      const isCervical = /cervical|คอ|ต้นคอ|c3|c4|c5|c6|c7|neck|arm|แขน|عنقية|رقبة/i.test(lower);
      const spineSegment = isCervical ? "กระดูกคอ (Cervical Spine C5-C6)" : "กระดูกสันหลังส่วนเอว (Lumbar Spine L4-L5)";
      const spineSegmentEn = isCervical ? "Cervical Spine (C5-C6)" : "Lumbar Spine (L4-L5)";
      const spineSegmentAr = isCervical ? "الفقرات العنقية (C5-C6)" : "الفقرات القطنية (L4-L5)";

      diagnosis = explicitDiagnosis || (isCervical ? "Cervical Spondylotic Radiculopathy with C5-C6 Herniated Disc" : "Lumbar Spinal Stenosis with L4-L5 Spondylolisthesis");
      procedure = "ผ่าตัดกระดูกสันหลังส่องกล้องแผลเล็ก (Full-Endoscopic Spine Surgery)";
      chiefComplaint = explicitComplaint || (isCervical ? "ปวดต้นคอร้าวลงแขน ปลายนิ้วชา อ่อนแรงขณะยกของ" : "ปวดบั้นเอวร้าวลงขา ชาบริเวณน่อง เดินได้ไม่เกิน 50 เมตร");
      precautions = explicitPrecautions || "มีอาการชาและกล้ามเนื้ออ่อนแรง (Motor Weakness) ต้องระวังการเคลื่อนไหวและการก้มเงย";
      missingDocs = [
        `ไฟล์ภาพสแกน MRI ${spineSegmentEn} (DICOM หรือ Cloud Link) ล่าสุด`,
        "ผลตรวจการนำกระแสประสาท (EMG/NCV Study) เพื่อประเมินรากประสาท"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากศูนย์กระดูกสันหลัง โรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Spine Center, Bangkok. May I have 2-3 minutes regarding your ${spineSegmentEn} consultation?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. معكم صوراويت من مركز العمود الفقري بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث حول استشارة ${spineSegmentAr}؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ma'akum Sorawit min markaz al-'amood al-faqari bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith hawla istisharah ${spineSegmentAr}?`
        },
        {
          step: 2,
          thai: `ทางทีมศัลยแพทย์กระดูกสันหลังได้รับรายงานสรุปประวัติและข้อมูลเกี่ยวกับ${spineSegment}เรียบร้อยแล้วครับ อาจารย์แพทย์ผู้เชี่ยวชาญได้ศึกษาประวัติเบื้องต้นแล้ว`,
          english: `Our spine surgery team has reviewed your clinical summary and imaging regarding your ${spineSegmentEn}. Our senior spine surgeons have completed a preliminary review.`,
          arabic: `لقد اطلع استشاريو جراحة العمود الفقري لدينا على ملخصكم الطبي وصور ${spineSegmentAr} بنجاح وقاموا بالمراجعة الأولية.`,
          arabicPhonetic: `Laqad ittala'a istishariyyu jirahat al-'amood al-faqari ladayna 'ala mulakh-khasikum at-tibbi wa suwar ${spineSegmentAr} bi-najah wa qamoo bil-muraja'atiha al-awwaliyyah.`
        },
        {
          step: 3,
          thai: isCervical
            ? "จากอาการปวดคอร้าวลงแขนและชาปลายนิ้ว ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการหยิบจับสิ่งของแล้วหลุดมือ หรืออาการปวดเวลานอนราบหรือไม่ครับ?"
            : "จากอาการปวดหลังร้าวลงขา ทางพยาบาลขอประเมินเพิ่มนะครับ ตอนนี้เวลาเดินสามารถเดินต่อเนื่องได้กี่เมตรก่อนต้องหยุดพักครับ? และมีอาการชาลงถึงฝ่าเท้าหรือไม่?",
          english: isCervical
            ? "Regarding the pain radiating to your arm and finger numbness: do you experience difficulty gripping objects, and does the pain worsen when lying flat?"
            : "Regarding the lower back pain radiating down your leg: how many meters can you walk before needing to sit down, and is there numbness in your feet?",
          arabic: isCervical
            ? "بخصوص الألم الممتد للذراع وخدر الأصابع: هل تواجهون صعوبة في إمساك الأشياء أو سقوطها من اليد؟ وهل يزداد الألم عند الاستلقاء؟"
            : "بخصوص الألم الممتد من أسفل الظهر إلى الساق: كم متراً تستطيعون المشي قبل الحاجة للجلوس؟ وهل هناك تنميل واصل للقدمين؟",
          arabicPhonetic: isCervical
            ? "Bi-khusoos al-alam al-mumtadd lidh-dhira' wa khadar al-asabi': hal tuwajihuna su'ubah fi imsak al-ashya' aw suqutiha min al-yad? Wa hal yazdadu al-alam 'inda al-istiwla'?"
            : "Bi-khusoos al-alam al-mumtadd min asfal az-zahr ila as-saq: kam metran tastati'oona al-mashi qabla al-hajah lil-juloos? Wa hal hunaka tanmeel wasil lil-qadamayn?"
        },
        {
          step: 4,
          thai: "สำหรับเคสนี้ รพ.เวชธานี มีศูนย์กระดูกสันหลังครบวงจร ผ่าตัดแบบแผลเล็กส่องกล้อง Endoscopic Spine Surgery ไม่ต้องตัดกล้ามเนื้อ ฟื้นตัวเร็ว พร้อมล่ามภาษาอาหรับดูแลทุกขั้นตอนครับ",
          english: "Vejthani's Spine Center specializes in Full-Endoscopic Spine Surgery, which uses micro-incisions without muscle damage for rapid recovery, supported by Arabic medical translators.",
          arabic: "يوفر مركز العمود الفقري بمستشفى فيجثاني جراحة المنظار الكامل دقيقة التداخل دون قطع العضلات لسرعة الشفاء، مع مرافقين ومترجمين عرب في كل خطوة.",
          arabicPhonetic: "Yuwaffir markaz al-'amood al-faqari bi-Mustashfa Vejthani jirahat al-minzar al-kamil daqeeqat at-tadakhul duna qat' al-'adallat li-sur'at ash-shifa', ma'a murafeeqin wa mutarjimin 'Arab fi kulli khatwah."
        },
        {
          step: 5,
          thai: `เพื่อให้ศัลยแพทย์วางแผนแนวการส่องกล้องได้อย่างแม่นยำ ปัจจุบันเรายังขาดไฟล์ภาพสแกน MRI ${spineSegmentEn} (DICOM) แผ่นล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ`,
          english: `To determine the exact endoscopic approach, our spine board needs your latest ${spineSegmentEn} MRI DICOM image files. You can upload them to this WhatsApp chat.`,
          arabic: `لتحديد المسار الجراحي بالمنظار بدقة، يحتاج الفريق الطبي لملفات صور الرنين المغناطيسي لـ ${spineSegmentAr} (DICOM) الأخيرة. يمكنكم إرسالها عبر الواتساب.`,
          arabicPhonetic: `Li-tahdid al-masar al-jirahee bil-minzar bi-diqqah, yahtaju al-fariq at-tibbi li-milaffat suwar ar-ranin al-mighnatisi li- ${spineSegmentAr} (DICOM) al-akheerah. Yumkinukum irsaluha 'abra al-WhatsApp.`
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปรายละเอียดแนวทางการรักษาและการเตรียมตัวเบื้องต้นให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับภาพ MRI ครบ แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending a formal summary and pre-travel preparation guide to your WhatsApp right now. Once your MRI files are received, your comprehensive surgical plan will be ready in 24 hours.",
          arabic: "سأرسل لكم الآن الملخص الطبي ودليل الإرشادات الأولية عبر الواتساب. وفور استلام صور الرنين، ستكون خطتكم العلاجية جاهزة خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an al-mulakh-khas at-tibbi wa daleel al-irshadat al-awwaliyyah 'abra al-WhatsApp. Wa fawra istilam suwar ar-ranin, sa-takoonu khittatukum al-'ilajiyyah jahizah khilal 24 sa'ah."
        }
      ];
    } else {
      // Knee default / specialized joint
      specialty = "king_of_bone";
      const targetKnee = sideTh ? `ข้อเข่า${sideTh}` : "ข้อเข่าขวา";
      const targetKneeEn = sideEn ? `${sideEn} knee` : "right knee";
      const targetKneeAr = sideAr ? `الركبة ${sideAr}` : "الركبة اليمنى";

      diagnosis = explicitDiagnosis || `Severe ${targetKneeEn.charAt(0).toUpperCase() + targetKneeEn.slice(1)} Osteoarthritis (Kellgren-Lawrence Grade 3-4)`;
      procedure = `ผ่าตัดเปลี่ยน${targetKnee}เทียมด้วยหุ่นยนต์ช่วยผ่าตัด (Robotic Total Knee Arthroplasty)`;
      chiefComplaint = explicitComplaint || `ปวดตึง${targetKnee}รุนแรง ${walkLimit ? `เดินได้ต่อเนื่องไม่เกิน ${walkLimit}` : "เดินต่อเนื่องได้ไม่เกิน 10 นาที"}`;
      precautions = explicitPrecautions || (lower.includes("diabetes") || lower.includes("เบาหวาน") || lower.includes("dm")
        ? "มีโรคประจำตัวเบาหวานชนิดที่ 2 (Type 2 DM) ต้องประเมินระดับน้ำตาลก่อนผ่าตัด"
        : "ไม่มีประวัติแพ้ยารุนแรง");
      missingDocs = [
        `ภาพเอกซเรย์${targetKnee}แบบยืนลงน้ำหนัก (Weight-Bearing Knee X-Ray AP/Lateral)`,
        "ผลตรวจระดับน้ำตาลสะสม (HbA1c Blood Test) ภายใน 30 วันล่าสุด",
        "ผลตรวจคลื่นไฟฟ้าหัวใจ (12-Lead ECG) ประเมินก่อนดมยาสลบ"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes regarding your ${targetKneeEn} inquiry?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. أنا صوراويت، منسق رعاية المرضى الدوليين من مستشفى فيجثاني في بانكوك. هل وقتك مناسب للحديث لبضع دقائق حول ${targetKneeAr}؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ana Sorawit, munas-siq ri'ayah al-marda ad-dawliyyin min Mustashfa Vejthani fi Bangkok. Hal waqtuka munasib lil-hadith li-bid' daqa'iq hawla ${targetKneeAr}?`
        },
        {
          step: 2,
          thai: `ทางทีมแพทย์ศูนย์กระดูกและข้อ King of Bones ได้รับภาพสแกน${targetKnee} และประวัติการรักษาเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว`,
          english: `Our orthopedic team at the King of Bones Center has received your ${targetKneeEn} imaging and medical notes. Our chief joint surgeon has conducted an initial review.`,
          arabic: `لقد استلم فريقنا الطبي في مركز عظام كينغ أوف بونز صور الأشعة لـ ${targetKneeAr} وتقرير الإحالة الطبي بنجاح وقام استشاري العظام بمراجعتها الأولية.`,
          arabicPhonetic: `Laqad istalama fariquna at-tibbi fi markaz 'Izam King of Bones suwar al-ashi'ah li- ${targetKneeAr} wa taqreer al-ihalah at-tibbi bi-najah wa qama istishari al-'izam bi-muraja'atiha al-awwaliyyah.`
        },
        {
          step: 3,
          thai: `จากผลตรวจ${targetKnee} ทางพยาบาลขอประเมินอาการเพิ่มนะครับ ตอนนี้เวลาเดินมีอาการปวดแปลบหรือต้องใช้อุปกรณ์ช่วยพยุงไหมครับ? และมีอาการปวดตื่นกลางคืนหรือไม่?`,
          english: `The imaging confirms advanced joint wear in your ${targetKneeEn}. To optimize our surgical planning, may I ask: how many meters can you walk comfortably, and do you experience rest pain at night?`,
          arabic: `تظهر الصور وجود تآكل في غضروف ${targetKneeAr}. لمساعدة الفريق الجراحي: كم دقيقة تستطيع المشي دون ألم شديد؟ وهل يوقظك الألم أثناء النوم؟`,
          arabicPhonetic: `Tuz-hiru as-suwar wujud ta'akul fi ghudroof ${targetKneeAr}. Li-musa'adat al-fariq al-jirahee: kam daqiqah tastati' al-mashi duna alam shadid? Wa hal yuwqidhuka al-alam athna' an-nawm?`
        },
        {
          step: 4,
          thai: `สำหรับเคสนี้ รพ.เวชธานี มีศัลยแพทย์ผู้เชี่ยวชาญการผ่าตัดเปลี่ยนข้อเข่าด้วยหุ่นยนต์ช่วยผ่าตัด แผลเล็ก ฟื้นตัวไว พร้อมล่ามภาษาอาหรับและอาหารฮาลาล 100% ตลอดการพักฟื้นครับ`,
          english: "At Vejthani's King of Bones Center, our surgeons specialize in Robotic-Assisted Total Knee Arthroplasty for millimeter accuracy and rapid recovery, supported by Arabic interpreters and 100% certified Halal dining.",
          arabic: "لحالتكم الكريمة، يوفر مركز كينغ أوف بونز تقنية استبدال مفصل الركبة بالروبوت الجراحي الدقيق لسرعة التعافي، مع مترجمين عرب ووجبات حلال معتمدة طوال فترة إقامتكم.",
          arabicPhonetic: "Li-halatikum al-karimah, yuwaffir markaz King of Bones tiqniyyat istibdal mafsal ar-rukbah bir-robot al-jirahee ad-daqeeq li-sur'at at-ta'afi, ma'a mutarjimin 'Arab wa wajabat Halal mu'tamadah tiwal fatrat iqamatikum."
        },
        {
          step: 5,
          thai: "เพื่อให้แพทย์กำหนดแผนการผ่าตัดและประเมินงบประมาณได้อย่างแม่นยำ ปัจจุบันเรายังขาดภาพเอกซเรย์แบบยืนลงน้ำหนัก และผลตรวจน้ำตาลสะสม (HbA1c) ล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To confirm surgical clearance and issue your finalized medical travel quote, our medical board requires your latest standing knee X-ray and HbA1c blood test. You can send it directly through this WhatsApp chat.",
          arabic: "لإصدار خطة العلاج والتكلفة النهائية الدقيقة، نرجو تزويدنا بصورة الأشعة السينية أثناء الوقوف وأحدث فحص لمستوى السكر التราكمي (HbA1c) عبر محادثة الواتساب هذه.",
          arabicPhonetic: "Li-isdar khittat al-'ilaj wat-taklufah an-niha'iyyah ad-daqeeqah, narju tazwidana bi-surat al-ashi'ah as-siniyyah athna' al-wuqoof wa ahdath fahs lis-sukkar at-tarakumi (HbA1c) 'abra muhadathat al-WhatsApp hadihi."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปรายละเอียดข้อแนะนำของแพทย์พร้อมหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจเพิ่ม แพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending your doctor consultation notes and medical visa support letter to your WhatsApp right now. Once your remaining test is sent, your treatment schedule will be finalized within 24 hours.",
          arabic: "سأرسل لكم الآن ملخص الاستشارة الطبية وخطاب تسهيل التأشيرة عبر الواتساب. وبمجرد استلام الفحص المتبقي، سنصدر جدول العلاج النهائي خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas al-istisharah at-tibbiyyah wa khitab tas-hil at-ta'shirah 'abra al-WhatsApp. Wa bi-mujarrad istilam al-fahs al-mutabaqqi, sa-nusdir jadwal al-'ilaj an-niha'i khilal 24 sa'ah."
        }
      ];
    }

    return {
      status: "success",
      dossier: {
        patientName: patientName,
        age: age,
        gender: gender,
        nationality: nationality,
        countryCode: countryCode,
        passportOrHN: passportOrHN,
        phone: phone,
        specialty: specialty,
        chiefComplaint: chiefComplaint,
        diagnosis: diagnosis,
        procedure: procedure,
        precautions: precautions,
        documentsReceived: documentsReceived,
        documentsMissing: missingDocs
      },
      scriptCards: (tone && tone !== "formal") ? applyToneToScriptCards(scriptCards, tone, patientName, diagnosis, missingDocs) : scriptCards
    };
  }

  function loadSampleMedicalCase(caseKey) {
    const sample = SAMPLE_MEDICAL_CASES[caseKey];
    if (!sample) return;

    currentCaseDossier = sample.dossier;
    currentCustomScriptCards = sample.scriptCards;

    if (callPatientName) callPatientName.value = sample.patientName;
    if (callPatientHN) callPatientHN.value = sample.hn;
    if (callPatientPhone) callPatientPhone.value = sample.phone;
    if (callTopic) callTopic.value = sample.topic;
    if (callRemainingIssue) callRemainingIssue.value = sample.remainingIssue;

    if (sample.country) {
      syncCountrySelection(sample.country);
    }

    if (sample.specialty) {
      document.querySelectorAll(".call-preset-btn").forEach(b => {
        if (b.getAttribute("data-specialty") === sample.specialty) {
          b.classList.add("bg-[#1B365D]", "text-white", "font-bold");
          b.classList.remove("bg-slate-50", "text-slate-700", "font-semibold");
        } else {
          b.classList.remove("bg-[#1B365D]", "text-white", "font-bold");
          b.classList.add("bg-slate-50", "text-slate-700", "font-semibold");
        }
      });
    }

    renderDossierCard(sample.dossier);
    updateCountryClock();
    refreshCallScript();

    const statusEl = document.getElementById("medicalDocStatus");
    if (statusEl) {
      statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-700 font-semibold">โหลดเคสตัวอย่าง: ${sample.patientName} (${sample.dossier.nationality}) เรียบร้อย สคริปต์ 6 ขั้นตอนพร้อมใช้งาน</span>`;
    }
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  function initMedicalDocIngestion() {
    const dropArea = document.getElementById("medicalDropArea");
    const fileInput = document.getElementById("medicalFileInput");
    const btnProcess = document.getElementById("btnProcessMedicalDocs");
    const btnClearQueue = document.getElementById("btnClearFilesQueue");
    const queueContainer = document.getElementById("medicalFilesQueueContainer");
    const filesList = document.getElementById("stagedFilesList");
    const filesCount = document.getElementById("stagedFilesCount");
    const statusEl = document.getElementById("medicalDocStatus");

    // Sample case buttons
    const btnKnee = document.getElementById("btnSampleCaseKnee");
    const btnSpine = document.getElementById("btnSampleCaseSpine");
    const btnPediatric = document.getElementById("btnSampleCasePediatric");

    if (btnKnee) btnKnee.addEventListener("click", () => loadSampleMedicalCase("knee"));
    if (btnSpine) btnSpine.addEventListener("click", () => loadSampleMedicalCase("spine"));
    if (btnPediatric) btnPediatric.addEventListener("click", () => loadSampleMedicalCase("pediatric"));

    const btnAttach = document.getElementById("btnAttachMedicalDocs");
    const btnStep1Attach = document.getElementById("btnStep1AttachDoc");
    const btnInqAttach = document.getElementById("btnInqAttachDoc");
    const btnSyncToCallSop = document.getElementById("btnSyncToCallSop");
    const btnDocSendWhatsApp = document.getElementById("btnDocSendWhatsApp");

    function triggerFileSelect(e, shouldSwitchView = false) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (shouldSwitchView && typeof window.activateView === "function") {
        window.activateView("viewDocTeleprompter");
      }
      if (fileInput) {
        fileInput.click();
      }
    }

    if (btnAttach) btnAttach.addEventListener("click", (e) => triggerFileSelect(e, false));
    if (btnStep1Attach) btnStep1Attach.addEventListener("click", (e) => triggerFileSelect(e, true));
    if (btnInqAttach) btnInqAttach.addEventListener("click", (e) => triggerFileSelect(e, true));

    if (btnSyncToCallSop) {
      btnSyncToCallSop.addEventListener("click", () => {
        if (typeof window.activateView === "function") {
          window.activateView("viewCallJourney");
        }
      });
    }

    if (btnDocSendWhatsApp) {
      btnDocSendWhatsApp.addEventListener("click", () => {
        const phone = (document.getElementById("callPatientPhone")?.value || "").replace(/[^0-9]/g, "");
        const patientName = document.getElementById("callPatientName")?.value || "Patient";
        const missingDocs = Array.from(document.querySelectorAll("#dossierMissingList li")).map(li => li.textContent.trim()).filter(t => t && !t.includes("ยังไม่มี"));
        let waText = `Dear ${patientName},\n\nThank you for choosing Vejthani Hospital (King of Bones).\n\nOur medical liaison team has received your medical records and is preparing your treatment plan with our orthopedic specialists.\n`;
        if (missingDocs.length > 0) {
          waText += `\nTo complete your doctor review, kindly share the following additional records:\n${missingDocs.map(d => `- ${d}`).join('\n')}\n`;
        }
        waText += `\nBest regards,\nVejthani Hospital International Medical Liaison`;
        const waUrl = phone ? `https://wa.me/${phone}?text=${encodeURIComponent(waText)}` : `https://wa.me/?text=${encodeURIComponent(waText)}`;
        window.open(waUrl, "_blank");
      });
    }

    // Doc Teleprompter Language controls
    const docLangThai = document.getElementById("docCallLangThai");
    const docLangEn = document.getElementById("docCallLangEn");
    const docLangAr = document.getElementById("docCallLangAr");
    if (docLangThai) docLangThai.addEventListener("click", () => setCallLanguage("th"));
    if (docLangEn) docLangEn.addEventListener("click", () => setCallLanguage("en"));
    if (docLangAr) docLangAr.addEventListener("click", () => setCallLanguage("ar"));

    // Doc Teleprompter Gender controls
    const docMale = document.getElementById("docStaffGenderMale");
    const docFemale = document.getElementById("docStaffGenderFemale");
    if (docMale) docMale.addEventListener("click", () => setStaffGender("male"));
    if (docFemale) docFemale.addEventListener("click", () => setStaffGender("female"));

    if (dropArea && fileInput) {
      dropArea.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target === fileInput) return;
        triggerFileSelect(e);
      });

      fileInput.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      ["dragenter", "dragover"].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropArea.classList.add("border-[#1B365D]", "bg-blue-50/60");
        });
      });

      ["dragleave", "drop"].forEach(eventName => {
        dropArea.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropArea.classList.remove("border-[#1B365D]", "bg-blue-50/60");
        });
      });

      dropArea.addEventListener("drop", (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files.length > 0) {
          handleIncomingFiles(dt.files);
        }
      });

      fileInput.addEventListener("change", (e) => {
        if (e.target.files && e.target.files.length > 0) {
          handleIncomingFiles(e.target.files);
          fileInput.value = "";
        }
      });
    }

    function handleIncomingFiles(fileList) {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        if (!stagedMedicalFiles.some(f => f.name === file.name && f.size === file.size)) {
          stagedMedicalFiles.push(file);
        }
      }
      renderStagedFiles();
    }

    function renderStagedFiles() {
      if (!filesList || !queueContainer || !filesCount) return;
      if (stagedMedicalFiles.length === 0) {
        queueContainer.classList.add("hidden");
        filesCount.textContent = "0";
        filesList.innerHTML = "";
        return;
      }

      queueContainer.classList.remove("hidden");
      filesCount.textContent = String(stagedMedicalFiles.length);

      filesList.innerHTML = stagedMedicalFiles.map((f, idx) => {
        const ext = f.name.split('.').pop().toLowerCase();
        let badgeColor = "bg-blue-100 text-blue-800";
        if (["jpg", "jpeg", "png", "webp"].includes(ext)) badgeColor = "bg-purple-100 text-purple-800";
        if (["docx", "doc"].includes(ext)) badgeColor = "bg-blue-100 text-blue-800";
        if (ext === "pdf") badgeColor = "bg-rose-100 text-rose-800";

        const sizeKb = Math.round(f.size / 1024);
        const sizeStr = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;

        return `
          <div class="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between shadow-2xs">
            <div class="flex items-center gap-2 overflow-hidden">
              <span class="text-[9px] font-bold px-1.5 py-0.5 rounded ${badgeColor} uppercase font-mono">${ext}</span>
              <div class="truncate text-xs">
                <span class="font-semibold text-slate-800 block truncate" title="${f.name}">${f.name}</span>
                <span class="text-[10px] text-slate-400 font-mono">${sizeStr}</span>
              </div>
            </div>
            <button type="button" class="btn-remove-staged-file p-1 text-slate-400 hover:text-rose-600 rounded transition" data-index="${idx}" title="ลบไฟล์นี้">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
      }).join("");

      filesList.querySelectorAll(".btn-remove-staged-file").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute("data-index"), 10);
          stagedMedicalFiles.splice(idx, 1);
          renderStagedFiles();
        });
      });

      if (statusEl) {
        statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-blue-500"></span><span>เลือกแล้ว ${stagedMedicalFiles.length} ไฟล์ พร้อมส่งประมวลผล</span>`;
      }
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
    }

    if (btnClearQueue) {
      btnClearQueue.addEventListener("click", () => {
        stagedMedicalFiles = [];
        renderStagedFiles();
        if (fileInput) fileInput.value = "";
        if (statusEl) {
          statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-slate-400"></span><span>พร้อมรับเอกสารเพื่อวิเคราะห์และสร้างบทพูดเฉพาะเคส</span>`;
        }
      });
    }

    if (btnProcess) {
      btnProcess.addEventListener("click", async () => {
        if (stagedMedicalFiles.length === 0) {
          alert("กรุณาเลือกหรือลากไฟล์เวชระเบียน (PDF, DOCX หรือรูปภาพผลตรวจ) อย่างน้อย 1 ไฟล์");
          return;
        }

        const btnText = document.getElementById("btnProcessMedicalDocsText");
        btnProcess.disabled = true;
        if (btnText) btnText.textContent = "กำลังอ่านเอกสารและวิเคราะห์ด้วย AI...";
        if (statusEl) {
          statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span><span class="text-amber-700 font-medium">กำลังสกัดเวชระเบียน ตรวจสอบประวัติ และสร้างสคริปต์...</span>`;
        }

        try {
          const processedFiles = [];
          let extractedDocText = "";

          for (const file of stagedMedicalFiles) {
            const ext = file.name.split('.').pop().toLowerCase();
            
            // DOCX extraction
            if (["docx"].includes(ext) && window.mammoth) {
              try {
                const arrayBuffer = await file.arrayBuffer();
                const mammothResult = await window.mammoth.extractRawText({ arrayBuffer: arrayBuffer });
                const text = mammothResult.value;
                extractedDocText += `\n[File: ${file.name}]\n${text}\n`;
                processedFiles.push({ name: file.name, text: text });
              } catch (docxErr) {
                console.warn("DOCX parsing warning:", docxErr);
              }
            } 
            // PDF extraction
            else if (ext === "pdf") {
              const arrayBuffer = await file.arrayBuffer();
              let pdfText = "";
              
              if (window.pdfjsLib) {
                try {
                  const typedArray = new Uint8Array(arrayBuffer);
                  const loadingTask = window.pdfjsLib.getDocument({ data: typedArray });
                  const pdfDoc = await loadingTask.promise;
                  for (let p = 1; p <= Math.min(pdfDoc.numPages, 10); p++) {
                    const page = await pdfDoc.getPage(p);
                    const tc = await page.getTextContent();
                    pdfText += tc.items.map(it => it.str).join(" ") + "\n";
                  }
                } catch (pdfErr) {
                  console.warn("PDF.js parsing warning:", pdfErr);
                }
              }

              // TextDecoder fallback for PDF streams
              if (!pdfText.trim()) {
                try {
                  const decoder = new TextDecoder("utf-8", { fatal: false });
                  const rawPdfStr = decoder.decode(arrayBuffer);
                  const textMatches = rawPdfStr.match(/\(([^()]{3,120})\)\s*Tj/g) || [];
                  if (textMatches.length > 0) {
                    pdfText = textMatches.map(m => m.replace(/^\(/, '').replace(/\)\s*Tj$/, '')).join(" ");
                  } else {
                    const cleanAscii = rawPdfStr.replace(/[^\x20-\x7E\n]/g, ' ');
                    const keywords = cleanAscii.match(/(?:PATIENT|NAME|AGE|DIAGNOSIS|IMPRESSION|KNEE|SPINE|SURGERY|HOSPITAL|FINDINGS|COMPLAINT|REFERRAL|FEET|CLUBFOOT)[^\n\r]{4,100}/gi);
                    if (keywords && keywords.length > 0) {
                      pdfText = keywords.join("\n");
                    }
                  }
                } catch (decErr) {
                  console.warn("PDF decoder fallback error:", decErr);
                }
              }

              if (pdfText.trim()) {
                extractedDocText += `\n[File: ${file.name}]\n${pdfText}\n`;
              }
              
              // Base64 encoding for API payload if needed
              const base64Data = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve((reader.result || "").split(',')[1] || "");
                reader.onerror = () => resolve("");
                reader.readAsDataURL(file);
              });
              processedFiles.push({ name: file.name, mimeType: "application/pdf", text: pdfText, base64: base64Data });
            }
            // Plain text / Markdown / JSON / CSV
            else if (["txt", "md", "csv", "json"].includes(ext)) {
              try {
                const text = await file.text();
                extractedDocText += `\n[File: ${file.name}]\n${text}\n`;
                processedFiles.push({ name: file.name, text: text });
              } catch (txtErr) {
                console.warn("Text read warning:", txtErr);
              }
            }
            // Image files (JPG, PNG, WebP)
            else {
              extractedDocText += `\n[Medical Scan File: ${file.name}]\n`;
              const base64Data = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = () => resolve((reader.result || "").split(',')[1] || "");
                reader.onerror = () => resolve("");
                reader.readAsDataURL(file);
              });
              let mime = file.type || "image/jpeg";
              if (ext === "png") mime = "image/png";
              processedFiles.push({ name: file.name, mimeType: mime, base64: base64Data });
            }
          }

          // Save original text and staged files for dynamic tone re-synthesis
          currentOriginalDocText = extractedDocText;
          currentStagedFilesRef = [...stagedMedicalFiles];

          const quickKeyInput = document.getElementById("quickGeminiApiKey");
          const cfgGeminiApiKey = document.getElementById("cfgGeminiApiKey");
          const apiKey = (quickKeyInput && quickKeyInput.value.trim()) || 
                         (cfgGeminiApiKey && cfgGeminiApiKey.value.trim()) || 
                         localStorage.getItem("gemini_api_key") || "";

          let result = null;
          let usedEngine = "nlp";

          // If Gemini API Key exists, first attempt Direct Client-Side Gemini 2.5 Flash API!
          if (apiKey) {
            try {
              if (btnText) btnText.textContent = "กำลังวิเคราะห์ผ่าน Google Gemini 2.5 Flash AI...";
              result = await callClientSideGeminiApi(extractedDocText, apiKey, currentScriptTone);
              if (result && result.dossier && result.scriptCards) {
                usedEngine = "gemini";
              }
            } catch (gemErr) {
              console.warn("Client-side Gemini API inference error:", gemErr);
            }
          }

          // If no client-side Gemini result, attempt backend API
          if (!result || !result.dossier || !result.scriptCards) {
            try {
              const controller = new AbortController();
              const timeoutId = setTimeout(() => controller.abort(), 6000);
              const response = await fetch("/api/analyze-doc", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  apiKey: apiKey,
                  files: processedFiles,
                  textContext: extractedDocText,
                  tone: currentScriptTone
                }),
                signal: controller.signal
              });
              clearTimeout(timeoutId);

              if (response.ok) {
                const apiResult = await response.json();
                if (apiResult && apiResult.dossier && apiResult.scriptCards) {
                  result = apiResult;
                  usedEngine = "backend";
                }
              }
            } catch (apiErr) {
              console.warn("Backend API skipped or unavailable:", apiErr);
            }
          }

          // If still no result (e.g. GitHub Pages or offline), execute Deep Parametric Clinical Extraction Engine!
          if (!result || !result.dossier || !result.scriptCards) {
            result = extractClinicalDossierAndScripts(extractedDocText, stagedMedicalFiles, currentScriptTone);
            usedEngine = "nlp";
          }

          if (result && result.dossier && result.scriptCards) {
            currentCaseDossier = result.dossier;
            currentCustomScriptCards = result.scriptCards;

            if (callPatientName) callPatientName.value = result.dossier.patientName || "";
            if (callPatientHN) callPatientHN.value = result.dossier.passportOrHN || "";
            if (callPatientPhone && result.dossier.phone) callPatientPhone.value = result.dossier.phone;
            if (callTopic) callTopic.value = result.dossier.procedure || result.dossier.diagnosis || "";
            if (callRemainingIssue) {
              const missingStr = (result.dossier.documentsMissing && result.dossier.documentsMissing.length > 0)
                ? result.dossier.documentsMissing.join(", ")
                : "เอกสารครบถ้วน";
              callRemainingIssue.value = missingStr;
            }

            if (result.dossier.countryCode) {
              syncCountrySelection(result.dossier.countryCode);
            }

            if (result.dossier.specialty) {
              document.querySelectorAll(".call-preset-btn").forEach(b => {
                if (b.getAttribute("data-specialty") === result.dossier.specialty) {
                  b.classList.add("bg-[#1B365D]", "text-white", "font-bold");
                  b.classList.remove("bg-slate-50", "text-slate-700", "font-semibold");
                } else {
                  b.classList.remove("bg-[#1B365D]", "text-white", "font-bold");
                  b.classList.add("bg-slate-50", "text-slate-700", "font-semibold");
                }
              });
            }

            renderDossierCard(result.dossier);
            updateCountryClock();
            refreshCallScript();
            if (typeof saveCaseToRepository === "function") {
              saveCaseToRepository(result.dossier, result.scriptCards, currentScriptTone, usedEngine);
            }

            if (statusEl) {
              const engineLabel = usedEngine === "gemini" 
                ? "Google Gemini 2.5 Flash AI (สด)" 
                : "Deep Clinical NLP Engine (12+ สาขาเฉพาะทาง)";
              statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-700 font-bold">ประมวลผลสำเร็จ (${engineLabel}): วิเคราะห์ข้อมูลคุณ ${result.dossier.patientName} (${result.dossier.nationality}) เรียบร้อย บันทึกลงคลังเวชระเบียนอัตโนมัติ สคริปต์พยาบาลปรับตามเอกสารตรงทุกภาษา</span>`;
            }
          }
        } catch (err) {
          console.error("Medical doc processing error:", err);
          const fallbackResult = extractClinicalDossierAndScripts(stagedMedicalFiles.map(f => f.name).join(" "), stagedMedicalFiles, currentScriptTone);
          if (fallbackResult) {
            currentCaseDossier = fallbackResult.dossier;
            currentCustomScriptCards = fallbackResult.scriptCards;
            renderDossierCard(fallbackResult.dossier);
            refreshCallScript();
            if (typeof saveCaseToRepository === "function") {
              saveCaseToRepository(fallbackResult.dossier, fallbackResult.scriptCards, currentScriptTone, "client-fallback");
            }
          }
          if (statusEl) {
            statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-blue-500"></span><span class="text-blue-700 font-semibold">ประมวลผลเวชระเบียนผ่านระบบ Client-Side Medical Extraction เรียบร้อย</span>`;
          }
        } finally {
          btnProcess.disabled = false;
          if (btnText) btnText.textContent = "ประมวลผลเวชระเบียนและสร้างบทพูดพยาบาล (Process & Generate)";
          if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
        }
      });
    }

    // Initialize Quick API Key Bar & Persistence
    const btnToggleApiKeyBar = document.getElementById("btnToggleApiKeyBar");
    const quickApiKeyBar = document.getElementById("quickApiKeyBar");
    const quickGeminiApiKey = document.getElementById("quickGeminiApiKey");
    const btnSaveQuickApiKey = document.getElementById("btnSaveQuickApiKey");
    const engineBadgeNLP = document.getElementById("engineBadgeNLP");
    const engineBadgeGemini = document.getElementById("engineBadgeGemini");

    const savedApiKey = localStorage.getItem("gemini_api_key");
    if (savedApiKey) {
      if (quickGeminiApiKey) quickGeminiApiKey.value = savedApiKey;
      const cfgGeminiApiKey = document.getElementById("cfgGeminiApiKey");
      if (cfgGeminiApiKey) cfgGeminiApiKey.value = savedApiKey;
      if (engineBadgeNLP) engineBadgeNLP.classList.add("hidden");
      if (engineBadgeGemini) engineBadgeGemini.classList.remove("hidden");
    }

    if (btnToggleApiKeyBar && quickApiKeyBar) {
      btnToggleApiKeyBar.addEventListener("click", () => {
        quickApiKeyBar.classList.toggle("hidden");
      });
    }

    if (btnSaveQuickApiKey && quickGeminiApiKey) {
      btnSaveQuickApiKey.addEventListener("click", () => {
        const key = quickGeminiApiKey.value.trim();
        if (key) {
          localStorage.setItem("gemini_api_key", key);
          const cfgGeminiApiKey = document.getElementById("cfgGeminiApiKey");
          if (cfgGeminiApiKey) cfgGeminiApiKey.value = key;
          if (engineBadgeNLP) engineBadgeNLP.classList.add("hidden");
          if (engineBadgeGemini) engineBadgeGemini.classList.remove("hidden");
          alert("บันทึก Google Gemini API Key เรียบร้อยแล้ว ระบบจะใช้โหมด AI สดในการวิเคราะห์เวชระเบียน");
        } else {
          localStorage.removeItem("gemini_api_key");
          if (engineBadgeNLP) engineBadgeNLP.classList.remove("hidden");
          if (engineBadgeGemini) engineBadgeGemini.classList.add("hidden");
          alert("ล้าง API Key เรียบร้อย ระบบจะใช้ Deep Clinical NLP Engine (ออฟไลน์)");
        }
      });
    }
  }

  function initTeleprompterQuickActions() {
    // 1. Copy Card Text Action
    document.querySelectorAll(".btn-copy-card").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        const text = targetEl.textContent.trim();
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
          const originalTitle = btn.getAttribute("title") || "คัดลอกข้อความ";
          btn.setAttribute("title", "คัดลอกเรียบร้อยแล้ว!");
          btn.classList.add("text-emerald-600");
          setTimeout(() => {
            btn.setAttribute("title", originalTitle);
            btn.classList.remove("text-emerald-600");
          }, 1500);
        });
      });
    });

    // 2. Speech Synthesis Action
    document.querySelectorAll(".btn-speak-prompt").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        const text = targetEl.textContent.trim();
        if (!text) return;

        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(text);
          if (currentCallLang === "th") {
            utterance.lang = "th-TH";
          } else if (currentCallLang === "ar") {
            utterance.lang = "ar-SA";
          } else {
            utterance.lang = "en-US";
          }
          utterance.rate = 0.95;
          btn.classList.add("text-[#EC7825]");
          utterance.onend = () => btn.classList.remove("text-[#EC7825]");
          utterance.onerror = () => btn.classList.remove("text-[#EC7825]");
          window.speechSynthesis.speak(utterance);
        }
      });
    });

    // 3. Tone Selector Buttons
    document.querySelectorAll(".doc-tone-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tone = btn.getAttribute("data-tone");
        if (!tone || tone === currentScriptTone) return;

        currentScriptTone = tone;
        document.querySelectorAll(".doc-tone-btn").forEach(b => {
          if (b === btn) {
            b.classList.add("bg-white", "text-[#1B365D]", "shadow-xs");
            b.classList.remove("text-slate-500");
          } else {
            b.classList.remove("bg-white", "text-[#1B365D]", "shadow-xs");
            b.classList.add("text-slate-500");
          }
        });

        const activePatientName = (callPatientName && callPatientName.value.trim()) || 
                                  (document.getElementById("dossierPatientName")?.value.trim()) || 
                                  (currentCaseDossier && currentCaseDossier.patientName) || "";
        const activeTopic = (callTopic && callTopic.value.trim()) || 
                            ((document.getElementById("dossierDiagnosis")?.textContent.trim() !== "-") ? document.getElementById("dossierDiagnosis")?.textContent.trim() : "") || 
                            (currentCaseDossier && currentCaseDossier.diagnosis) || "";
        const activeMissing = currentCaseDossier ? currentCaseDossier.documentsMissing : [];

        // If we have document content, re-synthesize script with new tone
        if (currentOriginalDocText || (currentStagedFilesRef && currentStagedFilesRef.length > 0)) {
          const reResult = extractClinicalDossierAndScripts(currentOriginalDocText, currentStagedFilesRef, currentScriptTone);
          if (reResult && reResult.scriptCards) {
            currentCustomScriptCards = applyToneToScriptCards(reResult.scriptCards, currentScriptTone, activePatientName, activeTopic, activeMissing);
          }
        } else if (currentCustomScriptCards && currentCustomScriptCards.length >= 6) {
          currentCustomScriptCards = applyToneToScriptCards(currentCustomScriptCards, currentScriptTone, activePatientName, activeTopic, activeMissing);
        }

        refreshCallScript();

        // Visual feedback to user
        const statusEl = document.getElementById("medicalDocStatus");
        if (statusEl) {
          const toneNameTh = tone === "empathy" ? "ห่วงใย (Empathy)" : (tone === "concise" ? "กระชับ (Concise)" : "ทางการ (Formal)");
          statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-blue-500"></span><span class="text-blue-700 font-bold">ปรับเปลี่ยนน้ำเสียงบทพูดเป็น: ${toneNameTh} เรียบร้อยแล้ว (อัปเดตบทพูด 3 ภาษาทันที)</span>`;
        }
      });
    });

    // 4. Toggle Card Inline Editing Mode
    const btnToggleEdit = document.getElementById("btnToggleEditScript");
    const btnToggleEditText = document.getElementById("btnToggleEditScriptText");
    let isEditingMode = false;

    if (btnToggleEdit) {
      btnToggleEdit.addEventListener("click", () => {
        isEditingMode = !isEditingMode;
        const editableElements = document.querySelectorAll(".doc-prompt-editable");

        editableElements.forEach(el => {
          el.setAttribute("contenteditable", isEditingMode ? "true" : "false");
          if (isEditingMode) {
            el.classList.add("bg-blue-50/50", "border", "border-blue-300", "p-1.5", "rounded-lg");
          } else {
            el.classList.remove("bg-blue-50/50", "border", "border-blue-300", "p-1.5", "rounded-lg");
          }
        });

        if (btnToggleEditText) {
          btnToggleEditText.textContent = isEditingMode ? "บันทึกการแก้ไข" : "แก้ไขบทพูด";
        }
        if (isEditingMode) {
          btnToggleEdit.classList.add("bg-emerald-600", "text-white");
          btnToggleEdit.classList.remove("bg-slate-100", "text-slate-700");
        } else {
          btnToggleEdit.classList.remove("bg-emerald-600", "text-white");
          btnToggleEdit.classList.add("bg-slate-100", "text-slate-700");
          // User clicked "บันทึกการแก้ไข" to save their custom edits
          saveAndSyncAllCardsAcrossLanguages();
        }
      });
    }

    // 5. Single Card Edit Button
    document.querySelectorAll(".btn-edit-single-card").forEach(btn => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;
        const currentEditable = targetEl.getAttribute("contenteditable") === "true";
        targetEl.setAttribute("contenteditable", currentEditable ? "false" : "true");
        if (!currentEditable) {
          targetEl.classList.add("bg-blue-50/50", "border", "border-blue-300", "p-1.5", "rounded-lg");
          targetEl.focus();
        } else {
          targetEl.classList.remove("bg-blue-50/50", "border", "border-blue-300", "p-1.5", "rounded-lg");
          // Save and sync when closing single-card editing
          saveAndSyncAllCardsAcrossLanguages();
        }
      });
    });

    // 6. Live Synchronize Nurse Edits into In-Memory Script Object
    const promptIdToIndex = {
      docPrompt1: 0,
      docPrompt2: 1,
      docPrompt3: 2,
      docPrompt4: 3,
      docClosingDynamic: 4,
      docPrompt6: 5
    };

    document.querySelectorAll(".doc-prompt-editable").forEach(el => {
      el.addEventListener("input", () => {
        const cardIdx = promptIdToIndex[el.id];
        if (cardIdx !== undefined && currentCustomScriptCards && currentCustomScriptCards[cardIdx]) {
          const val = el.innerText || el.textContent;
          if (currentCallLang === "th") {
            currentCustomScriptCards[cardIdx].thai = val;
            if (cardIdx === 0) {
              const m = val.match(/(?:ขอสายคุณ|เรียนคุณ|คุณ)\s*([^\s,\.?!]+(?:\s+[^\s,\.?!]+)?)/);
              if (m && m[1]) {
                syncPatientNameAcrossCards(m[1].trim());
              }
            }
          } else if (currentCallLang === "ar") {
            currentCustomScriptCards[cardIdx].arabic = val;
            if (cardIdx === 0) {
              const m = val.match(/(?:مرحباً بالسيد\/السيدة\s+|بالسيد\/السيدة\s+)([^\.،?!]+)/);
              if (m && m[1]) {
                syncPatientNameAcrossCards(m[1].trim());
              }
            }
          } else {
            currentCustomScriptCards[cardIdx].english = val;
            if (cardIdx === 0) {
              const m = val.match(/(?:Good day,\s*|calling for\s*|speaking with\s*)(?:Mr\.|Mrs\.|Ms\.)?\s*([A-Za-z\s\.\-']+?)(?=\.|\?|,|$)/i);
              if (m && m[1]) {
                syncPatientNameAcrossCards(m[1].trim());
              }
            }
          }
        }
      });
    });

    // 7. Two-Way Binding for Clinical Intake Dossier inputs
    const dossierPatientName = document.getElementById("dossierPatientName");
    const dossierPatientHN = document.getElementById("dossierPatientHN");
    const dossierChiefComplaint = document.getElementById("dossierChiefComplaint");
    const dossierDiagnosis = document.getElementById("dossierDiagnosis");

    if (dossierPatientName) {
      dossierPatientName.addEventListener("input", () => {
        const val = dossierPatientName.value.trim();
        if (callPatientName && callPatientName.value !== val) callPatientName.value = val;
        syncPatientNameAcrossCards(val);
        refreshCallScript();
      });
    }

    if (dossierPatientHN) {
      dossierPatientHN.addEventListener("input", () => {
        const val = dossierPatientHN.value.trim();
        if (callPatientHN && callPatientHN.value !== val) callPatientHN.value = val;
        if (currentCaseDossier) currentCaseDossier.passportOrHN = val;
        refreshCallScript();
      });
    }

    if (dossierChiefComplaint) {
      dossierChiefComplaint.addEventListener("input", () => {
        const val = (dossierChiefComplaint.innerText || dossierChiefComplaint.textContent).trim();
        if (currentCaseDossier) currentCaseDossier.chiefComplaint = val;
      });
    }

    if (dossierDiagnosis) {
      dossierDiagnosis.addEventListener("input", () => {
        const val = (dossierDiagnosis.innerText || dossierDiagnosis.textContent).trim();
        if (callTopic && callTopic.value !== val) callTopic.value = val;
        if (currentCaseDossier) currentCaseDossier.diagnosis = val;
        refreshCallScript();
      });
    }
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
    const rawProc = (inqProcedure && inqProcedure.value.trim()) ? inqProcedure.value.trim() : cat.procedure;

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

    const isCustomProc = (rawProc !== cat.procedure);
    const procEn = localizeField(rawProc, "en", "topic");
    const procAr = localizeField(rawProc, "ar", "topic");

    let waEnText = cat.waEn;
    let waArText = cat.waAr;
    let emailSubText = `Medical Treatment Plan & ${procEn} Evaluation - Vejthani Hospital`;
    let emailBodyText = cat.emailBody;

    // Reflect procedure change across all templates in real-time
    if (isCustomProc) {
      // 1. English WhatsApp
      if (waEnText.includes(cat.procedure)) {
        waEnText = waEnText.replaceAll(cat.procedure, procEn);
      } else if (activeInqCat === "king_of_bone") {
        waEnText = waEnText.replace("regarding the robotic knee replacement treatment plan", `regarding the ${procEn} treatment plan`);
      } else if (activeInqCat === "cancer") {
        waEnText = waEnText.replace("request for an oncology second opinion", `request regarding ${procEn}`);
      } else if (activeInqCat === "pediatric") {
        waEnText = waEnText.replace("inquiry for pediatric limb correction", `inquiry regarding ${procEn}`);
      } else if (activeInqCat === "general_surgery") {
        waEnText = waEnText.replace("Laparoscopic Cholecystectomy (gallbladder removal)", procEn);
      } else if (activeInqCat === "investigate") {
        waEnText = waEnText.replace("comprehensive medical travel assessment", `${procEn} & travel assessment`);
      } else {
        waEnText = waEnText.replace(/(regarding the |regarding your inquiry for |request for an |inquiry for )([^.\n,]+)/i, `$1${procEn}`);
      }

      // 2. Arabic WhatsApp (Zero Thai Leakage)
      if (waArText.includes(cat.procedure)) {
        waArText = waArText.replaceAll(cat.procedure, procAr);
      } else if (activeInqCat === "king_of_bone") {
        waArText = waArText.replace("لجراحة استبدال مفصل الركبة بالكامل بمساعدة الروبوت (Robotic Total Knee Replacement)", `لـ ${procAr}`);
      } else if (activeInqCat === "cancer") {
        waArText = waArText.replace("أن حالتكم تحظى بأعلى درجات الاهتمام", `بأن طلبكم بخصوص ${procAr} يحظى بأعلى درجات الاهتمام`);
      } else if (activeInqCat === "pediatric") {
        waArText = waArText.replace("بخصوص الخطة العلاجية للطفل.", `بخصوص ${procAr} للطفل.`);
      } else if (activeInqCat === "general_surgery") {
        waArText = waArText.replace("جراحة استئصال المرارة بالمنظار قليل التدخل الجراحي (Laparoscopic Cholecystectomy)", procAr);
      } else if (activeInqCat === "investigate") {
        waArText = waArText.replace("جاهز لإصدار التقارير الطبية الرسمية", `جاهز لمتابعة ${procAr} وإصدار التقارير الطبية الرسمية`);
      } else {
        waArText = waArText.replace(/(بخصوص |المتعلقة بـ |بشأن )([^.\n،]+)/, `$1${procAr}`);
      }

      // 3. Email Body
      if (emailBodyText.includes(cat.procedure)) {
        emailBodyText = emailBodyText.replaceAll(cat.procedure, procEn);
      } else if (activeInqCat === "king_of_bone") {
        emailBodyText = emailBodyText.replace("Robotic Knee Replacement", procEn);
      } else if (activeInqCat === "cancer") {
        emailBodyText = emailBodyText.replace("is ready to evaluate your case through", `is ready to evaluate your case regarding ${procEn} through`);
      } else if (activeInqCat === "pediatric") {
        emailBodyText = emailBodyText.replace("gentle, world-class surgical care for your child", `gentle, world-class ${procEn} for your child`);
      } else if (activeInqCat === "general_surgery") {
        emailBodyText = emailBodyText.replace("Laparoscopic Cholecystectomy", procEn);
      } else if (activeInqCat === "investigate") {
        emailBodyText = emailBodyText.replace("Comprehensive Medical Travel Assessment", procEn);
      } else {
        emailBodyText = emailBodyText.replace(/(Following your inquiry regarding |regarding )([^,.\n]+)/i, `$1${procEn}`);
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
    if (window.lucide) window.lucide.createIcons();
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

    if (inqProcedure) {
      inqProcedure.placeholder = `พิมพ์หัตถการหรือโรคที่สอบถาม (ตัวอย่าง: ${cat.procedure})`;
    }

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
      window.lucide.createIcons();
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
      if (window.lucide) window.lucide.createIcons();
      setTimeout(() => {
        btnExportExcel.classList.remove("bg-emerald-700");
        btnExportExcel.innerHTML = origText;
        if (window.lucide) window.lucide.createIcons();
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

  // =========================================================================
  // PERSISTENT CASE REPOSITORY & 3-STEP FOLLOW-UP DATA DASHBOARD ENGINE
  // =========================================================================
  const STORAGE_KEY_CASES = "vejthani_case_records_v1";

  const DEFAULT_GCC_DEMO_CASES = [
    {
      id: "CASE-2026-OM-001",
      createdAt: "2026-10-04T09:30:00Z",
      patientName: "Mr. Mohammed Al-Balushi",
      passportOrHN: "HN-OM-892144",
      gender: "male",
      age: "62",
      phone: "+96891234567",
      countryCode: "OM",
      nationality: "Oman (سلطنة عمان)",
      specialty: "orthopedics",
      specialtyThai: "ศูนย์กระดูกและข้อ (King of Bones)",
      centerThai: "กระดูกและข้อ King of Bones",
      centerEng: "King of Bones & Joint Center",
      diagnosis: "Severe Bilateral Knee Osteoarthritis (ข้อเข่าเสื่อมรุนแรงระดับ 3-4)",
      procedure: "Robotic-Assisted Total Knee Arthroplasty (TKA)",
      doctorAssigned: "นพ. สันติชัย เธียรสุนทร (Dr. Santichai Thiansunthorn)",
      estimatedCost: "380,000 - 450,000 THB",
      recoveryDays: 14,
      documentsReceived: ["MRI Knee Right", "Medical Report (Muscat Hospital)"],
      documentsMissing: ["Weight-bearing Full-Leg X-ray (ฟิล์มยืนตรง)", "Blood test CBC, Coagulation (PT/INR)"],
      followUpStep: "step1",
      lastContactDate: "2026-10-04 14:15",
      followUpHistory: [
        {
          timestamp: "2026-10-04 14:15",
          step: "step1",
          channel: "phone",
          staff: "Nurse Supervisor (GCC Team)",
          outcome: "completed",
          notes: "โทรแจ้งคนไข้ขอฟิล์มยืนตรง Weight-bearing และผลตรวจเลือด คนไข้จะไปตรวจเพิ่มที่มัสกัตและส่งผ่าน WhatsApp"
        }
      ],
      tone: "formal",
      source: "preloaded"
    },
    {
      id: "CASE-2026-SA-002",
      createdAt: "2026-10-03T11:00:00Z",
      patientName: "Mrs. Fatima Al-Zahrani",
      passportOrHN: "HN-SA-441209",
      gender: "female",
      age: "54",
      phone: "+966501234567",
      countryCode: "SA",
      nationality: "Saudi Arabia (المملكة العربية السعودية)",
      specialty: "cancer",
      specialtyThai: "ศูนย์มะเร็งและเนื้องอกวิทยา (Oncology / MDT Center)",
      centerThai: "ศูนย์มะเร็งและเนื้องอกวิทยา",
      centerEng: "Vejthani Cancer & MDT Center",
      diagnosis: "Hepatocellular Carcinoma with Cirrhosis (เนื้องอกตับและตับแข็ง)",
      procedure: "Transarterial Chemoembolization (TACE) / Microwave Ablation",
      doctorAssigned: "ศ.คลินิก นพ. สุรพล รังสิตยานนท์ (Prof. Surapol Rangsityanont)",
      estimatedCost: "450,000 - 580,000 THB",
      recoveryDays: 10,
      documentsReceived: ["Triphasic CT Abdomen", "AFP Tumor Marker", "Biopsy Report"],
      documentsMissing: ["Cardiac Clearance / Echocardiogram Report"],
      followUpStep: "step2",
      lastContactDate: "2026-10-05 10:30",
      followUpHistory: [
        {
          timestamp: "2026-10-03 16:00",
          step: "step1",
          channel: "whatsapp",
          staff: "Liaison Officer (Saudi Desk)",
          outcome: "completed",
          notes: "รับเอกสารผลตรวจ CT ช่องท้องครบถ้วน ส่งต่อให้คณะแพทย์ MDT ประเมิน"
        },
        {
          timestamp: "2026-10-05 10:30",
          step: "step2",
          channel: "phone",
          staff: "Liaison Officer (Saudi Desk)",
          outcome: "completed",
          notes: "โทรแจ้งผลการประชุมแพทย์ MDT และค่าใช้จ่าย TACE 450,000 บาท ส่งสรุปเข้า WhatsApp และอีเมล"
        }
      ],
      tone: "empathy",
      source: "preloaded"
    },
    {
      id: "CASE-2026-AE-003",
      createdAt: "2026-10-02T13:45:00Z",
      patientName: "Baby Tariq Al-Maktoum (Guardian: Mr. Rashid)",
      passportOrHN: "HN-AE-771928",
      gender: "male",
      age: "8 months",
      phone: "+971509876543",
      countryCode: "AE",
      nationality: "United Arab Emirates (الإمارات العربية المتحدة)",
      specialty: "pediatric",
      specialtyThai: "ศูนย์กระดูกและข้อในเด็ก (Pediatric Orthopedic Center)",
      centerThai: "กระดูกและข้อเด็ก",
      centerEng: "Pediatric Orthopedic Center",
      diagnosis: "Congenital Talipes Equinovarus / Clubfoot (โรคเท้าปุกแต่กำเนิด)",
      procedure: "Ponseti Serial Casting & Percutaneous Achilles Tenotomy",
      doctorAssigned: "พญ. พิมพรรณ วัฒนพงษ์ (Dr. Pimparn Wattanapong)",
      estimatedCost: "180,000 - 240,000 THB",
      recoveryDays: 21,
      documentsReceived: ["Pediatric Clinical Photos", "Birth Record", "Ultrasound Feet"],
      documentsMissing: [],
      followUpStep: "step3",
      lastContactDate: "2026-10-05 11:20",
      followUpHistory: [
        {
          timestamp: "2026-10-02 14:00",
          step: "step1",
          channel: "email",
          staff: "Pediatric Coordinator",
          outcome: "completed",
          notes: "ได้รับภาพถ่ายและผลอัลตราซาวด์เท้าเด็ก ส่งให้กุมารแพทย์ผู้เชี่ยวชาญทันที"
        },
        {
          timestamp: "2026-10-03 15:30",
          step: "step2",
          channel: "phone",
          staff: "Pediatric Coordinator",
          outcome: "completed",
          notes: "อธิบายวิธี Ponseti ครอบครัวพึงพอใจและขอหนังสือรับรองทำวีซ่าแพทย์"
        },
        {
          timestamp: "2026-10-05 11:20",
          step: "step3",
          channel: "whatsapp",
          staff: "Pediatric Coordinator",
          outcome: "completed",
          notes: "ออกหนังสือรับรองแพทย์ Medical Visa Letter ส่งให้สถานทูตไทยในดูไบเรียบร้อย รอคอนเฟิร์มเที่ยวบิน"
        }
      ],
      tone: "empathy",
      source: "preloaded"
    },
    {
      id: "CASE-2026-QA-004",
      createdAt: "2026-10-03T08:15:00Z",
      patientName: "Mr. Khaled Al-Kuwari",
      passportOrHN: "HN-QA-330192",
      gender: "male",
      age: "47",
      phone: "+97455123456",
      countryCode: "QA",
      nationality: "Qatar (دولة قطر)",
      specialty: "spine",
      specialtyThai: "สถาบันกระดูกสันหลังเวชธานี (Vejthani Spine Institute)",
      centerThai: "กระดูกสันหลัง King of Bones",
      centerEng: "Vejthani Spine Institute",
      diagnosis: "Herniated Nucleus Pulposus L4-L5 with Radiculopathy (หมอนรองกระดูกทับเส้นประสาท)",
      procedure: "Full Endoscopic Lumbar Discectomy (ผ่าตัดหมอนรองกระดูกผ่านกล้องเอ็นโดสโคป)",
      doctorAssigned: "นพ. ภัทรพล สันติพาณิชย์ (Dr. Pattarapol Santipanich)",
      estimatedCost: "320,000 - 380,000 THB",
      recoveryDays: 7,
      documentsReceived: ["MRI Lumbar Spine (DICOM & Report)", "Electromyography (EMG)"],
      documentsMissing: ["Blood test Pre-op Lab panel"],
      followUpStep: "step2",
      lastContactDate: "2026-10-05 09:45",
      followUpHistory: [
        {
          timestamp: "2026-10-03 10:00",
          step: "step1",
          channel: "phone",
          staff: "Spine Nurse Specialist",
          outcome: "completed",
          notes: "รับไฟล์ MRI กระดูกสันหลังส่วนเอว ส่งแพทย์ตรวจอ่านภาพฟิล์ม"
        },
        {
          timestamp: "2026-10-05 09:45",
          step: "step2",
          channel: "phone",
          staff: "Spine Nurse Specialist",
          outcome: "completed",
          notes: "โทรอธิบายการผ่าตัดส่องกล้องแผลเล็ก 8 มม. และส่งตารางราคาให้คนไข้พิจารณา"
        }
      ],
      tone: "concise",
      source: "preloaded"
    },
    {
      id: "CASE-2026-KW-005",
      createdAt: "2026-10-01T15:20:00Z",
      patientName: "Sheikh Ahmed Al-Sabah",
      passportOrHN: "HN-KW-110294",
      gender: "male",
      age: "59",
      phone: "+96599123456",
      countryCode: "KW",
      nationality: "Kuwait (دولة الكويت)",
      specialty: "cardiac",
      specialtyThai: "ศูนย์หัวใจเวชธานี (Vejthani Cardiac Center)",
      centerThai: "หัวใจและหลอดเลือด",
      centerEng: "Vejthani Cardiac Center",
      diagnosis: "Coronary Artery Disease with Angina Pectoris (หลอดเลือดหัวใจตีบ)",
      procedure: "Coronary Angiography (CAG) & Percutaneous Coronary Intervention (PCI)",
      doctorAssigned: "นพ. ชัยรัตน์ เสริมสิริวัฒน์ (Dr. Chairat Sermsiriwat)",
      estimatedCost: "420,000 - 600,000 THB",
      recoveryDays: 7,
      documentsReceived: ["Coronary Angiogram DVD", "Echocardiogram", "Medical Insurance Letter"],
      documentsMissing: [],
      followUpStep: "booked",
      lastContactDate: "2026-10-05 13:00",
      followUpHistory: [
        {
          timestamp: "2026-10-01 16:00",
          step: "step1",
          channel: "email",
          staff: "VIP Kuwait Concierge",
          outcome: "completed",
          notes: "ได้รับผลสวนหัวใจและรายงานทางการแพทย์ครบถ้วน"
        },
        {
          timestamp: "2026-10-03 11:00",
          step: "step2",
          channel: "phone",
          staff: "VIP Kuwait Concierge",
          outcome: "completed",
          notes: "แจ้งแผนการตรวจสวนหัวใจและทำบอลลูนขยายหลอดเลือด พร้อมส่งใบเสนอราคา"
        },
        {
          timestamp: "2026-10-04 14:00",
          step: "step3",
          channel: "whatsapp",
          staff: "VIP Kuwait Concierge",
          outcome: "completed",
          notes: "ยืนยันตารางบิน Kuwait Airways เที่ยวบิน KU411 ถึงสุวรรณภูมิ 12 ต.ค. 2026 จัดรถลีมูซีนต้อนรับพร้อมล่าม VIP"
        }
      ],
      tone: "formal",
      source: "preloaded"
    }
  ];

  let activeModalCaseId = null;
  let activeModalStep = "step1";
  let activeModalLang = "th";

  function getStoredCases() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_CASES);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Error reading stored cases:", e);
    }
    saveStoredCases(DEFAULT_GCC_DEMO_CASES);
    return JSON.parse(JSON.stringify(DEFAULT_GCC_DEMO_CASES));
  }

  function saveStoredCases(cases) {
    try {
      localStorage.setItem(STORAGE_KEY_CASES, JSON.stringify(cases));
    } catch (e) {
      console.warn("Error saving cases to localStorage:", e);
    }
  }

  function saveCaseToRepository(dossier, scriptCards, tone = "formal", source = "nlp") {
    if (!dossier) return;
    const cases = getStoredCases();
    const cleanHN = (dossier.passportOrHN || "").trim().toLowerCase();
    const cleanName = (dossier.patientName || "").trim().toLowerCase();

    let existingIndex = -1;
    if (cleanHN) {
      existingIndex = cases.findIndex(c => (c.passportOrHN || "").trim().toLowerCase() === cleanHN);
    }
    if (existingIndex === -1 && cleanName) {
      existingIndex = cases.findIndex(c => (c.patientName || "").trim().toLowerCase() === cleanName);
    }

    const now = new Date();
    const timestampStr = now.getFullYear() + "-" +
      String(now.getMonth() + 1).padStart(2, '0') + "-" +
      String(now.getDate()).padStart(2, '0') + " " +
      String(now.getHours()).padStart(2, '0') + ":" +
      String(now.getMinutes()).padStart(2, '0');

    if (existingIndex >= 0) {
      const existing = cases[existingIndex];
      existing.diagnosis = dossier.diagnosis || existing.diagnosis;
      existing.procedure = dossier.procedure || existing.procedure;
      existing.specialty = dossier.specialty || existing.specialty;
      existing.specialtyThai = dossier.specialtyThai || existing.specialtyThai;
      existing.centerThai = dossier.centerThai || existing.centerThai;
      existing.centerEng = dossier.centerEng || existing.centerEng;
      existing.doctorAssigned = dossier.doctorAssigned || existing.doctorAssigned;
      existing.estimatedCost = dossier.estimatedCost || existing.estimatedCost;
      existing.documentsReceived = dossier.documentsReceived || existing.documentsReceived;
      existing.documentsMissing = dossier.documentsMissing || existing.documentsMissing;
      existing.phone = dossier.phone || existing.phone;
      existing.countryCode = dossier.countryCode || existing.countryCode;
      existing.nationality = dossier.nationality || existing.nationality;
      existing.dossier = dossier;
      existing.scriptCards = scriptCards;
      existing.tone = tone;
      existing.source = source;
      existing.lastContactDate = timestampStr;
      if (!existing.followUpHistory) existing.followUpHistory = [];
      existing.followUpHistory.unshift({
        timestamp: timestampStr,
        step: existing.followUpStep || "step1",
        channel: "system",
        staff: "Vejthani Clinical AI",
        outcome: "completed",
        notes: `อัปเดตเวชระเบียนใหม่จากการสแกนเอกสาร (${source}): ${dossier.diagnosis || 'ประเมินอาการ'}`
      });
      cases[existingIndex] = existing;
    } else {
      const code = (dossier.countryCode || "INT").toUpperCase();
      const numStr = String(cases.length + 1).padStart(3, '0');
      const newId = `CASE-${now.getFullYear()}-${code}-${numStr}`;
      const missingCount = (dossier.documentsMissing && dossier.documentsMissing.length) || 0;
      const initialStep = missingCount > 0 ? "step1" : "step2";

      const newCase = {
        id: newId,
        createdAt: now.toISOString(),
        patientName: dossier.patientName || "Unknown Patient",
        passportOrHN: dossier.passportOrHN || `HN-${code}-${Date.now().toString().slice(-6)}`,
        gender: dossier.gender || "male",
        age: dossier.age || "N/A",
        phone: dossier.phone || "+6627340000",
        countryCode: dossier.countryCode || "TH",
        nationality: dossier.nationality || "International",
        specialty: dossier.specialty || "orthopedics",
        specialtyThai: dossier.specialtyThai || "กระดูกและข้อ King of Bones",
        centerThai: dossier.centerThai || "ศูนย์กระดูกและข้อ",
        centerEng: dossier.centerEng || "King of Bones & Joint Center",
        diagnosis: dossier.diagnosis || "Medical Consultation",
        procedure: dossier.procedure || "Specialist Evaluation",
        doctorAssigned: dossier.doctorAssigned || "Vejthani Specialist Team",
        estimatedCost: dossier.estimatedCost || "ประเมินตามแผนการรักษา",
        recoveryDays: dossier.recoveryDays || 7,
        documentsReceived: dossier.documentsReceived || [],
        documentsMissing: dossier.documentsMissing || [],
        followUpStep: initialStep,
        lastContactDate: timestampStr,
        followUpHistory: [
          {
            timestamp: timestampStr,
            step: initialStep,
            channel: "system",
            staff: "Vejthani Clinical AI",
            outcome: "completed",
            notes: `สร้างเวชระเบียนใหม่จากการสแกนเอกสาร (${source}): ${dossier.diagnosis || 'รอประเมิน'}`
          }
        ],
        dossier: dossier,
        scriptCards: scriptCards,
        tone: tone,
        source: source
      };
      cases.unshift(newCase);
    }

    saveStoredCases(cases);
    if (typeof window.renderCaseDashboard === "function") {
      window.renderCaseDashboard();
    }
  }

  function generateFollowUpScript(c, step, lang) {
    const pName = c.patientName || "คุณคนไข้";
    const diag = c.diagnosis || "ปัญหาสุขภาพ";
    const centerTh = c.centerThai || "ศูนย์การแพทย์เฉพาะทาง";
    const centerEn = c.centerEng || "Vejthani Specialty Center";
    const docName = c.doctorAssigned || "แพทย์ผู้เชี่ยวชาญโรงพยาบาลเวชธานี";
    const cost = c.estimatedCost || "ประมาณการค่าใช้จ่าย";
    const days = c.recoveryDays || 7;
    const missing = (c.documentsMissing && c.documentsMissing.length > 0)
      ? c.documentsMissing.join(", ")
      : "ฟิล์มเอกซเรย์/MRI เพิ่มเติม";

    if (step === "step1") {
      if (lang === "th") {
        return `สวัสดีครับ/ค่ะ ขอเรียนสายคุณ ${pName} ติดต่อจากแผนกลูกค้าสัมพันธ์ต่างประเทศ โรงพยาบาลเวชธานี Vejthani Hospital ตามที่ท่านได้ส่งเอกสารการปรึกษาเรื่อง ${diag} ขณะนี้ทีมแพทย์ผู้เชี่ยวชาญศูนย์ ${centerTh} กำลังประเมินแผนการรักษาเบื้องต้น แต่ยังต้องการ ${missing} เพิ่มเติม เพื่อให้แพทย์วินิจฉัยและออกแผนรักษาได้อย่างแม่นยำที่สุดครับ/ค่ะ ท่านสามารถส่งไฟล์ผ่าน WhatsApp หมายเลขนี้ได้เลยครับ/ค่ะ`;
      } else if (lang === "en") {
        return `Good day, may I speak with Mr./Ms. ${pName}. This is Vejthani Hospital International Medical Liaison calling regarding your medical consultation for ${diag}. Our specialist team at ${centerEn} is currently evaluating your clinical records. To ensure the most accurate treatment protocol and medical quotation, our specialist kindly requests the following additional records: ${missing}. You may submit these files directly via this WhatsApp number or our official medical liaison email.`;
      } else {
        return `مرحباً، هل يمكنني التحدث مع السيد/السيدة ${pName}؟ نتصل بكم من فريق التنسيق الطبي الدولي بمستشفى فيجثاني (Vejthani Hospital) ببانكوك بخصوص استفساركم الطبي حول ${diag}. يقوم فريقنا الاستشاري في ${centerEn} بدراسة تقاريركم الطبية بعناية. ولاستكمال الخطة العلاجية وعرض الأسعار الدقيق، يرجى تزويدنا بالمستندات التالية: ${missing}. يمكنكم إرسال هذه المستندات مباشرة عبر محادثة الواتساب هذه.`;
      }
    } else if (step === "step2") {
      if (lang === "th") {
        return `สวัสดีครับ/ค่ะ ขอเรียนสายคุณ ${pName} ติดต่อจากศูนย์ผู้ป่วยต่างประเทศ โรงพยาบาลเวชธานี Vejthani Hospital แจ้งความคืบหน้าการประเมินทางการแพทย์เรื่อง ${diag} โดย ${docName} ประจำศูนย์ ${centerTh} ได้ออกแผนการรักษาและประมาณการค่ารักษา (Medical Cost Estimate) เรียบร้อยแล้ว อยู่ที่ประมาณ ${cost} ระยะเวลาพักฟื้นในกรุงเทพฯ รวมประมาณ ${days} วันครับ/ค่ะ ทางทีมงานพร้อมส่งเอกสารใบเสนอราคาอย่างละเอียด (Itemized Quotation) และให้คำปรึกษาเพิ่มเติมครับ/ค่ะ`;
      } else if (lang === "en") {
        return `Good day Mr./Ms. ${pName}, this is Vejthani Hospital International Patient Center following up on your clinical consultation for ${diag}. We are pleased to advise that ${docName} at ${centerEn} has reviewed your case and formulated the comprehensive treatment plan. The preliminary medical cost estimation is ${cost} with an expected recovery and hospital stay of ${days} days. We have prepared the official itemized quotation for your review. Would you like us to explain the procedure schedule and physician credentials?`;
      } else {
        return `تحياتنا الطيبة للسيد/السيدة ${pName}، نتواصل معكم من مركز المرضى الدولي بمستشفى فيجثاني ببانكوك لمتابعة استشارتكم الطبية الخاصة بـ ${diag}. يسعدنا إبلاغكم بأن ${docName} في ${centerEn} قد اعتمد الخطة العلاجية وتقدير التكلفة بقيمة ${cost}، مع فترة تعافي وإقامة متوقعة لمدة ${days} يوماً في تايلاند. لقد قمنا بإعداد عرض الأسعار الطبي المعتمد، ويسرنا تزويدكم بالتفاصيل الكاملة وخطة العلاج.`;
      }
    } else if (step === "step3") {
      if (lang === "th") {
        return `สวัสดีครับ/ค่ะ ขอเรียนสายคุณ ${pName} ติดต่อจากแผนกต้อนรับและประสานงานนานาชาติ โรงพยาบาลเวชธานี Vejthani Hospital ติดตามความพร้อมในการเดินทางมารักษาเรื่อง ${diag} ครับ/ค่ะ ทางโรงพยาบาลได้จัดเตรียมหนังสือรับรองแพทย์เพื่อยื่นขอวีซ่ารักษาพยาบาล (Medical Visa Guarantee Letter) และทีมแพทย์พร้อมนัดหมายทันทีที่ท่านเดินทางถึง พร้อมจัดบริการรถรับส่ง VIP จากสนามบินสุวรรณภูมิมายังโรงพยาบาลฟรีครับ/ค่ะ ทางโรงพยาบาลขออนุญาตสอบถามกำหนดการเดินทางและเที่ยวบินเพื่อจัดเตรียมเจ้าหน้าที่ต้อนรับครับ/ค่ะ`;
      } else if (lang === "en") {
        return `Good day Mr./Ms. ${pName}, this is Vejthani Hospital International Concierge & Medical Liaison following up regarding your planned medical travel to Bangkok for ${diag}. We have finalized your Official Medical Visa Guarantee Letter for the Royal Thai Embassy and reserved priority clinical scheduling with ${docName}. Our airport concierge team is standing by to provide complimentary VIP limousine pickup directly from Suvarnabhumi Airport (BKK). May we confirm your intended flight schedule and arrival date?`;
      } else {
        return `أهلاً ومرحباً بالسيد/السيدة ${pName}، يتواصل معكم قسم الاستقبال والتنسيق الدولي بمستشفى فيجثاني ببانكوك لمتابعة ترتيبات سفركم لعلاج ${diag}. نود تأكيد جاهزية خطاب الضمان الطبي المعتمد للسفارة (Medical Visa Guarantee Letter) وتثبيت موعد الفحص والعملية مع ${docName}، كما يوفر المستشفى خدمة الاستقبال بسيارة خاصة من مطار بانكوك الدولي مباشرة. هل يمكنكم تزويدنا بموعد وتفاصيل رحلة الطيران لتأكيد كافة الترتيبات؟`;
      }
    } else {
      if (lang === "th") {
        return `ขอแสดงความยินดีและขอบพระคุณคุณ ${pName} ที่ไว้วางใจโรงพยาบาลเวชธานี Vejthani Hospital ในการดูแลสุขภาพและการรักษา ${diag} ทางโรงพยาบาลได้ยืนยันคิวผ่าตัด/ตรวจรักษากับ ${docName} เรียบร้อยแล้ว พร้อมจัดเตรียมห้องพักผู้ป่วยระดับพรีเมียม ล่ามภาษาอาหรับดูแลส่วนตัวตลอดการรักษา และเจ้าหน้าที่ต้อนรับ ณ สนามบินสุวรรณภูมิ หากต้องการประสานงานด้านใดเพิ่มเติม ทีมเวชธานียินดีดูแลตลอด 24 ชั่วโมงครับ/ค่ะ`;
      } else if (lang === "en") {
        return `Vejthani Hospital is honored to confirm your medical reservation and treatment schedule for ${diag}. Your clinical procedure with ${docName} has been secured, along with your private executive room reservation, dedicated Arabic interpreter concierge, and airport limousine reception upon arrival at Bangkok. Please let us know if you require any additional assistance prior to departure.`;
      } else {
        return `يتشرف مستشفى فيجثاني بتأكيد حجزكم الطبي وموعد إجراء العلاج لـ ${diag}. لقد تم تثبيت موعد العملية مع ${docName}، وتجهيز الغرفة الخاصة، وتعيين مترجم مرافق خاص، بالإضافة إلى خدمة الاستقبال في مطار بانكوك الدولي. فريقنا الطبي في خدمتكم على مدار الساعة لضمان رحلة علاجية مريحة ومكللة بالنجاح بإذن الله.`;
      }
    }
  }

  function generateFollowUpWhatsAppURL(c, step) {
    const rawPhone = (c.phone || "").replace(/[^\d+]/g, '');
    const cleanPhone = rawPhone.replace(/^\+/, '');
    const pName = c.patientName || "Valued Patient";
    const diag = c.diagnosis || "Medical Consultation";
    const centerEn = c.centerEng || "Vejthani Specialty Center";
    const missing = (c.documentsMissing && c.documentsMissing.length > 0)
      ? c.documentsMissing.map(m => "- " + m).join("\n")
      : "- None";

    let msg = "";
    if (step === "step1") {
      msg = `*Vejthani Hospital Bangkok - International Patient Center*\n` +
        `Dear ${pName},\n\n` +
        `Thank you for contacting Vejthani Hospital regarding *${diag}*.\n\n` +
        `Our medical specialist team at *${centerEn}* is currently reviewing your medical inquiry. To provide an accurate treatment plan and quotation, please send us the following missing documents:\n` +
        `${missing}\n\n` +
        `You may reply and attach your documents directly in this WhatsApp chat.\n\n` +
        `*Contact Vejthani Hospital:*\n` +
        `Hotline: +66 2 734 0000 | Arabic Hotline: +66 85 223 8888\n` +
        `Website: https://www.vejthani.com\n` +
        `Vejthani Hospital, Bangkok, Thailand`;
    } else if (step === "step2") {
      msg = `*Vejthani Hospital Bangkok - Treatment Plan & Quotation*\n` +
        `Dear ${pName},\n\n` +
        `We are pleased to advise that your case for *${diag}* has been evaluated by our specialist *${c.doctorAssigned || 'Senior Consultant'}* at *${centerEn}*.\n\n` +
        `*Treatment Details:*\n` +
        `- Procedure: ${c.procedure || 'Specialist Evaluation'}\n` +
        `- Estimated Cost: ${c.estimatedCost || 'Contact for itemized details'}\n` +
        `- Recommended Stay: ${c.recoveryDays || 7} days\n\n` +
        `Please let us know if you would like to receive the official quotation letter and schedule your clinical appointment.\n\n` +
        `Vejthani Hospital International Patient Center`;
    } else if (step === "step3") {
      msg = `*Vejthani Hospital Bangkok - Medical Travel & Visa Coordination*\n` +
        `Dear ${pName},\n\n` +
        `Regarding your upcoming medical journey for *${diag}* at Vejthani Hospital:\n\n` +
        `We have prepared your Official Medical Visa Guarantee Letter for the Royal Thai Embassy and scheduled your clinical priority admission.\n` +
        `Our airport liaison concierge is standing by to provide complimentary VIP pickup at Suvarnabhumi Airport (BKK).\n\n` +
        `Kindly reply with your flight itinerary and travel dates.\n\n` +
        `Vejthani Hospital International Concierge Team`;
    } else {
      msg = `*Vejthani Hospital Bangkok - Treatment Booking Confirmation*\n` +
        `Dear ${pName},\n\n` +
        `Your medical appointment for *${diag}* with *${c.doctorAssigned || 'Specialist Team'}* has been officially confirmed.\n\n` +
        `We look forward to welcoming you to Vejthani Hospital in Bangkok.\n` +
        `Emergency 24/7 Hotline: +66 2 734 0000\n` +
        `Arabic Desk: +66 85 223 8888`;
    }

    const encoded = encodeURIComponent(msg);
    return cleanPhone ? `https://wa.me/${cleanPhone}?text=${encoded}` : `https://wa.me/?text=${encoded}`;
  }

  function renderCaseDashboard() {
    const cases = getStoredCases();
    const searchInput = document.getElementById("caseSearchInput");
    const specFilter = document.getElementById("caseSpecialtyFilter");
    const stepFilter = document.getElementById("caseStepFilter");
    const tbody = document.getElementById("caseTableBody");
    const emptyState = document.getElementById("caseTableEmptyState");
    const countIndicator = document.getElementById("caseCountIndicator");

    const query = (searchInput && searchInput.value) ? searchInput.value.trim().toLowerCase() : "";
    const selectedSpec = (specFilter && specFilter.value) ? specFilter.value : "all";
    const selectedStep = (stepFilter && stepFilter.value) ? stepFilter.value : "all";

    // Update KPI metrics based on all cases in repository
    const metricTotal = document.getElementById("metricTotalCases");
    const metricStep1 = document.getElementById("metricStep1");
    const metricStep2 = document.getElementById("metricStep2");
    const metricStep3 = document.getElementById("metricStep3");
    const metricBooked = document.getElementById("metricBooked");

    if (metricTotal) metricTotal.textContent = cases.length;
    if (metricStep1) metricStep1.textContent = cases.filter(c => c.followUpStep === "step1").length;
    if (metricStep2) metricStep2.textContent = cases.filter(c => c.followUpStep === "step2").length;
    if (metricStep3) metricStep3.textContent = cases.filter(c => c.followUpStep === "step3").length;
    if (metricBooked) metricBooked.textContent = cases.filter(c => c.followUpStep === "booked").length;

    // Filter cases for table display
    const filtered = cases.filter(c => {
      // Query filter
      if (query) {
        const matchName = (c.patientName || "").toLowerCase().includes(query);
        const matchHN = (c.passportOrHN || "").toLowerCase().includes(query);
        const matchNat = (c.nationality || "").toLowerCase().includes(query);
        const matchDiag = (c.diagnosis || "").toLowerCase().includes(query);
        const matchID = (c.id || "").toLowerCase().includes(query);
        if (!matchName && !matchHN && !matchNat && !matchDiag && !matchID) return false;
      }
      // Specialty filter
      if (selectedSpec !== "all") {
        if (c.specialty !== selectedSpec) return false;
      }
      // Step filter
      if (selectedStep !== "all") {
        if (c.followUpStep !== selectedStep) return false;
      }
      return true;
    });

    if (countIndicator) {
      countIndicator.textContent = `แสดง ${filtered.length} จาก ${cases.length} เคส`;
    }

    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = "";
      if (emptyState) emptyState.classList.remove("hidden");
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    tbody.innerHTML = filtered.map(c => {
      let stepBadge = "";
      if (c.followUpStep === "step1") {
        stepBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-300">
          <i data-lucide="file-question" class="w-3 h-3 text-amber-600"></i>
          <span>สเต็ป 1: ขาดเอกสาร</span>
        </span>`;
      } else if (c.followUpStep === "step2") {
        stepBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-300">
          <i data-lucide="stethoscope" class="w-3 h-3 text-blue-600"></i>
          <span>สเต็ป 2: แจ้งแผน &amp; ราคา</span>
        </span>`;
      } else if (c.followUpStep === "step3") {
        stepBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-50 text-purple-800 border border-purple-300">
          <i data-lucide="plane" class="w-3 h-3 text-purple-600"></i>
          <span>สเต็ป 3: วีซ่า &amp; เดินทาง</span>
        </span>`;
      } else {
        stepBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
          <i data-lucide="check-circle" class="w-3 h-3 text-emerald-600"></i>
          <span>นัดหมายสำเร็จ</span>
        </span>`;
      }

      const dateStr = (c.createdAt || "").slice(0, 10);
      const historyCount = (c.followUpHistory || []).length;
      const lastContact = c.lastContactDate || "N/A";

      return `
        <tr class="hover:bg-slate-50/70 transition">
          <td class="py-3 px-4">
            <span class="font-mono font-bold text-slate-800">${c.id}</span>
            <div class="text-[10px] text-slate-400 mt-0.5">${dateStr}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${c.patientName}</div>
            <div class="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span class="px-1.5 py-0.2 rounded bg-slate-100 font-mono font-semibold">${c.countryCode}</span>
              <span>${c.passportOrHN}</span>
              <span class="text-slate-400">|</span>
              <span>${c.phone}</span>
            </div>
          </td>
          <td class="py-3 px-4">
            <div class="font-medium text-[#1B365D]">${c.diagnosis}</div>
            <div class="text-[11px] text-slate-500 mt-0.5">${c.centerThai} (${c.estimatedCost})</div>
          </td>
          <td class="py-3 px-4">
            ${stepBadge}
          </td>
          <td class="py-3 px-4">
            <div class="text-[11px] font-semibold text-slate-700">${lastContact}</div>
            <div class="text-[10px] text-slate-400 mt-0.5">บันทึก ${historyCount} ครั้ง</div>
          </td>
          <td class="py-3 px-4 text-right">
            <div class="inline-flex items-center gap-1">
              <button type="button" class="btn-table-followup px-2.5 py-1.5 bg-[#1B365D] hover:bg-[#152a48] text-white text-[11px] font-bold rounded-lg transition shadow-2xs flex items-center gap-1 cursor-pointer" data-case-id="${c.id}" title="เปิดแผงติดตามเคส 3 สเต็ป">
                <i data-lucide="phone-forwarded" class="w-3.5 h-3.5"></i>
                <span>ติดตามเคส</span>
              </button>
              <button type="button" class="btn-table-teleprompter p-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 rounded-lg transition border border-indigo-200 cursor-pointer" data-case-id="${c.id}" title="เปิดดูในบทพูดโทรศัพท์เฉพาะบุคคล">
                <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
              </button>
              <button type="button" class="btn-table-print p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition border border-slate-200 cursor-pointer" data-case-id="${c.id}" title="พิมพ์ใบสรุปเวชระเบียน (Dossier)">
                <i data-lucide="printer" class="w-3.5 h-3.5"></i>
              </button>
              <button type="button" class="btn-table-delete p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-lg transition border border-rose-200 cursor-pointer" data-case-id="${c.id}" title="ลบข้อมูลเคส">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    // Attach row button events
    tbody.querySelectorAll(".btn-table-followup").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-case-id");
        openCaseFollowUpModal(id);
      });
    });

    tbody.querySelectorAll(".btn-table-teleprompter").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-case-id");
        loadCaseIntoTeleprompter(id);
      });
    });

    tbody.querySelectorAll(".btn-table-print").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-case-id");
        printCaseDossier(id);
      });
    });

    tbody.querySelectorAll(".btn-table-delete").forEach(b => {
      b.addEventListener("click", () => {
        const id = b.getAttribute("data-case-id");
        if (confirm(`คุณต้องการลบข้อมูลเวชระเบียน ${id} หรือไม่?`)) {
          const updated = cases.filter(item => item.id !== id);
          saveStoredCases(updated);
          renderCaseDashboard();
        }
      });
    });

    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function openCaseFollowUpModal(caseId) {
    const cases = getStoredCases();
    const c = cases.find(item => item.id === caseId);
    if (!c) {
      alert("ไม่พบข้อมูลเคสที่เลือก");
      return;
    }

    activeModalCaseId = caseId;
    activeModalStep = c.followUpStep || "step1";
    activeModalLang = "th";

    const modal = document.getElementById("caseFollowUpModal");
    const badge = document.getElementById("modalCaseBadge");
    const nameEl = document.getElementById("modalPatientName");
    const subEl = document.getElementById("modalPatientSub");

    if (badge) badge.textContent = c.id;
    if (nameEl) nameEl.textContent = c.patientName;
    if (subEl) subEl.textContent = `${c.nationality} | ${c.passportOrHN} | ${c.centerThai} | ${c.phone}`;

    updateModalStepUI(c);
    renderModalHistory(c);

    if (modal) modal.classList.remove("hidden");
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function updateModalStepUI(c) {
    const tabs = {
      step1: document.getElementById("btnModalSelectStep1"),
      step2: document.getElementById("btnModalSelectStep2"),
      step3: document.getElementById("btnModalSelectStep3"),
      booked: document.getElementById("btnModalSelectStepBooked")
    };

    Object.keys(tabs).forEach(k => {
      const btn = tabs[k];
      if (!btn) return;
      if (k === activeModalStep) {
        btn.classList.add("bg-[#1B365D]", "border-[#1B365D]", "shadow-sm");
        btn.querySelectorAll("span").forEach(s => s.classList.add("text-white"));
      } else {
        btn.classList.remove("bg-[#1B365D]", "border-[#1B365D]", "shadow-sm");
        btn.querySelectorAll("span").forEach(s => s.classList.remove("text-white"));
      }
    });

    // Language buttons
    const langBtns = {
      th: document.getElementById("btnModalLangThai"),
      en: document.getElementById("btnModalLangEn"),
      ar: document.getElementById("btnModalLangAr")
    };

    Object.keys(langBtns).forEach(k => {
      const btn = langBtns[k];
      if (!btn) return;
      if (k === activeModalLang) {
        btn.classList.add("bg-[#1B365D]", "text-white");
        btn.classList.remove("text-slate-600", "hover:bg-slate-100");
      } else {
        btn.classList.remove("bg-[#1B365D]", "text-white");
        btn.classList.add("text-slate-600", "hover:bg-slate-100");
      }
    });

    // Update Objectives
    const objEl = document.getElementById("modalStepObjective");
    if (objEl) {
      if (activeModalStep === "step1") {
        objEl.textContent = "วัตถุประสงค์ (สเต็ป 1 - Day 1): ติดตามเอกสารและผลสแกนที่ยังขาดอยู่เพื่อให้แพทย์ออกแผนรักษา";
      } else if (activeModalStep === "step2") {
        objEl.textContent = "วัตถุประสงค์ (สเต็ป 2 - Day 3): แจ้งผลการประเมินของแพทย์ผู้เชี่ยวชาญ แผนการผ่าตัด/รักษา และประมาณการค่าใช้จ่าย";
      } else if (activeModalStep === "step3") {
        objEl.textContent = "วัตถุประสงค์ (สเต็ป 3 - Day 7): ประสานหนังสือรับรองทำวีซ่าแพทย์ (Medical Visa Guarantee) และจัดเตรียมรถรับส่งสนามบินสุวรรณภูมิ";
      } else {
        objEl.textContent = "วัตถุประสงค์ (นัดหมายสำเร็จ): ยืนยันการจองห้องพัก คิวตรวจรักษากับแพทย์ และเจ้าหน้าที่ต้อนรับสนามบินสุวรรณภูมิ";
      }
    }

    // Update Script Box
    const scriptBox = document.getElementById("modalScriptContent");
    if (scriptBox) {
      scriptBox.value = generateFollowUpScript(c, activeModalStep, activeModalLang);
      if (activeModalLang === "ar") {
        scriptBox.setAttribute("dir", "rtl");
        scriptBox.classList.add("font-arabic");
      } else {
        scriptBox.setAttribute("dir", "ltr");
        scriptBox.classList.remove("font-arabic");
      }
    }

    // Update WhatsApp link
    const waLink = document.getElementById("btnModalSendWhatsApp");
    if (waLink) {
      waLink.href = generateFollowUpWhatsAppURL(c, activeModalStep);
    }
  }

  function renderModalHistory(c) {
    const cont = document.getElementById("modalHistoryTimeline");
    if (!cont) return;

    const list = c.followUpHistory || [];
    if (list.length === 0) {
      cont.innerHTML = `<div class="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-500 text-center">ยังไม่มีประวัติการติดต่อสำหรับเคสนี้</div>`;
      return;
    }

    cont.innerHTML = list.map(item => `
      <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[9px] font-bold rounded-md bg-[#1B365D] text-white">${(item.step || '').toUpperCase()}</span>
            <span class="font-bold text-slate-800">${item.staff || 'Staff'}</span>
            <span class="text-slate-400">(${item.channel || 'phone'})</span>
          </div>
          <p class="text-slate-600 mt-1">${item.notes || ''}</p>
        </div>
        <div class="text-[10px] text-slate-400 shrink-0 sm:text-right">
          ${item.timestamp || ''}
        </div>
      </div>
    `).join("");
  }

  function loadCaseIntoTeleprompter(caseId) {
    const cases = getStoredCases();
    const c = cases.find(item => item.id === caseId);
    if (!c) {
      alert("ไม่พบข้อมูลเคสที่ระบุ");
      return;
    }

    if (callPatientName) callPatientName.value = c.patientName || "";
    if (callPatientHN) callPatientHN.value = c.passportOrHN || "";
    if (callPatientPhone) callPatientPhone.value = c.phone || "";
    if (callTopic) callTopic.value = c.procedure || c.diagnosis || "";
    if (callRemainingIssue) {
      const missingStr = (c.documentsMissing && c.documentsMissing.length > 0)
        ? c.documentsMissing.join(", ")
        : "เอกสารครบถ้วน";
      callRemainingIssue.value = missingStr;
    }

    if (c.countryCode) {
      syncCountrySelection(c.countryCode);
    }

    if (c.specialty) {
      document.querySelectorAll(".call-preset-btn").forEach(b => {
        if (b.getAttribute("data-specialty") === c.specialty) {
          b.classList.add("bg-[#1B365D]", "text-white", "font-bold");
          b.classList.remove("bg-slate-50", "text-slate-700", "font-semibold");
        } else {
          b.classList.remove("bg-[#1B365D]", "text-white", "font-bold");
          b.classList.add("bg-slate-50", "text-slate-700", "font-semibold");
        }
      });
    }

    if (c.dossier) {
      currentCaseDossier = c.dossier;
    } else {
      currentCaseDossier = {
        patientName: c.patientName,
        passportOrHN: c.passportOrHN,
        gender: c.gender,
        age: c.age,
        phone: c.phone,
        countryCode: c.countryCode,
        nationality: c.nationality,
        specialty: c.specialty,
        specialtyThai: c.specialtyThai,
        centerThai: c.centerThai,
        centerEng: c.centerEng,
        diagnosis: c.diagnosis,
        procedure: c.procedure,
        doctorAssigned: c.doctorAssigned,
        estimatedCost: c.estimatedCost,
        documentsReceived: c.documentsReceived,
        documentsMissing: c.documentsMissing,
        chiefComplaint: c.diagnosis,
        clinicalPrecautions: []
      };
    }

    if (c.scriptCards && c.scriptCards.length > 0) {
      currentCustomScriptCards = c.scriptCards;
    } else {
      currentCustomScriptCards = generateDynamicDocScriptCards(currentCaseDossier, c.tone || "formal");
    }

    renderDossierCard(currentCaseDossier);
    updateCountryClock();
    refreshCallScript();

    if (typeof window.activateView === "function") {
      window.activateView("viewDocTeleprompter");
    }

    const modal = document.getElementById("caseFollowUpModal");
    if (modal) modal.classList.add("hidden");
  }

  function exportCasesToCSV() {
    const cases = getStoredCases();
    if (!cases || cases.length === 0) {
      alert("ไม่มีข้อมูลเคสในคลังเวชระเบียนเพื่อส่งออก");
      return;
    }

    const headers = [
      "Case ID",
      "Created Date",
      "Patient Name",
      "Passport / HN",
      "Gender",
      "Age",
      "Phone",
      "Country Code",
      "Nationality",
      "Specialty",
      "Specialty (Thai)",
      "Diagnosis",
      "Procedure",
      "Doctor Assigned",
      "Estimated Cost (THB)",
      "Recovery Days",
      "Follow-Up Step",
      "Missing Documents",
      "Received Documents",
      "Last Contact Date",
      "Latest Notes"
    ];

    const escapeCSV = (val) => {
      if (val === null || val === undefined) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const rows = cases.map(c => {
      const latestHistory = (c.followUpHistory && c.followUpHistory[0]) ? c.followUpHistory[0].notes : "";
      const missingStr = (c.documentsMissing && Array.isArray(c.documentsMissing)) ? c.documentsMissing.join("; ") : "";
      const recStr = (c.documentsReceived && Array.isArray(c.documentsReceived)) ? c.documentsReceived.join("; ") : "";
      return [
        escapeCSV(c.id),
        escapeCSV(c.createdAt),
        escapeCSV(c.patientName),
        escapeCSV(c.passportOrHN),
        escapeCSV(c.gender),
        escapeCSV(c.age),
        escapeCSV(c.phone),
        escapeCSV(c.countryCode),
        escapeCSV(c.nationality),
        escapeCSV(c.specialty),
        escapeCSV(c.specialtyThai),
        escapeCSV(c.diagnosis),
        escapeCSV(c.procedure),
        escapeCSV(c.doctorAssigned),
        escapeCSV(c.estimatedCost),
        escapeCSV(c.recoveryDays),
        escapeCSV(c.followUpStep),
        escapeCSV(missingStr),
        escapeCSV(recStr),
        escapeCSV(c.lastContactDate),
        escapeCSV(latestHistory)
      ].join(",");
    });

    const csvContent = "\uFEFF" + headers.map(escapeCSV).join(",") + "\r\n" + rows.join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const todayStr = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", `Vejthani_Cases_Export_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function exportCasesToJSON() {
    const cases = getStoredCases();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cases, null, 2));
    const link = document.createElement("a");
    const todayStr = new Date().toISOString().slice(0, 10);
    link.setAttribute("href", dataStr);
    link.setAttribute("download", `Vejthani_Cases_Backup_${todayStr}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function importCasesFromJSON(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) {
          alert("รูปแบบไฟล์ JSON ไม่ถูกต้อง (ต้องเป็น Array ของข้อมูลเคส)");
          return;
        }
        const currentCases = getStoredCases();
        let addedCount = 0;
        let updatedCount = 0;
        imported.forEach(item => {
          if (!item.id) return;
          const idx = currentCases.findIndex(c => c.id === item.id);
          if (idx >= 0) {
            currentCases[idx] = item;
            updatedCount++;
          } else {
            currentCases.unshift(item);
            addedCount++;
          }
        });
        saveStoredCases(currentCases);
        renderCaseDashboard();
        alert(`นำเข้าข้อมูลสำเร็จ: เพิ่มเคสใหม่ ${addedCount} เคส, อัปเดต ${updatedCount} เคส`);
      } catch (err) {
        alert("เกิดข้อผิดพลาดในการอ่านไฟล์ JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  function printCaseDossier(caseId) {
    const cases = getStoredCases();
    const c = cases.find(item => item.id === caseId);
    if (!c) {
      alert("ไม่พบข้อมูลเคสที่ระบุ");
      return;
    }

    const printWin = window.open("", "_blank", "width=850,height=900");
    if (!printWin) {
      alert("กรุณาอนุญาต Pop-up Window เพื่อพิมพ์เอกสาร");
      return;
    }

    const historyRows = (c.followUpHistory || []).map(h => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 8px; font-size: 11px; color: #64748b;">${h.timestamp || ''}</td>
        <td style="padding: 8px; font-size: 11px; font-weight: bold; color: #1e293b;">${(h.step || '').toUpperCase()}</td>
        <td style="padding: 8px; font-size: 11px; color: #334155;">${h.staff || ''} (${h.channel || 'phone'})</td>
        <td style="padding: 8px; font-size: 11px; color: #334155;">${h.notes || ''}</td>
      </tr>
    `).join("");

    const missingItems = (c.documentsMissing && c.documentsMissing.length > 0)
      ? c.documentsMissing.map(m => `<li style="color: #b45309; font-weight: 500;">${m}</li>`).join("")
      : `<li style="color: #059669;">เอกสารครบถ้วนแล้ว (Complete)</li>`;

    const receivedItems = (c.documentsReceived && c.documentsReceived.length > 0)
      ? c.documentsReceived.map(m => `<li>${m}</li>`).join("")
      : `<li>ไม่มีเอกสารแนบเบื้องต้น</li>`;

    const docContent = `
      <!DOCTYPE html>
      <html lang="th">
      <head>
        <meta charset="utf-8">
        <title>Vejthani Clinical Dossier - ${c.id}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Sarabun", sans-serif; margin: 40px; color: #1e293b; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #1B365D; padding-bottom: 16px; margin-bottom: 24px; }
          .title { font-size: 20px; font-weight: 800; color: #1B365D; }
          .subtitle { font-size: 12px; color: #64748b; margin-top: 4px; }
          .badge { display: inline-block; padding: 4px 8px; background: #EC7825; color: white; border-radius: 6px; font-size: 11px; font-weight: bold; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
          .box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; }
          .box-title { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-bottom: 6px; }
          .box-val { font-size: 13px; font-weight: bold; color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-top: 8px; }
          th { background: #f1f5f9; padding: 8px; text-align: left; font-size: 11px; color: #475569; }
          .footer { margin-top: 40px; border-top: 1px solid #cbd5e1; padding-top: 16px; font-size: 11px; color: #94a3b8; display: flex; justify-content: space-between; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="title">โรงพยาบาลเวชธานี Vejthani Hospital</div>
            <div class="subtitle">International Medical Liaison & Clinical Dossier Summary</div>
          </div>
          <div style="text-align: right;">
            <span class="badge">King of Bones</span>
            <div style="font-family: monospace; font-size: 13px; font-weight: bold; margin-top: 4px;">${c.id}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div class="box-title">ข้อมูลคนไข้ (Patient Profile)</div>
            <div class="box-val">${c.patientName}</div>
            <div style="font-size: 12px; color: #475569; margin-top: 2px;">HN/Passport: ${c.passportOrHN} | ${c.gender}, ${c.age} ปี</div>
            <div style="font-size: 12px; color: #475569;">สัญชาติ: ${c.nationality} | โทร: ${c.phone}</div>
          </div>
          <div class="box">
            <div class="box-title">ศูนย์เฉพาะทางและการวินิจฉัย (Clinical Specialty)</div>
            <div class="box-val">${c.centerThai} (${c.centerEng})</div>
            <div style="font-size: 12px; color: #475569; margin-top: 2px;">การวินิจฉัย: ${c.diagnosis}</div>
            <div style="font-size: 12px; color: #475569;">หัตถการ: ${c.procedure}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div class="box-title">แพทย์ผู้เชี่ยวชาญ & ประมาณการค่าใช้จ่าย</div>
            <div class="box-val">${c.doctorAssigned}</div>
            <div style="font-size: 12px; color: #1B365D; font-weight: bold; margin-top: 4px;">ประมาณการ: ${c.estimatedCost} (พักฟื้น ${c.recoveryDays} วัน)</div>
          </div>
          <div class="box">
            <div class="box-title">สถานะการติดตาม (Follow-Up Status)</div>
            <div class="box-val" style="color: #1B365D;">${(c.followUpStep || '').toUpperCase()}</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px;">ติดต่อล่าสุด: ${c.lastContactDate || 'N/A'}</div>
          </div>
        </div>

        <div class="grid">
          <div class="box">
            <div class="box-title">เอกสารที่ได้รับแล้ว (Received Documents)</div>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px;">${receivedItems}</ul>
          </div>
          <div class="box">
            <div class="box-title">เอกสารที่ยังต้องการเพิ่มเติม (Missing Records)</div>
            <ul style="margin: 0; padding-left: 18px; font-size: 12px;">${missingItems}</ul>
          </div>
        </div>

        <div style="margin-top: 20px;">
          <div class="box-title">ประวัติการติดตามประสานงาน (Follow-Up Activity Log)</div>
          <table>
            <thead>
              <tr>
                <th>วันที่ / เวลา</th>
                <th>สเต็ป</th>
                <th>ผู้ติดต่อ (ช่องทาง)</th>
                <th>บันทึกรายละเอียด</th>
              </tr>
            </thead>
            <tbody>
              ${historyRows}
            </tbody>
          </table>
        </div>

        <div class="footer">
          <div>Vejthani Hospital Bangkok - 1 Ladprao 111, Klong-Chan, Bangkapi, Bangkok 10240</div>
          <div>JCI Accredited Healthcare Enterprise</div>
        </div>

        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `;

    printWin.document.open();
    printWin.document.write(docContent);
    printWin.document.close();
  }

  function initCaseDashboardAndRepository() {
    const btnCSV = document.getElementById("btnExportCasesCSV");
    const btnJSON = document.getElementById("btnExportCasesJSON");
    const btnTriggerImport = document.getElementById("btnTriggerImportJSON");
    const fileImport = document.getElementById("fileImportCasesJSON");
    const btnReset = document.getElementById("btnResetDemoCases");

    const searchInput = document.getElementById("caseSearchInput");
    const specFilter = document.getElementById("caseSpecialtyFilter");
    const stepFilter = document.getElementById("caseStepFilter");

    const btnCloseModal = document.getElementById("btnCloseFollowUpModal");
    const btnCloseModalSec = document.getElementById("btnModalCloseSecondary");
    const modal = document.getElementById("caseFollowUpModal");

    const btnStep1 = document.getElementById("btnModalSelectStep1");
    const btnStep2 = document.getElementById("btnModalSelectStep2");
    const btnStep3 = document.getElementById("btnModalSelectStep3");
    const btnStepBooked = document.getElementById("btnModalSelectStepBooked");

    const btnLangTh = document.getElementById("btnModalLangThai");
    const btnLangEn = document.getElementById("btnModalLangEn");
    const btnLangAr = document.getElementById("btnModalLangAr");

    const btnCopy = document.getElementById("btnCopyModalScript");
    const btnSaveLog = document.getElementById("btnSaveFollowUpLog");
    const btnPrintDossier = document.getElementById("btnPrintModalDossier");
    const btnOpenTeleprompter = document.getElementById("btnOpenCaseInTeleprompter");

    if (btnCSV) btnCSV.addEventListener("click", exportCasesToCSV);
    if (btnJSON) btnJSON.addEventListener("click", exportCasesToJSON);
    if (btnTriggerImport && fileImport) {
      btnTriggerImport.addEventListener("click", () => fileImport.click());
      fileImport.addEventListener("change", (e) => {
        if (e.target.files && e.target.files[0]) {
          importCasesFromJSON(e.target.files[0]);
          e.target.value = "";
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener("click", () => {
        if (confirm("คุณต้องการรีเซ็ตคลังเคสเป็นข้อมูลตัวอย่างคนไข้ GCC 5 เคสเริ่มต้นหรือไม่?")) {
          saveStoredCases(DEFAULT_GCC_DEMO_CASES);
          renderCaseDashboard();
        }
      });
    }

    if (searchInput) searchInput.addEventListener("input", renderCaseDashboard);
    if (specFilter) specFilter.addEventListener("change", renderCaseDashboard);
    if (stepFilter) stepFilter.addEventListener("change", renderCaseDashboard);

    if (btnCloseModal && modal) {
      btnCloseModal.addEventListener("click", () => modal.classList.add("hidden"));
    }
    if (btnCloseModalSec && modal) {
      btnCloseModalSec.addEventListener("click", () => modal.classList.add("hidden"));
    }

    const setStep = (step) => {
      activeModalStep = step;
      const cases = getStoredCases();
      const c = cases.find(item => item.id === activeModalCaseId);
      if (c) {
        c.followUpStep = step;
        saveStoredCases(cases);
        updateModalStepUI(c);
        renderCaseDashboard();
      }
    };

    if (btnStep1) btnStep1.addEventListener("click", () => setStep("step1"));
    if (btnStep2) btnStep2.addEventListener("click", () => setStep("step2"));
    if (btnStep3) btnStep3.addEventListener("click", () => setStep("step3"));
    if (btnStepBooked) btnStepBooked.addEventListener("click", () => setStep("booked"));

    const setLang = (lang) => {
      activeModalLang = lang;
      const cases = getStoredCases();
      const c = cases.find(item => item.id === activeModalCaseId);
      if (c) updateModalStepUI(c);
    };

    if (btnLangTh) btnLangTh.addEventListener("click", () => setLang("th"));
    if (btnLangEn) btnLangEn.addEventListener("click", () => setLang("en"));
    if (btnLangAr) btnLangAr.addEventListener("click", () => setLang("ar"));

    if (btnCopy) {
      btnCopy.addEventListener("click", () => {
        const scriptBox = document.getElementById("modalScriptContent");
        if (scriptBox) {
          navigator.clipboard.writeText(scriptBox.value).then(() => {
            const orig = btnCopy.innerHTML;
            btnCopy.innerHTML = `<i data-lucide="check" class="w-3 h-3 text-emerald-600"></i><span>คัดลอกสำเร็จ</span>`;
            if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
            setTimeout(() => {
              btnCopy.innerHTML = orig;
              if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
            }, 1500);
          });
        }
      });
    }

    if (btnSaveLog) {
      btnSaveLog.addEventListener("click", () => {
        const staffInput = document.getElementById("modalLogStaff");
        const channelSelect = document.getElementById("modalLogChannel");
        const outcomeSelect = document.getElementById("modalLogOutcome");
        const notesArea = document.getElementById("modalLogNotes");

        const staff = staffInput ? staffInput.value.trim() : "Coordinator";
        const channel = channelSelect ? channelSelect.value : "phone";
        const outcome = outcomeSelect ? outcomeSelect.value : "completed";
        const notes = notesArea ? notesArea.value.trim() : "";

        if (!notes) {
          alert("กรุณากรอกข้อความบันทึกความคืบหน้าการติดต่อ");
          return;
        }

        const cases = getStoredCases();
        const c = cases.find(item => item.id === activeModalCaseId);
        if (!c) return;

        const now = new Date();
        const timestampStr = now.getFullYear() + "-" +
          String(now.getMonth() + 1).padStart(2, '0') + "-" +
          String(now.getDate()).padStart(2, '0') + " " +
          String(now.getHours()).padStart(2, '0') + ":" +
          String(now.getMinutes()).padStart(2, '0');

        if (!c.followUpHistory) c.followUpHistory = [];
        c.followUpHistory.unshift({
          timestamp: timestampStr,
          step: activeModalStep,
          channel: channel,
          staff: staff,
          outcome: outcome,
          notes: notes
        });

        c.lastContactDate = timestampStr;
        if (outcome === "booked") {
          c.followUpStep = "booked";
          activeModalStep = "booked";
        }

        saveStoredCases(cases);
        renderModalHistory(c);
        updateModalStepUI(c);
        renderCaseDashboard();

        if (notesArea) notesArea.value = "";
        alert("บันทึกประวัติการติดต่อประสานงานเรียบร้อยแล้ว");
      });
    }

    if (btnPrintDossier) {
      btnPrintDossier.addEventListener("click", () => {
        if (activeModalCaseId) printCaseDossier(activeModalCaseId);
      });
    }

    if (btnOpenTeleprompter) {
      btnOpenTeleprompter.addEventListener("click", () => {
        if (activeModalCaseId) loadCaseIntoTeleprompter(activeModalCaseId);
      });
    }

    // Expose functions globally on window
    window.renderCaseDashboard = renderCaseDashboard;
    window.getStoredCases = getStoredCases;
    window.saveCaseToRepository = saveCaseToRepository;
    window.exportCasesToCSV = exportCasesToCSV;
    window.exportCasesToJSON = exportCasesToJSON;
    window.loadCaseIntoTeleprompter = loadCaseIntoTeleprompter;
    window.openCaseFollowUpModal = openCaseFollowUpModal;
    window.printCaseDossier = printCaseDossier;

    // Initial render of dashboard
    renderCaseDashboard();
  }

  // Initial trigger
  refreshCallScript();
  renderInquiryCategory("king_of_bone");
  renderCallRecordsTable();
  initMedicalDocIngestion();
  initTeleprompterQuickActions();
  initCaseDashboardAndRepository();
});
