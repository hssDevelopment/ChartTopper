/**
 * Created by hensleym on 7/30/15.
 */
(function(){
    angular
        .module("chartTopperDemo")
        .service("yAxisVisitor", yAxisVisitor);

        function yAxisVisitor(){
            return{
                visit: visit
            };

            function visit(element){
                var yAxis = d3.svg.axis()
                    .scale(element.y)
                    .orient("left")
                    .ticks(10);

                element.svg.append("g")
                    .attr("class", "y axis")
                    .call(yAxis)
                    .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end");
            }
        }


})();