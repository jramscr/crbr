(function() {
  'use strict';

  angular
    .module('app.clients')
    .controller('ClientsCtrl', ClientsCtrl);

  /* @ngInject */
  function ClientsCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
      
    }

  }
})();
