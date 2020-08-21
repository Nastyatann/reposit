//$('.single-item').slick();
$(document).ready(function(){
    $('.your-class').slick({
       // autoplay:true,
        
    });
  });

$(document).ready(function(){
   $('.burger').click(function(event) {
      $('.burger,.header-menu').toggleClass('active');
   });
});  