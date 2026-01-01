/* ===============================
   NAVBAR TOGGLE (MOBILE)
   =============================== */
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Close menu after clicking link (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });
});


/* ===============================
   SMOOTH SCROLL
   =============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* ===============================
   HERO FADE IN
   =============================== */
const heroContent = document.querySelector(".hero-content");
if (heroContent) {
    heroContent.style.opacity = 0;
    heroContent.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 200);
}


/* ===============================
   SKILLS CAROUSEL (INFINITE AUTO)
   =============================== */

if (carousel) {

    // Duplicate items for infinite loop
    carousel.innerHTML += carousel.innerHTML;

    let speed = 0.6;               // scroll speed
    let isMobile = window.innerWidth <= 768;
    let interval;

    function autoScroll() {
        carousel.scrollLeft += speed;

        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
        }
    }

    function startScroll() {
        if (!isMobile) {
            interval = setInterval(autoScroll, 20);
        }
    }

    function stopScroll() {
        clearInterval(interval);
    }

    startScroll();

    // Pause on hover (desktop)
    carousel.addEventListener("mouseenter", stopScroll);
    carousel.addEventListener("mouseleave", startScroll);

    // Re-check on resize
    window.addEventListener("resize", () => {
        isMobile = window.innerWidth <= 768;
        stopScroll();
        startScroll();
    });
}
const carousel = document.getElementById("skillsCarousel");

if (carousel) {

    // Duplicate content for infinite scroll
    carousel.innerHTML += carousel.innerHTML;

    let speed = 0.8; // 🔥 increase if needed (1.2 fast)

    function autoScroll() {
        carousel.scrollLeft += speed;

        // seamless reset
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
        }
    }

    setInterval(autoScroll, 20);
}
