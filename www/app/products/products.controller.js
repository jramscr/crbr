(function() {
  'use strict';

  angular
    .module('app.products')
    .controller('ProductsCtrl', ProductsCtrl);

  /* @ngInject */
  function ProductsCtrl($scope, $ionicModal, lodash, currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();
    vm.product = {};
    vm.products = [
      {
        identifier: 1,
        name: 'Pizza Mediana',
        price: '8000',
        description: 'Pizza mediana de diferentes sabores',
      },
      {
        identifier: 2,
        name: 'Hamburguesa 1/4 libra de Res',
        price: '3500',
        description: 'Hamburguesa de res 1/4 libra',
      },
      {
        identifier: 3,
        name: 'Tacos',
        price: '2000',
        description: 'Tacos con vegetales frescos',
      },
      {
        identifier: 4,
        name: 'Burrito extra grande',
        price: '4000',
        description: 'Burrito con 2 carnes y muchos vegetales',
      },
    ];

    // Methods.
    vm.saveProduct = saveProduct;
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deleteProduct = deleteProduct;
    vm.editProduct = editProduct;
    activate();

    function activate() {
    }

    function saveProduct() {
      var product = {
        name: vm.product.name,
        identifier: vm.product.identifier,
        price: vm.product.price,
        description: vm.product.description,
      }

      var foundedUsers = lodash.groupBy(vm.products, function(userInArray){
        return userInArray.identifier;
      });

      if (foundedUsers[product.identifier]) {
        var index = vm.products.indexOf(foundedUsers[product.identifier]);
        vm.products[index] = product;
      } else {
        vm.products.push(product);
      }

      cleanForm();
    }

    function cleanForm() {
      vm.product = {
        name: '',
        identifier: '',
        price: '',
        description: '',
      }
    }

    function closeModal() {
      vm.modal.remove();
    }

    function showDetails(product) {
      $scope.product = product;
      $ionicModal.fromTemplateUrl('/app/products/product.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deleteProduct(product) {
      var index = vm.products.indexOf(product);

      vm.modal.remove();
      vm.products.splice(index, 1);
    }

    function editProduct(product) {
      vm.product = product;
      vm.product.price = parseInt(product.price);
    }

  }
})();

