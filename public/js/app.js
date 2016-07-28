var app = angular.module('policeApp', ['ui.router', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'app/home.html'
      })
      .state('crimes', {
        url: '/crimes',
        controller: 'CrimeCtrl',
        templateUrl: 'app/crimes.html'
      })
      .state('404', {
        url: '/404',
        template: '<h2>404</h2>'
      })
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');
}])

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.state = '';
  $scope.hateType = "G";
  $scope.formSubmit = function() {
    var url = '/api/crimes?';

    // Construct URL
    url = url + '&type=' + $scope.hateType;
    parseInt($scope.age) > 0 ? url = url + '&age=' + $scope.age : false;
    $scope.state.length > 0 ? url = url + '&state=' + $scope.state : false;
    // console.log(url);

    $http.get(url).then(function success(res) {
      $scope.crimes = res.data;
    }, function error(res) {
      console.log(res);
    });
  }
}])



// ng-model="oneAtATime"
