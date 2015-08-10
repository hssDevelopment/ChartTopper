/**
 * Created by hensleym on 7/30/15.
 */
(function(){
    angular.module("chartTopperDemo")
        .service("barVisitor", barVisitor);

        function barVisitor(){
            return{
                visit: visit
            };

            function visit(element){
                element.svg.selectAll(".bar")
                    .data(element.data)
                    .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d) {
                        return element.x(d.scale);
                    })
                    .attr("width", element.x.rangeBand())
                    .attr("y", function (d) {
                        return element.y(d.data);
                    })
                    .attr("height", function (d) {
                        return element.height - element.y(d.data);
                    });
            }
        }
})();