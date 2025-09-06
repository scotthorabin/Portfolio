// JavaScript function to toggle the full-screen menu
function toggleMenu() {
  const menu = document.querySelector('#hamburger-nav .menu-links');
  menu.classList.toggle('open');  // Add/remove 'open' class to show/hide the menu
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


/* Function for text effect */

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

document.addEventListener("DOMContentLoaded", function () {
  const text = "Hello and welcome to my portfolio!";
  const target = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.innerHTML += text[index];
      index++;
      setTimeout(type, 100); // Typing speed (in ms)
    }
  }

  type();
});






