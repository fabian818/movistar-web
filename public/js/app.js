'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/login', {
    templateUrl: 'partials/login',
    controller: LoginCtrl
  }).
  when('/dashboard', {
    templateUrl: 'partials/dashboard',
    controller: DashboardCtrl
  }).
  when('/altapura', {
    templateUrl: 'partials/altapura',
    controller: AltaPuraCtrl
  }).
  otherwise({
    redirectTo: '/login'
  });
  $locationProvider.html5Mode(true);
}]);