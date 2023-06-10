


$(function () {
  $('#mixit-container').mixItUp();

  $(".fancybox").fancybox();


  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').addClass("d-none");
    } else {
      $('.scrollToTop').addClass("d-inline-block");
    }
  });


  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
  });




  if (window.location.hash) {
    scroll(0, 0);
    setTimeout(function () {
      scroll(0, 0);
    }, 1);
  }
  if (window.location.hash) {
    $("html, body").animate({
      scrollTop: $(window.location.hash).offset().top - 140
    }, 600);
  }

  // contact scroll
//   $('.header-action .btn-secondary').click(function () {
//     $("html, body").animate({
//       scrollTop: $('#contact-home').offset().top - 75
//     }, 600);
//   });
})

$(window).on('load', function () {
  $('#aa-preloader-area').delay(300).addClass('d-none');

});