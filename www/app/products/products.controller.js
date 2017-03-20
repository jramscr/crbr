(function() {
  'use strict';

  angular
    .module('app.products')
    .controller('ProductsCtrl', ProductsCtrl);

  /* @ngInject */
  function ProductsCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
    }

  }
})();

