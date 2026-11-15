const categories = document.getElementById("categories");
const productList = document.getElementById("productList");
const aboutPage = document.getElementById("aboutPage");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const productsPerPage = 56;
let currentIndex = 0;
let currentList = [];


const products = [
    { name: "Taç Nevresim Takımı", price: "1699 ₺", category: "Nevresim" },
    { name: "Yorgan Çift Kişilik", price: "1299 ₺", category: "Yorgan" },
    { name: "Yastık", price: "399 ₺", category: "Yastık" },
    { name: "Koltuk Örtüsü", price: "899 ₺", category: "Koltuk" },
    { name: "Taç Nevresim Takımı", price: "1699 ₺", category: "Nevresim" },
    { name: "Yorgan Çift Kişilik", price: "1299 ₺", category: "Yorgan" },
    { name: "Yastık", price: "399 ₺", category: "Yastık" },
    { name: "Koltuk Örtüsü", price: "899 ₺", category: "Koltuk" },
    { name: "Kanepe Örtüsü", price: "899 ₺", category: "Koltuk" },
    { name: "Pike Koltuk Örtüsü", price: "1399 ₺", category: "Koltuk" },
    { name: "Nevresim Takımı Tek Kişilik", price: "899 ₺", category: "Nevresim" },
    { name: "Bambu Yastık", price: "899 ₺", category: "Yastık" },
    { name: "Elyaf Yastık", price: "899 ₺", category: "Yastık" },
    { name: "Yorgan Tek Kişilik", price: "899 ₺", category: "Yorgan" },
    { name: "King Size Yorgan", price: "899 ₺", category: "Yorgan" },
    { name: "Taç Nevresim Takımı Tek Kişilik", price: "899 ₺", category: "Nevresim" },
    { name: "New Home Nevresim Takımı Çift Kişilik", price: "899 ₺", category: "Nevresim" },
    { name: "New Home Nevresim Takımı Tek Kişilik", price: "899 ₺", category: "Nevresim" },   { name: "Çeyizlik Bornoz Havlu Takımı",
price: "1299", category:"Ceyiz"},
    { name: "Kg. Elyaf",
price: "199", category:"Elyaf" },
    { name: "100 Watt Eletrikli Battaniye",
price: "899", category:"Elektrikli" },
];

// ANA SAYFA
function showHome() {
    categories.style.display = "grid";
    productList.style.display = "none";
    aboutPage.style.display = "none";
    loadMoreBtn.style.display = "none";
}

// TÜM ÜRÜNLER
function showAllProducts() {
    categories.style.display = "none";
    aboutPage.style.display = "none";
    productList.style.display = "grid";
    loadMoreBtn.style.display = "block";

    currentIndex = 0;
    currentList = products;
    productList.innerHTML = "";
    loadMore();
}

// KATEGORİ
function filterProducts(category) {
    categories.style.display = "none";
    aboutPage.style.display = "none";
    productList.style.display = "grid";
    loadMoreBtn.style.display = "block";

    currentIndex = 0;
    currentList = products.filter(p => p.category === category);
    productList.innerHTML = "";
    loadMore();
}

// HAKKIMIZDA
function showAbout() {
    categories.style.display = "none";
    productList.style.display = "none";
    loadMoreBtn.style.display = "none";
    aboutPage.style.display = "block";
}

// DAHA FAZLA
function loadMore() {
    const slice = currentList.slice(
        currentIndex,
        currentIndex + productsPerPage
    );

    slice.forEach(p => {
        productList.innerHTML += `
            <div class="product-card">
                <div class="product-img">Ürün Görseli</div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="price">${p.price}</div>
                    <button>İncele</button>
                </div>
            </div>
        `;
    });

    currentIndex += productsPerPage;

    if (currentIndex >= currentList.length) {
        loadMoreBtn.style.display = "none";
    }
}

// ===== ARKA PLAN MÜZİKLERİ (DOKUNMADAN EKLENDİ) =====
const musicList = [
    "music/1.mpeg",
    "music/2.mpeg",
    "music/3.mpeg",
    "music/4.mpeg"
];

const bgMusic = document.getElementById("bgMusic");
let musicIndex = 0;
let musicStarted = false;

function startMusicOnce() {
    if (musicStarted) return;
    musicStarted = true;

    bgMusic.src = musicList[musicIndex];
    bgMusic.volume = 0.3; // %30 ses (kurumsal)
    bgMusic.play().catch(() => {});

    document.removeEventListener("click", startMusicOnce);
    document.removeEventListener("touchstart", startMusicOnce);
}

bgMusic.addEventListener("ended", () => {
    musicIndex = (musicIndex + 1) % musicList.length;
    bgMusic.src = musicList[musicIndex];
    bgMusic.play();
});

document.addEventListener("click", startMusicOnce);
document.addEventListener("touchstart", startMusicOnce);
// SAYFA AÇILIŞI
showHome();
