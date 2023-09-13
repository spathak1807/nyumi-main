document.addEventListener('DOMContentLoaded', (event) => {
  var banner_images = []
  for(var i=0; i<$('.nyumi-slide.slick-slide picture img').length; i++) {
      banner_images.push($('.nyumi-slide.slick-slide picture img')[i].src)
  }
  for(var j=0; j<banner_images.length; j++) {
      var link = document.createElement('link');
      link.id = 'id'+j;
      link.rel = 'preload';
      link.href = banner_images[j];
      document.head.appendChild(link);
  }
})