angular.module('myApp.service',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	//$scope.contents = response.collection;
	 	console.log(response);
	 })
})
