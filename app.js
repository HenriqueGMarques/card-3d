const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const cel = document.querySelector(".cel img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
    card.style.trasition = null;
    title.style.transform = "translateZ(150px)";
    cel.style.transform = "translateZ(200px) rotatez(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.2s ease" ;
    card.style.transform = 'rotateY(0deg), rotateX(0deg)';
    title.style.transform = "translateZ(0px)";
    cel.style.transform = "translateZ(0px) rotatez(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});