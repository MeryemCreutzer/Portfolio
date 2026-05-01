document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll only for same-page hash links. Normal page links should navigate.
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const href = link.getAttribute("href");
            if (!href || href === "#") {
                return;
            }

            const targetId = href.substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Theme toggle logic
    const themeSwitch = document.getElementById("theme-switch");
    const themeIcon = document.querySelector(".slider i");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeSwitch) {
            themeSwitch.checked = true;
        }
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");

            if (themeIcon) {
                themeIcon.classList.toggle("fa-moon", !isDark);
                themeIcon.classList.toggle("fa-sun", isDark);
            }

            const newTheme = isDark ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
        });
    }
});
