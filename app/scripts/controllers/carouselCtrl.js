'use strict';

app.controller('carouselCtrl', function ($scope, $http, getData){

  //get 
  $scope.carousel = getData.getCarouselData().then(function(response){
    $scope.carousel = response.data;
  });
  $scope.index = 0;
  $scope.myInterval = 3000;

});
