(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
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
