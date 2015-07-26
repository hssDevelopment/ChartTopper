/**
 * Created by hensleym on 7/26/15.
 */
(function () {
    angular.module("chartTopperDemo")
        .service("TitleVisitor", TitleVisitor);

    function TitleVisitor() {

        return{
            visit: visit
        };

        function visit(element) {
            var midPoint = Math.min(element.height, element.width) / 2;
            var g = element.svg.append("g")
                .attr("transform", "translate(" + midPoint
                    + "," + midPoint + ")");

            g.append("text")
                .attr("dy", ".35em")
                .attr("text-anchor", "middle")
                .text(element.title);
        }
    }
})();

