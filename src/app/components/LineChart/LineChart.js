/**
 * Created by hensleym on 7/27/15.
 *
 */
(function () {
    angular.module('chartTopperDemo')
        .service('lineChartService', lineChartService);

    function lineChartService(yAxisVisitor, xAxisVisitor, barVisitor){

        return{
            createLineChart: function(){
                return new LineChart();
            }
        };

        function LineChart() {
            this.x = null;
            this.y = null;
            this.data = null;
            this.data = null;
            this.svg = null;
            this.margin = null;
            this.height = null;
            this.width = null;

            this.build = function (element, height, width, margin, data) {
                this.data = data;
                this.element = element;
                this.margin = margin;
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
                    return d.scale;
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