
document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Abebaw Tantie Portfolio!");

    // Navigation
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigation: " + link.textContent);
        });
    });

    // Contact Form
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function () {

            const name = document.getElementById("name").value;

            document.getElementById("form-message").textContent =
                "Thank you, " + name +
                "! Your message is being sent.";

        });
    }

    // Dark / Light Mode
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            document.body.classList.toggle("light-mode");

            if (document.body.classList.contains("light-mode")) {
                themeToggle.textContent = "🌙 Dark Mode";
            } else {
                themeToggle.textContent = "☀️ Light Mode";
            }

        });
    }

});
