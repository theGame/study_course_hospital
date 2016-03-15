'use strict';

app.controller('PatientsCtrl', function ($scope, $http){

  $scope.users;

  //get patients
  $http({
    methoud : "GET",
    url : "../../json/patients.json"
  }).then(function succeshandler(res){

    $scope.users = res.data;
    console.log(res.data)

  }, function errorshandler(res){
    console.warn(res);
  });

});
