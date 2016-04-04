'use strict';

app.controller('PatientsCtrl', function ($rootScope, $scope, $http, $sessionStorage, getData){
  //declaration
  $scope.$storage  = $sessionStorage;

  getData.getUsersData().then(function(response){
    $scope.users = response.data;
  });


  //remove patient
  $scope.removePatient = function(index){
    // add to session in the future
    savePatientInStorage(index);

    //remove user from object
    $scope.users.patients.splice(index, 1);
  };


  //save patient in session storage
  function savePatientInStorage(index){
    $scope.Patient = function(firstName, lastName, problem, date, id){
      this.name = firstName;
      this.surname = lastName;
      this.complaint = problem;
      this.visit_doctor = date;
      this.id = id;
    }
    $sessionStorage.newPatient = new $scope.Patient($scope.users.patients[index].name, $scope.users.patients[index].surname, $scope.users.patients[index].complaint, $scope.users.patients[index].visit_doctor, $scope.users.patients[index].id );
  };

  //listeners
  $scope.$on('passPatient', function(event, data){
    $scope.users.patients.push(data);
  });

  $scope.editPatient = function(index){
    var obj = $scope.users.patients[index];
    $scope.$emit('onPatientEdit', ['patient', obj, index]);
  };


});
