$(document).ready(function () {
   $('a.scroll').click(function (){
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 750,
         easing: "swing"
      });
      return;
   });
});

$(document).ready(function () {
   $('.slider__slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
   });
});

$(document).ready(function () {
   $('.faq__question').click(function(event){
      if($('.faq__menu').hasClass('one')){
         $('.faq__question').not($(this)).removeClass('active');
         $('.faq__answer').not($(this).next()).slideUp(400);
      }
      $(this).toggleClass('active').next().slideToggle(400);
   });
});
