(function() {
  'use strict';

  angular
    .module('app.sales')
    .controller('RestaurantsCtrl', RestaurantsCtrl);

  /* @ngInject */
  function RestaurantsCtrl(currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    activate();

    function activate() {
      
    }

  }
})();
