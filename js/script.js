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
  { title: "ARMAGEDDON", date: "2024.05.27", image: "img/armageddon.jpg" },
  { title: "SUPERNOVA", date: "2024.05.13", image: "img/supernova.jpg" },
  { title: "DRAMA", date: "2023.11.10", image: "img/drama.jpg" },
  { title: "BETTER THINGS", date: "2023.08.18", image: "img/betterthings.jpg" },
  { title: "SPICY", date: "2023.05.08", image: "img/spicy.jpg" },
  { title: "MY WORLD", date: "2023.05.08", image: "img/myworld.jpg" },
  { title: "GIRLS", date: "2022.07.08", image: "img/girls.jpg" },
  { title: "LIFE'S TOO SHORT", date: "2022.06.24", image: "img/lifestooshort.jpg" },
  { title: "DREAMS COME TRUE", date: "2021.12.20", image: "img/dreamscometrue.jpg" },
  { title: "SAVAGE", date: "2021.10.05", image: "img/savage.jpg" },
  { title: "NEXT LEVEL", date: "2021.05.17", image: "img/nextlevel.jpg" },
  { title: "FOREVER", date: "2021.02.05", image: "img/forever.jpg" },
  { title: "BLACK MAMBA", date: "2020.11.17", image: "img/blackmamba.jpg" }
];

let current = 0;

/* =========================
   DISPLAY
========================= */
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
   HAMBURGER + SLIDE MENU
========================= */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const slideMenu = document.getElementById("slideMenu");
const closeBtn = document.getElementById("closeBtn");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    if (nav) nav.classList.toggle("active");
    if (slideMenu) slideMenu.classList.toggle("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    slideMenu.classList.remove("active");
    hamburger.classList.remove("active");
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