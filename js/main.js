// Nav Hamburger Menu Toggle

$(".navbar-toggler, .nav-link").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
});

$(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// Detect Snap Scrolling

$(window).scroll(function () {
    $(this).scrollTop() > 50
        ? $("section#home_banner").addClass("snapScroll")
        : $("section#home_banner").removeClass("snapScroll");

    $(this).scrollTop() > 100
        ? $("header").addClass("scrolled")
        : $("header").removeClass("scrolled");
});

// Go Back Function

$("#goBack").click(function () {
    window.history.back();
});

// Show Winners Work Card Function

let workLink = document.querySelectorAll("#work_link");
let workShow = document.querySelectorAll("#work_show");
let workExit = document.querySelectorAll("#work_exit");

for (let i = 0; i < 3; i++) {
    workLink[i].addEventListener("click", () => {
        workShow[i].classList.add("work_view");
    });
    workExit[i].addEventListener("click", () => {
        workShow[i].classList.remove("work_view");
    });
}
