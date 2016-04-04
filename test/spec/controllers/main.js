'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('hospitalJsApp'));

  var MainCtrl,
    scope,
    rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope = $inject.get('$rootScope');
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    $scope.$digest();

  }));

  describe('listeners', function(){
      it("check the first alert", function(){
        $rootScope.$broadcast("onPatientEdit");
        $scope.$digest();
        expect(data).toContain(data[0], data[1], data[2]);
      });
  });

});
