(function() {
  'use strict';

  angular
    .module('app.memberships')
    .controller('MembershipsCtrl', MembershipsCtrl);

  /* @ngInject */
  function MembershipsCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
      
    }

  }
})();
