function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

     window.addEventListener('load', () => {
      const loader = document.getElementById('loader');

      /* keep spinner visible for 1 second */
      setTimeout(() => {
        loader.classList.add('fade-out');
        loader.addEventListener('transitionend', () => loader.remove());
        document.body.classList.remove('preload');
      }, 1000);           // 1000 ms = 1 s
    });