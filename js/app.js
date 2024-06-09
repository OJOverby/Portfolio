// Event listener for opening and closing the hamburger menu

const checkbox = document.querySelector("#menu-checkbox");
const menu = document.querySelector("#navmenu");
const menuButton = document.querySelector(".mobile-menu-button");
const dropDown = document.querySelector("#mobile-dropdown-menu");


        // Add class to iniate animation on hamburger menu when clicked
menuButton.addEventListener("click", () => {
    if (checkbox.checked==0){
        menuButton.classList.add("open");
    } else {
        menuButton.classList.remove("open");
    }
})

dropDown.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
if (event.target instanceof HTMLAnchorElement) {
    menuButton.classList.remove("open");
    checkbox.checked=0;
}}