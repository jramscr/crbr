(function(){
  'use strict';

  angular
    .module('app.login')
    .factory('currentUserService', currentUserService);

  function currentUserService() {
    var vm = this;
    vm.user = {};

    var service = {
      setCurrentUser: setCurrentUser,
      getCurrentUser: getCurrentUser,
      deleteCurrentUser: deleteCurrentUser
    };

    return service;

    function setCurrentUser(user) {
      vm.user = user;
    }

    function getCurrentUser() {
      return vm.user;
    }

    function deleteCurrentUser() {
      return vm.user = {};
    }
  }

})();

