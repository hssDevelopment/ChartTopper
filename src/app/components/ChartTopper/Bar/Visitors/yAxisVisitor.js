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
                    .orient("left");

                element.svg.append("g").call(yAxis);
            }
        }


})();