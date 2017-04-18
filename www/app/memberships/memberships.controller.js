(function() {
  'use strict';

  angular
    .module('app.memberships')
    .controller('MembershipsCtrl', MembershipsCtrl);

  /* @ngInject */
  function MembershipsCtrl($scope, $ionicModal, lodash, currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.membership = {};
    vm.memberships = [
      {
        name: 'Bronce',
        identifier: '1',
        minimalPoints: '0'
      },
      {
        name: 'Plata',
        identifier: '2',
        minimalPoints: '500'
      },
      {
        name: 'Oro',
        identifier: '3',
        minimalPoints: '1000'
      },
      {
        name: 'Platino',
        identifier: '4',
        minimalPoints: '1500'
      },
      {
        name: 'Diamante',
        identifier: '5',
        minimalPoints: '2000'
      },
    ];

    // Methods.
    vm.savemembership = savemembership;
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deletemembership = deletemembership;
    vm.editmembership = editmembership;

    activate();

    function activate() {
    }

    function savemembership() {
      var membership = {
        name: vm.membership.name,
        identifier: vm.membership.identifier,
        minimalPoints: vm.membership.minimalPoints,
      }

      var foundedmemberships = lodash.groupBy(vm.memberships, function(membershipInArray){
        return membershipInArray.identifier;
      });

      if (foundedmemberships[membership.identifier]) {
        var index = vm.memberships.indexOf(foundedmemberships[membership.identifier]);
        vm.memberships[index] = membership;
      } else {
        vm.memberships.push(membership);
      }

      cleanForm();
    }

    function cleanForm() {
      vm.membership = {
        name: '',
        identifier: '',
        minimalPoints: '',
      }
    }

    function closeModal() {
      vm.modal.remove();
    }

    function showDetails(membership) {
      $scope.membership = membership;
      $ionicModal.fromTemplateUrl('/app/memberships/membership.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deletemembership(membership) {
      var index = vm.memberships.indexOf(membership);

      vm.modal.remove();
      vm.memberships.splice(index, 1);
    }

    function editmembership(membership) {
      vm.membership = membership;
      vm.membership.minimalPoints = parseInt(membership.minimalPoints);
    }

  }
})();
