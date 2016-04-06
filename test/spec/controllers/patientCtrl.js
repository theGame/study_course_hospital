'use strict';

describe('Controller: PatientsCtrl', function () {

  // load the controller's module
  beforeEach(module('hospitalJsApp'));

   var PatientsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    PatientsCtrl = $controller('PatientsCtrl', {
      $scope: scope
    });

  }));

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("test", function(){

  });
});
