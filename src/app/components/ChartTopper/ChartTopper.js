/**
 * Copyright © 2015 Michael Hensley
 */
(function () {
    'use strict';

    angular
        .module('ChartTopper')
        .service('chartTopper', chartTopper);

    /** @ngInject */
    function chartTopper(donutService, lineChartService, barChartService) {

        function buildBarChart(data, element, height, width, padding) {
            return barChartService.createBarChart(data, element, height, width, padding);
        }

        function buildLineChart(data, element, lineChartOption, color){
            return lineChartService.createLineChart(data, element, lineChartOption, color);
        }

        function buildDonutChart (data, element, height, width, title){
            return donutService.createDonut(data, element, height, width, title);
        }

        return {
            buildBarChart: buildBarChart,
            buildLineChart: buildLineChart,
            buildDonutChart: buildDonutChart
        };

    }
})();
