// Simple JavaScript functionality (extend as needed)

// Smooth scroll behavior (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Placeholder for form submission handling
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out, Harsh will get back to you soon!");
});


var typed = new Typed('#element', {
  strings: ['HTML','CSS', '&amp; Java Script.'],
  typeSpeed: 20,
});
