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
        { name: "Demon Chef Mayhem", url: "DCM.html" },
    ];
    
    const nav = document.querySelector("nav");
    
    // Set the Home link with the adjusted path
    nav.innerHTML = `<a href="${homeLink}">Home</a>`;
    
    // Create each project link using the correct base path
    projects.forEach(project => {
        const link = document.createElement("a");
        link.href = projectBasePath + project.url;
        link.textContent = project.name;
        nav.appendChild(link);
    });
  });
  