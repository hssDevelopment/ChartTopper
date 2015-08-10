(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(chartTopper) {
      var data = [5, 10, 15, 20, 25];

      var lineData = ['45', '55', '62', '35', '45', '71', '78', '65', '41', '93', '81', '87'];
      var element = '#d3-test';
      var lineElement = '#d3-line-test';
      var donutElement = '#d3-donut-test';

      chartTopper.buildBarChart(data, element);
      chartTopper.buildLineChart(lineData, lineElement);
      chartTopper.buildDonutChart(data, donutElement, 250, 250);
  }
})();
