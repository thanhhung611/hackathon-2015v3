angular.module('myApp.directive',[])
.directive('', function () {
  return {
    restrict: '',
    require: '^ngModel',
    scope: {
      ngModel: '='
    },
    template: '',
  }
});
