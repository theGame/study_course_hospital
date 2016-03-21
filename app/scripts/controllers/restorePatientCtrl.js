'use strict';

app.controller('restorePatientCtrl', function ($rootScope, $scope, $sessionStorage){

  $scope.$storage  = $sessionStorage;

  $scope.restorePatient = function(){

    $rootScope.$broadcast('passPatient', $sessionStorage.newPatient);

    //delete from storage
    delete $sessionStorage.newPatient;
  }

});
