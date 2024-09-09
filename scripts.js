document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.add("hidden");
    } else {
      // Scrolling up
      navbar.classList.remove("hidden");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  });
});
