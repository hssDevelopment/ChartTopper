/**
 * Copyright © 2015 Michael Hensley
 */
(function () {
    'use strict';

    angular
        .module('chartTopperDemo')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/intro.html'
            })
            .state('bar', {
                url: '/bar',
                templateUrl: 'app/BarChartDemo/BarChartDemo.html',
                controller: 'BarChartDemoController',
                controllerAs: 'BarChart'
            })
            .state('line', {
                url: '/line',
                templateUrl: 'app/LineChartDemo/LineChartDemo.html',
                controller: 'LineChartDemoController',
                controllerAs: 'LineChart'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
