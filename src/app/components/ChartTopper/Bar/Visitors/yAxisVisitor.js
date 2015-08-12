/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular
        .module("ChartTopper")
        .service("yAxisVisitor", yAxisVisitor);

        function yAxisVisitor(){
            return{
                visit: visit
            };

            function visit(element){
                var yAxis = d3.svg.axis()
                    .scale(element.y)
                    .orient("left");

                element.svg.append("g").call(yAxis);
            }
        }


})();