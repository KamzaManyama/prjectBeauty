 /* Add background color to navbar on scroll */
 window.onscroll = function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = '#fff'; /* Switch to white on scroll */
      navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'transparent'; /* Transparent by default */
      navbar.style.boxShadow = 'none';
    }
  }