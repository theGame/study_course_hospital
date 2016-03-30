'use strict';

app.controller('DoctorCtrl', function ($scope, $http, getData){

  $scope.specialists = getData.getDoctorsData().then(function(response){
    $scope.specialists = response.data;
  });


  $scope.removeDoctor = function(index){
    $scope.specialists.doctors.splice(index, 1);
  };

  $scope.editDoctor = function(index){
    var obj = $scope.specialists.doctors[index];
    $scope.$emit('onDoctorEdit', ['doctor', obj, index]);
  };

});
