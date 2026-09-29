// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");


// Open / close menu

menuButton.addEventListener("click", function () {

    const menuIsOpen = navLinks.classList.toggle("active");

    menuButton.classList.toggle("active", menuIsOpen);

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );

    menuButton.setAttribute(
        "aria-label",
        menuIsOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

});


// =========================
// CLOSE MENU WHEN LINK IS CLICKED
// =========================

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =========================
// CLOSE MENU WITH ESCAPE
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


// =========================
// CLOSE MENU WHEN SCREEN GETS LARGE
// =========================

window.addEventListener("resize", function () {

    if (window.innerWidth > 1100) {

        navLinks.classList.remove("active");

        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});


// =========================
// BACK TO TOP CLICK
// =========================

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
