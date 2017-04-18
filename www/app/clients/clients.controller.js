(function() {
  'use strict';

  angular
    .module('app.clients')
    .controller('ClientsCtrl', ClientsCtrl);

  /* @ngInject */
  function ClientsCtrl($scope, $ionicModal, lodash, currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.client = {};
    vm.clients = [
      {
        name: 'John Doe',
        identifier: '523459876',
        email: 'jdoe@example.com',
        phone: '',
        address: ''
      },
      {
        name: 'Juliana Quirós',
        identifier: '102563476',
        email: 'jquiros@example.com',
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
    vm.saveClient = saveClient;
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deleteClient = deleteClient;
    vm.editClient = editClient;

    activate();

    function activate() {
    }

    function saveClient() {
      var client = {
        name: vm.client.name,
        identifier: vm.client.identifier,
        email: vm.client.email,
        phone: vm.client.phone,
        address: vm.client.address
      }

      var foundedClients = lodash.groupBy(vm.clients, function(clientInArray){
        return clientInArray.identifier;
      });

      if (foundedClients[client.identifier]) {
        var index = vm.clients.indexOf(foundedClients[client.identifier]);
        vm.clients[index] = client;
      } else {
        vm.clients.push(client);
      }

      cleanForm();
    }

    function cleanForm() {
      vm.client = {
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

    function showDetails(client) {
      $scope.client = client;
      $ionicModal.fromTemplateUrl('/app/clients/client.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deleteClient(client) {
      var index = vm.clients.indexOf(client);

      vm.modal.remove();
      vm.clients.splice(index, 1);
    }

    function editClient(client) {
      vm.client = client;
      vm.client.identifier = parseInt(client.identifier);
    }

  }
})();
