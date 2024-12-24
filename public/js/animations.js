// Simplified animations.js
function pageTransition(callback) {
  // Simple fade out of current content
  document.body.classList.add("fade-transition");
  setTimeout(() => {
    callback();
  }, 300); // Match this with CSS animation duration
}

// Hero section animations
function animateHero() {
  anime({
    targets: ".hero-video-container",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    easing: "easeOutCubic",
  });
}

// About section animations
function animateAbout() {
  anime({
    targets: [".about-image", ".about-content"],
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: anime.stagger(200),
    easing: "easeOutCubic",
  });
}

// Blog post animations
function animateBlogPosts() {
  anime({
    targets: ".blog-post",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: anime.stagger(100),
    easing: "easeOutCubic",
  });
}

// Subscribe section animation
function animateSubscribe() {
  anime({
    targets: [".subscribe-section", ".subscribe-form input", ".subscribe-btn"],
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: anime.stagger(100),
    easing: "easeOutCubic",
  });
}

// Navigation menu animation
function animateNavigation() {
  anime({
    targets: ".nav-links a",
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    delay: anime.stagger(50),
    easing: "easeOutCubic",
  });
}

// Mobile menu animation
function animateMobileMenu(isOpening) {
  anime({
    targets: ".nav-links",
    translateX: isOpening ? ["100%", "0"] : ["0", "100%"],
    duration: 300,
    easing: "easeInOutQuad",
  });
}

// Make functions globally available
window.pageTransition = pageTransition;
window.animateHero = animateHero;
window.animateAbout = animateAbout;
window.animateBlogPosts = animateBlogPosts;
window.animateSubscribe = animateSubscribe;
window.animateNavigation = animateNavigation;
window.animateMobileMenu = animateMobileMenu;
