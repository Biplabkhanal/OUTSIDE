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

  document.querySelectorAll(".video-wrapper").forEach((card) => {
    const video = card.querySelector(".video-thumbnail");
    const playBtn = card.querySelector(".play-pause-btn");
    const playIcon = card.querySelector(".play-icon");
    const pauseIcon = card.querySelector(".pause-icon");

    if (video && playBtn && playIcon && pauseIcon) {
      playBtn.addEventListener("click", () => {
        document.querySelectorAll(".video-thumbnail").forEach((vid) => {
          if (vid !== video && !vid.paused) {
            vid.pause();
            const vidCard = vid.closest(".video-wrapper");
            vidCard.querySelector(".play-icon").style.display = "block";
            vidCard.querySelector(".pause-icon").style.display = "none";
            vidCard.querySelector(".play-pause-btn").style.display = "block";
          }
        });

        if (video.paused) {
          video.play();
          playBtn.style.display = "none";
        } else {
          video.pause();
          playBtn.style.display = "block";
          playIcon.style.display = "block";
          pauseIcon.style.display = "none";
        }
      });

      video.addEventListener("ended", () => {
        playBtn.style.display = "block";
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
      });

      card.addEventListener("mouseover", () => {
        if (!video.paused) {
          playBtn.style.display = "block";
          playIcon.style.display = "none";
          pauseIcon.style.display = "block";
        }
      });

      card.addEventListener("mouseout", () => {
        if (!video.paused) {
          playBtn.style.display = "none";
          pauseIcon.style.display = "none";
        }
      });
    }
  });
});
