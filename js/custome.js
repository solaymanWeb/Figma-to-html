
$(document).ready(function(){

 $("#stick-header").sticky({topSpacing:0});
 /*Circle Progress bar*/
   $('#circle').circleProgress({
    value: 0.90,
    size: 100,
    fill: {
      gradient: ["red", "green"]
    }
  }); $('#circle2').circleProgress({
    value: 0.75,
    size: 100,
    fill: {
      gradient: ["orange", "green"]
    }
  }); $('#circle3').circleProgress({
    value: 0.70,
    size: 100,
    fill: {
      gradient: ["orange", "blue"]
    }
  }); $('#circle4').circleProgress({
    value: 0.85,
    size: 100,
    fill: {
      gradient: ["blue", "red"]
    }
  });

/*menu*/

      $(function(){
        $('#slick_menu').slicknav({
      
        });
    });

  /* scroll behaveor*/

$(".top").click(function(){
  $("html,body").animate({
    scrollTop:0,
  },600);
});

$(window).scroll(function(){
 var ourwindow = $(this).scrollTop(); 

if(ourwindow < 100){
  $(".top").fadeOut();
}else{
  $(".top").fadeIn();
}

});

//Default prevent

$('a[href*="#"]').click(function(e){
  e.preventDefault();
  var target = this.hash;
  $("html,body").animate({
    scrollTop: $(target).offset().top - 70
  },500);
});

//header menu active class

$(".nav .menu li").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
});
//mixitup
var mixer = mixitup('.portfolio-item');

//wow
    new WOW().init();

});