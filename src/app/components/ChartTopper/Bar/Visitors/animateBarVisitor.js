/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('ChartTopper')
        .service('animateBarVisitor', animateBarVisitor);

    function animateBarVisitor(){
        return{
            visit: visit
        };

        function drawAnimatedBarChart(element, selector){
            selector
                .data(element.data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return element.x(d.label);
                })
                .attr("width", element.x.rangeBand())
                .attr("fill", element.fillColor)
                .attr("height", 0)
                .attr("y", function (d) {
                    return element.y(d.data) + (element.height - element.y(d.data));
                })
                .transition()
                .duration(1000)
                .attr("height", function (d) {
                    return element.height - element.y(d.data);
                })
                .attr("y", function (d) {
                    return element.y(d.data);
                });
        }


        function drawAnimatedText(element, selector){
            selector
                .data(element.data)
                .enter()
                .append("text")
                .transition()
                .delay(1200)
                .attr("x", function (d) {
                    return element.x(d.label) + element.x.rangeBand() / 2;
                })
                .attr("class", "bar-text")
                .attr("y", function (d) {
                    return element.calculateYForText(element, d);
                })
                .attr("text-anchor", "middle")
                .text(function(d){
                    return d.data;
                });
        }

        function visit(element){
            var selector = element.svg
                .selectAll(".bar");
            drawAnimatedBarChart(element, selector);
            drawAnimatedText(element, selector);
        }

    }

})();