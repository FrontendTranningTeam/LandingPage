$(document).ready(function() {
  var $headerButton = $('.js-header__button');
  var $slideBanner = $('.js-slide-banner');
  var $member = $('.js-member');

  $headerButton.on('click', function() {
    $('.js-header__menu').slideToggle();
  });
  $slideBanner.owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    items: 1
  });
  $member.owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      1200: {
        items: 6
      }
    }
  });
  $('.stats__number').countTo();
});
