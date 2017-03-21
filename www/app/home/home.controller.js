(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  /* @ngInject */
  function HomeCtrl(currentUserService) {

    var vm = this;
    vm.destroyCurrentUser = destroyCurrentUser;

    activate();

    function activate() {
      vm.currentUser = currentUserService.getCurrentUser();
    }

    function destroyCurrentUser() {
      currentUserService.deleteCurrentUser();
      vm.currentUser = {};
    }

  }
})();

