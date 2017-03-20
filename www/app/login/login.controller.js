(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginCtrl', LoginCtrl);

  /* @ngInject */
  function LoginCtrl($state, $location, currentUserService) {

    var vm = this;

    vm.user = {
      email: '',
      password: '',
      isAdmin: false
    };

    vm.login = login;

    activate();

    function activate() {
    }

    function login() {
      if (vm.user.password == 'password' && vm.user.email == 'admin@example.com') {
        vm.user.isAdmin = true;
        currentUserService.setCurrentUser(vm.user);
        $state.go('home.clients')
      } else {
        if (vm.user.email != 'admin@example.com') {
          currentUserService.setCurrentUser(vm.user);
          $state.go('home.users')
        } else {
          alert('Wrong email or password!');
        }
      }
    }

  }
})();

