document.addEventListener('DOMContentLoaded', function () {

  // Mobile menu toggle
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    // close menu after clicking a link (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  // Smooth scroll for on-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id.length > 1) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Newsletter form: simple client-side confirmation (replace with real backend later)
  var newsletterBtn = document.querySelector('.newsletter .btn');
  if (newsletterBtn) {
    newsletterBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var input = document.querySelector('.newsletter input[type="email"]');
      if (input && input.value.trim()) {
        alert('Thanks for subscribing! (Connect this form to your email service to make it live.)');
        input.value = '';
      } else {
        alert('Please enter your email address.');
      }
    });
  }

});
