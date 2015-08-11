/**
 * Created by hensleym on 7/30/15.
 */
(function(){
    angular.module("chartTopperDemo")
        .service("barVisitor", barVisitor);

        function barVisitor(){
            var INSIDE_LABEL_OFFSET = 25;
            var OUTSIDE_LABEL_OFFSET = -5;

            return{
                visit: visit
            };

            function calculateYForText(element, d){
                switch (element.dataTextPosition){
                    case('middle'):
                        //This formula adds the y value start of the bar + half the height of the bar
                        return element.y(d.data) + (element.height - element.y(d.data)) / 2;
                        break;
                    case('top'):
                        return element.y(d.data) + INSIDE_LABEL_OFFSET;
                        break;

                    //Default to outside label
                    default:
                        return element.y(d.data) + OUTSIDE_LABEL_OFFSET;

                }

            }

            function visit(element){
                var selector = element.svg
                    .selectAll(".bar")
                    .data(element.data)
                    .enter();

                    selector.append("rect")
                    .attr("class", "bar")
                    .attr("x", function (d) {
                        return element.x(d.label);
                    })
                    .attr("width", element.x.rangeBand())
                    .attr("y", function (d) {
                        return element.y(d.data);
                    })
                    .attr("height", function (d) {
                        return element.height - element.y(d.data);
                    })
                    .attr("fill", element.fillColor);

                    selector.append("text")
                        .attr("x", function (d) {
                            return element.x(d.label) + element.x.rangeBand() / 2;
                        })
                        .attr("class", "bar-text")
                        .attr("y", function (d) {
                            return calculateYForText(element, d);
                        })
                        .attr("text-anchor", "middle")
                        .text(function(d){
                            return d.data;
                        });
            }
        }
})();