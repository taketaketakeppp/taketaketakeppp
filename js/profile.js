
const members = document.querySelectorAll(".member");

const image = document.getElementById("memberImage");
const name = document.getElementById("memberName");
const role = document.getElementById("memberRole");

/* ==========================
   MODAL
========================== */

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDesc = document.getElementById("modalDesc");

const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

/* ==========================
   状態管理（これが全て）
========================== */

let currentIndex = 0;

/* ==========================
   初期状態を同期
========================== */

function init() {
    const active = document.querySelector(".member.active");
    if (active) {
        currentIndex = Array.from(members).indexOf(active);
    }
}

init();

/* ==========================
   メイン更新関数（最重要）
========================== */

function goTo(index) {

    currentIndex = (index + members.length) % members.length;

    const m = members[currentIndex];

    members.forEach(el => el.classList.remove("active"));
    m.classList.add("active");

    // アニメ
    image.style.opacity = "0";
    image.style.transform = "scale(0.98)";

    setTimeout(() => {

        image.src = m.dataset.img;
        name.textContent = m.dataset.name;
        role.textContent = m.dataset.role;

        image.onload = () => {
            image.style.opacity = "1";
            image.style.transform = "scale(1)";
        };

    }, 150);
}

/* ==========================
   左メニュー（クリック）
========================== */

members.forEach((m, i) => {
    m.addEventListener("click", () => {
        goTo(i);
    });
});

/* ==========================
   矢印（モーダル内）
========================== */

modalPrev.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(currentIndex - 1);
});

modalNext.addEventListener("click", (e) => {
    e.stopPropagation();
    goTo(currentIndex + 1);
});

/* ==========================
   画像クリック → モーダル
========================== */

image.addEventListener("click", () => {

    const m = members[currentIndex];

    modalImage.src = m.dataset.img;
    modalName.textContent = m.dataset.name;
    modalRole.textContent = m.dataset.role;
    modalDesc.textContent = m.dataset.desc;

    modal.classList.add("show");
});

/* ==========================
   閉じる
========================== */

modalClose.addEventListener("click", (e) => {
    e.stopPropagation();
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

/* ==========================
   キーボード
========================== */

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }

    if (e.key === "ArrowLeft") {
        goTo(currentIndex - 1);
    }

    if (e.key === "ArrowRight") {
        goTo(currentIndex + 1);
    }
});