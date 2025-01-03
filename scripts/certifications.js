// staggers every image on the page when seen on the screen
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        let delay = 0.5;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${delay}s`;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
                delay += 0.2;
            }
        });
    }, { 
        threshold: 0.1
    });

    const elements = document.querySelectorAll(".element");
    elements.forEach((el) => observer.observe(el));
});