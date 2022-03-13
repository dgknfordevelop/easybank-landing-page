let headerSection = document.querySelector('header');
let openButton = document.querySelector(".open-button");
let closeButton = document.querySelector(".close-button");
let headerNav = document.querySelector(".header-nav");

headerSection.addEventListener('click', toggleButton);
openButton.addEventListener('click', openHeaderNav);
closeButton.addEventListener('click', closeHeaderNav);

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

function openHeaderNav() {
    headerNav.classList.toggle("hidden");
}

function closeHeaderNav() {
    headerNav.classList.toggle("hidden");
}