const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

document.querySelectorAll('.details-button').forEach(button => {
  button.addEventListener('click', () => {
    const details = document.getElementById(`details-${button.dataset.project}`);
    if (!details) return;
    const willOpen = details.hidden;
    details.hidden = !willOpen;
    button.setAttribute('aria-expanded', String(willOpen));
    button.innerHTML = willOpen ? 'Hide notes <span>−</span>' : 'Project notes <span>＋</span>';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
