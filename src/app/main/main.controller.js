(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(chartTopper) {
      var data = [5, 10, 15, 20, 25];
      var lineData = [
          {"month": 10, "sales": 20},
          {"month": 20, "sales": 100},
          {"month": 30, "sales": 150},
          {"month": 40, "sales": 121},
          {"month": 50, "sales": 80},
          {"month": 60, "sales": 65},
          {"month": 70, "sales": 48},
          {"month": 80, "sales":55},
          {"month": 90, "sales": 23},
          {"month": 100, "sales": 7}
      ];
      var element = '#d3-test';
      var lineElement = '#d3-line-test';
      var donutElement = '#d3-donut-test';

      chartTopper.buildBarChart(data, element);
      chartTopper.buildLineChart(lineData, lineElement);
      chartTopper.buildDonutChart(data, donutElement);
  }
})();
