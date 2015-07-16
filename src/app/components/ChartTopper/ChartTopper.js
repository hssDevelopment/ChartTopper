/**
 * Created by hensleym on 7/8/15.
 */
(function () {
    'use strict';

    angular
        .module('chartTopperDemo')
        .service('chartTopper', chartTopper);

    /** @ngInject */
    function chartTopper($window, donutChart) {

        var WIDTH = 150;
        var HEIGHT = 200;
        var PADDING = 2;

        function buildBarChart(data, element) {
            var svg = create(element);
            createBars(svg, data);
            addLabels(svg, data);
        }

        function buildLineChart(data, element){
            var lineFunction = d3.svg.line()
                .x(function(d) {return d.month * 3; })
                .y(function(d) {return HEIGHT - d.sales; })
                .interpolate("linear");

            var svg = d3.select(element)
                .append("svg")
                .attr({
                    width: WIDTH,
                    height: HEIGHT
                });

            svg.append("path")
                .attr({
                    d: lineFunction(data),
                    "stroke": "purple",
                    "stroke-width": 2,
                    "fill": "none"
                });

            svg.selectAll("text")
                .data(data)
                .enter()
                .append("text")
                .text(function(d){return d.sales})
                .attr({
                    x: function(d){ return d.month * 3 - 25},
                    y: function(d){ return HEIGHT - d.sales},
                    "font-size": "12px",
                    "font-family": "sans-serif",
                    "fill" : "#666666",
                    "text-anchor": "start",
                    "dy": ".35em",
                    "font-weight": "bold"
                })
        }

        function buildDonutChart (data, element){
            donutChart.build(data, element);
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
