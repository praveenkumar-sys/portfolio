// Smooth scrolling navigation + active link toggle

const navLinks = document.querySelectorAll('.nav-link');

function changeActiveLink() {
  let fromTop = window.scrollY + 150; // offset for header height

  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', changeActiveLink);

// Smooth scroll on click handled by CSS scroll-behavior, but fallback here:
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.hash);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form submission handling (simulated)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Simple validation (HTML required + pattern already)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !phone || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = 'red';
    return;
  }

  // Simulate sending...
  formMessage.style.color = '#16a085';
  formMessage.textContent = "Sending your message...";

  setTimeout(() => {
    formMessage.textContent = "Thanks for reaching