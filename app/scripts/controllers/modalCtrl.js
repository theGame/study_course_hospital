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
    setData(data);
  });


  function setData(data){
    /**var obj = {
      typeUser: data[0],
      firstName: data[1].name,
      lastName: data[1].surname,
      problem: data[1].complaint,
      dateVisit: data[1].visit_doctor,
      occupation: data[1].type,
      patientCare: data[1].patient_id,
      index: data[2]
    }
    $scope.typeUser = obj.typeUser;
    $scope.firstName = obj.firstName;
    $scope.lastName = obj.lastName;
    $scope.problem = obj.problem;
    $scope.dateVisit = obj.dateVisit;
    $scope.occupation = obj.occupation;
    $scope.patientCare = obj.patientCare;
    $scope.index = obj.index;
     **/

    $scope.user = data[1];
  };


  $scope.updateData = function(){
    //up-to-data
    var obj = {};
    obj.firstName = $('#firstName').val(); // $scope.user.firstName
    obj.lastName = $('#lastName').val();
    obj.problem = $('#problem').val();
    obj.dateVisit = $('#dateVisit').val();
    obj.occupation = $('#occupation').val();
    obj.patientCare = $('#patientCare').val();
    $scope.index = $('.index')[0].getAttribute('data-index');

    $scope.$emit('sentBackData', [$scope.index, $scope.typeUser, obj]);

  };
});
