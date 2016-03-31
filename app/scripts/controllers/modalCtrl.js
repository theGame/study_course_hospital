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

    $scope.oldData($scope.user);
  }

  $scope.oldData = function(user){
    var oldUser = {
      name: $scope.user.name,
      surname: $scope.user.surname,
      visit_doctor: $scope.user.visit_doctor,
      type: $scope.user.type,
      patient_id: $scope.user.patient_id,
      complaint: $scope.user.complaint
    }

    this.getOldData = function(){
      return oldUser;
    }
  }

  $scope.disableChanges = function(){
    //( this.userType === 'patient') ? disablePatientChanges() : disableDoctorChanges();

    if ( this.userType === 'patient'){
      this.user.name = this.getOldData().name;
      this.user.complaint = this.getOldData().complaint;
      this.user.visit_doctor = this.getOldData().visit_doctor;
      this.user.surname = this.getOldData().surname;
    }else{
      this.user.name = this.getOldData().name;
      this.user.surname = this.getOldData().surname;
      this.user.type = this.getOldData().type;
      this.user.patient_id = this.getOldData().patient_id;
    }
  };

});
