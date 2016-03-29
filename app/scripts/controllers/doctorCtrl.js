'use strict';

app.controller('DoctorCtrl', function ($scope, $http){

  $scope.specialists = [];

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

  $scope.removeDoctor = function(index){
    $scope.specialists.doctors.splice(index, 1);
  };

  $scope.editDoctor = function(index){
    var obj = $scope.specialists.doctors[index];
    $scope.$emit('onDoctorEdit', ['doctor', obj, index]);
  };

});
