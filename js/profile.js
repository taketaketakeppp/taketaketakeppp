const members = document.querySelectorAll(".member");

const image = document.getElementById("memberImage");
const name = document.getElementById("memberName");
const role = document.getElementById("memberRole");

const isMobile = window.matchMedia("(max-width: 768px)").matches;

// 共通処理
function updateMember(member) {
    const img = member.dataset.img;
    const memberName = member.dataset.name;
    const memberRole = member.dataset.role;

    if (!img) return;

    members.forEach(m => m.classList.remove("active"));
    member.classList.add("active");

    image.style.opacity = "0";

    setTimeout(() => {
        image.src = img;
        name.textContent = memberName;
        role.textContent = memberRole;
        image.style.opacity = "1";
    }, 150);
}

members.forEach(member => {

    // 📱 スマホ：クリック
    if (isMobile) {
        member.addEventListener("click", () => {
            updateMember(member);
        });
    }

    // 🖥 PC：ホバー
    else {
        member.addEventListener("mouseenter", () => {
            updateMember(member);
        });
    }

});