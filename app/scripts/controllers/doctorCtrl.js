'use strict';

app.controller('DoctorCtrl', function ($scope, $http){

  $scope.specialists;

  //get patients
  $http({
    methoud : "GET",
    url : "../../json/doctors.json"
  }).then(function succeshandler(res){

    $scope.specialists = res.data;
    console.log(res.data)

  }, function errorshandler(res){
    console.warn(res);
  });

});
