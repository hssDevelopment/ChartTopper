/**
 * Copyright © 2015 Michael Hensley
 */
(function () {
    angular.module("ChartTopper")
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

