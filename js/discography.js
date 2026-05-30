const albums = [
{title:"WHIPLASH",date:"2024.10.21",image:"img/whiplash.jpg"},
{title:"ARMAGEDDON",date:"2024.05.27",image:"img/armageddon.jpg"},
{title:"SUPERNOVA",date:"2024.05.13",image:"img/supernova.jpg"},
{title:"DRAMA",date:"2023.11.10",image:"img/drama.jpg"},
{title:"BETTER THINGS",date:"2023.08.18",image:"img/betterthings.jpg"},
{title:"SPICY",date:"2023.05.08",image:"img/spicy.jpg"},
{title:"MY WORLD",date:"2023.05.08",image:"img/myworld.jpg"},
{title:"GIRLS",date:"2022.07.08",image:"img/girls.jpg"},
{title:"LIFE'S TOO SHORT",date:"2022.06.24",image:"img/lifestooshort.jpg"},
{title:"DREAMS COME TRUE",date:"2021.12.20",image:"img/dreamscometrue.jpg"},
{title:"SAVAGE",date:"2021.10.05",image:"img/savage.jpg"},
{title:"NEXT LEVEL",date:"2021.05.17",image:"img/nextlevel.jpg"},
{title:"FOREVER",date:"2021.02.05",image:"img/forever.jpg"},
{title:"BLACK MAMBA",date:"2020.11.17",image:"img/blackmamba.jpg"}
];

let current = 0;
let isScrolling = false;

const wheelContainer =
document.querySelector(".wheel-container");

const cover =
document.getElementById("album-cover");

const title =
document.getElementById("album-title");

const date =
document.getElementById("album-date");

function renderWheel(){

    wheelContainer.innerHTML = "";

    const positions = [
        {class:"top2",offset:-2},
        {class:"top1",offset:-1},
        {class:"center",offset:0},
        {class:"bottom1",offset:1},
        {class:"bottom2",offset:2}
    ];

    positions.forEach(pos=>{

        const index =
        (current + pos.offset + albums.length)
        % albums.length;

        const item =
        document.createElement("div");

        item.className =
        `album-item ${pos.class}`;

        item.textContent =
        albums[index].title;

        item.addEventListener("click",()=>{

            current = index;

            updateDisplay();

        });

        wheelContainer.appendChild(item);

    });

}

function updateDisplay(){

    cover.src =
    albums[current].image;

    title.textContent =
    albums[current].title;

    date.textContent =
    albums[current].date;

    renderWheel();

}
wheelContainer.style.pointerEvents = "auto";

wheelContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});
updateDisplay();

wheelContainer.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(isScrolling) return;

    isScrolling = true;

    if(e.deltaY > 0){

        current =
        (current + 1)
        % albums.length;

    }else{

        current =
        (current - 1 + albums.length)
        % albums.length;

    }

    updateDisplay();

    setTimeout(()=>{

        isScrolling = false;

    },250);

},{passive:false});
