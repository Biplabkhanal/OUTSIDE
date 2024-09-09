document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");
    });
  });

  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      navLinks.classList.remove("active");
    }
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  });
});
