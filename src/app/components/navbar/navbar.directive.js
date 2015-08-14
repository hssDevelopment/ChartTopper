/**
 * Copyright © 2015 Michael Hensley
 */
(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
