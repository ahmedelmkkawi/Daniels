/// <reference types="../@types/jquery" />





$(window).on('scroll', function () {
  let scrollPosition = $(window).scrollTop();

 
  $('section').each(function () {
    let sectionTop = $(this).offset().top - 100; 
    let sectionHeight = $(this).outerHeight();
    let sectionId = $(this).attr('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      $('.navbar-nav .nav-link').removeClass('active');
      $('.navbar-nav .nav-link[href="#' + sectionId + '"]').addClass('active'); 
    }
  });


  let aboutOffset = $('#about').offset().top;
  if (scrollPosition >= aboutOffset - 50) {
    $('.navbar').addClass('position-fixed bg-light shadow');
    $('.navbar .navbar-brand').css('color', 'black');
    $('.navbar .nav-link').css('color', 'black');
    $('.navbar .nav-link').addClass('black-line');
    $('.btnUp').css('display','block');
  } else {
    $('.navbar').removeClass('position-fixed bg-light shadow');
    $('.navbar .navbar-brand').css('color', 'white');
    $('.navbar .nav-link').css('color', 'white');
    $('.navbar .nav-link').removeClass('black-line');
    $('.btnUp').css('display','none');

  }
});


$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  
  let id = $(this).attr('href');
  
  if ($(id).length) {
      let offset = $(id).offset().top;
      
      $('html, body').animate({scrollTop: offset + 'px'}, 1500);
  }
});



$(".btnUp").on("click" , function(){
  let offset = $('#home').offset().top;
  $('html, body').animate({scrollTop:`${offset}px`}, 1500)
})
