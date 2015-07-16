/**
 * Created by hensleym on 7/13/15.
 *
 * Thanks to http://zeroviscosity.com/d3-js-step-by-step/step-2-a-basic-donut-chart
 * for the tutorial on making donut charts.
 */
(function(){
    'use strict';

    angular
        .module('chartTopperDemo')
        .service('donutChart', donutChart);

        function donutChart() {

            return{
                build: build
            };

            function build(data, element) {

                //Fit width to parent
                var width = $(element).parent().width(),
                    height = 300,
                    radius = Math.min(width, height) / 2;

                //Create default d3 color scale - will rotate in with d3.ordinal.colors
                var color = d3.scale.category20();

                //Create a pie generator
                var pie = d3.layout.pie();

                //Create the arc inner/outer radius
                var arc = d3.svg.arc()
                    .innerRadius(radius / 2)
                    //How much does this fill the container
                    .outerRadius(radius - 5);

                var outerElement = d3.select(element).append("svg")
                    //Add width
                    .attr("width", width)
                    //add height
                    .attr("height", height);

                    //add pieces to arc
                var svg = outerElement.append("g")
                        //Center the element
                        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                //assemble.
                var path = svg.selectAll("path")
                    .data(pie(data))
                    .enter()
                    .append("path")
                    .attr("stroke", "white")
                    .attr("stroke-width", 0.5)
                    .attr("fill", function(d, i) { return color(i); })
                    .attr("d", arc);

                svg.selectAll("text")
                    .data(pie(data))
                    .enter()
                    .append("text")
                    .attr("transform", function(d) {return "translate(" + arc.centroid(d) + ")"; })
                    .attr("text-anchor", "middle")
                    .text(function(d){
                        return d.value;
                    });


                svg.append("text")
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text("Test Text");


            }
        }
})();