/**
 * Created by hensleym on 7/8/15.
 */
(function () {
    'use strict';

    angular
        .module('chartTopperDemo')
        .service('chartTopper', chartTopper);

    /** @ngInject */
    function chartTopper(donutService, lineChartService) {

        function buildBarChart(data, element) {

        }

        function buildLineChart(data, element){
            lineChartService.createLineChart(data, element, true, 'green').animate('ghost-writer').build();
        }

        function buildDonutChart (data, element){
            donutService.createDonut(data, element, 250, 250, 'Donut Title').build();
        }

        var public_api = {
            buildBarChart: buildBarChart,
            buildLineChart: buildLineChart,
            buildDonutChart: buildDonutChart
        };

        return public_api;

    }
})();
