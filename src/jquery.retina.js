//= require retina_image.coffee

(function( $ ){

  $.fn.retina = function() {  

    return this.each(function() {        
      var $this = $(this);
      var image = $this.get(0);      
      if (window.devicePixelRatio > 1 && image.tagName == 'IMG') {
        new RetinaImage(image);
      }
    });
  };
})( jQuery );