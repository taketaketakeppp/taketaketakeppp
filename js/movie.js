// ギャラリーライトボックス
const items = document.querySelectorAll('.gallery-item img'); // galleryページ用
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

if (items.length && lightbox && lightboxImg && closeBtn) {
  items.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('show');
      lightboxImg.src = img.src; // 不要な文字削除
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('show');
    }
  });
}

/* =========================
   CONTACT FORM
========================= */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('送信しました');
  });
}

/* =========================
   ALBUM DATA
========================= */
const albums = [
  { title: "WHIPLASH", date: "2024.10.21", image: "img/whiplash.jpg" },
  { title: "ARMAGEDDON", date: "2024.05.27", image: "img/armageddon.jpg" }
];

let current = 0;

function updateDisplay() {
  const cover = document.getElementById("album-cover");
  const title = document.getElementById("album-title");
  const date = document.getElementById("album-date");

  if (!cover || !title || !date) return;

  cover.src = albums[current].image;
  title.textContent = albums[current].title;
  date.textContent = albums[current].date;
}

updateDisplay();

/* =========================
   HAMBURGER MENU
========================= */
const hamburger = document.getElementById("hamburger");
const slideMenu = document.getElementById("slideMenu");

if (hamburger && slideMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    slideMenu.classList.toggle("active");
  });
}

/* =========================
   SEARCH
========================= */
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;

    const keyword = searchInput.value.toLowerCase();

    const resultIndex = albums.findIndex(album =>
      album.title.toLowerCase().includes(keyword)
    );

    if (resultIndex === -1) {
      alert("見つかりませんでした");
      return;
    }

    current = resultIndex;
    updateDisplay();
  });
}