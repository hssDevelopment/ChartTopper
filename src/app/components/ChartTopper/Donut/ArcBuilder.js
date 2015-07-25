/**
 * Created by hensleym on 7/25/15.
 */
(function(){
    angular
        .module("chartTopperDemo")
        .service("arcBuilder", arcBuilderWrapper);

        function arcBuilderWrapper(){

            function ArcBuilder(height, width){
                //Creates radius for the arc
                this.radius = Math.min(width, height) / 2;

                //Create default d3 color scale - will rotate in with d3.ordinal.colors
                this.color = d3.scale.category20();

                //Creates a new d3 arc generator
                this.arc = d3.svg.arc()
                    .innerRadius(this.radius / 2)
                    .outerRadius(this.radius);
            }

            //Returns x and y arc coordinates
            ArcBuilder.prototype.getCenterCoordinates = function(d){
                return this.arc.centroid(d);
            };

            return{
                createArc: function(height, width){
                    return new ArcBuilder(height, width);
                }
            };
        }
})();