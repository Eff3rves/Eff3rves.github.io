
// //target all elements to save to constants
// const page1btn=document.querySelector(".page1btn");
// const page2btn=document.querySelector(".page2btn");
// const page3btn=document.querySelector(".page3btn");
// const page4btn=document.querySelector(".page4btn");
// const buttons = document.querySelectorAll("nav button");

// var allpages=document.querySelectorAll(".content");

// var type_description = document.querySelectorAll(".type_description");

// var typeContent = document.querySelectorAll(".type_contents");

// const projectImage = ["image/currproj1.jpg","image/currproj2.jpg","image/currproj3.jpg"]
// let currentIndex = 0;

// const carouselImage = document.getElementById("carousel-image")
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// const hiddenElements = document.querySelectorAll(".hidden");

// hideall();


// //show homepage //1 is for homepage
// show(1);

// function hideall() {
//     allpages.forEach(page => {
//       page.classList.remove("active");
//       page.style.opacity = "0"; // Trigger fade-out animation
//       setTimeout(() => {
//         page.style.display = "none"; // Hide after fade-out completes
//       }, 500); // Match the CSS transition duration
//     });
//   }
  

// function setActiveButton(activeIndex) {
//     buttons.forEach((btn, index) => {
//       if (index === activeIndex) {
//         btn.classList.add("active");
//       } else {
//         btn.classList.remove("active");
//       }
//     });
//   }

//   // Example usage in your page navigation
// page1btn.addEventListener("click", () => {
//     show(1);
//     setActiveButton(0); // Index for "About Me"
//   });
  
//   page2btn.addEventListener("click", () => {
//     show(2);
//     setActiveButton(1); // Index for "My Projects"
//   });
  
//   page3btn.addEventListener("click", () => {
//     show(3);
//     setActiveButton(2); // Index for "Contact Me"
//   });

//   function show(pgno) {
//     hideall(); // Hide all pages first
  
//     const onepage = document.querySelector("#page" + pgno);
  
//     // Ensure it's visible before triggering the fade-in
//     setTimeout(() => {
//       onepage.style.display = "block"; // Make it visible
//       requestAnimationFrame(() => { // Next frame for transition to apply
//         onepage.style.opacity = "1"; // Trigger fade-in
//         onepage.classList.add("active");
//       });
//     }, 500); // Match the hide duration
//   }
  
  
  

// /*Listen for clicks on the buttons, assign anonymous
// eventhandler functions to call show function*/
// page1btn.addEventListener("click", function () {
//     show(1);
// });
// page2btn.addEventListener("click", function () {
//     show(2);
// });
// page3btn.addEventListener("click", function () {
//     show(3);
// });

// let autoScroll;

// function startAutoScroll() {
//   autoScroll = setInterval(() => {
//     currentIndex = (currentIndex + 1) % projectImage.length;
//     updateImage();
//   }, 3000);
// }

// function stopAutoScroll() {
//   clearInterval(autoScroll);
// }

// // Start auto-scroll on page load
// startAutoScroll();

// // Attach manual navigation handlers
// prevButton.addEventListener("click", () => {
//   stopAutoScroll(); // Stop auto-scroll when manually navigating
//   currentIndex = (currentIndex - 1 + projectImage.length) % projectImage.length;
//   updateImage();
//   startAutoScroll(); // Restart auto-scroll
// });

// nextButton.addEventListener("click", () => {
//   stopAutoScroll();
//   currentIndex = (currentIndex + 1) % projectImage.length;
//   updateImage();
//   startAutoScroll();
// });

// function updateImage() {
//     carouselImage.src = projectImage[currentIndex];
//   }
  

//   // Create an Intersection Observer
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("show"); // Add the 'show' class
//         observer.unobserve(entry.target); // Stop observing once it's animated
//       }
//     });
//   }, {
//     threshold: 0.1 // Trigger when 10% of the element is visible
//   });

//   // Attach observer to each project
// hiddenElements.forEach(project => observer.observe(project));

  