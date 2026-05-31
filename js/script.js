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
    hamburger.classList.toggle("active");   // ← ×に変形
    slideMenu.classList.toggle("active");    // ← メニュー開閉
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