(function() {
  'use strict';

  angular
    .module('app.sales')
    .controller('SalesCtrl', SalesCtrl);

  /* @ngInject */
  function SalesCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
      
    }

  }
})();
