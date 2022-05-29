const btnMobile = document.querySelector(".header__nav__btn-mobile");

function toggleMenu () {
    const nav = document.querySelector(".header__nav__menu");
    nav.classList.toggle('active');
}

btnMobile.addEventListener("click", toggleMenu);