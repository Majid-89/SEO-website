let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}

// nav-hide ON click

let navBar = document.querySelectorAll(".nav-link")
let navCollapse = document.querySelector(".navbar-collapse.collapse")
navBar.forEach((e) => {
    e.addEventListener("click", function () {
        navCollapse.classList.remove("show")
    })
})