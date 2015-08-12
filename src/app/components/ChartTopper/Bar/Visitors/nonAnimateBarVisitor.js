/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('ChartTopper')
        .service('nonAnimateBarVisitor', nonAnimateBarVisitor);

    function nonAnimateBarVisitor(){
        return{
            visit: visit
        };

        function drawUnAnimatedText(element, selector){

            selector
                .data(element.data)
                .enter()
                .append("text")
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

        function drawUnAnimatedBarChart(element, selector){
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
                .attr("height", function (d) {
                    return element.height - element.y(d.data);
                })
                .attr("y", function (d) {
                    return element.y(d.data);
                });
        }


        function visit(element){
            var selector = element.svg
                .selectAll(".bar");
            drawUnAnimatedBarChart(element, selector);
            drawUnAnimatedText(element, selector);
        }
    }
})();