/**
 * Created by hensleym on 7/13/15.
 *
 * Thanks to http://zeroviscosity.com/d3-js-step-by-step/step-2-a-basic-donut-chart
 * for the tutorial on making donut charts.
 *
 */
(function(){
    'use strict';

    angular
        .module('chartTopperDemo')
        .service('donutChart', donutChart);

    function donutChart(svgBuilder, arcBuilder, elementVisitor, donutLabelBuilder) {

        //Create a pie generator
        var pie = d3.layout.pie();

        return{
            build: build,
            create: create
        };

        function build(data, element, height, width) {

            //Create the outer element
            var svg = svgBuilder.build(element, height, width)
                .append("g")
                .attr("transform", "translate(" + Math.min(width, height) / 2
                      + "," + Math.min(width, height) / 2 + ")");

            var visitor = elementVisitor.createVisitor(data, pie, svg);
            var arcWrapper = arcBuilder.createArc(height, width);
            var labelBuilder = donutLabelBuilder.createLabelBuilder(visitor, arcWrapper);

            //Create Data Arcs.
            visitor.enterAndAppend("path")
                .attr("stroke", "white")
                .attr("stroke-width", 0.5)
                .attr("fill", function(d, i) { return arcWrapper.color(i); })
                .attr("d", arcWrapper.arc);

            //Create Text"
            labelBuilder.addDataLabels('center');

            svg.append("text")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .text("Test Text");
        }

        function create(data, element, height, width){

        }

    }
})();