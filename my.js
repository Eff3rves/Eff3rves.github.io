document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelector(".Projects");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    projects.classList.add("show"); // Add fade-in class
                    observer.unobserve(projects); // Stop observing after animation
                }
            });
        },
        { threshold: 0.1 } // Trigger when 30% of the section is visible
    );

    observer.observe(projects);
});
