// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Active section on scroll
const sections = document.querySelectorAll('section, header.hero');
const links = document.querySelectorAll('.nav-links a');
const setActive = () => {
  const y = window.scrollY + 120;
  let current = 'home';
  sections.forEach(s => { if (s.offsetTop <= y) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
};
document.addEventListener('scroll', setActive, { passive: true });
setActive();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
