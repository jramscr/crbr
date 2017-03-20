(function() {
  'use strict';

  angular
    .module('app.bonifications')
    .controller('BonificationsCtrl', BonificationsCtrl);

  /* @ngInject */
  function BonificationsCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
      
    }

  }
})();
