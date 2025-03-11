document.addEventListener("DOMContentLoaded", function () {
    const resumeBtn = document.querySelector(".btn-primary");
    const projectsBtn = document.querySelector(".btn-secondary");

    resumeBtn.addEventListener("click", function () {
        window.location.href = "#resume";
    });

    projectsBtn.addEventListener("click", function () {
        window.location.href = "#projects";
    });

    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
