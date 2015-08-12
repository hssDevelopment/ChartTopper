/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module("ChartTopper")
        .service("xAxisVisitor", xAxisVisitor);

    function xAxisVisitor(){
        return{
            visit: visit
        };

        function visit(element){

            var xAxis = d3.svg.axis()
                .scale(element.x)
                .orient("bottom");

            element.svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + element.height + ")")
                .call(xAxis);
        }

    }
})();