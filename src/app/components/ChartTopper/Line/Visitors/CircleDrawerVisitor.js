/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('ChartTopper')
        .service('circleDrawerVisitor', circleDrawerVisitor);

    function circleDrawerVisitor(){
        return{
            visit: visit
        };

        function visit(element){
            element.svg.append("g")
                .selectAll("circle.median")
                .data(element.data)
                .enter()
                .append("circle")
                .attr("r", 4)
                .attr("cx", function(d) {return element.xScale(d.month)})
                .attr("cy", function(d) {return element.yScale(d.score)})
                .style("fill", element.fillColor)
                .append("text")
                .text("test text")
                .attr("text-anchor", "top");
        }
    }


})();