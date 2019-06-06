
$(function(){
  $(window).on('scroll', function(){
    if ($(window).scrollTop()){
      $('.header').addClass('fixed-header').removeClass('header');
    }else
    {
      $('.fixed-header').addClass('header').removeClass('fixed-header');
    }
  });

  //Click For The Toggle Class Of The Links Header Mobile

  $('.header .button').on('click', function(){
    $('.header .header-links').slideToggle(1000);
  });

});
