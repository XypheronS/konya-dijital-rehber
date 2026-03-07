// Konya Mekanları Veritabanı
const places = [
    { name: "Mevlana Müzesi ve Türbesi", lat: 37.8707, lng: 32.5050, desc: "Mevlana Celaleddin Rumi'nin türbesinin bulunduğu, Konya'nın en çok ziyaret edilen manevi ve tarihi mekanı. Çinileri ve mistik atmosferiyle büyüleyicidir." },
    { name: "Çatalhöyük Neolitik Kenti", lat: 37.6675, lng: 32.8283, desc: "İnsanlık tarihinin en eski yerleşim yerlerinden biri olan, UNESCO Dünya Mirası listesindeki antik kent. İlk şehir planlaması burada görülür." },
    { name: "Sille Köyü ve Aya Eleni Kilisesi", lat: 37.9300, lng: 32.3833, desc: "Binlerce yıllık geçmişe sahip, tarihi dokusunu koruyan eski bir Rum köyü. 327 yılında yapılan Aya Eleni Kilisesi mutlaka görülmelidir." },
    { name: "Karatay Medresesi (Çini Eserler Müzesi)", lat: 37.8742, lng: 32.4925, desc: "Selçuklu dönemi çini sanatının en güzel örneklerinin sergilendiği, muazzam kapı işçiliğine sahip tarihi eğitim yuvası." },
    { name: "İnce Minareli Medrese (Taş ve Ahşap Eserler Müzesi)", lat: 37.8721, lng: 32.4891, desc: "Taş işçiliğinin şaheseri olan kapısıyla ünlü, günümüzde Selçuklu ve Karamanoğlu dönemlerine ait taş ve ahşap eserlerin sergilendiği müze." },
    { name: "Kilistra Antik Kenti", lat: 37.6000, lng: 32.2000, desc: "Kapadokya'ya benzeyen peri bacaları, kayalara oyulmuş kiliseleri ve sığınaklarıyla erken Hristiyanlık döneminin gizli kalmış tarihi yerleşimi." },
    { name: "Aziziye Camii", lat: 37.8715, lng: 32.5020, desc: "Osmanlı son dönem mimarisinin Konya'daki en güzel ve ilginç örneklerinden. Pencerelerinin kapılarından büyük olmasıyla bilinir." },
    { name: "Şems-i Tebrizi Türbesi ve Camisi", lat: 37.8728, lng: 32.5005, desc: "Mevlana'nın düşünce dünyasını değiştiren can dostu Şems-i Tebrizi'nin makamının bulunduğu, manevi değeri yüksek ziyaret noktası." },
    { name: "Konya Tropikal Kelebek Bahçesi", lat: 37.9511, lng: 32.4766, desc: "Avrupa'nın en büyük, Türkiye'nin tek tropikal kelebek uçuş alanına sahip harika bir doğa parkı." },
    { name: "Meram Bağları", lat: 37.8480, lng: 32.4280, desc: "Evliya Çelebi'nin Seyahatnamesi'ne konu olmuş, su sesleri ve yeşillikler içindeki tarihi ve huzur verici dinlenme alanı." },
    { name: "Konya Panorama Müzesi", lat: 37.8700, lng: 32.5118, desc: "13. yüzyıl Konya'sının, Mevlana'nın hayatının ve Selçuklu döneminin 3 boyutlu maketlerle harika bir şekilde canlandırıldığı müze." },
    { name: "Konya Bilim Merkezi", lat: 37.9860, lng: 32.5830, desc: "Türkiye'nin TÜBİTAK destekli ilk ve en büyük bilim merkezi. Özellikle teknoloji meraklıları için harika interaktif sergiler içerir." },
    { name: "Kyoto Japon Parkı", lat: 37.9620, lng: 32.5160, desc: "Konya ile Kyoto'nun kardeş şehir olmasının anısına yapılan, Japon mimarisi ve peyzaj sanatının huzur verici yansıması." },
    { name: "Bedesten Çarşısı", lat: 37.8710, lng: 32.4980, desc: "Tarihi Roma dönemine uzanan, Selçuklu ve Osmanlı izlerini taşıyan, Konya'nın kalbindeki hareketli tarihi alışveriş merkezi." }
];

document.getElementById('getLocation').addEventListener('click', () => {
    const list = document.getElementById('placesList');
    list.innerHTML = '<div class="initial-message"><i class="fa-solid fa-spinner fa-spin"></i> Konumunuz bulunuyor...</div>';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            displayPlaces(userLat, userLng);
        }, error => {
            list.innerHTML = '<div class="initial-message" style="color: red;">Konum alınamadı. Lütfen izin verdiğinizden emin olun.</div>';
        });
    } else {
        alert("Tarayıcınız konum özelliğini desteklemiyor.");
    }
});

// İki koordinat arası mesafeyi hesaplayan formül
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Dünya yarıçapı (km)
    const dLat = (lat2-lat1) * Math.PI / 180;
    const dLon = (lon2-lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function displayPlaces(uLat, uLng) {
    const list = document.getElementById('placesList');
    list.innerHTML = ''; // Yükleniyor yazısını temizle

    // Mesafeleri hesapla ve yakından uzağa sırala
    const sorted = places.map(p => ({
        ...p,
        distance: calculateDistance(uLat, uLng, p.lat, p.lng)
    })).sort((a, b) => a.distance - b.distance);

    sorted.forEach(p => {
        // Tanıtım videosu için Youtube araması linki oluştur
        const videoLink = `https://www.youtube.com/results?search_query=${encodeURIComponent(p.name + " tanıtım")}`;
        const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;

        const div = document.createElement('div');
        div.className = 'place-card';
        div.innerHTML = `
            <div class="place-header">
                <div class="place-title">${p.name}</div>
                <div class="place-distance">${p.distance.toFixed(1)} km</div>
            </div>
            <div class="place-content">
                <div class="content-inner">
                    <p><strong><i class="fa-solid fa-circle-info"></i> Bilgi:</strong> ${p.desc}</p>
                    <p><strong><i class="fa-solid fa-person-walking"></i> Tahmini Süre:</strong> Yürüyerek yaklaşık ${Math.round(p.distance * 12)} dk / Araçla ${Math.round(p.distance * 3)} dk.</p>
                    <div class="action-links">
                        <a class="btn-nav" href="${mapLink}" target="_blank"><i class="fa-solid fa-map-location-dot"></i> Yol Tarifi</a>
                        <a class="btn-video" href="${videoLink}" target="_blank"><i class="fa-brands fa-youtube"></i> Video İzle</a>
                    </div>
                </div>
            </div>
        `;
        list.appendChild(div);
    });

    // Akordeon (Açılır/Kapanır) menü mantığı
    document.querySelectorAll('.place-header').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            // Diğer açık olanları kapatmak istersen buraya ekleme yapabiliriz
            content.classList.toggle('active');
        });
    });
}