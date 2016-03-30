'use strict';

app.directive('carouselSection', function(){
  return{
    restrict: 'E',
    templateUrl: '../../views/carousel-section.html',
    link: function(scope, element, attr){
      console.log(element);
    }
  }
});
