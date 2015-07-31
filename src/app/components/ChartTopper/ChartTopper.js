/**
 * Created by hensleym on 7/8/15.
 */
(function () {
    'use strict';

    angular
        .module('chartTopperDemo')
        .service('chartTopper', chartTopper);

    /** @ngInject */
    function chartTopper($window, donutService, lineChartService) {

        var WIDTH = 250;
        var HEIGHT = 250;
        var PADDING = 2;

        function buildBarChart(data, element) {
            var svg = create(element);
            createBars(svg, data);
            addLabels(svg, data);
        }

        function buildLineChart(data, element){
            var margin = {top: 20, right: 20, bottom: 30, left: 40};
            lineChartService.createLineChart().build(element, 500, 600, margin, data);
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

        function create(element){
            var svg = $window.d3.select(element)
                .append("svg")
                .attr("width", WIDTH)
                .attr("height", HEIGHT);
            return svg;
        }

        function createBars(svg, data){
            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr({
                    x: function (d, i) {
                        return i * (WIDTH / data.length);
                    },
                    y: function (d) {
                        return HEIGHT - (d * 4);
                    },
                    width: WIDTH / data.length - PADDING,
                    height: function (d) {
                        return d * 4;
                    },
                    fill: function (d) {
                        return "rgb(0," + (d * 10) + ", 0)";
                    }
                });
        }

        function addLabels(svg, data){
            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function(d) {return d;})
                .attr({
                    "text-anchor" : "middle",
                    "x": function(d, i){
                        return i * (WIDTH / data.length) + (WIDTH / data.length - PADDING) / 2 ;
                    },
                    "y": function(d) {return HEIGHT - (d * 4) + 15},
                    "font-family": "sans-serif",
                    "font-size": 12,
                    "fill": "#ffffff"
                });
        }

    }
})();
