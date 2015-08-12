/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module("ChartTopper")
        .service("donutService", donutService);

        function donutService(ArcVisitor, TitleVisitor){

            return{
                createDonut: createDonut
            };

            function createDonut(data, element, height, width, title){
                return new Donut(data, element, height, width, title);
            }

            function Donut(data, element, height, width, title){
                this.data = data;
                this.element = element;
                this.height = height;
                this.width = width;
                this.title = title;
                this.svg = null;

                this.build = function(){

                    this.svg = d3.select(element)
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height);

                    ArcVisitor.visit(this);
                    TitleVisitor.visit(this);
                }

            }
        }
})();