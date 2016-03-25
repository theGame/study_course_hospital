app.directive('modalWindow', function () {
  return {
    templateUrl: '../../views/modal.html',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {

    }
  };
});
