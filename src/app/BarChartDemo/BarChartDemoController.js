/**
 * Created by hensleym on 8/10/15.
 */
(function(){
   angular.module('BarChartDemo')
       .controller('BarChartDemoController', barChartDemoController);

   function barChartDemoController(chartTopper, $scope){
       var vm = this;
       vm.labelPlacement = 'top';

        var data =  [{"label": 'MON', "data": 20},
                     {"label": 'TUES',"data": 100},
                     {"label": 'WED', "data": 150},
                     {"label": 'THUR',  "data": 121},
                     {"label": 'FRI', "data": 80},
                     {"label": 'SAT', "data": 65},
                     {"label": 'SUN', "data": 48}];

        vm.config = {
            animation : true,
            labelPlacement : 'middle'
        };
       vm.color = 'steelblue';

        chartTopper.buildBarChart(data , '#bar-chart-demo', 600, 800, 10)
            .animate(vm.config.animation ? 'ghost-writer' : '')
            .color(vm.color)
            .dataPosition(vm.config.labelPlacement)
            .build();

        vm.update = function(){
            //I know this is bad form and you should reference selectors in a directive
            //but hey, it's a demo page
            angular.element('#bar-chart-demo').empty();
            chartTopper.buildBarChart(data , '#bar-chart-demo', 600, 800, 10)
                .animate(vm.config.animation ? 'ghost-writer' : '')
                .color(vm.color)
                .dataPosition(vm.config.labelPlacement)
                .build();
        };

       $scope.$watch(angular.bind(this, function () {
           return this.config;
       }), function () {
           vm.update();
       }, true);
   }
})();