$(document).ready(function () {


    //Dropdown clear
   /* $('.dropdown-clear').mouseover(function() {
        $(this).children().addClass('active');
      })
    .mouseout(function() {
      $(this).children().removeClass('active');
    });*/

    function thisClass(element, defaults = 'active') {
      if ($(element).hasClass(defaults)) {
        $(element).removeClass(defaults);
      } else {
        $(element).addClass(defaults);
      }
    }

    function navsCarousel(element, nav) {
      $(nav+' .prev').click(function() {
        element.trigger('prev.owl.carousel');
      })

      $(nav+' .next').click(function() {
          element.trigger('next.owl.carousel');
      })
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

    //CAROUSELS
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


    const sale_product_carousel = $('.sale-product__carousel');

    sale_product_carousel.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items: 1,
      dots: false
    })


    navsCarousel(sale_product_carousel, '.sale-product-heading-nav');


    $('.top-sell__carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items: 3,
        dots: false,
        responsive : {
          0 : {
            items: 1
          },
          550 : {
              items: 2,
          },
          776 : {
            items:3
          },
          991 : {
              items:3
          }
      }
    })

    const top_sell =  $('.top-sell__carousel');
    navsCarousel(top_sell, '.top-sell-nav');

    const week = $('.week-sell__carousel');
    navsCarousel(week, '.week-sell-nav');

    $('.week-sell__carousel').owlCarousel({
        loop:true,
        margin: 30,
        nav:false,
        items: 3,
        dots: false,
        responsive : {
          0 : {
            items: 1
          },
          550 : {
              items: 2,
          },
          776 : {
            items:2
          },
          991 : {
              items:3
          },
          1200 : {
            items:4
        }
      }
    })

    $('.brands__carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:false,
      items: 3,
      dots: false,
      responsive : {
        0 : {
          items: 1
        },
        550 : {
            items: 2,
        },
        776 : {
          items:3
        },
        991 : {
            items: 4
        },
        1200 : {
          items: 5
      }
    }
  })
  const brands = $('.brands__carousel');
    navsCarousel(brands, '.brands-nav');

    $('.news__carousel').owlCarousel({
      loop:true,
      margin:40,
      nav:false,
      items: 3,
      dots: false,
      responsive : {
        0 : {
          items: 1
        },
        550 : {
            items: 2,
        },
        776 : {
          items:3
        },
        991 : {
            items:3
        }
    }
  })

  const news = $('.news__carousel');
  navsCarousel(news, '.news-nav');
  

    
});