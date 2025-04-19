// Gmail Compose Handler
function openGmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const subject = encodeURIComponent("New message from Portfolio Contact Form");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mlkusama360@gmail.com&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank");
}

// Fade-in on scroll
function fadeInOnScroll() {
  const faders = document.querySelectorAll(".fade-section");
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("emailForm");
  if (form) {
    form.addEventListener("submit", openGmail);
  }
  fadeInOnScroll();
});
