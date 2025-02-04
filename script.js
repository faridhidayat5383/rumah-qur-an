document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("shrink", window.scrollY > 50);
    });
});
