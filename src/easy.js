let headerSection = document.querySelector('header');
let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
let sideNav = document.querySelector(".side-nav");

headerSection.addEventListener('click', toggleButton);
openButton.addEventListener('click', openSideNav);
closeButton.addEventListener('click', closeSideNav);

function toggleButton(item) {

    if (item.target.parentNode.className == openButton.className) {
        item.target.parentNode.classList.add("hidden");
        item.target.parentNode.classList.remove("block");
        closeButton.classList.add("block");
        closeButton.classList.remove("hidden");

    } else if (item.target.parentNode.className == closeButton.className) {
        item.target.parentNode.classList.add("hidden");
        item.target.parentNode.classList.remove("block");
        openButton.classList.add("block");
        openButton.classList.remove("hidden");

    }
}

function windowSize(){
    let windowInnerWidth = window.innerWidth;
    if(windowInnerWidth > 768){
        sideNav.classList.add("hidden");
        closeButton.classList.add("hidden");
        openButton.classList.remove("hidden");
    }
}
window.addEventListener("resize", windowSize)


function openSideNav() {
    sideNav.classList.toggle("hidden");
}

function closeSideNav() {
    sideNav.classList.toggle("hidden");
}