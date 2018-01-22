$(document).ready(function(){
  var interval;
  var slider = $('.js-slider');
  var menuBtn = $('.js-menu-btn');
  var menuDropdown = $('.js-menu-dropdown');
  var menuLink = $('.js-menu-link');
  var $window = $(window);

  menuLink.on('click', function(){
    if ($(this).data('target')) {
      var section = $(this).data('target');
      $('html, body').animate({
        scrollTop: $(section).offset().top - 99
      }, 'slow');
      return false;
    };
  });
  menuBtn.on('click', function(){
    menuDropdown.slideToggle(300);
  });
  $('html,body').on('click', function(){});
  $window.resize(function(){
    if ($window.outerWidth() >= 992) {
      menuDropdown.show();
    }
    else {
      menuDropdown.hide();
    }
  });
  startSlide();
  $('.js-prev-slide').on('click', function(){
    stopSlide();
    prevSlide();
    startSlide();
  });
  $('.js-next-slide').on('click', function(){
    stopSlide();
    nextSlide();
    startSlide();
  });
  function startSlide(){
    interval = setInterval(function(){
      nextSlide();
    }, 9000);
  }
  function stopSlide(){
    clearInterval(interval);
  }
  function nextSlide(){
    var slide = $('.js-slider-item');
    var totalSlide = slide.length;
    slide.each(function(index){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        if (index < totalSlide - 1) {
          $('.js-slider-item:nth-child('+(index + 2)+')').addClass('active');
          return false;
        }
        else if (index === totalSlide - 1) {
          $('.js-slider-item:first-child').addClass('active');
          return false;
        }
      }
    });
  }
  function prevSlide(){
    var slide = $('.js-slider-item');
    var totalSlide = slide.length;
    slide.each(function(index){
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        if (index > 0) {
          $('.js-slider-item:nth-child('+index+')').addClass('active');
          return false;
        }
        else if (index === 0) {
          $('.js-slider-item:last-child').addClass('active');
          return false;
        }
      }
    });
  }
});
