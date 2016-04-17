'use strict';

app.controller('PatientsCtrl', function ($rootScope, $scope, $http, $sessionStorage, getData){
  //declaration
  $scope.$storage  = $sessionStorage;

  //in order to keep data fresh
  var refreshData = function(){
    getData.getUsersData().then(function(response){
      $scope.users = response.data;
    });
  }

  //remove patient
  $scope.removePatient = function(id){
    // add to session in the future
    savePatientInStorage(id);

    $http.delete('/patients/'+$scope.users[id]._id)
      .success(function(response){
        //remove user from object
        $scope.users.splice(id, 1);
      })
      .error(function(data, status){
        console.log('--- '+data);
      });
  };


  //save patient in session storage
  function savePatientInStorage(id){
    $scope.Patient = function(name, surname, complaint, visit_doctor, _id){
      this.name = name;
      this.surname = surname;
      this.complaint = complaint;
      this.visit_doctor = visit_doctor;
      this.id = _id;
    }
    $sessionStorage.newPatient = new $scope.Patient($scope.users[id].name, $scope.users[id].surname, $scope.users[id].complaint, $scope.users[id].visit_doctor );
  };

  //listeners
  $scope.$on('passPatient', function(event, data){
    $http.post('/patients', data).success(function(response){
      refreshData();
    });
  });

  $scope.editPatient = function(index){
    var obj = $scope.users[index];
    $scope.$emit('onPatientEdit', ['patient', obj, index]);
  };

  refreshData();

});
