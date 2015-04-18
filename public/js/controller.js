angular.module('myApp.controller',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	$scope.contents = response;
	 	console.log(response);
	 })
})

.controller('postCtrl', function($scope){
	$scope.submit = {};
	console.log($scope.submit);
	
})