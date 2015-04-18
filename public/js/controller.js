angular.module('myApp.controller',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	$scope.posts = response;
	 	console.log($scope.posts);
	 })
})

.controller('postCtrl', function($http,$scope, reFresh){
	$scope.submit = {};
	console.log(reFresh);

	$scope.addData = function(){
		$http.post('/newevent', $scope.submit).success(function(data){
			console.log(data);

		})
	}
	
})

