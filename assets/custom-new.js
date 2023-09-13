$(document).ready(function(){
  
  
  //Homepage banner slider
  $('.flx_slider_top').slick({
    dots: true,
    infinite: true,
    arrows: false,  
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 800,
  });

  var $slider  = $('.pdhome_flx');
  var width = $(window).width();

  if(width > 769){
    //homepage product slider
    $slider.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400,
      dots: false,           
    }).on('afterChange', function(event, slick, currentSlide, nextSlide){
      nyumi_api.change_color(currentSlide);
    });

  }else{
    if($slider.hasClass('slick-initialized')) {
      $slider.slick("unslick");
    }
    //$('.pdhome_flx .pdhm_itme[data-index="4"], .pdhome_flx .pdhm_itme[data-index="3"]').addClass('hide_mobile_list');
  }

  $('.product_Category_item .category_item[data-item="0"]').addClass('active');

  $('.icon_box_text .three:eq(0)').addClass('active');
  
  //Product page slider
  $('.product_image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    adaptiveHeight: true
  });
  
  

    $('#product_slider').slick('slickGoTo', 1);

});