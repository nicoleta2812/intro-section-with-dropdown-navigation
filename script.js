const navLinks = document.querySelectorAll(".nav-links li");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobileLinks = document.querySelectorAll(".mobile-links li");

function showMenu(){
    const icon = document.querySelector(".mobile-menu-btn img");
    mobileMenuBtn.classList.toggle("active-btn");
    mobileMenu.classList.toggle("active-menu");
    overflow.classList.toggle("active-menu");
    if (mobileMenuBtn.classList.contains("active-btn")) {
      icon.src = "./images/icon-close-menu.svg";
    } else {
      icon.src = "./images/icon-menu.svg";
    }
}

mobileMenuBtn.addEventListener("click", showMenu);

navLinks.forEach((link) => {
    const subMenu = link.querySelector(".sub-menu");
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      subMenu.classList.toggle("active-menu");
    });
  });

  mobileLinks.forEach((link) => {
    const subMenu = link.querySelector(".mobile-sub");
    link.addEventListener("click", () => {
      link.classList.toggle("active");
      subMenu.classList.toggle("active-menu");
    });
  });
  