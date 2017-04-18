(function() {
  'use strict';

  angular
    .module('app.bonifications')
    .controller('BonificationsCtrl', BonificationsCtrl);

  /* @ngInject */
  function BonificationsCtrl($scope, $ionicModal, lodash, currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.bonification = {};
    vm.bonifications = [
      {
        name: 'Papas fritas',
        type: 'Producto',
        membership: 'Bronce'
      },
      {
        name: 'Descuento 5%',
        type: 'Descuento',
        membership: 'Bronce'
      }
    ];

    // Methods.
    vm.saveBonification = saveBonification;
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deleteBonification = deleteBonification;
    vm.editBonification = editBonification;

    activate();

    function activate() {
    }

    function saveBonification() {
      var bonification = {
        name: vm.bonification.name,
        type: vm.bonification.type,
        membership: vm.bonification.membership,
      }

      var foundedBonifications = lodash.groupBy(vm.bonifications, function(bonusInArray){
        return bonusInArray.name;
      });

      if (foundedBonifications[bonification.identifier]) {
        var index = vm.bonifications.indexOf(foundedBonifications[bonification.identifier]);
        vm.bonifications[index] = bonification;
      } else {
        vm.bonifications.push(bonification);
      }

      cleanForm();
    }

    function cleanForm() {
      vm.bonification = {
        name: '',
        type: '',
        membership: ''
      }
    }

    function closeModal() {
      vm.modal.remove();
    }

    function showDetails(bonification) {
      $scope.bonification = bonification;
      $ionicModal.fromTemplateUrl('/app/bonifications/bonification.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deleteBonification(bonification) {
      var index = vm.bonifications.indexOf(bonification);

      vm.modal.remove();
      vm.bonifications.splice(index, 1);
    }

    function editBonification(bonification) {
      vm.bonification = bonification;
    }

  }
})();
