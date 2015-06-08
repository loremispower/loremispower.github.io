$(document).ready(function() {
 
  var owl = $(".carousel");
 
  owl.owlCarousel({
      items : 1, //10 items above 1000px browser width
      itemsDesktop : false, //5 items between 1000px and 901px
      itemsDesktopSmall : [900,1], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : [479,1], // itemsMobile disabled - inherit from itemsTablet option
      //autoPlay: 5000
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
  $(".play").click(function(){
    owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
  })
  $(".stop").click(function(){
    owl.trigger('owl.stop');
  })
 
});
