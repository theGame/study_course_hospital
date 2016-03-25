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


  $scope.updateData = function(){
    //up-to-data
    var obj = {};
    obj.firstName = $('#firstName').val();
    obj.lastName = $('#lastName').val();
    obj.problem = $('#problem').val();
    obj.dateVisit = $('#dateVisit').val();
    obj.occupation = $('#occupation').val();
    obj.patientCare = $('#patientCare').val();
    $scope.index = $('.index')[0].getAttribute('data-index');

    $scope.$emit('sentBackData', [$scope.index, $scope.typeUser, obj]);

  };
});
