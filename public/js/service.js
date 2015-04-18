angular.module('myApp.service',[])

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
