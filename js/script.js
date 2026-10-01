/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ================= CLOSE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= DARK MODE ================= */

const themeToggle =
    document.getElementById("theme-toggle");

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

        themeToggle.textContent = "🌙";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeToggle.textContent = "☀️";

    }

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        `Thank you, ${name}! Your message has been received.`
    );

    contactForm.reset();

});