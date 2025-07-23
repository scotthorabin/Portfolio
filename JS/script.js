function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Keep spinner visible for 1 second
  setTimeout(() => {
    loader.classList.add('fade-out');
    loader.addEventListener('transitionend', () => loader.remove());
    document.body.classList.remove('preload');

    // Initialize lightbox after page load
    image();
  }, 1000);
});

function image() {
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('expanded');
    });
  });
}

 function toggleDescription(cell) {
    cell.classList.toggle("active");
  }
