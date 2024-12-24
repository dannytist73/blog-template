document.addEventListener("DOMContentLoaded", function () {
  // Initial animations
  animateNavigation();

  if (document.querySelector(".hero-video-container")) {
    animateHero();
  }

  if (document.querySelector(".about-section")) {
    animateAbout();
  }

  if (document.querySelector(".blog-posts")) {
    animateBlogPosts();
  }

  if (document.querySelector(".subscribe-section")) {
    animateSubscribe();
  }

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "mobile-menu-overlay";
  body.appendChild(overlay);

  // Toggle menu function
  function toggleMenu() {
    const isOpening = !navLinks.classList.contains("active");
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
    animateMobileMenu(isOpening);

    const menuIcon = mobileMenuBtn.querySelector("i");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
  }

  // Event listeners
  mobileMenuBtn?.addEventListener("click", toggleMenu);
  overlay?.addEventListener("click", toggleMenu);

  // Simplified navigation handling
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Only handle internal navigation
      if (
        !link.getAttribute("href").startsWith("#") &&
        !link.getAttribute("href").startsWith("http") &&
        link.getAttribute("target") !== "_blank" &&
        !link.hasAttribute("download")
      ) {
        // Let the default navigation happen
        return true;
      }
    });
  });

  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe elements for scroll animations
  document
    .querySelectorAll(".blog-post, .about-section, .subscribe-section")
    .forEach((el) => {
      observer.observe(el);
    });
});
