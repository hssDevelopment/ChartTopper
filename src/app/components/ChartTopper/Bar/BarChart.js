/**
 * Created by hensleym on 7/27/15.
 *
 */
(function () {
    angular.module('chartTopperDemo')
        .service('barChartService', barChartService);

    function barChartService(yAxisVisitor, xAxisVisitor, barVisitor){

        var DEFAULT_FILL_COLOR = 'steelblue';

        return{
            createBarChart: function(data, element, height, width, margin){
                return new BarChart(data, element, height, width, margin);
            }
        };

        function BarChart(data, element, height, width, margin) {
            this.x = null;
            this.y = null;
            this.animation = null;
            this.data = data;
            this.element = element;
            this.margin = {left: 50 + margin, right: 50 + margin, top: 50 + margin, bottom: 50 + margin};
            this.svg = null;
            this.height = null;
            this.width = null;
            this.fillColor = null;
            this.dataTextPosition = null;

            this.animate = function(animationDef){
                if(this.animation === null){
                    this.animation = animationDef;
                }
                return this;
            };

            this.color = function(color){
                this.fillColor = color;
                return this;
            };

            this.dataPosition = function(position){
                this.dataTextPosition = position;
                return this;
            };

            this.build = function () {
                this.fillColor === null ? this.fillColor = DEFAULT_FILL_COLOR : angular.noop;
                this.width = width - this.margin.left - this.margin.right;
                this.height = height - this.margin.top - this.margin.bottom;
                this.x = d3.scale.ordinal().rangeRoundBands([0, this.width], .3);
                this.y = d3.scale.linear().range([this.height, 0]);

                this.svg = d3.select(element)
                    .append("svg")
                    .attr("width", this.width + this.margin.left + this.margin.right)
                    .attr("height", this.height + this.margin.top + this.margin.bottom)
                    .append("g")
                    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

                this.x.domain(data.map(function (d) {
                    return d.label === null ? '' : d.label;
                }));
                this.y.domain([0, d3.max(data, function (d) {
                    return d.data;
                })]);

                xAxisVisitor.visit(this);
                yAxisVisitor.visit(this);
                barVisitor.visit(this);
            };
        }
    }
})();