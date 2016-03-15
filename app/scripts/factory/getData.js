'use strict';

app.factory("getDate", function($scope, $http){

  $scope.errors = [];

  //get patients
  $http({
    methoud : "POST",
    url : "../../json/patients.json"
  }).then(function succeshandler(res){
    $scope.patients = res.data;
    alert ($scope.patients);
  }, function errorshandler(res){
    alert(res);
    $scope.errors = $scope.errors.push(res.statusText);
  });

  return{
    getPatients: function(){
      return $scope.patients;
    }
  }
});
