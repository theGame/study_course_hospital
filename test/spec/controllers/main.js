'use strict';

describe('Controller: MainCtrl', function () {

  var controller, $scope, $rootScope;

  beforeEach(function(){
    module('hospitalJsApp');

    inject(function ($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      controller = $injector.get('$controller')("MainCtrl", {$scope: $scope});
    });

    $scope.$digest();
  });

  describe("Patient listener: first param should be patient", function(){
    $rootScope.$emit("onPatientEdit");
    $scope.$digest();
    expect(data[0]).toEqual('patient');
  });

  describe("Doctor listener: first param should be doctor", function(){
    $rootScope.$emit("onDoctorEdit");
    $scope.$digest();
    expect(data[0]).toEqual('doctor');
  });

});
