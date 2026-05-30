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
   スワイプ対応（安定版）
========================== */
let startX = 0;
let startY = 0;
let isSwiping = false;

modal.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isSwiping = false;
});

modal.addEventListener("touchmove", (e) => {
    const moveX = e.touches[0].clientX;
    const moveY = e.touches[0].clientY;

    const diffX = Math.abs(moveX - startX);
    const diffY = Math.abs(moveY - startY);

    // 横方向が明確に優勢な時だけスワイプ判定
    if (diffX > 10 && diffX > diffY) {
        isSwiping = true;
        e.preventDefault(); // 背景スクロール防止
    }
});

modal.addEventListener("touchend", (e) => {
    if (!isSwiping) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
        renderAll(currentIndex + 1); // 左スワイプ
    } 
    else if (diff < -50) {
        renderAll(currentIndex - 1); // 右スワイプ
    }
});

/* ==========================
   初期化
========================== */
renderAll(0);