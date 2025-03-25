document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll buttons
    const resumeBtn = document.querySelector(".btn-primary");
    const projectsBtn = document.querySelector(".btn-secondary");

    if (resumeBtn) {
        resumeBtn.addEventListener("click", function () {
            window.location.href = "#resume";
        });
    }

    if (projectsBtn) {
        projectsBtn.addEventListener("click", function () {
            window.location.href = "#projects";
        });
    }

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Theme toggle logic
    const themeSwitch = document.getElementById("theme-switch");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");
        const newTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
    });
});