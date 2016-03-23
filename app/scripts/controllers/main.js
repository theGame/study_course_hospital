'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hospitalJsApp
 */
app.controller('MainCtrl', function ($scope) {


  $scope.$on('onPatientEdit', function(event, data){
    $scope.$broadcast('showEditModal', data);
  });

});
