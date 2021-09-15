// Window Load Function

$(window).on("load", function () {
    $("#preloader").css({
        opacity: "0.6",
        clipPath: "circle(0% at 50% 0%)",
    });
    $(".loader").css({
        opacity: "0",
        top: "30%",
        transitionDelay: "0.3s",
    });

    // Time Out Function
    setTimeout(() => {
        $(".reveal").addClass("revealed");
    }, 1000);
});

// Nav Hamburger Menu Toggle

$(".navbar-toggler, .nav-link").click(function () {
    $(".navbar-toggler").toggleClass("showNavbar");
});

$(".nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// Detect Snap Scrolling

$(window).scroll(function () {
    $(this).scrollTop() > 150
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
