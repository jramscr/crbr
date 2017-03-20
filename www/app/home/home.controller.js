(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  /* @ngInject */
  function HomeCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.isCurrentUserAdmin = isCurrentUserAdmin;

    activate();

    function activate() {
    }

    function isCurrentUserAdmin() {
      if(vm.currentUser) {
        return vm.currentUser.isAdmin;
      } else {
        return false;
      }
    }

  }
})();
