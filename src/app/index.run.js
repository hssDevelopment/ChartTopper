(function() {
  'use strict';

  angular
    .module('chartTopperDemo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
