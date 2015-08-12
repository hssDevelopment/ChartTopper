/**
 * Copyright © 2015 Michael Hensley
 */
(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/BarChartDemo/intro.html'
      })
      .state('bar', {
         url:'/bar',
         templateUrl: 'app/BarChartDemo/BarChartDemo.html',
         controller: 'BarChartDemoController',
         controllerAs: 'BarChart'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
