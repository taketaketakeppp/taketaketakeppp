const members = document.querySelectorAll(".member");

const image = document.getElementById("memberImage");
const name = document.getElementById("memberName");
const role = document.getElementById("memberRole");

members.forEach(member => {

    member.addEventListener("mouseenter", () => {

        members.forEach(item => {
            item.classList.remove("active");
        });

        member.classList.add("active");

        image.style.opacity = "0";

        setTimeout(() => {

            image.src = member.dataset.img;

            name.textContent = member.dataset.name;

            role.textContent = member.dataset.role;

            image.style.opacity = "1";

        }, 200);

    });

});