/**
 * Created by hensleym on 7/30/15.
 */
(function(){
    angular.module("chartTopperDemo")
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