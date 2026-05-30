const members = document.querySelectorAll(".member");

const image = document.getElementById("memberImage");
const name = document.getElementById("memberName");
const role = document.getElementById("memberRole");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDesc = document.getElementById("modalDesc");

const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");

let currentIndex = 0;

/* ==========================
   共通レンダリング
========================== */
function renderAll(index) {
    currentIndex = (index + members.length) % members.length;

    const m = members[currentIndex];

    // active更新
    members.forEach(el => el.classList.remove("active"));
    m.classList.add("active");

    // メイン表示
    image.src = m.dataset.img;
    name.textContent = m.dataset.name;
    role.textContent = m.dataset.role;

    // モーダル表示
    modalImage.src = m.dataset.img;
    modalName.textContent = m.dataset.name;
    modalRole.textContent = m.dataset.role;
    modalDesc.textContent = m.dataset.desc;
}

/* ==========================
   左メニュークリック
========================== */
members.forEach((m, i) => {
    m.addEventListener("click", () => renderAll(i));
});

/* ==========================
   矢印ボタン
========================== */
modalPrev.addEventListener("click", () => {
    renderAll(currentIndex - 1);
});

modalNext.addEventListener("click", () => {
    renderAll(currentIndex + 1);
});

/* ==========================
   モーダル開閉
========================== */
image.addEventListener("click", () => {
    modal.classList.add("show");
});

modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

/* ==========================
   スワイプ対応（モーダル）
========================== */
let startX = 0;

modal.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

modal.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    // 50px以上動いたらスワイプ判定
    if (diff > 50) {
        renderAll(currentIndex + 1); // ←左スワイプ
    } 
    else if (diff < -50) {
        renderAll(currentIndex - 1); // ←右スワイプ
    }
});

/* ==========================
   初期化
========================== */
renderAll(0);