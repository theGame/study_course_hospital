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


  $scope.editDoctor = function(index){
    var obj = $scope.specialists.doctors[index];
    $scope.$emit('onDoctorEdit', ['doctor', obj, index]);
  };


  //listeners
  $scope.$on('dataFromModelToDoctor', function(event, data){
    event.currentScope.specialists.doctors[data[0]].name = data[1].firstName;
    event.currentScope.specialists.doctors[data[0]].patient_id = data[1].patientCare;
    event.currentScope.specialists.doctors[data[0]].surname = data[1].lastName;
    event.currentScope.specialists.doctors[data[0]].type = data[1].occupation;
  });
});
