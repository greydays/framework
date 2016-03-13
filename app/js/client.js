'use strict';

require('angular/angular');
require('angular-route');

var application = angular.module('application', ['ngRoute']);

require('.controllers/appController')(app);

require('./directives/appDirectives')(app);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/items', {
      templateUrl: 'templates/items.html',
      controller: 'appController'
    })
    .when('/', {
      templateUrl: 'templates/items.html',
      controller: 'appController'
    });
}]);
