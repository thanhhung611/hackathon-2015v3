angular.module('myApp.controller',[])

.controller('StudentCtrl',function($scope,$http){
	 $http.get("/userpost").success(function(response){
	 	$scope.students = response;
	 	console.log($scope.students);
	 })
})



.controller('postCtrl', function($scope,$http){
	console.log('loaded');

	$scope.submit = {};

$scope.addData = function(){
	var config = {headers:  {
        'content-type': 'json'
    }
};
		$http.post('/newevent', $scope.submit, config).success(function(data){
		console.log(data);
	})
};

	
	
})
