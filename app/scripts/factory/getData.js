'use strict';

app.factory('getDate', function($scope, $http){

  $scope.errors = [];
  $scope.patients;


  //get patients
  $http({
    methoud : "POST",
    url : "../../json/patients.json"
  }).then(function succesHandler(res){
    $scope.patients = res.data;
    console.log($scope.patients);
  }, function errorsHandler(res){
    $scope.errors = $scope.errors.push(res.statusText);
  });

  return{
      getPatients: $scope.patients
    };
});
