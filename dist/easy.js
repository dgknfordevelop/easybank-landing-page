let headerSection=document.querySelector("header"),openButton=document.querySelector(".open-button"),closeButton=document.querySelector(".close-button"),sideNav=document.querySelector(".side-nav");function toggleButton(e){e.target.parentNode.className==openButton.className?(e.target.parentNode.classList.add("hidden"),e.target.parentNode.classList.remove("block"),closeButton.classList.add("block"),closeButton.classList.remove("hidden")):e.target.parentNode.className==closeButton.className&&(e.target.parentNode.classList.add("hidden"),e.target.parentNode.classList.remove("block"),openButton.classList.add("block"),openButton.classList.remove("hidden"))}function windowSize(){window.innerWidth>768&&(sideNav.classList.add("hidden"),closeButton.classList.add("hidden"),openButton.classList.remove("hidden"))}function openSideNav(){sideNav.classList.toggle("hidden")}function closeSideNav(){sideNav.classList.toggle("hidden")}headerSection.addEventListener("click",toggleButton),openButton.addEventListener("click",openSideNav),closeButton.addEventListener("click",closeSideNav),window.addEventListener("resize",windowSize);