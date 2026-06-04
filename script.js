const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(17, 17, 17, 0.92)";
  } else {
    header.style.background = "rgba(23, 23, 23, 0.72)";
  }
});
