/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('chartTopperDemo')
        .controller('DonutChartDemoController', donutChartDemoController);

    function donutChartDemoController(chartTopper, $scope){
        var vm = this;
        var data = [40, 10, 25, 16, 32];

        vm.config = {
            height: 300,
            width: 300,
            title: 'Test Chart'
        };

        chartTopper.buildDonutChart(data, '#donut-chart-demo', vm.config.height, vm.config.width, vm.config.title)
            .build();

        vm.update = function(){
            //I know this is bad form and you should reference selectors in a directive
            //but hey, it's a demo page
            angular.element('#donut-chart-demo').empty();
            chartTopper.buildDonutChart(data, '#donut-chart-demo', vm.config.height, vm.config.width, vm.config.title)
                .build();
        };
    }
})();