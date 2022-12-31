const reveal = () => {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

let aboutBtn = document.querySelector("#about-button");
let projectsBtn = document.querySelector("#projects-button");
let contactBtn = document.querySelector("#contact-button");
let aboutSection = document.querySelector(".about");
let projectsSection = document.querySelector(".projects");
let contactSection = document.querySelector(".contact")

aboutBtn.addEventListener("click", () => {
  console.log(aboutSection.offsetTop)
  window.scrollTo(0, aboutSection.offsetTop-60);
});

projectsBtn.addEventListener("click", () => {
  window.scrollTo(0, projectsSection.offsetTop-60);
});

contactBtn.addEventListener("click", () => {
  window.scrollTo(0, contactSection.offsetTop-60);
});
  
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();