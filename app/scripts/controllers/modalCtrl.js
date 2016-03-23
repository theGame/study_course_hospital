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
    $scope.typeUser = data[0];
    $scope.firstName = data[1].name;
    $scope.lastName = data[1].surname;
    $scope.problem = data[1].complaint;
    $scope.dateVisit = data[1].visit_doctor;
    $scope.occupation = data[1].typeOfWork;
    $scope.patientCare = data[1].care;
  });

});
