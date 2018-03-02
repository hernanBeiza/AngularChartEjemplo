angular.module('IndexController', ["chart.js"])

.controller('IndexController', ['$scope', '$routeParams',

	function($scope, $routeParams,ChartJsProvider){
		//console.log("IndexController");  		
		$scope.init = function(){

	  		console.log("IndexController: init();");
	  		$scope.model.barra= {};
	  		$scope.model.barra.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
			$scope.model.barra.series = ['Series A', 'Series B'];
			$scope.model.barra.data = [
				[65, 59, 80, 81, 56, 55, 40],
				[28, 48, 40, 19, 86, 27, 90]
			];
			console.log($scope.model.barra);

			$scope.model.dona = {}
			$scope.model.dona.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
			$scope.model.dona.data = [300, 500, 100];
			console.log($scope.model.dona);

			$scope.model.pie = {}
			$scope.model.pie.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
			$scope.model.pie.data = [300, 500, 100];
			console.log($scope.model.pie);
		}

		
	}

]);