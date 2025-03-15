document.addEventListener("DOMContentLoaded", function () {
    // Get the project identifier from the body tag
    const projectName = document.body.getAttribute("data-project");

    // Define screenshots for each project
    const projectScreenshots = {
        "dontdothat": [
            "../image/dontdothat1.png",
            "../image/dontdothat2.png",
            "../image/dontdothat3.png",
            "../image/dontdothat4.png",
            "../image/dontdothat5.png",
            "../image/dontdothat6.png",
            "../image/dontdothat7.png",
            "../image/dontdothat8.png",
            "../image/dontdothat9.png",
            "../image/dontdothat10.png",
        ],
        "VectorShot":[
            "../image/Vectorshot1.jpg",
            "../image/Vectorshot2.jpg",
            "../image/Vectorshot3.jpg",

        ],
        "DCM":[
            "../image/dcm1.png",
            "../image/dcm2.png",
            "../image/dcm3.png",
            "../image/dcm4.png",
            "../image/dcm5.png",
            "../image/dcm6.png",
            "../image/dcm7.png",
            "../image/dcm8.png",
            "../image/dcm9.png",
            "../image/dcm10.png",
            "../image/dcm11.png",
            "../image/dcm12.png",
        ]
    };

    // Get the corresponding screenshots array
    const screenshots = projectScreenshots[projectName] || [];

    // Get the container
    const container = document.getElementById("screenshot-container");

    // Populate images
    screenshots.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Game Screenshot";
        img.classList.add("screenshot");
        container.appendChild(img);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const screenshots = document.querySelectorAll(".screenshot");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close-btn");
    lightbox.appendChild(closeBtn);

    // Open lightbox on image click
    screenshots.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.style.visibility = "visible";
            lightbox.style.opacity = "1";
        });
    });

    // Close lightbox on button click or clicking outside image
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.opacity = "0";
        setTimeout(() => {
            lightbox.style.visibility = "hidden";
        }, 300);
    }
});
