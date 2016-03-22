'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:ModalCtrl
 * @description
 * # modalCtrl
 * Controller of the hospitalJsApp
 */
app.controller('modalCtrl', function ($scope) {
  $scope.showModal = false;
  $scope.toggleModal = function(){
    $scope.showModal = !$scope.showModal;
  };
});
