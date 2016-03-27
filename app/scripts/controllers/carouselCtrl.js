'use strict';

app.controller('carouselCtrl', function ($scope, $http){
  $scope.carousel = [];
  $scope.myInterval = 3000;

  //get images and titles
  $http({
    methoud : "GET",
    url : "../../json/carousel.json"
  }).then(function succesHandler(res){
    $scope.carousel = res.data;
    console.log($scope.carousel);
  }, function errorHandlers(res){
    console.warn(res);
  });
});
