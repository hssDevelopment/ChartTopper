/**
 * Created by hensleym on 7/26/15.
 */
(function () {
    angular.module("chartTopperDemo")
        .service("ArcVisitor", ArcVisitor);

    function ArcVisitor() {

        return{
            visit: visit
        };

        function visit(element) {
            var colorGenerator = d3.scale.category20();
            var radius = Math.min(element.width, element.height) / 2;
            var arc = d3.svg.arc()
                .innerRadius(radius / 2)
                .outerRadius(radius);
            var pieGenerator = d3.layout.pie();
            var midPoint = Math.min(element.height, element.width) / 2;

            //Used to animate the rings using the D3 interpolator:
            //http://javascript.tutorialhorizon.com/2015/03/05/creating-an-animated-ring-or-pie-chart-in-d3js/

            function angleCalculator(finish) {
                var start = {
                    startAngle: 0,
                    endAngle: 0
                };
                var i = d3.interpolate(start, finish);
                return function(d) { return arc(i(d)); };
            }

            //Create the Arc and Fill Colors
            var g = element.svg.append("g")
                .attr("transform", "translate(" + midPoint
                    + "," + midPoint + ")");

            g.selectAll("path")
                .data(pieGenerator(element.data))
                .enter()
                .append("path")
                .attr("stroke", "white")
                .attr("stroke-width", 0.5)
                .attr("fill", function (d, i) {
                    return colorGenerator(i);
                })
                .transition()
                .duration(1000)
                .delay(1000)
                .attrTween('d', angleCalculator);

            //Create the Text for the graph
            g.selectAll("text")
                .data(pieGenerator(element.data))
                .enter()
                .append("text")
                .attr("transform", function (d) {
                    var coordinates = arc.centroid(d);
                    return "translate(" + coordinates[0] + "," + coordinates[1] + ")";
                })
                .transition()
                .delay(2100)
                .attr("text-anchor", "middle")
                .text(function (d) {
                    return d.value;
                });
        }
    }
})();

