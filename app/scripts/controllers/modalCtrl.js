'use strict';

/**
 * @ngdoc function
 * @name hospitalJsApp.controller:ModalCtrl
 * @description
 * # modalCtrl
 * Controller of the hospitalJsApp
 */
app.controller('modalCtrl', function ($scope, $filter) {

  //receive data
  $scope.$on('showEditModal', function(event, data){
    setData(data);
  });


  function setData(data){

    $scope.user = data[1];
    $scope.index = data[2];
    $scope.userType = data[0];
    if ( $scope.user.patient_id || $scope.user.patient_id === ''){
      $scope.user.patient_id = $filter('cutBracket')($scope.user.patient_id);
    }

    var previousData = function(){
      var test = {
        name: $scope.user.name,
        surename: $scope.user.surname,
        visit_doctor: $scope.user.visit_doctor,
        type: $scope.user.type,
        patient_id: $scope.user.patient_id,
        complaint: $scope.user.complaint
      }

      previousData();

      this.getPreviousData = function(previousData){
        return previousData;
      }
    };
  }
  $scope.disableChanges = function(){
      // var test = setData.getPreviousData();
      console.log('test');
  };
});
