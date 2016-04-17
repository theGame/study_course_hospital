'use strict';

app.controller('DoctorCtrl', function ($scope, $http, getData){

  getData.getDoctorsData().then(function(response){
    $scope.specialists = response.data;
  });


  $scope.removeDoctor = function(id){

    $http.delete('/doctors/'+$scope.specialists[id]._id)
      .success(function(response){
        $scope.specialists.splice(id, 1);
      })
      .error(function(data, status){
        console.log('--- '+data);
      });
  };

  $scope.editDoctor = function(index){
    var obj = $scope.specialists[index];
    $scope.$emit('onDoctorEdit', ['doctor', obj, index]);
  };

});
