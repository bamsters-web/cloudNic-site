document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
    // Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});

document.querySelectorAll('.services, .about, .pricing, .contact').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});
