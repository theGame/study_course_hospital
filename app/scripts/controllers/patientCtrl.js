'use strict';

app.controller('PatientsCtrl', function ($scope, $http){

  $scope.users = [];

  //get patients
  $http({
    methoud : "GET",
    url : "../../json/patients.json"
  }).then(function succesHandler(res){

    $scope.users = res.data;
    console.log(res.data)

  }, function errorsHandler(res){
    console.warn(res);
  });

  //console.log("scope users=" + $scope.users);

  $scope.removePatient = function(index){
    // add to session in the future
    $scope.users.patients.splice(index, 1);
  };

});
