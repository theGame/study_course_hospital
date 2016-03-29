'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hospitalJsApp
 */
app.controller('MainCtrl', function ($scope) {

  //listeners

  //patient
  $scope.$on('onPatientEdit', function(event, data){
    $scope.$broadcast('showEditModal', data);
  });

  //doctor
  $scope.$on('onDoctorEdit', function(event, data){
    $scope.$broadcast('showEditModal', data);
  });

});
