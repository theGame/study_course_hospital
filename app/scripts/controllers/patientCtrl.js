'use strict';

app.controller('PatientsCtrl', function ($scope, $http, $sessionStorage){

  $scope.users = [];

  //get patients
  $http({
    methoud : "GET",
    url : "../../json/patients.json"
  }).then(function succesHandler(res){

    $scope.users = res.data;
    console.log(res.data)

  }, function errorsHandler(res){
    console.warn(res);
  });

  $scope.$storage  = $sessionStorage;

  //$sessionStorage.test = "test sesion";

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

  $scope.restorePatient = function(){
    console.log($sessionStorage.newPatient);
    this.users.patients.push($sessionStorage.newPatient);

    //delete from storage
    delete $sessionStorage.newPatient;
  }
});
