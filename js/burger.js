let menubtn = document.querySelector(".header__burger")
let menu = document.querySelector(".header__menu")

menubtn.addEventListener('click', () => {
    menu.classList.toggle("active")
})