/**
 * Siber Zorbalık Farkındalık Sergisi - JS İşlevleri
 * Güzel Konak İmam Hatip Ortaokulu Projesi
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobil Menü İşlemleri ---
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            mobileMenuIcon.innerHTML = '<span>&times;</span>';
        } else {
            mobileMenuIcon.innerHTML = '<span>&#9776;</span>';
        }
    });

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuIcon.innerHTML = '<span>&#9776;</span>';
        });
    });

    // --- 2. Hikayeler Veritabanı ---
    const stories = [
        {
            id: 1,
            title: "Görünmez Oklar: Elif’in Filtresiz Dünyası",
            image: "Elif'in filtresiz dünyası.jpeg",
            olay: "Elif, hafta sonu ailesiyle gittiği bir piknikte en sevdiği sarı elbisesiyle bir fotoğraf çekilir ve çok beğenerek sosyal medyada paylaşır. İlk birkaç dakika her şey yolundadır, ancak sonra isimsiz bir hesaptan şu yorum gelir: 'O elbise seni çok kilolu göstermiş, bir daha giyme bence.' Ardından bir başkası ekler: 'Gülüşün çok yapay duruyor.' Elif o gece aynanın karşısında saatlerce kendi gülüşünü ve elbisesini inceler. Artık her aynaya baktığında o yorumları duymaktadır.",
            donumNoktasi: "Elif, yorum yapanların aslında onu tanımadığını, sadece kendi mutsuzluklarını ekran üzerinden başkalarına yansıttığını fark eder.",
            mesaj: "Başkalarının ekranından gelen yorumlar, senin gerçeğini değiştirmez.",
            audio: "Elif’in-Filtresiz-Dünyası.mp3"
        },
        {
            id: 2,
            title: "Sessiz Oda: Ahmet ve Görünmez Duvarlar",
            image: "ahmet ve görünmez duvarlar.jpeg",
            olay: "5-C sınıfının ödev paylaşım grubunda herkes şakalaşmakta ve fikir alışverişinde bulunmaktadır. Ahmet, proje için harika bir fikir bulduğunu düşünerek gruba yazar. Mesajı herkes tarafından 'görüldü' yapılır ama kimse cevap vermez. Ahmet bir tane daha yazar, ardından bir soru sorar. Yine sessizlik... O sırada gruptaki diğer arkadaşlarının başka bir platformda Ahmet'in olmadığı yeni bir grup kurduklarını ve orada onunla dalga geçtiklerini tesadüf eseri öğrenir.",
            donumNoktasi: "Ahmet, dijital dışlanmanın da bir zorbalık olduğunu anlar ve rehber öğretmeniyle görüşerek 'dahil etme' üzerine bir sınıf etkinliği önerir.",
            mesaj: "Sanal sessizlik, bazen en ağır hakaretten daha çok acıtabilir.",
            audio: "Ahmet-ve-Görünmez-Duvarlar.mp3"
        },
        {
            id: 3,
            title: "Kontrolden Çıkan Şaka: Mert’in 'Caps' Çıkmazı",
            image: "Mert'in caps çıkmazı.jpeg",
            olay: "Mert, okul servisinde uyuyakalır. Ağzı hafif açık, komik bir halde uyurken yan koltukta oturan arkadaşı onun fotoğrafını çeker. Arkadaşı bunu sadece 'şaka' olsun diye sınıftaki 3-4 kişiye gönderir. Ancak akşam olduğunda Mert, o fotoğrafın üzerine komik ama kırıcı yazılar yazılarak tüm okulun Instagram gruplarında dolaştığını görür. Okula gitmek istemez, herkesin ona güleceğini düşünür.",
            donumNoktasi: "Mert’in ailesi durumu fark eder. Fotoğrafı ilk yayan arkadaşı, olayın bu noktaya geleceğini düşünmediğini söyleyerek Mert'ten özür diler ve tüm gruplarda bir açıklama yapar.",
            mesaj: "Senin için şaka olan şey, başkasının kabusu olabilir.",
            audio: "Mert’in-_Caps_-Çıkmazı.mp3"
        },
        {
            id: 4,
            title: "Piksel Savaşları: Zeynep’in Mücadelesi",
            image: "Zeynep'in mücadelesi.jpeg",
            olay: "Zeynep, çok sevdiği bir çevrimiçi strateji oyununda oldukça başarılıdır. Bir gün mikrofonu açıp takıma komut verdiğinde, diğer oyuncular onun bir kız çocuğu olduğunu anlar. Birden oyun mesajları hakaretlerle dolmaya başlar: 'Git oyuncak bebeklerinle oyna,' 'Kızlar bu oyunu beceremez,' 'Senin yüzünden kaybedeceğiz.' Zeynep o kadar demoralize olur ki hata yapmaya başlar ve sonunda oyundan ağlayarak çıkar.",
            donumNoktasi: "Zeynep, ertesi gün en sevdiği e-sporcu kadınların videolarını izler. Yeteneğinin cinsiyetiyle ilgili olmadığını hatırlar ve zorbaları engelleyerek (mute) oynamaya devam eder.",
            mesaj: "Dijital dünyada yeteneklerin cinsiyeti yoktur, saygının ise her yerde olması gerekir.",
            audio: "Zeynep’in-Mücadelesi.mp3"
        },
        {
            id: 5,
            title: "Yalanın Hızı: Kerem ve Sahte Profil",
            image: "Kerem ve sahte profil.jpeg",
            olay: "Kerem adına, onun fotoğrafı kullanılarak sahte bir hesap açılır. Bu sahte hesap üzerinden okuldaki popüler çocuklara ağır hakaretler içeren mesajlar gönderilir. Ertesi gün Kerem okula gittiğinde kimse onunla konuşmaz, herkes ona öfkeyle bakmaktadır. Kerem ne olduğunu anlayamaz; ta ki bir arkadaşı ona sahte hesaptan gelen mesajları gösterene kadar.",
            donumNoktasi: "Kerem, bilişim öğretmeniyle birlikte hesabın ona ait olmadığını kanıtlayan bir rapor hazırlar ve siber zorbalıkla mücadele birimine şikayette bulunur.",
            mesaj: "İnternette gördüğün her şey doğru olmayabilir; gerçeği sormadan yargılama.",
            audio: "Kerem-ve-Sahte-Profil.mp3"
        }
    ];

    // --- 3. Galeri Render İşlemi ---
    const galleryGrid = document.getElementById('galleryGrid');
    
    stories.forEach((story, index) => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.setAttribute('data-story-index', index);
        
        card.innerHTML = `
            <div class="card-visual-wrapper">
                <img src="${story.image}" alt="${story.mesaj}" class="card-image" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${story.title}</h3>
                <p>${story.olay.substring(0, 100)}...</p>
                <div class="read-more">Hikayeyi Oku &rarr;</div>
            </div>
        `;
        
        galleryGrid.appendChild(card);
    });

    // --- 4. Tam Ekran Hikaye (Full Page) İşlemleri ---
    const storyPage = document.getElementById('storyPage');
    const closeStoryBtn = document.getElementById('closeStoryBtn');
    const storyPageContent = document.getElementById('storyPageContent');
    const ttsBtn = document.getElementById('ttsBtn');
    const ttsBtnText = document.getElementById('ttsBtnText');
    const storyCards = document.querySelectorAll('.story-card');
    
    const storyAudio = document.getElementById('storyAudio');
    const audioCurrentTime = document.getElementById('audioCurrentTime');
    const audioDuration = document.getElementById('audioDuration');
    const audioProgressBg = document.getElementById('audioProgressBg');
    const audioProgressBar = document.getElementById('audioProgressBar');
    
    let currentStoryForTTS = null;

    storyCards.forEach(card => {
        card.addEventListener('click', () => {
            const index = card.getAttribute('data-story-index');
            const story = stories[index];
            
            if (story) {
                currentStoryForTTS = story;

                // İçeriği doldur (Yukarıdan Aşağı Hiyerarşi)
                storyPageContent.innerHTML = `
                    <div class="story-image-wrapper">
                        <img src="${story.image}" alt="${story.mesaj}">
                    </div>
                    <div class="story-text-content">
                        <h3 class="story-main-title">${story.title}</h3>
                        <div class="story-section">
                            <h4><span class="icon">📖</span> Olay Örgüsü</h4>
                            <p>${story.olay}</p>
                        </div>
                        <div class="story-section highlight-section">
                            <h4><span class="icon">💡</span> Dönüm Noktası</h4>
                            <p>${story.donumNoktasi}</p>
                        </div>
                        <div class="story-message">
                            "${story.mesaj}"
                        </div>
                    </div>
                `;
                
                // Tam sayfa görünümü aç
                storyPage.style.display = 'block';
                
                // CSS Transition'ı tetiklemek için ufak bir bekleme
                setTimeout(() => {
                    storyPage.classList.add('show');
                }, 10);

                // Ana sayfanın scroll olmasını engelle
                document.body.style.overflow = 'hidden';

                // Eğer başka bir ses çalıyorsa kapat ve butonu sıfırla
                storyAudio.pause();
                storyAudio.currentTime = 0;
                storyAudio.src = story.audio;
                
                ttsBtn.innerHTML = '<span class="tts-icon">▶️</span> <span id="ttsBtnText">Sesli Okuma</span>';
                ttsBtn.classList.remove('playing');
            }
        });
    });

    const closeStory = () => {
        storyPage.classList.remove('show');
        document.body.style.overflow = 'auto';
        
        // Kapanırken sesi durdur
        storyAudio.pause();
        storyAudio.currentTime = 0;

        setTimeout(() => {
            storyPage.style.display = 'none';
        }, 400); // CSS transition süresi kadar bekle
    };

    closeStoryBtn.addEventListener('click', closeStory);

    window.addEventListener('click', (event) => {
        if (event.target === storyPage) {
            // Eğer doğrudan overlay'e tıklanırsa (genelde full sayfa olduğundan pek olmaz ama önlem olarak)
            closeStory();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && storyPage.classList.contains('show')) {
            closeStory();
        }
    });

    // --- 5. Sesli Okuma (Audio Player) Entegrasyonu ---
    ttsBtn.addEventListener('click', () => {
        if (!storyAudio.src) return;

        if (storyAudio.paused) {
            storyAudio.play();
            ttsBtn.innerHTML = '<span class="tts-icon">⏸️</span> <span id="ttsBtnText">Durdur</span>';
            ttsBtn.classList.add('playing');
        } else {
            storyAudio.pause();
            ttsBtn.innerHTML = '<span class="tts-icon">▶️</span> <span id="ttsBtnText">Devam Et</span>';
            ttsBtn.classList.remove('playing');
        }
    });

    storyAudio.addEventListener('timeupdate', () => {
        const current = storyAudio.currentTime;
        const duration = storyAudio.duration;
        
        if (!isNaN(duration)) {
            const progressPercent = (current / duration) * 100;
            audioProgressBar.style.width = progressPercent + '%';
            
            audioCurrentTime.textContent = formatTime(current);
            audioDuration.textContent = formatTime(duration);
        }
    });

    storyAudio.addEventListener('ended', () => {
        ttsBtn.innerHTML = '<span class="tts-icon">▶️</span> <span id="ttsBtnText">Sesli Okuma</span>';
        ttsBtn.classList.remove('playing');
        audioProgressBar.style.width = '0%';
        audioCurrentTime.textContent = '0:00';
    });
    
    storyAudio.addEventListener('loadedmetadata', () => {
        audioDuration.textContent = formatTime(storyAudio.duration);
        audioCurrentTime.textContent = '0:00';
        audioProgressBar.style.width = '0%';
    });

    audioProgressBg.addEventListener('click', (e) => {
        if (storyAudio.src && !isNaN(storyAudio.duration)) {
            const rect = audioProgressBg.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const newTime = (clickX / width) * storyAudio.duration;
            storyAudio.currentTime = newTime;
        }
    });

    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    // --- 6. Lightbox (Görsel Büyütme) Entegrasyonu ---
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const resultImage = document.getElementById('resultImage');

    if (resultImage && lightboxModal) {
        // Görsele tıklandığında modalı aç
        resultImage.addEventListener('click', () => {
            lightboxModal.style.display = 'flex';
            lightboxModal.style.alignItems = 'center';
            lightboxModal.style.justifyContent = 'center';
            lightboxModal.style.paddingTop = '0'; // CSS'teki padding'i iptal edip flex ile ortalıyoruz
            
            // Animasyon için ufak bir gecikme
            setTimeout(() => {
                lightboxModal.classList.add('show');
            }, 10);
            
            lightboxImg.src = resultImage.src;
            document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
        });

        // Çarpı ikonuna tıklandığında modalı kapat
        lightboxClose.addEventListener('click', () => {
            closeLightbox();
        });

        // Siyah arka plana tıklandığında modalı kapat
        lightboxModal.addEventListener('click', (event) => {
            if (event.target === lightboxModal) {
                closeLightbox();
            }
        });

        // ESC tuşuna basıldığında modalı kapat
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && lightboxModal.classList.contains('show')) {
                closeLightbox();
            }
        });

        function closeLightbox() {
            lightboxModal.classList.remove('show');
            setTimeout(() => {
                lightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Arka plan kaymasını geri aç
            }, 300); // Transition süresi kadar bekle
        }
    }
});
