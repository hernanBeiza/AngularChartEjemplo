var app = angular.module('Graficos', [
    'ngRoute',
    'AppController','IndexController'
]);
app.config(['$routeProvider','ChartJsProvider',
  function($routeProvider,ChartJsProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/indexView.html',
        //controller: 'IndexController'
      }).
      otherwise({
        redirectTo: '/'
      });

    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
  }
])
.run(function($rootScope){
  console.log("app.js run");
  //Modelo
  $rootScope.model = {};
});