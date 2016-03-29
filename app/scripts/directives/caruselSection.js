'use strict';

app.directive('carouselSection', function(){
  return{
    restrict: 'E',
    templateUrl: '../../views/carousel-section.html',
    link: function(scope, element, attr){
      console.log('scope '+scope);
      console.log('element '+element);
      console.log('attr '+attr);
    }
  }
});
