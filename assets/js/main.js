
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(10).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

// Tooglle Mobile Menu
$(document).ready( function() {
   $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay, .custom-navigation').toggleClass('open');
    });
})



  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);