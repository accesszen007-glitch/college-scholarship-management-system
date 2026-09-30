const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.querySelector(".nav-menu");

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        mobileMenuBtn.textContent = isOpen ? "✕" : "☰";
    });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu?.classList.remove("active");

        if (mobileMenuBtn) {
            mobileMenuBtn.textContent = "☰";
        }
    });
});