angular.module('myApp.controller',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	$scope.posts = response;
	 	console.log($scope.posts);
	 })
})


