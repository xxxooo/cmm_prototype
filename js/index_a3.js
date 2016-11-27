$('.carousel.carousel-slider').carousel({full_width: true, dist: 0});
$('.slider').slider({indicators: false, height: 452});

setInterval(function(){
  //$('.carousel.carousel-slider').carousel('next');
}, 5500);

$('.card').hover(
  function(){
    $(this).removeClass('z-depth-0');
  },
  function(){
    $(this).addClass('z-depth-0');
  }
);

// 啟動sideNav
$(".button-collapse-small").sideNav();

//stick menu
var stickyNavTop = $('#nav').offset().top;

function stickyNav(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
    $('#nav').addClass('sticky-nav');
  } else {
    $('#nav').removeClass('sticky-nav');
  }
}

stickyNav();

$(window).scroll(function() {
  stickyNav();
});
