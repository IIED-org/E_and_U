(function (Drupal, once) {
  Drupal.behaviors.menuToggle = {
    attach: function (context) {
      const menuToggler = context.querySelector('.menu-toggle');
      const menuTogglerIcon = context.querySelectorAll('.menu-toggle__icon');

      once('menu-toggle', menuToggler).forEach(function (button) {

        button.addEventListener('click', function () {
          const target = document.getElementById('main-menu');
          const mainMenuRegion = document.querySelector('.main-menu__wrapper');

          if (target) {
            mainMenuRegion.classList.toggle('hidden');
            menuTogglerIcon.forEach((icon) => {
              icon.classList.toggle('hidden');
            })
          }
        });

      });

      // Close menu when clicking outside on mobile.
      document.addEventListener('click', function (event) {
        const mainMenuRegion = document.querySelector('.main-menu__wrapper');
        const menuToggler = document.querySelector('.menu-toggle');

        if (
          window.matchMedia('(max-width: 767px)').matches &&
          mainMenuRegion &&
          !mainMenuRegion.classList.contains('hidden') &&
          !mainMenuRegion.contains(event.target) &&
          menuToggler &&
          !menuToggler.contains(event.target)
        ) {
          mainMenuRegion.classList.add('hidden');
          const menuTogglerIcons = document.querySelectorAll('.menu-toggle__icon');
          menuTogglerIcons.forEach((icon) => {
            icon.classList.toggle('hidden');
          });
        }
      });

    }
  };
})(Drupal, once);
