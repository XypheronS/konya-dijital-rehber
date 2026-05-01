// === i18n ===
const i18n = {
  tr: { subtitle: 'Tarihin ve kültürün kalbine hoş geldiniz', findBtn: 'Yakınımdaki Yerleri Bul', initialMsg: 'Başlamak için butona tıklayın.', videoSearch: 'tanıtım' },
  en: { subtitle: 'Welcome to the heart of history', findBtn: 'Find Nearby Places', initialMsg: 'Click the button to start.', videoSearch: 'tour' },
  de: { subtitle: 'Willkommen im Herz der Geschichte', findBtn: 'Orte in der Nähe finden', initialMsg: 'Klicken Sie die Schaltfläche.', videoSearch: 'tour' },
  ja: { subtitle: '歴史と文化の中心へようこそ', findBtn: '近くの場所を探す', initialMsg: 'ボタンを押してください。', videoSearch: 'ツアー' },
  zh: { subtitle: '欢迎来到历史与文化的心脏', findBtn: '查找附近地点', initialMsg: '请点击按钮。', videoSearch: '游览' }
};
const browserLang = (navigator.language || 'tr').slice(0,2);
let currentLang = i18n[browserLang] ? browserLang : 'tr';
function t(key) { return (i18n[currentLang] || i18n.tr)[key] || ''; }
function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.lang-btn').forEach(b => { b.classList.toggle('active', b.id === 'btn-' + lang); });
  document.documentElement.lang = lang;
}

// === MEKANLAR ===
const places = [
  {
    name: { tr: 'Mevlana Müzesi ve Türbesi', en: 'Mevlana Museum & Tomb', de: 'Mevlana-Museum', ja: 'メヴラーナ博物館', zh: '梅夫拉纳博物馆' },
    lat: 37.8707, lng: 32.5050,
    desc: { tr: "Mevlana Celaleddin Rumi'nin türbesinin bulunduğu, Konya'nın en çok ziyaret edilen manevi mekanı. Çinileri ve mistik atmosferiyle büyüleyicidir.", en: "The most visited spiritual site in Konya, housing the tomb of Mevlana Rumi. Magnificent tiles and mystical atmosphere.", de: "Geistliche Stätte in Konya mit dem Grab von Mevlana Rumi.", ja: "コンヤで最も多く訪れられる精神的な場所。", zh: "科尼亚最受欢迎的精神场所，梅夫拉纳·鲁米的陵墓。" },
    videoUrl: 'https://www.youtube.com/watch?v=3D-kYE0hMJY',
    images: ['img/mevlana.png']
  },
  {
    name: { tr: 'Konya Panorama Müzesi', en: 'Konya Panorama Museum', de: 'Konya Panorama Museum', ja: 'コンヤパノラマ博物館', zh: '科尼亚全景博物馆' },
    lat: 37.8700, lng: 32.5118,
    desc: { tr: "13. yüzyıl Konya'sının, Mevlana'nın hayatının 3 boyutlu maketlerle harika şekilde canlandırıldığı müze.", en: "Museum recreating 13th century Konya and the life of Mevlana with 3D models.", de: "Museum, das das Konya des 13. Jahrhunderts in 3D-Modellen darstellt.", ja: "13世紀のコンヤとメヴラーナの生涯を3Dモデルで再現した博物館。", zh: "用3D模型再现13世纪科尼亚和梅夫拉纳生平的博物馆。" },
    videoUrl: 'https://www.youtube.com/watch?v=gcQDRk_CsSY',
    images: ['img/panorama.png']
  },
  {
    name: { tr: 'Karatay Medresesi (Çini Eserler Müzesi)', en: 'Karatay Madrasa', de: 'Karatay-Medrese', ja: 'カラタイ神学校', zh: '卡拉塔伊神学院' },
    lat: 37.8750, lng: 32.4932,
    desc: { tr: "Selçuklu dönemi çini sanatının en güzel örneklerini sergileyen, muazzam kapı işçiliğine sahip tarihi eğitim yuvası.", en: "Historic madrasa showcasing the finest Seljuk tile art with a magnificent entrance.", de: "Historische Medrese mit der schönsten Seldschukischen Fliesenkunst.", ja: "セルジューク朝の最高のタイル芸術を展示する歴史的な神学校。", zh: "展示塞尔柱最精美瓷砖艺术的历史神学院。" },
    videoUrl: 'https://www.youtube.com/watch?v=z4jZaTM5qm8',
    images: ['img/karatymedresesi.png']
  },
  {
    name: { tr: 'İnce Minareli Medrese', en: 'Ince Minareli Madrasa', de: 'Ince-Minareli-Medrese', ja: 'インジェミナレリ神学校', zh: '细尖塔神学院' },
    lat: 37.8728, lng: 32.4903,
    desc: { tr: "Taş işçiliğinin şaheseri olan kapısıyla ünlü, taş ve ahşap eserlerin sergilendiği Selçuklu medresesi.", en: "Famous Seljuk madrasa known for its masterpiece stone-carved gate, now a stone and wood artifacts museum.", de: "Berühmte Seldschukische Medrese mit einem meisterhaften Steintor.", ja: "傑作の石彫りの門で有名なセルジューク朝の神学校。", zh: "以石雕大门著称的塞尔柱神学院。" },
    videoUrl: 'https://www.youtube.com/watch?v=vpoqf04nSWI',
    images: ['img/incemınareli.png']
  },
  {
    name: { tr: 'Alaaddin Camii', en: 'Alaeddin Mosque', de: 'Alaeddin-Moschee', ja: 'アラエッディン・モスク', zh: '阿拉丁清真寺' },
    lat: 37.8734, lng: 32.4929,
    desc: { tr: "Selçuklu sultanlarının türbelerinin bulunduğu, Konya'nın en eski büyük camii.", en: "One of Konya's oldest mosques, housing the tombs of Seljuk sultans.", de: "Eine der ältesten Moscheen in Konya mit den Gräbern der Seldschukischen Sultane.", ja: "セルジューク朝のスルタンの廟があるコンヤ最古のモスクの一つ。", zh: "科尼亚最古老的清真寺之一，内有塞尔柱苏丹陵墓。" },
    videoUrl: 'https://www.youtube.com/watch?v=5JuMMD7YQTQ',
    images: ['img/alaaddin.png']
  },
  {
    name: { tr: 'Şems-i Tebrizi Türbesi ve Camisi', en: 'Shams-i Tabrizi Shrine', de: 'Schams-i-Tabrizi-Schrein', ja: 'シャムスィ・タブリーズィー廟', zh: '沙姆斯·大不里士圣祠' },
    lat: 37.8728, lng: 32.5005,
    desc: { tr: "Mevlana'nın düşünce dünyasını değiştiren can dostu Şems-i Tebrizi'nin makamının bulunduğu manevi ziyaret noktası.", en: "Spiritual site housing the shrine of Shams-i Tabrizi, the closest companion who transformed Mevlana.", de: "Spiritueller Ort mit dem Schrein von Shams-i Tabrizi.", ja: "メヴラーナを変えた親友、シャムスィ・タブリーズィーの廟がある精神的な場所。", zh: "收藏沙姆斯·大不里士圣祠的精神场所。" },
    videoUrl: 'https://www.youtube.com/watch?v=FtzwNSs5pUc',
    images: ['img/semsi.png']
  },
  {
    name: { tr: 'Sahip Ata Külliyesi', en: 'Sahib Ata Complex', de: 'Sahip-Ata-Komplex', ja: 'サーヒプ・アタ複合施設', zh: '萨希卜·阿塔建筑群' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "1258 yılında inşa edilen cami, türbe ve hankahtan oluşan Selçuklu külliyesi.", en: "Seljuk complex built in 1258 consisting of mosque, tomb and khanqah.", de: "1258 erbauter Seldschukischer Komplex aus Moschee, Mausoleum und Khanqah.", ja: "1258年に建てられたモスク、廟、ハーンカーからなるセルジューク朝の複合施設。", zh: "1258年建造的由清真寺、陵墓和汗卡组成的塞尔柱建筑群。" },
    videoUrl: 'https://www.youtube.com/watch?v=cWB7FdG6km4',
    images: ['img/sahipatakulliyesi.png']
  },
  {
    name: { tr: 'Sırçalı Medrese', en: 'Sircali Madrasa', de: 'Sircali-Medrese', ja: 'スルジャル神学校', zh: '瑟尔恰勒神学院' },
    lat: 37.8715, lng: 32.4972,
    desc: { tr: "1242 yılından kalma çini mozaikleriyle süslü Selçuklu medresesi.", en: "Seljuk madrasa from 1242 adorned with beautiful tile mosaics.", de: "1242 erbaute Seldschukische Medrese mit wunderschönen Fliesenmosaiken.", ja: "1242年からの美しいタイルモザイクで飾られたセルジューク朝の神学校。", zh: "1242年建造，饰有美丽瓷砖马赛克的塞尔柱神学院。" },
    videoUrl: 'https://www.youtube.com/watch?v=fjczFEQT1GQ',
    images: ['img/sircalimedrese.png']
  },
  {
    name: { tr: 'Bedesten Çarşısı', en: 'Bedesten Bazaar', de: 'Bedesten-Basar', ja: 'ベデステン・バザール', zh: '贝代斯滕集市' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "Tarihi Roma dönemine uzanan, Selçuklu ve Osmanlı izlerini taşıyan Konya'nın kalbindeki tarihi alışveriş merkezi.", en: "Historic bazaar in the heart of Konya with Roman, Seljuk and Ottoman traces.", de: "Historischer Basar im Herzen von Konya mit römischen, seldschukischen und osmanischen Spuren.", ja: "ローマ、セルジューク朝、オスマン帝国の痕跡が残るコンヤ中心の歴史的バザール。", zh: "科尼亚中心的历史集市，保留着罗马、塞尔柱和奥斯曼的痕迹。" },
    videoUrl: 'https://www.youtube.com/watch?v=_yO4QeARol4',
    images: ['img/bedesten.png']
  },
  {
    name: { tr: 'Sille Köyü ve Aya Eleni Kilisesi', en: 'Sille Village & St. Helena Church', de: 'Dorf Sille & Aya-Eleni-Kirche', ja: 'シッレ村と聖ヘレナ教会', zh: '西莱村与圣海伦教堂' },
    lat: 37.9254, lng: 32.4138,
    desc: { tr: "Tarihi dokusunu koruyan eski Rum köyü ve 327 yılında yapılan Aya Eleni Kilisesi.", en: "Ancient Greek village preserving its historic fabric and the St. Helena Church from 327 AD.", de: "Altes griechisches Dorf mit der Aya-Eleni-Kirche aus dem Jahr 327 n. Chr.", ja: "歴史的な風合いを保つ古代ギリシャの村と西暦327年に建てられた聖ヘレナ教会。", zh: "保留历史风貌的古希腊村庄和公元327年建造的圣海伦教堂。" },
    videoUrl: 'https://www.youtube.com/watch?v=eOR80efutRU',
    images: ['img/ayakilise.png']
  },
  {
    name: { tr: 'Kyoto Japon Parkı', en: 'Kyoto Japanese Park', de: 'Kyoto Japanischer Park', ja: '京都日本公園', zh: '京都日本公园' },
    lat: 37.9786, lng: 32.5186,
    desc: { tr: "Konya ile Kyoto'nun kardeş şehir olmasının anısına yapılan Japon peyzaj parkı.", en: "Japanese landscape park built to commemorate the sister-city bond between Konya and Kyoto.", de: "Japanischer Landschaftspark zur Feier der Städtepartnerschaft Konya-Kyoto.", ja: "コンヤと京都の姉妹都市関係を記念して作られた日本庭園。", zh: "为纪念科尼亚和京都姐妹城市关系而建的日本景观公园。" },
    videoUrl: 'https://www.youtube.com/watch?v=EaGS2PdNexo',
    images: ['img/kyoto.png']
  },
  {
    name: { tr: 'Konya Bilim Merkezi', en: 'Konya Science Center', de: 'Konya Wissenschaftszentrum', ja: 'コンヤ科学センター', zh: '科尼亚科学中心' },
    lat: 37.9877, lng: 32.5937,
    desc: { tr: "Türkiye'nin TÜBİTAK destekli ilk ve en büyük bilim merkezi. İnteraktif sergiler içerir.", en: "Turkey's first and largest TÜBİTAK-supported science center with interactive exhibitions.", de: "Erstes und größtes von TÜBİTAK unterstütztes Wissenschaftszentrum der Türkei.", ja: "トルコ初で最大のTÜBİTAK支援科学センター。インタラクティブな展示。", zh: "土耳其第一个也是最大的TÜBİTAK支持科学中心，有互动展览。" },
    videoUrl: 'https://www.youtube.com/watch?v=o3yar8mbTHw',
    images: ['img/konyabilimmerkezi.png']
  },
  {
    name: { tr: 'Çatalhöyük Neolitik Kenti', en: 'Çatalhöyük Neolithic Site', de: 'Çatalhöyük Neolithische Stätte', ja: 'チャタルホユック新石器時代遺跡', zh: '恰塔尔霍伊克新石器时代遗址' },
    lat: 37.5716, lng: 32.7846,
    desc: { tr: "İnsanlık tarihinin en eski yerleşim yerlerinden biri olan UNESCO Dünya Mirası antik kenti. İlk şehir planlaması burada görülür.", en: "UNESCO World Heritage Site, one of the oldest human settlements with the earliest known urban planning.", de: "UNESCO-Weltkulturerbe, eine der ältesten menschlichen Siedlungen der Geschichte.", ja: "ユネスコ世界遺産に登録された人類最古の集落の一つ。", zh: "联合国教科文组织世界遗产，人类最早的城市规划遗址之一。" },
    videoUrl: 'https://www.youtube.com/watch?v=iDpzLgMgD9E',
    images: ['img/neolitikkent.png']
  },
  {
    name: { tr: 'Kilistra Antik Kenti', en: 'Kilistra Ancient City', de: 'Antike Stadt Kilistra', ja: 'キリストラ古代都市', zh: '基利斯特拉古城' },
    lat: 37.6664, lng: 32.2135,
    desc: { tr: "Kapadokya'ya benzeyen peri bacaları ve kayalara oyulmuş kiliseleriyle erken Hristiyanlık döneminden kalma gizli yerleşim.", en: "Hidden early Christian settlement with fairy chimneys and rock-carved churches resembling Cappadocia.", de: "Versteckte frühchristliche Siedlung mit Feenkaminen und Felsenkirchen.", ja: "カッパドキアに似た妖精の煙突と岩窟教会がある初期キリスト教集落。", zh: "拥有类似卡帕多基亚仙女烟囱和岩石教堂的早期基督教定居点。" },
    videoUrl: 'https://www.youtube.com/results?search_query=Kilistra+Antik+Kenti',
    images: ['img/kilistra.png']
  },
  {
    name: { tr: 'Konya Arkeoloji Müzesi', en: 'Konya Archaeological Museum', de: 'Konya Archäologisches Museum', ja: 'コンヤ考古学博物館', zh: '科尼亚考古博物馆' },
    lat: 37.8710, lng: 32.4980,
    desc: { tr: "Hitit, Roma ve Bizans dönemlerine ait eserlerin sergilendiği zengin koleksiyona sahip müze.", en: "Museum with rich collections spanning Hittite, Roman and Byzantine periods.", de: "Museum mit reichen Sammlungen aus hethitischer, römischer und byzantinischer Zeit.", ja: "ヒッタイト、ローマ、ビザンチン時代のコレクションを持つ博物館。", zh: "拥有赫梯、罗马和拜占庭时期丰富藏品的博物馆。" },
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
  if (minutes < 60) return minutes + ' dk';
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? h + ' sa ' + m + ' dk' : h + ' sa';
}

// === KART OLUŞTUR ===
function createCard(p, uLat, uLng) {
  const name = p.name[currentLang] || p.name.tr;
  const desc = p.desc[currentLang] || p.desc.tr;
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
        <p><strong>ℹ️ Bilgi:</strong> ${desc}</p>
        <p><strong>🚶 Süre:</strong> Yürüyerek ${formatTime(walkMin)} / Araçla ${formatTime(driveMin)}</p>
        <div class="action-links">
          <a class="btn-nav" href="${mapLink}" target="_blank">
            <i class="fa-solid fa-map-location-dot"></i> Yol Tarifi
          </a>
          <a class="btn-video" href="${videoLink}" target="_blank">
            <i class="fa-brands fa-youtube"></i> Video İzle
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
let lastUserLat = null, lastUserLng = null;

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
    btn.innerHTML = `&#8964; Daha Fazla Mekan Göster (${sorted.length - INITIAL})`;
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
  list.innerHTML = '<div class="initial-message"><i class="fa-solid fa-spinner fa-spin"></i> Konumunuz bulunuyor...</div>';
  if (!navigator.geolocation) {
    alert('Tarayıcınız konum özelliğini desteklemiyor.');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      if (window.ParticleSystem) window.ParticleSystem.setMode('location');
      displayPlaces(pos.coords.latitude, pos.coords.longitude);
    },
    () => {
      list.innerHTML = '<div class="initial-message" style="color:#DC2626">Konum alınamadı. Lütfen konum iznini kontrol edin.</div>';
    }
  );
});

// === DİL UYGULA ===
setLang(currentLang);