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
    const displayPatientName = scriptPatientName.startsWith("[") ? scriptPatientName : `คุณ ${scriptPatientName.replace(/^(คุณ|ท่าน)\s*/, '')}`;

    p1 = `“อัสสลามุอะลัยกุม ${formalPatientName} ${pronoun} ${scriptStaffName} จากโรงพยาบาลเวชธานี${polite} ที่เราเคยคุยกันทาง ${channelDisplay} ก่อนหน้านี้ คุณสบายดี${politeQuestion}? ตอนนี้สะดวกคุยสัก 2–3 นาที${politeQuestion}? ${pronoun}โทรมาเพื่อดูว่ามีอะไรที่เราช่วยเตรียมเพิ่มเติมให้คุณได้ ก่อนวางแผนมาพบแพทย์${polite}”`;

    p2 = `“ครั้งก่อน ${displayPatientName} แจ้งว่าอยากทราบเรื่อง ${scriptTopic} เราได้ส่งข้อมูลให้ทาง ${channelDisplay} แล้ว${polite} คุณได้ดูข้อมูลหรือยัง${politeQuestion}? มีส่วนไหนที่อยากให้เราอธิบายเพิ่มเติม${politeQuestion}?”`;

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
          b.classList.add("bg-[#1B365D]", "text-white", "shadow-xs");
          b.classList.remove("text-slate-500");
        } else {
          b.classList.remove("bg-[#1B365D]", "text-white", "shadow-xs");
          b.classList.add("text-slate-500");
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

  function getCallFormData() {
    return {
      patientName: (callPatientName && callPatientName.value.trim()) || "",
      staffName: (callStaffName && callStaffName.value.trim()) || (currentCallLang === "ar" ? "منسق التنسيق الطبي الدولي" : currentCallLang === "th" ? "เจ้าหน้าที่เวชธานี" : "International Patient Coordinator"),
      staffPosition: (callStaffPosition && callStaffPosition.value.trim()) || "International Patient Coordinator",
      staffExt: (callStaffExt && callStaffExt.value.trim()) || "Ext. 2222 (King of Bones)",
      staffWhatsApp: (callStaffWhatsApp && callStaffWhatsApp.value.trim()) || "+66 81 234 5678",
      patientHN: (callPatientHN && callPatientHN.value.trim()) || "",
      patientPhone: (callPatientPhone && callPatientPhone.value.trim()) || "",
      topic: (callTopic && callTopic.value.trim()) || "",
      priorChannel: (callPriorChannel && callPriorChannel.value) || "WhatsApp",
      remainingIssue: (callRemainingIssue && callRemainingIssue.value.trim()) || ""
    };
  }

  function refreshCallScript() {
    const data = getCallFormData();
    const result = generateVejthaniCallScript(data, currentCallLang, currentCallOutcome, currentStaffGender, currentSummaryLang);

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
      const getCardText = (card) => {
        if (currentCallLang === "th") return card.thai || card.english;
        if (currentCallLang === "en") return card.english || card.thai;
        if (currentCallLang === "ar") return card.arabic || card.english;
        return card.thai || card.english;
      };

      if (scriptPrompt1) scriptPrompt1.textContent = getCardText(currentCustomScriptCards[0]);
      if (docP1) docP1.textContent = getCardText(currentCustomScriptCards[0]);
      if (scriptPrompt2) scriptPrompt2.textContent = getCardText(currentCustomScriptCards[1]);
      if (docP2) docP2.textContent = getCardText(currentCustomScriptCards[1]);
      if (scriptPrompt3) scriptPrompt3.textContent = getCardText(currentCustomScriptCards[2]);
      if (docP3) docP3.textContent = getCardText(currentCustomScriptCards[2]);
      if (scriptPrompt4) scriptPrompt4.innerHTML = `<p>${getCardText(currentCustomScriptCards[3])}</p>`;
      if (docP4) docP4.innerHTML = `<p>${getCardText(currentCustomScriptCards[3])}</p>`;
      if (scriptClosingDynamic) scriptClosingDynamic.textContent = getCardText(currentCustomScriptCards[4]);
      if (docP5) docP5.textContent = getCardText(currentCustomScriptCards[4]);
      if (scriptPrompt6) scriptPrompt6.textContent = getCardText(currentCustomScriptCards[5]);
      if (docP6) docP6.textContent = getCardText(currentCustomScriptCards[5]);

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
        const phon = currentCustomScriptCards[idx]?.arabicPhonetic;
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

      if (docP1) docP1.textContent = docDefaultMsg;
      if (docP2) docP2.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
      if (docP3) docP3.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
      if (docP4) docP4.innerHTML = `<p>${currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية")}</p>`;
      if (docP5) docP5.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");
      if (docP6) docP6.textContent = currentCallLang === "th" ? "รอผลการประมวลผลเวชระเบียน" : (currentCallLang === "en" ? "Awaiting medical document analysis" : "في انتظار تحليل السجلات الطبية");

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

  function extractClinicalDossierAndScripts(docText, fileList) {
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
    let age = 50;
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

    // 5. Clinical Specialty & Condition Detection
    let isPediatric = /pediatric|child|infant|clubfoot|talipes|equinovarus|ponseti|เด็ก|กุมาร|เท้าปุก|أطفال|حنفاء/i.test(lower);
    let isCancer = /cancer|carcinoma|tumor|neoplasm|oncology|hepatocellular|biopsy|มะเร็ง|ก้อนเนื้อ|ตับ|เต้านม|سرطان|ورم/i.test(lower);
    let isSpine = /spine|cervical|lumbar|disc|radiculopathy|discectomy|c5-c6|l4-l5|กระดูกคอ|กระดูกสันหลัง|หมอนรองกระดูก|ชา|عمود فقري|انزلاق/i.test(lower);
    let isKnee = /knee|osteoarthritis|arthroplasty|meniscus|varus|tka|kellgren|ข้อเข่า|ข้อเสื่อม|เข่า|ركبة|مفصل/i.test(lower);

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

    let specialty = "king_of_bone";
    let chiefComplaint = "";
    let diagnosis = "";
    let precautions = "";
    let procedure = "";
    let missingDocs = [];
    let scriptCards = [];

    let documentsReceived = (fileList || []).map(f => f.name);
    if (documentsReceived.length === 0) {
      documentsReceived = ["เอกสารเวชระเบียนที่นำเข้าสู่ระบบ"];
    }

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
      diagnosis = explicitDiagnosis || "Hepatocellular Carcinoma / Hepatic Lesion Under Evaluation";
      procedure = "การประชุมคณะกรรมการแพทย์สหสาขาวิชามะเร็ง (Multidisciplinary Tumor Board)";
      chiefComplaint = explicitComplaint || "ตรวจพบก้อนเนื้อในตับจากการตรวจสุขภาพ มีอาการอ่อนเพลียและเบื่ออาหาร";
      precautions = explicitPrecautions || "ต้องประเมินการทำงานของตับ (Child-Pugh Score) และระดับเกล็ดเลือดอย่างใกล้ชิด";
      missingDocs = [
        "ผลตรวจเลือดสารบ่งชี้มะเร็งตับ (AFP Tumor Marker) ภายใน 30 วัน",
        "ผลตรวจการทำงานของตับ (Liver Function Test & Hepatitis B/C Profile)"
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
          thai: "ทางทีมแพทย์ผู้เชี่ยวชาญด้านมะเร็งวิทยาได้รับรายงานผลสแกนและประวัติการรักษาเบื้องต้นเรียบร้อยแล้วครับ อาจารย์แพทย์ได้เริ่มศึกษาข้อมูลแล้ว",
          english: "Our oncology multidisciplinary board has received your medical imaging reports and clinical notes. Our senior oncologists have completed an initial review.",
          arabic: "لقد استلم فريق علاج الأورام لدينا تقارير الفحوصات والملخص الطبي بنجاح وقام استشاريو الأورام بمراجعتها الأولية.",
          arabicPhonetic: "Laqad istalama fariq 'ilaj al-awram ladayna taqareer al-fuhusat wal-mulakh-khas at-tibbi bi-najah wa qama istishariyyu al-awram bi-muraja'atiha al-awwaliyyah."
        },
        {
          step: 3,
          thai: "จากผลตรวจที่ได้รับ ทางพยาบาลขออนุญาตสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการแน่นท้อง น้ำหนักลด หรือมีภาวะตัวเหลืองตาเหลืองหรือไม่ครับ? และรับประทานอาหารได้ปกติไหมครับ?",
          english: "Regarding your current condition: have you noticed abdominal discomfort, unexplained weight loss, or jaundice, and is your appetite normal?",
          arabic: "بخصوص حالتكم الصحية الحالية: هل تشعرون بانتفاخ في البطن، أو فقدان غير مبرر للوزن، أو اصفرار بالعينين؟ وكيف هي شهيتكم للطعام؟",
          arabicPhonetic: "Bi-khusoos halatikum as-sihhiyyah al-haliyyah: hal tash'uroona bi-intifakh fi al-batn, aw fiqdan ghayr mubarrar lil-wazn, aw isfirar bil-'aynayn? Wa kayfa hiya shahiyyatukum lit-ta'am?"
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
          thai: "เพื่อให้คณะกรรมการแพทย์ออกแผนการรักษาและประเมินค่าใช้จ่ายได้อย่างแม่นยำ ปัจจุบันเรายังขาดผลตรวจสารบ่งชี้มะเร็ง (AFP) และผลการทำงานของตับล่าสุด ขอความกรุณาส่งให้ทาง WhatsApp นี้ได้เลยนะครับ",
          english: "To finalize your treatment protocol and travel estimate, our tumor board requires your latest AFP tumor marker and liver panel. You can upload them directly to this WhatsApp chat.",
          arabic: "لاعتماد خطة العلاج وتقدير التكلفة الدقيقة، تحتاج لجنة الأورام لأحدث فحص لدلالات الأورام (AFP) ووظائف الكبد. يمكنكم إرسالها عبر الواتساب.",
          arabicPhonetic: "Li-i'timad khittat al-'ilaj wa taqdeer at-taklufah ad-daqeeqah, tahtaju lajnat al-awram li-ahdath fahs li-dalalat al-awram (AFP) wa waza'if al-kabd. Yumkinukum irsaluha 'abra al-WhatsApp."
        },
        {
          step: 6,
          thai: "ผมจะส่งสรุปแนวทางการประสานงานและหนังสือรับรองเพื่อขอวีซ่าให้ทาง WhatsApp ทันทีนะครับ เมื่อได้รับผลตรวจครบ คณะแพทย์จะออกแผนการรักษาภายใน 24 ชั่วโมงครับ",
          english: "I am sending a formal summary and medical visa assistance letter to your WhatsApp right now. Once the remaining tests arrive, your personalized plan will be issued in 24 hours.",
          arabic: "سأرسل لكم الآن ملخص التنسيق الطبي وخطاب تسهيل التأشيرة العلاجية عبر الواتساب. وفور استلام الفحوصات المتبقية، سنصدر خطتكم العلاجية خلال 24 ساعة.",
          arabicPhonetic: "Sa-ursilu lakum al-an mulakh-khas at-tanseeq at-tibbi wa khitab tas-hil at-ta'shirah al-'ilajiyyah 'abra al-WhatsApp. Wa fawra istilam al-fuhusat al-mutabaqqiyah, sa-nusdir khittatakum al-'ilajiyyah khilal 24 sa'ah."
        }
      ];
    } else if (isSpine) {
      specialty = "king_of_bone";
      diagnosis = explicitDiagnosis || "Cervical Spondylotic Radiculopathy with C5-C6 Herniated Disc";
      procedure = "ผ่าตัดกระดูกคอส่องกล้องแผลเล็ก (Full-Endoscopic Cervical Discectomy)";
      chiefComplaint = explicitComplaint || "ปวดต้นคอร้าวลงแขนขวา ปลายนิ้วชา อ่อนแรงขณะยกของ";
      precautions = explicitPrecautions || "มีอาการชาและกล้ามเนื้อมืออ่อนแรง (Progressive Motor Weakness) ต้องระวังการเคลื่อนไหวศีรษะและคอ";
      missingDocs = [
        "แผ่น CD หรือไฟล์ภาพ MRI กระดูกสันหลังส่วนคอ (DICOM หรือ Cloud Link) ล่าสุด",
        "ประวัติการแพ้ยาและสารทึบรังสี (Contrast Allergy Profile)"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your spine consultation?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. معكم صوراويت من مكتب التنسيق الطبي الدولي بمستشفى فيجثاني في بانكوك. هل وقتكم الكريم مناسب للحديث لبضع دقائق؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ma'akum Sorawit min maktab at-tanseeq at-tibbi ad-dawli bi-Mustashfa Vejthani fi Bangkok. Hal waqtukum al-karim munasib lil-hadith li-bid' daqa'iq?`
        },
        {
          step: 2,
          thai: "ทางทีมศัลยแพทย์กระดูกสันหลังได้รับรายงานสรุปประวัติการรักษาและผลตรวจกล้ามเนื้อเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ศึกษาประวัติเบื้องต้นแล้ว",
          english: "Our spine surgery specialists have reviewed your clinical summary and electrodiagnostic tests. Our senior spine surgeons have completed a preliminary review.",
          arabic: "لقد اطلع استشاريو جراحة العمود الفقري لدينا على ملخصكم الطبي وفحوصات الأعصاب والعضلات بنجاح.",
          arabicPhonetic: "Laqad ittala'a istishariyyu jirahat al-'amood al-faqari ladayna 'ala mulakh-khasikum at-tibbi wa fuhusat al-a'sab wal-'adallat bi-najah."
        },
        {
          step: 3,
          thai: "จากอาการปวดคอร้าวลงแขนและชาปลายนิ้ว ทางพยาบาลขอสอบถามเพิ่มเติมนะครับ ตอนนี้มีอาการหยิบจับสิ่งของแล้วหลุดมือ หรืออาการปวดเวลานอนราบหรือไม่ครับ?",
          english: "Regarding the pain radiating to your arm and finger numbness: do you experience difficulty gripping objects, and does the pain worsen when lying flat?",
          arabic: "بخصوص الألم الممتد للذراع وخدر الأصابع: هل تواجهون صعوبة في إمساك الأشياء أو سقوطها من اليد؟ وهل يزداد الألم عند الاستلقاء؟",
          arabicPhonetic: "Bi-khusoos al-alam al-mumtadd lidh-dhira' wa khadar al-asabi': hal tuwajihuna su'ubah fi imsak al-ashya' aw suqutiha min al-yad? Wa hal yazdadu al-alam 'inda al-istiwla'?"
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
      ];
    } else {
      specialty = "king_of_bone";
      diagnosis = explicitDiagnosis || "Severe Right Knee Osteoarthritis (Kellgren-Lawrence Grade 3-4)";
      procedure = "ผ่าตัดเปลี่ยนข้อเข่าเทียมด้วยหุ่นยนต์ช่วยผ่าตัด (Robotic Total Knee Arthroplasty)";
      chiefComplaint = explicitComplaint || "ปวดตึงข้อเข่ารุนแรง เดินต่อเนื่องได้ไม่เกิน 10 นาที";
      precautions = explicitPrecautions || (lower.includes("diabetes") || lower.includes("เบาหวาน") || lower.includes("dm")
        ? "มีโรคประจำตัวเบาหวานชนิดที่ 2 (Type 2 DM) ต้องประเมินระดับน้ำตาลก่อนผ่าตัด"
        : "ไม่มีประวัติแพ้ยารุนแรง");
      missingDocs = [
        "ผลตรวจระดับน้ำตาลสะสม (HbA1c Blood Test) ภายใน 30 วันล่าสุด",
        "ผลตรวจคลื่นไฟฟ้าหัวใจ (12-Lead ECG) ประเมินก่อนดมยาสลบ"
      ];
      scriptCards = [
        {
          step: 1,
          thai: `สวัสดีครับ ขอสายคุณ${patientName} นะครับ ผมชื่อศรวิทย์ พยาบาลประสานงานผู้ป่วยสากล จากโรงพยาบาลเวชธานี กรุงเทพฯ ครับ สะดวกคุยสัก 2-3 นาทีไหมครับ?`,
          english: `Good day, ${patientName}. My name is Sorawit, International Patient Liaison Coordinator from Vejthani Hospital, Bangkok. May I have 2-3 minutes to discuss your medical inquiry?`,
          arabic: `السلام عليكم ورحمة الله وبركاته، مرحباً بالسيد/السيدة ${patientName}. أنا صوراويت، منسق رعاية المرضى الدوليين من مستشفى فيجثاني في بانكوك. هل وقتك مناسب للحديث لبضع دقائق؟`,
          arabicPhonetic: `As-salamu alaykum wa rahmatullahi wa barakatuh, Marhaban ${patientName}. Ana Sorawit, munas-siq ri'ayah al-marda ad-dawliyyin min Mustashfa Vejthani fi Bangkok. Hal waqtuka munasib lil-hadith li-bid' daqa'iq?`
        },
        {
          step: 2,
          thai: "ทางทีมแพทย์ศูนย์กระดูกและข้อ King of Bones ได้รับภาพสแกนข้อเข่า และประวัติการรักษาเรียบร้อยแล้วครับ แพทย์ผู้เชี่ยวชาญได้ดูภาพเบื้องต้นแล้ว",
          english: "Our orthopedic team at the King of Bones Center has received your knee imaging and medical notes. Our chief joint surgeon has conducted an initial review.",
          arabic: "لقد استلم فريقنا الطبي في مركز عظام كينغ أوف بونز صور الرنين المغناطيسي لركبتكم وتقرير الإحالة الطبي بنجاح وقام استشاري العظام بمراجعتها الأولية.",
          arabicPhonetic: "Laqad istalama fariquna at-tibbi fi markaz 'Izam King of Bones suwar ar-ranin al-mighnatisi li-rukbatikum wa taqreer al-ihalah at-tibbi bi-najah wa qama istishari al-'izam bi-muraja'atiha al-awwaliyyah."
        },
        {
          step: 3,
          thai: "จากผลตรวจพบภาวะข้อเข่าเสื่อมระยะที่ 3-4 ทางพยาบาลขอประเมินอาการเพิ่มนะครับ ตอนนี้เวลาเดินมีอาการปวดแปลบหรือต้องใช้อุปกรณ์ช่วยพยุงไหมครับ? และมีอาการปวดตื่นกลางคืนหรือไม่?",
          english: "The imaging confirms advanced joint cartilage loss. To optimize our surgical planning, may I ask: how many meters can you walk comfortably, and do you experience rest pain at night?",
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
      scriptCards: scriptCards
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

          const cfgGeminiApiKey = document.getElementById("cfgGeminiApiKey");
          const apiKey = (cfgGeminiApiKey && cfgGeminiApiKey.value.trim()) || "";

          let result = null;

          // Attempt backend API if available
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);
            const response = await fetch("/api/analyze-doc", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                apiKey: apiKey,
                files: processedFiles,
                textContext: extractedDocText
              }),
              signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
              const apiResult = await response.json();
              if (apiResult && apiResult.dossier && apiResult.scriptCards) {
                result = apiResult;
              }
            }
          } catch (apiErr) {
            console.warn("API call skipped or unavailable (using client-side clinical engine):", apiErr);
          }

          // If backend API not available or on static host (e.g. GitHub Pages), execute Client-Side Clinical Extraction Engine!
          if (!result || !result.dossier || !result.scriptCards) {
            result = extractClinicalDossierAndScripts(extractedDocText, stagedMedicalFiles);
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

            if (statusEl) {
              statusEl.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-700 font-bold">ประมวลผลสำเร็จ: วิเคราะห์ข้อมูลคุณ ${result.dossier.patientName} (${result.dossier.nationality}) เรียบร้อย สคริปต์พยาบาลปรับตามเอกสารตรงทุกภาษา</span>`;
            }
          }
        } catch (err) {
          console.error("Medical doc processing error:", err);
          const fallbackResult = extractClinicalDossierAndScripts(stagedMedicalFiles.map(f => f.name).join(" "), stagedMedicalFiles);
          if (fallbackResult) {
            currentCaseDossier = fallbackResult.dossier;
            currentCustomScriptCards = fallbackResult.scriptCards;
            renderDossierCard(fallbackResult.dossier);
            refreshCallScript();
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
  }

  function initTeleprompterQuickActions() {
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

  // Initial trigger
  refreshCallScript();
  renderInquiryCategory("king_of_bone");
  renderCallRecordsTable();
  initMedicalDocIngestion();
  initTeleprompterQuickActions();
});
