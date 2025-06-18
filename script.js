// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Contact form handling
const form = document.getElementById('contactForm');
const msgElm = document.getElementById('formMessage');
form.addEventListener('submit', e => {
  e.preventDefault();
  const [name, email, message] = ['name','email','message'].map(id => document.getElementById(id).value.trim());
  if (!name || !email || !message) {
    msgElm.textContent = 'Please complete all fields.';
    msgElm.style.color = 'red';
    return;
  }
  msgElm.textContent = 'Thank you! We’ll be in touch soon 😊';
  msgElm.style.color = 'green';
  form.reset();
});
