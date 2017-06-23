require([
  'jquery',
], function ($) {
  'use strict';
  $(document).ready(function () {
    // return-to-top arrow
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
      } else {
        $('#return-to-top').fadeOut(200);
      }
    });

    $('#return-to-top').click(function () {
      $('body,html').animate({
          scrollTop: 0,
        }, 500);
    });

    $('#portal-column-two').prepend($('.share'));

    $('.share .share-toggle').on('click', function(e) {
      e.preventDefault();
      $('.share').toggleClass('open');
    });
  });
});
