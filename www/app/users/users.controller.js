(function() {
  'use strict';

  angular
    .module('app.users')
    .controller('UsersCtrl', UsersCtrl);

  /* @ngInject */
  function UsersCtrl($scope, $ionicModal, lodash) {

    var vm = this;
    vm.user = {};
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
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deleteUser = deleteUser;
    vm.editUser = editUser;

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

      var foundedUsers = lodash.groupBy(vm.users, function(userInArray){
        return userInArray.identifier;
      });

      if (foundedUsers[user.identifier]) {
        var index = vm.users.indexOf(foundedUsers[user.identifier]);
        vm.users[index] = user;
      } else {
        vm.users.push(user);
      }

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

    function closeModal() {
      vm.modal.remove();
    }

    function showDetails(user) {
      $scope.user = user;
      $ionicModal.fromTemplateUrl('/app/users/user.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deleteUser(user) {
      var index = vm.users.indexOf(user);

      vm.modal.remove();
      vm.users.splice(index, 1);
    }

    function editUser(user) {
      vm.user = user;
    }

  }
})();
