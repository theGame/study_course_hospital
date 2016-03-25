'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hospitalJsApp
 */
app.controller('MainCtrl', function ($scope) {

  function sentBackToPatient(index, data){

    //remove unnecessary property
    delete data.occupation;
    delete data.patientCare;

    $scope.$broadcast('dataFromModelToPatient', [index, data]);
  };

  function sentBackToDoctor(index, data){

    //remove unnecessary property
    delete data.dateVisit;
    delete data.problem;

    $scope.$broadcast('dataFromModelToDoctor', [index, data]);
  };

  //listeners

  //patient
  $scope.$on('onPatientEdit', function(event, data){
    $scope.$broadcast('showEditModal', data);
  });

  //doctor
  $scope.$on('onDoctorEdit', function(event, data){
    $scope.$broadcast('showEditModal', data);
  });

  //back data
  $scope.$on('sentBackData', function(event, data){
    ( data[1] === 'patient' ? sentBackToPatient(data[0], data[2]) : sentBackToDoctor(data[0], data[2]));
  });
});
