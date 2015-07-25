/**
 * Created by hensleym on 7/25/15.
 */
(function(){
    angular
        .module('chartTopperDemo')
        .service('donutLabelBuilder', donutLabelBuilder);

    function donutLabelBuilder(){

        return{
            createLabelBuilder: function(visitor, arcWrapper){
                return new LabelBuilder(visitor, arcWrapper);
            }
        };

        function LabelBuilder(visitor, arcWrapper){
            LabelBuilder.prototype.addDataLabels = function(labelPosition){
                buildDataLabels(labelPosition);
            };

            function buildDataLabels(labelPosition) {
                if (labelPosition === 'outside') {
                    createLabels(1.5);
                }

                else {
                    createLabels(1.0);
                }
            }

            function createLabels(transformValue){
                visitor.enterAndAppend("text")
                    .attr("transform", function(d) {
                        var coordinates = arcWrapper.getCenterCoordinates(d);
                        return "translate(" + coordinates[0] * transformValue +"," + coordinates[1] * transformValue + ")"; })
                    .attr("text-anchor", "middle")
                    .text(function(d){
                        return d.value;
                    });
            }
        }
    }
})();