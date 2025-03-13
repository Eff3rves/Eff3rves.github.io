document.addEventListener("DOMContentLoaded", function () {
    // Check if the current path is inside the projects folder
    const isInProjectsFolder = window.location.pathname.includes("/projects/");
    
    // Adjust home link: if inside projects, go up one level
    const homeLink = isInProjectsFolder ? "../index.html" : "index.html";
    
    // For project links, if you're in the root, point to the projects folder;
    // if you're already in projects, no need to prepend the folder
    const projectBasePath = isInProjectsFolder ? "" : "projects/";
    
    const projects = [
        { name: "Don't Do That", url: "DunDoThat.html" },
        { name: "VectorShot", url: "VectorShot.html" },
        { name: "Demon Chef Mayhem", url: "DCM.html" }
    ];

    // Create the navigation bar
    const nav = document.querySelector("nav");
    
    // Create the menu button for mobile view
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.classList.add("menu-button");
    menuButton.addEventListener("click", function () {
        nav.classList.toggle("expanded"); // Toggle visibility of the nav links
    });

    // Insert the button into the nav
    nav.appendChild(menuButton);

    // Create a div to contain the links
    const navLinks = document.createElement("div");
    navLinks.classList.add("nav-links");

    // Set the Home link with the adjusted path
    navLinks.innerHTML = `<a href="${homeLink}">Home</a>`;

    // Create each project link using the correct base path
    projects.forEach(project => {
        const link = document.createElement("a");
        link.href = projectBasePath + project.url;
        link.textContent = project.name;
        navLinks.appendChild(link);
    });

    // Add the links container to the nav
    nav.appendChild(navLinks);
});
