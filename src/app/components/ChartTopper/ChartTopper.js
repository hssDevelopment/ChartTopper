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

        function buildDonutChart (data, element){
            donutService.createDonut(data, element, 250, 250, 'Donut Title').build();
        }

        return {
            buildBarChart: buildBarChart,
            buildLineChart: buildLineChart,
            buildDonutChart: buildDonutChart
        };

    }
})();
