/**
 * Created by hensleym on 8/1/15.
 */
(function(){
    angular.module("chartTopperDemo")
        .service("lineChartService", lineChartService);

    function lineChartService(lineDrawerVisitor, circleDrawerVisitor, axisDrawerVisitor){

        var DEFAULT_FILL_COLOR = 'steelblue';
        var monthDataDefaults = [
            {"month":"1", "monthText": "Jan"},
            {"month":"2", "monthText": "Feb"},
            {"month":"3", "monthText": "Mar"},
            {"month":"4", "monthText": "Apr"},
            {"month":"5", "monthText": "May"},
            {"month":"6", "monthText": "Jun"},
            {"month":"7", "monthText": "Jul"},
            {"month":"8", "monthText": "Aug"},
            {"month":"9", "monthText": "Sep"},
            {"month":"10", "monthText": "Oct"},
            {"month":"11", "monthText": "Nov"},
            {"month":"12", "monthText": "Dec"}
        ];

        return{
            createLineChart: createLineChart
        };

        function createLineChart(data, element, lineChartOption, fillColor){
            return new LineChart(data, element, lineChartOption, fillColor);
        }

        function LineChart(data, element, lineChartOption, fillColor){
            this.lineChart = lineChartOption;
            this.element = element;
            this.data = data;
            this.xScale = null;
            this.yScale = null;
            this.svg = null;
            this.fillColor = fillColor === null? DEFAULT_FILL_COLOR : fillColor;
            this.height = 575;
            this.width = 575;

            this.animate = function(animation){
                //To prevent animations from being triggered twice
                if(this.animation === undefined){
                    this.animation = animation;
                }
                return this;
            };

            this.build = function(){
                _.each(this.data, function(value, index){
                    var scoreEntry = {"score": value};
                    _.extend(monthDataDefaults[index], scoreEntry);
                });

                this.data = monthDataDefaults;
                this.xScale = d3.scale.linear().domain([1, 13]).range([20, this.width - 45]);
                this.yScale = d3.scale.linear().domain([0, 100]).range([this.height - 35, 20]);
                this.svg = d3.select(this.element).append("svg").attr("width", this.width).attr("height", this.height);

                axisDrawerVisitor.visit(this);
                circleDrawerVisitor.visit(this);

                if(this.lineChart){
                    lineDrawerVisitor.visit(this);
                }
            }
        }
    }

})();