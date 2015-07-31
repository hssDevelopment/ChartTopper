(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(chartTopper) {
      var data = [5, 10, 15, 20, 25];
      var lineData = [
          {"scale": 10, "data": 20},
          {"scale": 20, "data": 100},
          {"scale": 30, "data": 150},
          {"scale": 40, "data": 121},
          {"scale": 50, "data": 80},
          {"scale": 60, "data": 65},
          {"scale": 70, "data": 48},
          {"scale": 80, "data":55},
          {"scale": 90, "data": 23},
          {"scale": 100, "data": 7}
      ];
      var element = '#d3-test';
      var lineElement = '#d3-line-test';
      var donutElement = '#d3-donut-test';

      chartTopper.buildBarChart(data, element);
      chartTopper.buildLineChart(lineData, lineElement);
      chartTopper.buildDonutChart(data, donutElement, 250, 250);
  }
})();
