$(document).ready(function () {


    //Dropdown clear
   /* $('.dropdown-clear').mouseover(function() {
        $(this).children().addClass('active');
      })
    .mouseout(function() {
      $(this).children().removeClass('active');
    });*/

    function thisClass($element, $default = 'active') {
      if ($($element).hasClass($default)) {
        $($element).removeClass($default);
      } else {
        $($element).addClass($default);
      }
    }


    $('.dropdown-clear').click(function(e){
      e.preventDefault();
      if ($(this).children().hasClass('active')) {
        $(this).children().removeClass('active');
      } else {
        $(this).children().addClass('active');
      }
      
    })


    //Header menu
    $('.header-menu-category-heading').click(function(e) {
      e.preventDefault();

      if ($('.header-menu-category').hasClass('active')) {
        $('.header-menu-category').removeClass('active');
      } else {
        $('.header-menu-category').addClass('active');
      }
      
    })

    $('.header-menu-category-heading').mouseout(function(){
      $('.header-menu-category').removeClass('active');
    })


    $('.header-menu-category-but').click(function(e){
      e.preventDefault();
      thisClass(".header-menu-items");
    })
    const homepage__slider = $('.homepage__slider');
    homepage__slider.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items: 1,
      dots: true
  })
  
  $('.homepage__slider .owl-dot').click(function () {
    homepage__slider.trigger('to.owl.carousel', [$(this).index(), 300]);
  });


    
});