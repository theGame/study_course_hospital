'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:ModalCtrl
 * @description
 * # modalCtrl
 * Controller of the hospitalJsApp
 */
app.controller('modalCtrl', function ($scope) {

  //receive data
  $scope.$on('showEditModal', function(event, data){
    initData();
    setData(data);
  });

  function initData(){
    $scope.typeUser;
    $scope.firstName;
    $scope.lastName;
    $scope.problem;
    $scope.dateVisit;
    $scope.occupation;
    $scope.patientCare;
  };

  function setData(data){
    $scope.typeUser = data[0];
    $scope.firstName = data[1].name;
    $scope.lastName = data[1].surname;
    $scope.problem = data[1].complaint;
    $scope.dateVisit = data[1].visit_doctor;
    $scope.occupation = data[1].type;
    $scope.patientCare = data[1].patient_id;
    $scope.index = data[2];
  };

  function sentToPatient(){
    console.log(data);
  };
  function sentToDoctor(){
    console.log(data);
  };


  $scope.updateData = function(){
    $scope.firstName = $('#firstName').val();
    $scope.lastName = $('#lastName').val();
    ( $scope.typeUser === 'patient' ) ? sentToPatient(firstName, lastName, index) : sentToDoctor(firstName, lastName, index);
  };
});
