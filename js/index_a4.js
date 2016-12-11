$('#main-carousel').carousel({full_width: true, dist: 0});

$('#carousel-prev').click(function(){
  $('#main-carousel').carousel('prev');
});

$('#carousel-next').click(function(){
  $('#main-carousel').carousel('next');
});


$('.slider').slider({indicators: false, height: 452});


$('.card').hover(
  function(){
    $(this).removeClass('z-depth-0');
  },
  function(){
    $(this).addClass('z-depth-0');
  }
);

// 啟動sideNav
$(".button-collapse-mid").sideNav();

//stick menu
var stickyNavTop = $('#nav').offset().top;

function stickyNav(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
    $('#nav-wtf').show();
    //$('#nav').addClass('sticky-nav');
  } else {
    $('#nav-wtf').hide();
    //$('#nav').removeClass('sticky-nav');
  }
}

stickyNav();

$(window).scroll(function() {
  stickyNav();
});
