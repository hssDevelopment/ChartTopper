/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('ChartTopper')
        .service('axisDrawerVisitor', AxisDrawerVisitor);

    var scoreRange = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    function AxisDrawerVisitor(){
        return{
            visit: visit
        };

        function visit(element){
            var yAxis = d3.svg.axis()
                .scale(element.yScale)
                .orient("right")
                .tickValues(scoreRange)
                .tickSize(-element.height + 65);

            var xAxis = d3.svg.axis()
                .scale(element.xScale)
                .orient("bottom")
                .tickSize(-element.width + 55)
                .tickFormat(function(d){
                    var month = element.data[d - 1];

                    if(month){
                        return month.monthText;
                    }

                    else{
                        return '';
                    }
                });

            element.svg.append("g")
                .attr("id", "xAxisG")
                .attr("transform", "translate(0, 540)")
                .call(xAxis);

            element.svg.append("g")
                .attr("id", "yAxisG")
                .attr("transform", "translate(530, 0)")
                .call(yAxis);
        }
    }

})();