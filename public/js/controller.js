angular.module('myApp.controller',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	$scope.students = response;
	 	console.log($scope.students);
	 })
})


