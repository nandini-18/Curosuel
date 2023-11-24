$(document).ready(function(){
    // Enable Carousel
    $("#featured-carousel").carousel();
  
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#featured-carousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#featured-carousel").carousel("next");
    });
  });
  