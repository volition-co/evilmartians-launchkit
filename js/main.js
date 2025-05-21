function handleMobileNav() {
  const navButton = document.querySelector('.nav-button');
  const navMenu = document.querySelector('.nav-menu');

  navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navButton.classList.toggle('active');
  });

  document.documentElement.addEventListener('click', (event) => {
    if (!navButton.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove('open');
      navButton.classList.remove('active');
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleMobileNav();
});
