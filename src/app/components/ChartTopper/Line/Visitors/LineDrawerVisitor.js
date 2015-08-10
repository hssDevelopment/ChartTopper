/**
 * Created by hensleym on 8/4/15.
 */
(function(){
    'use strict';
    angular.module('chartTopperDemo')
        .service('lineDrawerVisitor', lineDrawerVisitor);

    function lineDrawerVisitor(){

        return{
            visit: visit
        };

        function visit(element){
            var drawLine = d3.svg.line()
                .interpolate('monotone')
                .x(function(d){
                    return element.xScale(d.month);
                })
                .y(function(d){
                    return element.yScale(d.score);
                });

            var drawLineStartValue = d3.svg.line()
                .interpolate('monotone')
                .x(function(d){
                    return element.xScale(d.month);
                })
                .y(function(d){
                    return element.yScale(d.score);
                });

            //Add fade in effect, if present
            if(element.animation && element.animation === 'fade-in'){
                element.svg.append("path")
                    .attr("fill", "none")
                    .attr("stroke", element.fillColor)
                    .attr("stroke-width", 0)
                    .attr("class", "line")
                    .attr("d", drawLineStartValue(element.data))
                    .transition()
                    .ease('linear')
                    .delay(1000)
                    .duration(1000)
                    .attr("d", drawLine(element.data))
                    .attr("stroke-width", 1.5);
                return;
            }

            var path = element.svg.append("path")
                .attr("fill", "none")
                .attr("stroke", element.fillColor)
                .attr("stroke-width", 1.5)
                .attr("d", drawLine(element.data));

            //Add ghost writer effect if present
            if(element.animation && element.animation === 'ghost-writer'){
                var totalLength = path.node().getTotalLength();

                path
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(2000)
                    .ease("linear")
                    .attr("stroke-dashoffset", 0);
            }

        }
    }
})();