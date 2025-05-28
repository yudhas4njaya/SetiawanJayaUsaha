document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Close menu on link click & smooth scroll
  document.querySelectorAll('.menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 58,
          behavior: 'smooth'
        });
      }
      // close menu on mobile after click
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
});
