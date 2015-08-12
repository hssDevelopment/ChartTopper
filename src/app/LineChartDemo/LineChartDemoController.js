/**
 * Copyright © 2015 Michael Hensley
 */
(function(){
    angular.module('chartTopperDemo')
        .controller('LineChartDemoController', lineChartDemoController);

    function lineChartDemoController(chartTopper, $scope){
        var vm = this;
        var lineData = ['45', '55', '62', '35', '45', '71', '78', '65', '41', '93', '81', '87'];

        vm.config = {
            animation : 'ghost-writer',
            isLine : true
        };

        vm.color = 'steelblue';

        chartTopper.buildLineChart(lineData , '#line-chart-demo', vm.config.isLine, vm.color)
            .animate(vm.config.animation)
            .build();

        vm.update = function(){
            //I know this is bad form and you should reference selectors in a directive
            //but hey, it's a demo page
            angular.element('#line-chart-demo').empty();
            chartTopper.buildLineChart(lineData , '#line-chart-demo', vm.config.isLine, vm.color)
                .animate(vm.config.animation)
                .build();
        };

        $scope.$watch(angular.bind(this, function () {
            return this.config;
        }), function () {
            vm.update();
        }, true);
    }
})();