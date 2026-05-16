// === i18n ===
let lastUserLat = null, lastUserLng = null;
const i18n = {
  tr: { subtitle: 'Tarihin ve kültürün kalbine hoş geldiniz', findBtn: 'Yakınımdaki Yerleri Bul', initialMsg: 'Başlamak için butona tıklayın.', videoSearch: 'tanıtım', infoLabel: 'Bilgi', durationLabel: 'Süre', walking: 'Yürüyerek', byCar: 'Araçla', directions: 'Yol Tarifi', watchVideo: 'Video İzle', locating: 'Konumunuz bulunuyor...', locError: 'Konum alınamadı. Lütfen konum iznini kontrol edin.', showMore: 'Daha Fazla Mekan Göster', noSupport: 'Tarayıcınız konum özelliğini desteklemiyor.' },
  en: { subtitle: 'Welcome to the heart of history and culture', findBtn: 'Find Nearby Places', initialMsg: 'Click the button to start.', videoSearch: 'tour', infoLabel: 'Info', durationLabel: 'Duration', walking: 'Walking', byCar: 'By Car', directions: 'Get Directions', watchVideo: 'Watch Video', locating: 'Finding your location...', locError: 'Could not get location. Please check location permission.', showMore: 'Show More Places', noSupport: 'Your browser does not support geolocation.' },
  de: { subtitle: 'Willkommen im Herzen der Geschichte und Kultur', findBtn: 'Orte in der Nähe finden', initialMsg: 'Klicken Sie die Schaltfläche.', videoSearch: 'Tour', infoLabel: 'Info', durationLabel: 'Dauer', walking: 'Zu Fuß', byCar: 'Mit dem Auto', directions: 'Route', watchVideo: 'Video ansehen', locating: 'Standort wird ermittelt...', locError: 'Standort konnte nicht ermittelt werden.', showMore: 'Mehr Orte anzeigen', noSupport: 'Ihr Browser unterstützt keine Geolokalisierung.' },
  fr: { subtitle: 'Bienvenue au cœur de l\'histoire et de la culture', findBtn: 'Trouver les lieux proches', initialMsg: 'Cliquez sur le bouton pour commencer.', videoSearch: 'visite', infoLabel: 'Info', durationLabel: 'Durée', walking: 'À pied', byCar: 'En voiture', directions: 'Itinéraire', watchVideo: 'Regarder la vidéo', locating: 'Localisation en cours...', locError: 'Impossible d\'obtenir la localisation.', showMore: 'Afficher plus de lieux', noSupport: 'Votre navigateur ne supporte pas la géolocalisation.' },
  es: { subtitle: 'Bienvenido al corazón de la historia y la cultura', findBtn: 'Encontrar lugares cercanos', initialMsg: 'Haga clic en el botón para comenzar.', videoSearch: 'visita', infoLabel: 'Info', durationLabel: 'Duración', walking: 'A pie', byCar: 'En coche', directions: 'Cómo llegar', watchVideo: 'Ver video', locating: 'Buscando ubicación...', locError: 'No se pudo obtener la ubicación.', showMore: 'Mostrar más lugares', noSupport: 'Su navegador no soporta geolocalización.' },
  pt: { subtitle: 'Bem-vindo ao coração da história e da cultura', findBtn: 'Encontrar lugares próximos', initialMsg: 'Clique no botão para começar.', videoSearch: 'visita', infoLabel: 'Info', durationLabel: 'Duração', walking: 'A pé', byCar: 'De carro', directions: 'Como chegar', watchVideo: 'Assistir vídeo', locating: 'Localizando...', locError: 'Não foi possível obter a localização.', showMore: 'Mostrar mais lugares', noSupport: 'Seu navegador não suporta geolocalização.' },
  ru: { subtitle: 'Добро пожаловать в сердце истории и культуры', findBtn: 'Найти ближайшие места', initialMsg: 'Нажмите кнопку для начала.', videoSearch: 'тур', infoLabel: 'Инфо', durationLabel: 'Время', walking: 'Пешком', byCar: 'На машине', directions: 'Маршрут', watchVideo: 'Смотреть видео', locating: 'Определение местоположения...', locError: 'Не удалось получить местоположение.', showMore: 'Показать больше мест', noSupport: 'Ваш браузер не поддерживает геолокацию.' },
  uk: { subtitle: 'Ласкаво просимо до серця історії та культури', findBtn: 'Знайти найближчі місця', initialMsg: 'Натисніть кнопку для початку.', videoSearch: 'тур', infoLabel: 'Інфо', durationLabel: 'Час', walking: 'Пішки', byCar: 'На авто', directions: 'Маршрут', watchVideo: 'Дивитися відео', locating: 'Визначення місця...', locError: 'Не вдалося отримати місцезнаходження.', showMore: 'Показати більше місць', noSupport: 'Ваш браузер не підтримує геолокацію.' },
  ar: { subtitle: 'مرحباً بك في قلب التاريخ والثقافة', findBtn: 'ابحث عن الأماكن القريبة', initialMsg: 'انقر على الزر للبدء.', videoSearch: 'جولة', infoLabel: 'معلومات', durationLabel: 'المدة', walking: 'مشياً', byCar: 'بالسيارة', directions: 'الاتجاهات', watchVideo: 'مشاهدة الفيديو', locating: 'جارٍ تحديد موقعك...', locError: 'تعذر الحصول على الموقع.', showMore: 'عرض المزيد من الأماكن', noSupport: 'متصفحك لا يدعم تحديد الموقع.' },
  nl: { subtitle: 'Welkom in het hart van de geschiedenis en cultuur', findBtn: 'Vind nabijgelegen plaatsen', initialMsg: 'Klik op de knop om te beginnen.', videoSearch: 'rondleiding', infoLabel: 'Info', durationLabel: 'Duur', walking: 'Lopen', byCar: 'Met de auto', directions: 'Route', watchVideo: 'Video bekijken', locating: 'Locatie bepalen...', locError: 'Locatie kon niet worden bepaald.', showMore: 'Meer plaatsen tonen', noSupport: 'Uw browser ondersteunt geen geolocatie.' },
  ja: { subtitle: '歴史と文化の中心へようこそ', findBtn: '近くの場所を探す', initialMsg: 'ボタンを押してください。', videoSearch: 'ツアー', infoLabel: '情報', durationLabel: '所要時間', walking: '徒歩', byCar: '車', directions: 'ルート案内', watchVideo: '動画を見る', locating: '位置情報を取得中...', locError: '位置情報を取得できませんでした。', showMore: 'もっと見る', noSupport: 'ブラウザが位置情報をサポートしていません。' },
  zh: { subtitle: '欢迎来到历史与文化的心脏', findBtn: '查找附近地点', initialMsg: '请点击按钮开始。', videoSearch: '游览', infoLabel: '信息', durationLabel: '时长', walking: '步行', byCar: '开车', directions: '获取路线', watchVideo: '观看视频', locating: '正在定位...', locError: '无法获取位置信息。', showMore: '显示更多地点', noSupport: '您的浏览器不支持地理定位。' },
  ko: { subtitle: '역사와 문화의 심장에 오신 것을 환영합니다', findBtn: '근처 장소 찾기', initialMsg: '버튼을 클릭하여 시작하세요.', videoSearch: '투어', infoLabel: '정보', durationLabel: '소요 시간', walking: '도보', byCar: '차량', directions: '길찾기', watchVideo: '동영상 보기', locating: '위치 확인 중...', locError: '위치를 가져올 수 없습니다.', showMore: '더 많은 장소 보기', noSupport: '브라우저가 위치 정보를 지원하지 않습니다.' },
  hi: { subtitle: 'इतिहास और संस्कृति के दिल में आपका स्वागत है', findBtn: 'नज़दीकी स्थान खोजें', initialMsg: 'शुरू करने के लिए बटन दबाएं।', videoSearch: 'दौरा', infoLabel: 'जानकारी', durationLabel: 'समय', walking: 'पैदल', byCar: 'कार से', directions: 'रास्ता', watchVideo: 'वीडियो देखें', locating: 'स्थान खोजा जा रहा है...', locError: 'स्थान नहीं मिला।', showMore: 'अधिक स्थान दिखाएं', noSupport: 'ब्राउज़र भू-स्थान का समर्थन नहीं करता।' },
  bn: { subtitle: 'ইতিহাস ও সংস্কৃতির হৃদয়ে স্বাগতম', findBtn: 'কাছের স্থান খুঁজুন', initialMsg: 'শুরু করতে বোতামে ক্লিক করুন।', videoSearch: 'ভ্রমণ', infoLabel: 'তথ্য', durationLabel: 'সময়', walking: 'হেঁটে', byCar: 'গাড়িতে', directions: 'পথ দেখান', watchVideo: 'ভিডিও দেখুন', locating: 'অবস্থান খোঁজা হচ্ছে...', locError: 'অবস্থান পাওয়া যায়নি।', showMore: 'আরো স্থান দেখুন', noSupport: 'ব্রাউজার জিওলোকেশন সমর্থন করে না।' },
  id: { subtitle: 'Selamat datang di jantung sejarah dan budaya', findBtn: 'Temukan tempat terdekat', initialMsg: 'Klik tombol untuk memulai.', videoSearch: 'tur', infoLabel: 'Info', durationLabel: 'Durasi', walking: 'Berjalan kaki', byCar: 'Berkendara', directions: 'Petunjuk Arah', watchVideo: 'Tonton Video', locating: 'Mencari lokasi...', locError: 'Lokasi tidak dapat ditemukan.', showMore: 'Tampilkan lebih banyak tempat', noSupport: 'Browser tidak mendukung geolokasi.' },
  kk: { subtitle: 'Тарих пен мәдениет жүрегіне қош келдіңіз', findBtn: 'Жақын жерлерді табыңыз', initialMsg: 'Бастау үшін батырманы басыңыз.', videoSearch: 'экскурсия', infoLabel: 'Ақпарат', durationLabel: 'Уақыт', walking: 'Жаяу', byCar: 'Көлікпен', directions: 'Бағыт', watchVideo: 'Бейне көру', locating: 'Орын анықталуда...', locError: 'Орынды алу мүмкін болмады.', showMore: 'Көбірек орын көрсету', noSupport: 'Браузер геолокацияны қолдамайды.' },
  uz: { subtitle: 'Tarix va madaniyat yuragiga xush kelibsiz', findBtn: 'Yaqin joylarni toping', initialMsg: 'Boshlash uchun tugmani bosing.', videoSearch: 'sayohat', infoLabel: 'Ma\'lumot', durationLabel: 'Vaqt', walking: 'Piyoda', byCar: 'Avtomobilda', directions: 'Yo\'l ko\'rsatish', watchVideo: 'Video ko\'rish', locating: 'Joylashuv aniqlanmoqda...', locError: 'Joylashuvni olish imkoni bo\'lmadi.', showMore: 'Ko\'proq joy ko\'rsatish', noSupport: 'Brauzer geolokatsiyani qo\'llab-quvvatlamaydi.' },
  az: { subtitle: 'Tarixin və mədəniyyətin ürəyinə xoş gəlmisiniz', findBtn: 'Yaxın yerləri tapın', initialMsg: 'Başlamaq üçün düyməni basın.', videoSearch: 'ekskursiya', infoLabel: 'Məlumat', durationLabel: 'Vaxt', walking: 'Piyada', byCar: 'Avtomobillə', directions: 'Marşrut', watchVideo: 'Video izlə', locating: 'Yer müəyyən edilir...', locError: 'Yer tapılmadı.', showMore: 'Daha çox yer göstər', noSupport: 'Brauzer geolokasiyaya dəstək vermir.' }
};
const browserLang = (navigator.language || 'tr').slice(0,2);
let currentLang = i18n[browserLang] ? browserLang : 'tr';
function t(key) { return (i18n[currentLang] || i18n.tr)[key] || ''; }
function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const sel = document.getElementById('langSelect');
  if (sel) sel.value = lang;
  document.documentElement.lang = lang;
  // RTL dil desteği (Arapça)
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Kartlar zaten gösterilmişse yeniden render et
  if (lastUserLat !== null && lastUserLng !== null) {
    displayPlaces(lastUserLat, lastUserLng);
  }
}

// === MEKANLAR ===
const places = [
  {
    name: { tr: 'Mevlana Müzesi ve Türbesi', en: 'Mevlana Museum & Tomb', de: 'Mevlana-Museum', ja: 'メヴラーナ博物館', zh: '梅夫拉纳博物馆', fr: 'Musée et Mausolée de Mevlana', es: 'Museo y Mausoleo de Mevlana', pt: 'Museu e Mausoléu de Mevlana', ru: 'Музей и мавзолей Мевланы', uk: 'Музей і мавзолей Мевлани', ar: 'متحف وضريح مولانا', nl: 'Mevlana Museum & Tombe', ko: '메블라나 박물관', hi: 'मेवलाना संग्रहालय', bn: 'মেভলানা যাদুঘর', id: 'Museum Mevlana', kk: 'Мевлана мұражайы', uz: 'Mavlono muzeyi', az: 'Mövlana Muzeyi' },
    lat: 37.8707, lng: 32.5050,
    desc: { tr: "Mevlana Celaleddin Rumi'nin türbesinin bulunduğu, Konya'nın en çok ziyaret edilen manevi mekanı. Çinileri ve mistik atmosferiyle büyüleyicidir.", en: "The most visited spiritual site in Konya, housing the tomb of Mevlana Rumi. Magnificent tiles and mystical atmosphere.", de: "Geistliche Stätte in Konya mit dem Grab von Mevlana Rumi. Eindrucksvolle Fliesen und mystische Atmosphäre.", ja: "コンヤで最も多く訪れられる精神的な場所。荘厳なタイルと神秘的な雰囲気。", zh: "科尼亚最受欢迎的精神场所，梅夫拉纳·鲁米的陵墓，壮丽的瓷砖和神秘气氛。", fr: "Le site spirituel le plus visité de Konya, abritant le tombeau de Mevlana Rumi. Magnifiques carreaux et atmosphère mystique.", es: "El lugar espiritual más visitado de Konya, con la tumba de Mevlana Rumi. Magníficos azulejos y atmósfera mística.", pt: "O local espiritual mais visitado de Konya, com o túmulo de Mevlana Rumi. Magníficos azulejos e atmosfera mística.", ru: "Самое посещаемое духовное место Коньи с гробницей Мевлана Руми. Великолепные изразцы и мистическая атмосфера.", uk: "Найвідвідуваніше духовне місце Коньї з гробницею Мевлана Румі. Чудові плитки та містична атмосфера.", ar: "أكثر المواقع الروحية زيارة في قونية، يضم ضريح مولانا رومي. بلاط رائع وأجواء صوفية مميزة.", nl: "Het meest bezochte spirituele site in Konya, met het graf van Mevlana Rumi. Prachtige tegels en mystieke sfeer.", ko: "메블라나 루미의 무덤이 있는 코냐의 가장 많이 방문되는 영적 장소. 아름다운 타일과 신비로운 분위기.", hi: "कोन्या का सबसे अधिक देखा जाने वाला आध्यात्मिक स्थल, जहाँ मेवलाना रूमी की मज़ार है। शानदार टाइलें और रहस्यमय माहौल।", bn: "কোনিয়ার সবচেয়ে বেশি পরিদর্শিত আধ্যাত্মিক স্থান, মেভলানা রুমির সমাধি রয়েছে। অপূর্ব টাইলস ও রহস্যময় পরিবেশ।", id: "Situs spiritual paling banyak dikunjungi di Konya, tempat makam Mevlana Rumi. Ubin indah dan suasana mistis.", kk: "Мевлана Румидің кесенесі орналасқан Қонияның ең танымал рухани орны. Тамаша кафельдер мен мистикалық атмосфера.", uz: "Mavlono Rumiyning maqbarasi joylashgan Qoniyaning eng ko'p tashrif buyuriladigan ma'naviy joyi. Ajoyib kafel va mistik muhit.", az: "Mövlana Ruminin türbəsinin olduğu Konyanın ən çox ziyarət edilən mənəvi məkanı. Möhtəşəm kafel və mistik atmosfer." },
    videoUrl: 'https://www.youtube.com/watch?v=3D-kYE0hMJY',
    images: ['img/mevlana.png']
  },
  {
    name: { tr: 'Konya Panorama Müzesi', en: 'Konya Panorama Museum', de: 'Konya Panorama Museum', ja: 'コンヤパノラマ博物館', zh: '科尼亚全景博物馆', fr: 'Musée Panorama de Konya', es: 'Museo Panorama de Konya', pt: 'Museu Panorama de Konya', ru: 'Панорамный музей Коньи', uk: 'Панорамний музей Коньї', ar: 'متحف بانوراما قونية', nl: 'Konya Panorama Museum', ko: '코냐 파노라마 박물관', hi: 'कोन्या पैनोरमा संग्रहालय', bn: 'কোনিয়া প্যানোরামা জাদুঘর', id: 'Museum Panorama Konya', kk: 'Қония панорама мұражайы', uz: 'Qoniya panorama muzeyi', az: 'Konya Panorama Muzeyi' },
    lat: 37.8700, lng: 32.5118,
    desc: { tr: "13. yüzyıl Konya'sının, Mevlana'nın hayatının 3 boyutlu maketlerle harika şekilde canlandırıldığı müze.", en: "Museum recreating 13th century Konya and the life of Mevlana with 3D models.", de: "Museum, das das Konya des 13. Jahrhunderts in 3D-Modellen darstellt.", ja: "13世紀のコンヤとメヴラーナの生涯を3Dモデルで再現した博物館。", zh: "用3D模型再现13世纪科尼亚和梅夫拉纳生平的博物馆。", fr: "Musée recréant le Konya du XIIIe siècle et la vie de Mevlana en modèles 3D.", es: "Museo que recrea el Konya del siglo XIII y la vida de Mevlana con modelos 3D.", pt: "Museu que recria o Konya do século XIII e a vida de Mevlana com modelos 3D.", ru: "Музей, воссоздающий Конью XIII века и жизнь Мевланы в 3D-моделях.", uk: "Музей, що відтворює Конью XIII ст. та життя Мевлани у 3D-моделях.", ar: "متحف يعيد تمثيل قونية في القرن الثالث عشر وحياة مولانا بنماذج ثلاثية الأبعاد.", nl: "Museum dat het Konya van de 13e eeuw en het leven van Mevlana in 3D-modellen recreëert.", ko: "13세기 코냐와 메블라나의 삶을 3D 모델로 재현한 박물관.", hi: "13वीं सदी के कोन्या और मेवलाना के जीवन को 3D मॉडलों से दर्शाने वाला संग्रहालय।", bn: "13শ শতাব্দীর কোনিয়া ও মেভলানার জীবন 3D মডেলে উপস্থাপনকারী জাদুঘর।", id: "Museum yang menggambarkan Konya abad ke-13 dan kehidupan Mevlana dalam model 3D.", kk: "XIII ғасырдағы Қония мен Мевлананың өмірін 3D макеттерде бейнелейтін мұражай.", uz: "XIII asrdagi Qoniya va Mavlononing hayotini 3D makettlarda ko'rsatuvchi muzey.", az: "XIII əsr Konya və Mövlananın həyatını 3D modellərlə canlandıran muzey." },
    videoUrl: 'https://www.youtube.com/watch?v=gcQDRk_CsSY',
    images: ['img/panorama.png']
  },
  {
    name: { tr: 'Karatay Medresesi (Çini Eserler Müzesi)', en: 'Karatay Madrasa', de: 'Karatay-Medrese', ja: 'カラタイ神学校', zh: '卡拉塔伊神学院', fr: 'Médersa Karatay', es: 'Madrasa Karatay', pt: 'Madrassa Karatay', ru: 'Медресе Каратай', uk: 'Медресе Каратай', ar: 'مدرسة قرطاي', nl: 'Karatay Madrasa', ko: '카라타이 마드라사', hi: 'कारातय मदरसा', bn: 'কারাতায় মাদ্রাসা', id: 'Madrasa Karatay', kk: 'Каратай медресесі', uz: 'Karatay madrasasi', az: 'Karatay Mədrəsəsi' },
    lat: 37.8750, lng: 32.4932,
    desc: { tr: "Selçuklu dönemi çini sanatının en güzel örneklerini sergileyen, muazzam kapı işçiliğine sahip tarihi eğitim yuvası.", en: "Historic madrasa showcasing the finest Seljuk tile art with a magnificent entrance.", de: "Historische Medrese mit der schönsten Seldschukischen Fliesenkunst und prächtigem Portal.", ja: "セルジューク朝の最高のタイル芸術を展示する歴史的な神学校。", zh: "展示塞尔柱最精美瓷砖艺术的历史神学院。", fr: "Médersa historique présentant les plus belles céramiques seldjoukides avec une entrée magnifique.", es: "Madrasa histórica con las mejores artes cerámicas selyúcidas y una entrada magnífica.", pt: "Madrassa histórica com as mais belas cerâmicas seljúcidas e uma entrada magnífica.", ru: "Историческое медресе с лучшими образцами сельджукской керамики и великолепным входом.", uk: "Історичне медресе з найкращими зразками сельджукської кераміки та пишним входом.", ar: "مدرسة تاريخية تعرض أجمل فنون الكاشي السلجوقي بمدخل بديع.", nl: "Historische madrasa met de mooiste Seljukse keramische kunst en een prachtige ingang.", ko: "웅장한 입구와 최고의 셀주크 도자기 예술을 전시하는 역사적인 마드라사.", hi: "सेल्जुक काल की बेहतरीन मिट्टी के बर्तनों की कला को प्रदर्शित करने वाला ऐतिहासिक मदरसा।", bn: "সেলজুক টাইল শিল্পের সেরা নমুনা প্রদর্শনকারী ঐতিহাসিক মাদ্রাসা।", id: "Madrasa bersejarah yang menampilkan seni keramik Seljuk terbaik dengan gerbang megah.", kk: "Ең үздік сельджук кафель өнерін көрсететін тарихи медресе.", uz: "Eng yaxshi saljuqiy kafel san'atini namoyish etuvchi tarixiy madrasa.", az: "Ən gözəl Səlcuq kafel sənətini nümayiş etdirən tarixi mədrəsə." },
    videoUrl: 'https://www.youtube.com/watch?v=z4jZaTM5qm8',
    images: ['img/karatymedresesi.png']
  },
  {
    name: { tr: 'İnce Minareli Medrese', en: 'Ince Minareli Madrasa', de: 'Ince-Minareli-Medrese', ja: 'インジェミナレリ神学校', zh: '细尖塔神学院', fr: 'Médersa au Minaret Élancé', es: 'Madrasa del Minarete Delgado', pt: 'Madrassa do Minarete Esguio', ru: 'Медресе Тонкого Минарета', uk: 'Медресе Тонкого Мінарету', ar: 'مدرسة المئذنة النحيلة', nl: 'Ince Minareli Madrasa', ko: '인제 미나렐리 마드라사', hi: 'इंजे मिनारेली मदरसा', bn: 'ইঞ্জে মিনারেলি মাদ্রাসা', id: 'Madrasa Ince Minareli', kk: 'Ince Minareli медресесі', uz: 'Ince Minareli madrasasi', az: 'İncə Minarəli Mədrəsə' },
    lat: 37.8728, lng: 32.4903,
    desc: { tr: "Taş işçiliğinin şaheseri olan kapısıyla ünlü, taş ve ahşap eserlerin sergilendiği Selçuklu medresesi.", en: "Famous Seljuk madrasa known for its masterpiece stone-carved gate, now a stone and wood artifacts museum.", de: "Berühmte Seldschukische Medrese mit einem meisterhaften Steintor, nun ein Stein- und Holzkunstmuseum.", ja: "傑作の石彫りの門で有名なセルジューク朝の神学校。現在は石と木の工芸品博物館。", zh: "以石雕大门著称的塞尔柱神学院，现为石木艺术博物馆。", fr: "Célèbre médersa seldjoukide connue pour sa porte en pierre sculptée, maintenant musée d'art en pierre et bois.", es: "Famosa madrasa selyúcida con puerta de piedra tallada magistralmente, ahora museo de arte en piedra y madera.", pt: "Famosa madrassa seljúcida com porta de pedra esculpida, agora museu de arte em pedra e madeira.", ru: "Знаменитое сельджукское медресе с искусно высеченными каменными воротами, ныне музей.", uk: "Відомий сельджукський медресе з майстерно вирізаними кам'яними воротами, нині музей.", ar: "مدرسة سلجوقية شهيرة بوابتها الحجرية المنقوشة، وهي متحف للفنون الحجرية والخشبية.", nl: "Beroemde Seljukse madrasa bekend om zijn gesneden stenen poort, nu een museum voor steen- en houtkunst.", ko: "걸작 석조 문으로 유명한 셀주크 마드라사. 현재 석재 및 목재 유물 박물관.", hi: "उत्कृष्ट नक्काशीदार पत्थर के दरवाज़े के लिए प्रसिद्ध सेल्जुक मदरसा, अब पत्थर व लकड़ी कला संग्रहालय।", bn: "অসাধারণ পাথর খোদাই দরজার জন্য বিখ্যাত সেলজুক মাদ্রাসা, এখন পাথর ও কাঠ শিল্প জাদুঘর।", id: "Madrasa Seljuk terkenal dengan pintu batu berukir indah, kini museum seni batu dan kayu.", kk: "Шеберлікпен жасалған тас қақпасымен танымал сельджук медресесі, қазір тас және ағаш музейі.", uz: "Mahorat bilan o'yilgan tosh darvozasi bilan mashhur saljuqiy madrasa, hozir tosh va yog'och san'at muzeyi.", az: "Ustacasına oyulmuş daş qapısı ilə məşhur Səlcuq mədrəsəsi, indi daş və taxta sənət muzeyi." },
    videoUrl: 'https://www.youtube.com/watch?v=vpoqf04nSWI',
    images: ['img/incemınareli.png']
  },
  {
    name: { tr: 'Alaaddin Camii', en: 'Alaeddin Mosque', de: 'Alaeddin-Moschee', ja: 'アラエッディン・モスク', zh: '阿拉丁清真寺', fr: 'Mosquée Alaeddin', es: 'Mezquita Alaeddin', pt: 'Mesquita Alaeddin', ru: 'Мечеть Алаэддина', uk: 'Мечеть Алаеддіна', ar: 'جامع علاء الدين', nl: 'Alaeddin Moskee', ko: '알라에딘 모스크', hi: 'अलाएद्दीन मस्जिद', bn: 'আলাউদ্দিন মসজিদ', id: 'Masjid Alaeddin', kk: 'Алаеддин мешіті', uz: 'Alaeddin masjidi', az: 'Alaəddin Məscidi' },
    lat: 37.8734, lng: 32.4929,
    desc: { tr: "Selçuklu sultanlarının türbelerinin bulunduğu, Konya'nın en eski büyük camii.", en: "One of Konya's oldest mosques, housing the tombs of Seljuk sultans.", de: "Eine der ältesten Moscheen in Konya mit den Gräbern der Seldschukischen Sultane.", ja: "セルジューク朝のスルタンの廟があるコンヤ最古のモスクの一つ。", zh: "科尼亚最古老的清真寺之一，内有塞尔柱苏丹陵墓。", fr: "L'une des plus anciennes mosquées de Konya avec les tombeaux des sultans seldjoukides.", es: "Una de las mezquitas más antiguas de Konya, con las tumbas de los sultanes selyúcidas.", pt: "Uma das mais antigas mesquitas de Konya, com os túmulos dos sultões seljúcidas.", ru: "Одна из старейших мечетей Коньи с гробницами сельджукских султанов.", uk: "Одна з найстаріших мечетей Коньї з гробницями сельджукських султанів.", ar: "واحدة من أقدم مساجد قونية، تحتضن أضرحة سلاطين السلاجقة.", nl: "Een van de oudste moskeeën van Konya met de graven van Seljukse sultans.", ko: "셀주크 술탄들의 무덤이 있는 코냐의 가장 오래된 모스크 중 하나.", hi: "कोन्या की सबसे पुरानी मस्जिदों में से एक, जहाँ सेल्जुक सुल्तानों की मज़ारें हैं।", bn: "কোনিয়ার প্রাচীনতম মসজিদগুলির একটি, সেলজুক সুলতানদের সমাধি রয়েছে।", id: "Salah satu masjid tertua di Konya, tempat makam sultan-sultan Seljuk.", kk: "Сельджук сұлтандарының кесенелері орналасқан Қонияның ең ескі мешіттерінің бірі.", uz: "Saljuqiy sultonlarning qabrlari joylashgan Qoniyaning eng qadimgi masjidlaridan biri.", az: "Səlcuq sultanlarının türbələrinin yerləşdiyi Konyanın ən qədim məscidlərindən biri." },
    videoUrl: 'https://www.youtube.com/watch?v=5JuMMD7YQTQ',
    images: ['img/alaaddin.png']
  },
  {
    name: { tr: 'Şems-i Tebrizi Türbesi ve Camisi', en: 'Shams-i Tabrizi Shrine', de: 'Schams-i-Tabrizi-Schrein', ja: 'シャムスィ・タブリーズィー廟', zh: '沙姆斯·大不里士圣祠', fr: 'Sanctuaire de Chams de Tabriz', es: 'Santuario de Shams-i Tabrizi', pt: 'Santuário de Shams-i Tabrizi', ru: 'Усыпальница Шамса Тебризи', uk: 'Усипальниця Шамса Тебрізі', ar: 'ضريح شمس التبريزي', nl: 'Heiligdom van Shams-i Tabrizi', ko: '샴시 타브리지 성소', hi: 'शम्सी तबरेज़ी का मक़बरा', bn: 'শামসী তাবরেজীর মাজার', id: 'Makam Shams-i Tabrizi', kk: 'Шамс Тебризи кесенесі', uz: 'Shams Tabrizi maqbarasi', az: 'Şəmsi Təbrizi Türbəsi' },
    lat: 37.8728, lng: 32.5005,
    desc: { tr: "Mevlana'nın düşünce dünyasını değiştiren can dostu Şems-i Tebrizi'nin makamının bulunduğu manevi ziyaret noktası.", en: "Spiritual site housing the shrine of Shams-i Tabrizi, the closest companion who transformed Mevlana.", de: "Spiritueller Ort mit dem Schrein von Shams-i Tabrizi, dem engsten Freund Mevlanas.", ja: "メヴラーナを変えた親友、シャムスィ・タブリーズィーの廟がある精神的な場所。", zh: "收藏沙姆斯·大不里士圣祠的精神场所。", fr: "Site spirituel avec le sanctuaire de Chams de Tabriz, le compagnon qui transforma Mevlana.", es: "Lugar espiritual con el santuario de Shams-i Tabrizi, el compañero que transformó a Mevlana.", pt: "Local espiritual com o santuário de Shams-i Tabrizi, o companheiro que transformou Mevlana.", ru: "Духовное место с усыпальницей Шамса Тебризи, ближайшего друга Мевланы.", uk: "Духовне місце з усипальницею Шамса Тебрізі, найближчого друга Мевлани.", ar: "موقع روحي يضم ضريح شمس التبريزي الذي غيّر مسيرة مولانا.", nl: "Spirituele site met het heiligdom van Shams-i Tabrizi, de vriend die Mevlana transformeerde.", ko: "메블라나를 변화시킨 친구 샴시 타브리지의 성소가 있는 영적 장소.", hi: "मेवलाना के प्रिय मित्र शम्सी तबरेज़ी की दरगाह वाला आध्यात्मिक स्थल।", bn: "মেভলানার নিকটতম বন্ধু শামসী তাবরেজীর মাজার সম্বলিত আধ্যাত্মিক স্থান।", id: "Tempat spiritual dengan makam Shams-i Tabrizi, sahabat yang mengubah Mevlana.", kk: "Мевлананы өзгерткен жақын досы Шамс Тебризидің кесенесі бар рухани орын.", uz: "Mavlononi o'zgartirgan eng yaqin do'sti Shams Tabriziyning maqbarasi joylashgan ma'naviy joy.", az: "Mövlananı dəyişdirən ən yaxın dostu Şəmsi Təbrizinin türbəsinin olduğu mənəvi məkan." },
    videoUrl: 'https://www.youtube.com/watch?v=FtzwNSs5pUc',
    images: ['img/semsi.png']
  },
  {
    name: { tr: 'Sahip Ata Külliyesi', en: 'Sahib Ata Complex', de: 'Sahip-Ata-Komplex', ja: 'サーヒプ・アタ複合施設', zh: '萨希卜·阿塔建筑群', fr: 'Complexe de Sahib Ata', es: 'Complejo de Sahib Ata', pt: 'Complexo de Sahib Ata', ru: 'Комплекс Сахип Ата', uk: 'Комплекс Сахіп Ата', ar: 'مجمع صاحب عطا', nl: 'Sahip Ata Complex', ko: '사히브 아타 복합건물', hi: 'साहिब अता परिसर', bn: 'সাহিব আতা কমপ্লেক্স', id: 'Kompleks Sahip Ata', kk: 'Сахип Ата кешені', uz: 'Sahib Ata majmuasi', az: 'Sahib Ata Külliyyəsi' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "1258 yılında inşa edilen cami, türbe ve hankahtan oluşan Selçuklu külliyesi.", en: "Seljuk complex built in 1258 consisting of mosque, tomb and khanqah.", de: "1258 erbauter Seldschukischer Komplex aus Moschee, Mausoleum und Khanqah.", ja: "1258年に建てられたモスク、廟、ハーンカーからなるセルジューク朝の複合施設。", zh: "1258年建造的由清真寺、陵墓和汗卡组成的塞尔柱建筑群。", fr: "Complexe seldjoukide de 1258 composé d'une mosquée, d'un mausolée et d'un khanqah.", es: "Complejo selyúcida de 1258 compuesto por mezquita, mausoleo y khanqah.", pt: "Complexo seljúcida de 1258 composto por mesquita, mausoléu e khanqah.", ru: "Сельджукский комплекс 1258 года, включающий мечеть, мавзолей и ханаку.", uk: "Сельджукський комплекс 1258 року з мечеттю, мавзолеєм та ханакою.", ar: "مجمع سلجوقي بُني عام 1258 يضم مسجداً وضريحاً وخانقاهاً.", nl: "Seljuks complex uit 1258, bestaande uit een moskee, mausoleum en khanqah.", ko: "1258년에 지어진 모스크, 무덤, 하나카로 이루어진 셀주크 복합건물.", hi: "1258 में निर्मित मस्जिद, मक़बरा और खानकाह वाला सेल्जुक परिसर।", bn: "1258 সালে নির্মিত মসজিদ, সমাধি ও খানকাহ সমন্বিত সেলজুক কমপ্লেক্স।", id: "Kompleks Seljuk yang dibangun tahun 1258, terdiri dari masjid, makam, dan khanqah.", kk: "1258 жылы салынған мешіт, кесене және ханқадан тұратын сельджук кешені.", uz: "1258 yilda qurilgan masjid, maqbara va xonaqohdan iborat saljuqiy majmua.", az: "1258-ci ildə inşa edilmiş məscid, türbə və xanəgahdan ibarət Səlcuq külliyyəsi." },
    videoUrl: 'https://www.youtube.com/watch?v=cWB7FdG6km4',
    images: ['img/sahipatakulliyesi.png']
  },
  {
    name: { tr: 'Sırçalı Medrese', en: 'Sircali Madrasa', de: 'Sircali-Medrese', ja: 'スルジャル神学校', zh: '瑟尔恰勒神学院', fr: 'Médersa Sircali', es: 'Madrasa Sircali', pt: 'Madrassa Sircali', ru: 'Медресе Сырджалы', uk: 'Медресе Сирджали', ar: 'مدرسة السرجلي', nl: 'Sircali Madrasa', ko: '시르잘리 마드라사', hi: 'सिर्जाली मदरसा', bn: 'সিরজালী মাদ্রাসা', id: 'Madrasa Sircali', kk: 'Сырджалы медресесі', uz: 'Sircali madrasasi', az: 'Sırcalı Mədrəsə' },
    lat: 37.8715, lng: 32.4972,
    desc: { tr: "1242 yılından kalma çini mozaikleriyle süslü Selçuklu medresesi.", en: "Seljuk madrasa from 1242 adorned with beautiful tile mosaics.", de: "1242 erbaute Seldschukische Medrese mit wunderschönen Fliesenmosaiken.", ja: "1242年からの美しいタイルモザイクで飾られたセルジューク朝の神学校。", zh: "1242年建造，饰有美丽瓷砖马赛克的塞尔柱神学院。", fr: "Médersa seldjoukide de 1242 ornée de magnifiques mosaïques de carreaux.", es: "Madrasa selyúcida de 1242 adornada con hermosos mosaicos de azulejos.", pt: "Madrassa seljúcida de 1242 adornada com belos mosaicos de azulejos.", ru: "Сельджукское медресе 1242 года с красивыми плиточными мозаиками.", uk: "Сельджукське медресе 1242 року з чудовими плитковими мозаїками.", ar: "مدرسة سلجوقية تعود إلى عام 1242 مزيّنة بفسيفساء من الكاشي الجميل.", nl: "Seljukse madrasa uit 1242 versierd met prachtige tegelmozaïeken.", ko: "아름다운 타일 모자이크로 장식된 1242년 셀주크 마드라사.", hi: "सुंदर टाइल मोज़ेक से सजाई गई 1242 की सेल्जुक मदरसा।", bn: "সুন্দর টাইল মোজাইক দিয়ে সাজানো ১২৪২ সালের সেলজুক মাদ্রাসা।", id: "Madrasa Seljuk tahun 1242 yang dihiasi mosaik ubin yang indah.", kk: "Әдемі кафель мозаикасымен безендірілген 1242 жылғы сельджук медресесі.", uz: "Chiroyli kafel mozaikasi bilan bezatilgan 1242 yilgi saljuqiy madrasa.", az: "Gözəl kafel mozaikası ilə bəzədilmiş 1242-ci il Səlcuq mədrəsəsi." },
    videoUrl: 'https://www.youtube.com/watch?v=fjczFEQT1GQ',
    images: ['img/sircalimedrese.png']
  },
  {
    name: { tr: 'Bedesten Çarşısı', en: 'Bedesten Bazaar', de: 'Bedesten-Basar', ja: 'ベデステン・バザール', zh: '贝代斯滕集市', fr: 'Bazar du Bedesten', es: 'Bazar Bedesten', pt: 'Bazar Bedesten', ru: 'Базар Бедестен', uk: 'Базар Бедестен', ar: 'سوق البدستان', nl: 'Bedesten Bazaar', ko: '베데스텐 시장', hi: 'बेदेस्तेन बाज़ार', bn: 'বেদেস্তেন বাজার', id: 'Pasar Bedesten', kk: 'Бедестен базары', uz: 'Bedesten bozori', az: 'Bedesten Bazarı' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "Tarihi Roma dönemine uzanan, Selçuklu ve Osmanlı izlerini taşıyan Konya'nın kalbindeki tarihi alışveriş merkezi.", en: "Historic bazaar in the heart of Konya with Roman, Seljuk and Ottoman traces.", de: "Historischer Basar im Herzen von Konya mit römischen, seldschukischen und osmanischen Spuren.", ja: "ローマ、セルジューク朝、オスマン帝国の痕跡が残るコンヤ中心の歴史的バザール。", zh: "科尼亚中心的历史集市，保留着罗马、塞尔柱和奥斯曼的痕迹。", fr: "Bazar historique au cœur de Konya avec des traces romaines, seldjoukides et ottomanes.", es: "Bazar histórico en el corazón de Konya con trazas romanas, selyúcidas y otomanas.", pt: "Bazar histórico no coração de Konya com traços romanos, seljúcidas e otomanos.", ru: "Исторический базар в центре Коньи с римскими, сельджукскими и османскими следами.", uk: "Історичний базар в центрі Коньї з римськими, сельджукськими та османськими слідами.", ar: "سوق تاريخي في قلب قونية يحمل آثاراً رومانية وسلجوقية وعثمانية.", nl: "Historische bazaar in het hart van Konya met Romeinse, Seljukse en Ottomaanse sporen.", ko: "로마, 셀주크, 오스만 흔적이 남아있는 코냐 중심의 역사적인 시장.", hi: "रोमन, सेल्जुक और ओटोमन निशानों वाला कोन्या के दिल में स्थित ऐतिहासिक बाज़ार।", bn: "রোমান, সেলজুক ও উসমানীয় নিদর্শন বহনকারী কোনিয়ার কেন্দ্রস্থ ঐতিহাসিক বাজার।", id: "Bazaar bersejarah di jantung Konya dengan jejak Romawi, Seljuk, dan Ottoman.", kk: "Рим, сельджук және осман іздері бар Қония орталығындағы тарихи базар.", uz: "Rim, saljuqiy va usmoniy izlari bor Qoniya markazidagi tarixiy bozor.", az: "Roma, Səlcuq və Osmanlı izlərini daşıyan Konyanın mərkəzindəki tarixi bazar." },
    videoUrl: 'https://www.youtube.com/watch?v=_yO4QeARol4',
    images: ['img/bedesten.png']
  },
  {
    name: { tr: 'Sille Köyü ve Aya Eleni Kilisesi', en: 'Sille Village & St. Helena Church', de: 'Dorf Sille & Aya-Eleni-Kirche', ja: 'シッレ村と聖ヘレナ教会', zh: '西莱村与圣海伦教堂', fr: 'Village de Sille et Église Sainte-Hélène', es: 'Aldea Sille e Iglesia de Santa Helena', pt: 'Vila Sille e Igreja de Santa Helena', ru: 'Деревня Силле и церковь Святой Елены', uk: 'Село Сілле і церква Святої Єлени', ar: 'قرية سيلّه وكنيسة القديسة هيلانة', nl: 'Sille Dorp & Sint-Helenakathedraal', ko: '실레 마을 & 성 헬레나 교회', hi: 'सिल्ले गाँव और सेंट हेलेना चर्च', bn: 'সিল্লে গ্রাম ও সেন্ট হেলেনা গির্জা', id: 'Desa Sille & Gereja Santo Helena', kk: 'Сілле ауылы және Әулие Елена шіркеуі', uz: 'Sille qishlog\'i va Muqaddas Elena cherkovi', az: 'Sille Kəndi və Müqəddəs Yelena Kilsəsi' },
    lat: 37.9254, lng: 32.4138,
    desc: { tr: "Tarihi dokusunu koruyan eski Rum köyü ve 327 yılında yapılan Aya Eleni Kilisesi.", en: "Ancient Greek village preserving its historic fabric and the St. Helena Church from 327 AD.", de: "Altes griechisches Dorf mit der Aya-Eleni-Kirche aus dem Jahr 327 n. Chr.", ja: "歴史的な風合いを保つ古代ギリシャの村と西暦327年に建てられた聖ヘレナ教会。", zh: "保留历史风貌的古希腊村庄和公元327年建造的圣海伦教堂。", fr: "Ancien village grec préservant son tissu historique avec l'église Sainte-Hélène de 327 apr. J.-C.", es: "Antiguo pueblo griego que preserva su tejido histórico con la iglesia de Santa Helena del año 327 d.C.", pt: "Antigo aldeia grega preservando seu tecido histórico com a Igreja de Santa Helena de 327 d.C.", ru: "Старинная греческая деревня, сохранившая исторический облик, с церковью Святой Елены 327 года.", uk: "Старовинне грецьке село зі збереженим історичним виглядом та церквою Святої Єлени 327 року.", ar: "قرية يونانية قديمة تحافظ على نسيجها التاريخي مع كنيسة القديسة هيلانة من عام 327م.", nl: "Oud Grieks dorp dat zijn historische karakter bewaart, met de Sint-Helenakathedraal uit 327 na Chr.", ko: "역사적인 모습을 보존한 고대 그리스 마을과 서기 327년의 성 헬레나 교회.", hi: "अपनी ऐतिहासिक बनावट को संरक्षित करने वाला प्राचीन यूनानी गाँव और 327 ई. की संत हेलेना चर्च।", bn: "ঐতিহাসিক রূপ সংরক্ষিত প্রাচীন গ্রীক গ্রাম এবং ৩২৭ খ্রিস্টাব্দের সেন্ট হেলেনা গির্জা।", id: "Desa Yunani kuno yang melestarikan warisan bersejarah dengan Gereja Santo Helena dari tahun 327 M.", kk: "Тарихи келбетін сақтаған ежелгі грек ауылы және 327 жылғы Қасиетті Елена шіркеуі.", uz: "Tarixiy ko'rinishini saqlab qolgan qadimgi yunon qishlog'i va 327 yilgi Muqaddas Elena cherkovi.", az: "Tarixi görünüşünü qoruyan qədim yunan kəndi və 327-ci ildən Müqəddəs Yelena Kilsəsi." },
    videoUrl: 'https://www.youtube.com/watch?v=eOR80efutRU',
    images: ['img/ayakilise.png']
  },
  {
    name: { tr: 'Kyoto Japon Parkı', en: 'Kyoto Japanese Park', de: 'Kyoto Japanischer Park', ja: '京都日本公園', zh: '京都日本公园', fr: 'Parc Japonais Kyoto', es: 'Parque Japonés Kyoto', pt: 'Parque Japonês Kyoto', ru: 'Японский парк Киото', uk: 'Японський парк Кіото', ar: 'حديقة كيوتو اليابانية', nl: 'Kyoto Japanse Park', ko: '교토 일본 공원', hi: 'क्योटो जापानी पार्क', bn: 'কিয়োটো জাপানি পার্ক', id: 'Taman Jepang Kyoto', kk: 'Киото жапон бақшасы', uz: 'Kioto yapon bog\'i', az: 'Kioto Yapon Parkı' },
    lat: 37.9786, lng: 32.5186,
    desc: { tr: "Konya ile Kyoto'nun kardeş şehir olmasının anısına yapılan Japon peyzaj parkı.", en: "Japanese landscape park built to commemorate the sister-city bond between Konya and Kyoto.", de: "Japanischer Landschaftspark zur Feier der Städtepartnerschaft Konya-Kyoto.", ja: "コンヤと京都の姉妹都市関係を記念して作られた日本庭園。", zh: "为纪念科尼亚和京都姐妹城市关系而建的日本景观公园。", fr: "Parc paysager japonais construit pour commémorer le lien de villes sœurs entre Konya et Kyoto.", es: "Parque paisajístico japonés construido para conmemorar el vínculo de ciudades hermanas entre Konya y Kyoto.", pt: "Parque paisagístico japonês construído para comemorar o vínculo de cidades-irmãs entre Konya e Kyoto.", ru: "Японский ландшафтный парк, построенный в честь побратимства Коньи и Киото.", uk: "Японський ландшафтний парк, збудований на честь побратимства Коньї та Кіото.", ar: "حديقة منظر طبيعي يابانية أُنشئت لتخليد رابطة المدينتين الشقيقتين قونية وكيوتو.", nl: "Japans landschapspark gebouwd ter ere van de zusterstadband tussen Konya en Kyoto.", ko: "코냐와 교토의 자매도시 관계를 기념하기 위해 조성된 일본식 조경 공원.", hi: "कोन्या और क्योटो के बीच जुड़वाँ शहर के रिश्ते को याद करते हुए बनाया गया जापानी उद्यान।", bn: "কোনিয়া ও কিয়োটোর ভগ্নী শহর বন্ধনের স্মরণে নির্মিত জাপানি ল্যান্ডস্কেপ পার্ক।", id: "Taman lanskap Jepang yang dibangun untuk memperingati ikatan kota kembar antara Konya dan Kyoto.", kk: "Қония мен Киото арасындағы туысқан қала байланысын еске алу үшін салынған жапон паркі.", uz: "Qoniya va Kioto o'rtasidagi aka-uka shaharlar aloqasini eslab qolish uchun qurilgan yapon bog'i.", az: "Konya ilə Kioto arasındakı qardaş şəhər bağını xatırlamaq üçün salınmış yapon peyzaj parkı." },
    videoUrl: 'https://www.youtube.com/watch?v=EaGS2PdNexo',
    images: ['img/kyoto.png']
  },
  {
    name: { tr: 'Konya Bilim Merkezi', en: 'Konya Science Center', de: 'Konya Wissenschaftszentrum', ja: 'コンヤ科学センター', zh: '科尼亚科学中心', fr: 'Centre des Sciences de Konya', es: 'Centro de Ciencias de Konya', pt: 'Centro de Ciências de Konya', ru: 'Научный центр Коньи', uk: 'Науковий центр Коньї', ar: 'مركز العلوم في قونية', nl: 'Konya Wetenschapscentrum', ko: '코냐 과학 센터', hi: 'कोन्या विज्ञान केंद्र', bn: 'কোনিয়া বিজ্ঞান কেন্দ্র', id: 'Pusat Sains Konya', kk: 'Қония ғылым орталығы', uz: 'Qoniya fan markazi', az: 'Konya Elm Mərkəzi' },
    lat: 37.9877, lng: 32.5937,
    desc: { tr: "Türkiye'nin TÜBİTAK destekli ilk ve en büyük bilim merkezi. İnteraktif sergiler içerir.", en: "Turkey's first and largest TÜBİTAK-supported science center with interactive exhibitions.", de: "Erstes und größtes von TÜBİTAK unterstütztes Wissenschaftszentrum der Türkei.", ja: "トルコ初で最大のTÜBİTAK支援科学センター。インタラクティブな展示。", zh: "土耳其第一个也是最大的TÜBİTAK支持科学中心，有互动展览。", fr: "Premier et plus grand centre des sciences soutenu par TÜBİTAK en Turquie, avec expositions interactives.", es: "El primer y más grande centro de ciencias apoyado por TÜBİTAK en Turquía, con exposiciones interactivas.", pt: "O primeiro e maior centro de ciências apoiado pela TÜBİTAK na Turquia, com exposições interativas.", ru: "Первый и крупнейший в Турции научный центр, поддерживаемый TÜBİTAK, с интерактивными выставками.", uk: "Перший і найбільший в Туреччині науковий центр підтримки TÜBİTAK з інтерактивними виставками.", ar: "أول وأكبر مركز علمي في تركيا مدعوم من TÜBİTAK مع معارض تفاعلية.", nl: "Eerste en grootste door TÜBİTAK ondersteunde wetenschapscentrum in Turkije met interactieve exposities.", ko: "터키 최초이자 최대의 TÜBİTAK 지원 과학 센터로 인터랙티브 전시회가 있습니다.", hi: "तुर्की का पहला और सबसे बड़ा TÜBİTAK-समर्थित विज्ञान केंद्र, इंटरएक्टिव प्रदर्शनियों के साथ।", bn: "ইন্টারেক্টিভ প্রদর্শনী সহ তুরস্কের প্রথম ও বৃহত্তম TÜBİTAK-সমর্থিত বিজ্ঞান কেন্দ্র।", id: "Pusat sains pertama dan terbesar di Turki yang didukung TÜBİTAK dengan pameran interaktif.", kk: "Интерактивті көрмелері бар Түркияның TÜBİTAK қолдаған ең алғашқы және ең үлкен ғылым орталығы.", uz: "Interaktiv ko'rgazmalar bilan Turkiyaning TÜBİTAK tomonidan qo'llabquvvatlangan birinchi va eng katta fan markazi.", az: "İnteraktiv sərgiləri olan Türkiyənin TÜBİTAK dəstəkli ilk və ən böyük elm mərkəzi." },
    videoUrl: 'https://www.youtube.com/watch?v=o3yar8mbTHw',
    images: ['img/konyabilimmerkezi.png']
  },
  {
    name: { tr: 'Çatalhöyük Neolitik Kenti', en: 'Çatalhöyük Neolithic Site', de: 'Çatalhöyük Neolithische Stätte', ja: 'チャタルホユック新石器時代遺跡', zh: '恰塔尔霍伊克新石器时代遗址', fr: 'Site Néolithique de Çatalhöyük', es: 'Sitio Neolítico de Çatalhöyük', pt: 'Sítio Neolítico de Çatalhöyük', ru: 'Неолитический город Чатал-Хёюк', uk: 'Неолітичне місто Чатал-Хьоюк', ar: 'موقع شاتال هويوك النيوليثي', nl: 'Çatalhöyük Neolithische Site', ko: '차탈회위크 신석기 유적지', hi: 'चतालहोयुक नवपाषाण स्थल', bn: 'চাতালহোয়ুক নিওলিথিক স্থান', id: 'Situs Neolitik Çatalhöyük', kk: 'Чатал Хөйүк неолит қаласы', uz: 'Chatal Xoyuk neolit shahri', az: 'Çatalhöyük Neolit Şəhəri' },
    lat: 37.5716, lng: 32.7846,
    desc: { tr: "İnsanlık tarihinin en eski yerleşim yerlerinden biri olan UNESCO Dünya Mirası antik kenti. İlk şehir planlaması burada görülür.", en: "UNESCO World Heritage Site, one of the oldest human settlements with the earliest known urban planning.", de: "UNESCO-Weltkulturerbe, eine der ältesten menschlichen Siedlungen der Geschichte.", ja: "ユネスコ世界遺産に登録された人類最古の集落の一つ。", zh: "联合国教科文组织世界遗产，人类最早的城市规划遗址之一。", fr: "Site du patrimoine mondial de l'UNESCO, l'une des plus anciennes colonies humaines avec la première planification urbaine connue.", es: "Patrimonio Mundial de la UNESCO, uno de los asentamientos humanos más antiguos con la planificación urbana más antigua conocida.", pt: "Patrimônio Mundial da UNESCO, um dos mais antigos assentamentos humanos com o planejamento urbano mais antigo conhecido.", ru: "Объект Всемирного наследия ЮНЕСКО — одно из древнейших поселений человека с первыми признаками городского планирования.", uk: "Об'єкт Світової спадщини ЮНЕСКО — одне з найдавніших поселень людини з першими ознаками міського планування.", ar: "موقع تراث عالمي لليونسكو، أحد أقدم المستوطنات البشرية مع أقدم تخطيط حضري معروف.", nl: "UNESCO Werelderfgoedsite, een van de oudste menselijke nederzettingen met de vroegst bekende stedelijke planning.", ko: "유네스코 세계문화유산, 가장 초기 도시 계획을 가진 가장 오래된 인간 정착지 중 하나.", hi: "यूनेस्को विश्व विरासत स्थल, सबसे पुराने मानव बस्तियों में से एक, जहाँ सबसे पुरानी नगर योजना के प्रमाण मिलते हैं।", bn: "ইউনেস্কো বিশ্ব ঐতিহ্য স্থান, প্রাচীনতম নগর পরিকল্পনা সহ মানব বসতির অন্যতম প্রাচীন স্থান।", id: "Situs Warisan Dunia UNESCO, salah satu pemukiman manusia tertua dengan perencanaan kota paling awal yang diketahui.", kk: "ЮНЕСКО Дүниежүзілік мұра нысаны, алғашқы қалалық жоспарлауы бар ең ежелгі адам қоныстарының бірі.", uz: "YuNESKO Jahon merosi ob'ekti, ma'lum bo'lgan eng qadimgi shahar rejalashtirishi bo'lgan eng qadimgi insoniyat manzilgohlaridan biri.", az: "YUNESKOun Dünya İrsi Saytı, ilk məlum şəhərsalma planlaşdırması olan ən qədim insan məskənlərindən biri." },
    videoUrl: 'https://www.youtube.com/watch?v=iDpzLgMgD9E',
    images: ['img/neolitikkent.png']
  },
  {
    name: { tr: 'Kilistra Antik Kenti', en: 'Kilistra Ancient City', de: 'Antike Stadt Kilistra', ja: 'キリストラ古代都市', zh: '基利斯特拉古城', fr: 'Cité Antique de Kilistra', es: 'Ciudad Antigua de Kilistra', pt: 'Cidade Antiga de Kilistra', ru: 'Древний город Килистра', uk: 'Стародавнє місто Кілістра', ar: 'مدينة كيليسترا الأثرية', nl: 'Kilistra Oude Stad', ko: '킬리스트라 고대 도시', hi: 'किलिस्त्रा प्राचीन नगर', bn: 'কিলিস্ত্রা প্রাচীন নগর', id: 'Kota Kuno Kilistra', kk: 'Кілістра ежелгі қаласы', uz: 'Kilistra qadimiy shahri', az: 'Kilistra Qədim Şəhəri' },
    lat: 37.6664, lng: 32.2135,
    desc: { tr: "Kapadokya'ya benzeyen peri bacaları ve kayalara oyulmuş kiliseleriyle erken Hristiyanlık döneminden kalma gizli yerleşim.", en: "Hidden early Christian settlement with fairy chimneys and rock-carved churches resembling Cappadocia.", de: "Versteckte frühchristliche Siedlung mit Feenkaminen und Felsenkirchen.", ja: "カッパドキアに似た妖精の煙突と岩窟教会がある初期キリスト教集落。", zh: "拥有类似卡帕多基亚仙女烟囱和岩石教堂的早期基督教定居点。", fr: "Colonie chrétienne primitive cachée avec des cheminées de fées et des églises taillées dans le roc, ressemblant à la Cappadoce.", es: "Asentamiento cristiano primitivo oculto con chimeneas de hadas e iglesias talladas en roca, parecido a Capadocia.", pt: "Assentamento cristão primitivo escondido com chaminés de fadas e igrejas talhadas na rocha, semelhante à Capadócia.", ru: "Скрытое раннехристианское поселение с каменными грибами и высеченными в скале церквями, похожее на Каппадокию.", uk: "Прихована ранньохристиянська пам'ятка з кам'яними стовпами та висіченими в скелі церквами, схожа на Каппадокію.", ar: "مستوطنة مسيحية مبكرة مخفية بمداخن الجن وكنائس منحوتة في الصخور تشبه كابادوكيا.", nl: "Verborgen vroegchristelijke nederzetting met feeënschoorstenen en in rots gehouwen kerken, lijkend op Cappadocië.", ko: "카파도키아를 닮은 요정 굴뚝과 암벽 교회가 있는 숨겨진 초기 기독교 정착지.", hi: "कप्पाडोसिया जैसी परी चिमनियों और पत्थर में बनी गिरिजाघरों वाला छुपा हुआ प्रारंभिक ईसाई बस्ती।", bn: "ক্যাপাডোসিয়ার মতো পরী চিমনি ও পাথর কাটা গির্জাসহ লুকানো প্রাচীন খ্রিস্টান বসতি।", id: "Pemukiman Kristen awal yang tersembunyi dengan cerobong peri dan gereja pahat batu menyerupai Cappadocia.", kk: "Каппадокияға ұқсас ертегі мұржалары мен жартасқа ойылған шіркеулері бар жасырын ерте христиан елді мекені.", uz: "Kappadokiyaga o'xshash ertakdagi mo'rilari va qoyaga o'yilgan cherkovlari bilan yashirin erta xristian manzilgohi.", az: "Kapadokiyaya bənzər pəri bacaları və qayaya oyulmuş kilsələri olan gizli erkən xristian məskəni." },
    videoUrl: 'https://www.youtube.com/results?search_query=Kilistra+Antik+Kenti',
    images: ['img/kilistra.png']
  },
  {
    name: { tr: 'Konya Arkeoloji Müzesi', en: 'Konya Archaeological Museum', de: 'Konya Archäologisches Museum', ja: 'コンヤ考古学博物館', zh: '科尼亚考古博物馆', fr: 'Musée Archéologique de Konya', es: 'Museo Arqueológico de Konya', pt: 'Museu Arqueológico de Konya', ru: 'Археологический музей Коньи', uk: 'Археологічний музей Коньї', ar: 'المتحف الأثري في قونية', nl: 'Konya Archeologisch Museum', ko: '코냐 고고학 박물관', hi: 'कोन्या पुरातत्व संग्रहालय', bn: 'কোনিয়া প্রত্নতত্ত্ব জাদুঘর', id: 'Museum Arkeologi Konya', kk: 'Қония археология мұражайы', uz: 'Qoniya arxeologiya muzeyi', az: 'Konya Arxeologiya Muzeyi' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "Hitit, Roma ve Bizans dönemlerine ait eserlerin sergilendiği zengin koleksiyona sahip müze.", en: "Museum with rich collections spanning Hittite, Roman and Byzantine periods.", de: "Museum mit reichen Sammlungen aus hethitischer, römischer und byzantinischer Zeit.", ja: "ヒッタイト、ローマ、ビザンチン時代のコレクションを持つ博物館。", zh: "拥有赫梯、罗马和拜占庭时期丰富藏品的博物馆。", fr: "Musée avec de riches collections couvrant les périodes hittite, romaine et byzantine.", es: "Museo con ricas colecciones que abarcan los períodos hitita, romano y bizantino.", pt: "Museu com ricas coleções abrangendo os períodos hitita, romano e bizantino.", ru: "Музей с богатыми коллекциями хеттского, римского и византийского периодов.", uk: "Музей з багатими колекціями хеттського, римського та візантійського періодів.", ar: "متحف يضم مقتنيات غنية من الحقبة الحثية والرومانية والبيزنطية.", nl: "Museum met rijke collecties die de Hettitische, Romeinse en Byzantijnse perioden omspannen.", ko: "히타이트, 로마, 비잔틴 시대의 풍부한 컬렉션을 소장한 박물관.", hi: "हित्ती, रोमन और बीजान्टिन काल के समृद्ध संग्रहों वाला संग्रहालय।", bn: "হিট্টাইট, রোমান ও বাইজেন্টাইন যুগের সমৃদ্ধ সংগ্রহ সম্বলিত জাদুঘর।", id: "Museum dengan koleksi kaya yang mencakup periode Hittite, Romawi, dan Byzantium.", kk: "Хетт, рим және Византия дәуірлерінің бай коллекцияларымен мұражай.", uz: "Xett, rim va Vizantiya davrlariga oid boy to'plamlarga ega muzey.", az: "Hett, Roma və Bizans dövrlərinə aid zəngin kolleksiyaları olan muzey." },
    videoUrl: 'https://www.youtube.com/watch?v=SYRD1H_vW1k',
    images: ['img/konyaarkeoloji.png']
  }
];

// === YARDIMCI FONKSİYONLAR ===
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 +
    Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function formatTime(minutes) {
  // Use short time units (min/h) consistent across languages
  if (minutes < 60) return minutes + ' min';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? h + 'h ' + m + 'min' : h + 'h';
}

// === KART OLUŞTUR ===
function createCard(p, uLat, uLng) {
  const name = p.name[currentLang] || p.name.en || p.name.tr;
  const desc = p.desc[currentLang] || p.desc.en || p.desc.tr;
  const dist = calculateDistance(uLat, uLng, p.lat, p.lng);
  const walkMin = Math.round(dist * 12);
  const driveMin = Math.round(dist * 3);
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
  const videoLink = p.videoUrl || `https://www.youtube.com/results?search_query=${encodeURIComponent(name)}`;

  const imgHtml = p.images && p.images.length
    ? `<div class="card-images">${p.images.map(src =>
        `<img src="${src}" alt="${name}" class="card-img" loading="lazy">`
      ).join('')}</div>`
    : '';

  const div = document.createElement('div');
  div.className = 'place-card';
  div.innerHTML = `
    <div class="place-header">
      <div class="place-title">${name}</div>
      <div class="place-header-right">
        <div class="place-distance">${dist.toFixed(1)} km</div>
        <span class="chevron">&#8964;</span>
      </div>
    </div>
    <div class="place-content">
      <div class="content-inner">
        ${imgHtml}
        <p><strong>ℹ️ ${t('infoLabel')}:</strong> ${desc}</p>
        <p><strong>🚶 ${t('durationLabel')}:</strong> ${t('walking')} ${formatTime(walkMin)} / ${t('byCar')} ${formatTime(driveMin)}</p>
        <div class="action-links">
          <a class="btn-nav" href="${mapLink}" target="_blank">
            <i class="fa-solid fa-map-location-dot"></i> ${t('directions')}
          </a>
          <a class="btn-video" href="${videoLink}" target="_blank">
            <i class="fa-brands fa-youtube"></i> ${t('watchVideo')}
          </a>
        </div>
      </div>
    </div>
  `;

  div.querySelector('.place-header').addEventListener('click', function() {
    const isOpen = div.classList.contains('open');
    // Diğer açık kartları kapat
    document.querySelectorAll('.place-card.open').forEach(c => {
      c.classList.remove('open');
      c.querySelector('.place-content').classList.remove('active');
    });
    if (!isOpen) {
      div.classList.add('open');
      div.querySelector('.place-content').classList.add('active');
      if (window.ParticleSystem) window.ParticleSystem.setMode('card');
    } else {
      if (window.ParticleSystem) window.ParticleSystem.setMode('location');
    }
  });

  return div;
}

// === MEKAN LİSTESİNİ GÖSTER ===

function displayPlaces(uLat, uLng) {
  lastUserLat = uLat;
  lastUserLng = uLng;
  const list = document.getElementById('placesList');
  list.innerHTML = '';
  const INITIAL = 5;

  const sorted = places.map(p => ({
    ...p,
    _dist: calculateDistance(uLat, uLng, p.lat, p.lng)
  })).sort((a, b) => a._dist - b._dist);

  sorted.slice(0, INITIAL).forEach(p => list.appendChild(createCard(p, uLat, uLng)));

  if (sorted.length > INITIAL) {
    const btn = document.createElement('button');
    btn.className = 'show-more-btn';
    btn.innerHTML = `&#8964; ${t('showMore')} (${sorted.length - INITIAL})`;
    btn.addEventListener('click', () => {
      sorted.slice(INITIAL).forEach(p => {
        list.insertBefore(createCard(p, uLat, uLng), btn);
      });
      btn.remove();
    });
    list.appendChild(btn);
  }
}

// === KONUM BUTONU ===
document.getElementById('getLocation').addEventListener('click', () => {
  const list = document.getElementById('placesList');
  list.innerHTML = `<div class="initial-message"><i class="fa-solid fa-spinner fa-spin"></i> ${t('locating')}</div>`;
  if (!navigator.geolocation) {
    alert(t('noSupport'));
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      if (window.ParticleSystem) window.ParticleSystem.setMode('location');
      displayPlaces(pos.coords.latitude, pos.coords.longitude);
    },
    () => {
      list.innerHTML = `<div class="initial-message" style="color:#DC2626">${t('locError')}</div>`;
    }
  );
});

// === DİL UYGULA ===
setLang(currentLang);