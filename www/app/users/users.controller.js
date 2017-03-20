(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('UsersCtrl', UsersCtrl);

  /* @ngInject */
  function UsersCtrl(currentUserService) {

    var vm = this;
    vm.user = {};
    vm.currentUser = currentUserService.getCurrentUser();
    vm.users = [
      {
        name: 'Miguel Arias',
        identifier: '523459876',
        email: 'marias@example.com',
        phone: '',
        address: ''
      },
      {
        name: 'Lucy Quirós',
        identifier: '102563476',
        email: 'lquiros@example.com',
        phone: '',
        address: ''
      },
      {
        name: 'Foo Bar',
        identifier: '412560659',
        email: 'fbar@example.com',
        phone: '',
        address: ''
      }
    ];

    // Methods.
    vm.saveUser = saveUser;

    activate();

    function activate() {
    }

    function saveUser() {
      var user = {
        name: vm.user.name,
        identifier: vm.user.identifier,
        email: vm.user.email,
        phone: vm.user.phone,
        address: vm.user.address
      }
      vm.users.push(user);
      cleanForm();
    }

    function cleanForm() {
      vm.user = {
        name: '',
        identifier: '',
        email: '',
        phone: '',
        address: ''
      }
    }

  }
})();
