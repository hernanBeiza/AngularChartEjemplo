angular.module('AppController', [])

.controller('AppController', ['$scope', '$routeParams',

	function($scope, $routeParams){
		console.log("appController");  
		$scope.init = function(){
	  		console.log("AppController: init();");
		}
		
	}

]);