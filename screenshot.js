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
