(function() {
  'use strict';

  angular
    .module('app.sales')
    .controller('RestaurantsCtrl', RestaurantsCtrl);

  /* @ngInject */
  function RestaurantsCtrl($scope, $ionicModal, lodash, currentUserService) {

    var vm = this;
    vm.currentUser = currentUserService.getCurrentUser();

    vm.restaurant = {};
    vm.restaurants = [
      {
        name: 'Taco Bell Curridabat',
        identifier: '523459876',
        email: 'support@tacobell.com',
        phone: '',
        address: ''
      },
      {
        name: 'Pizza Hut Plaza del Sol',
        identifier: '102563476',
        email: 'support@pizzahut.com',
        phone: '',
        address: ''
      },
      {
        name: 'McDonalds',
        identifier: '412560659',
        email: 'support@macdonalds.com',
        phone: '',
        address: ''
      }
    ];

    // Methods.
    vm.saverestaurant = saverestaurant;
    vm.showDetails = showDetails;
    vm.closeModal = closeModal;
    vm.deleterestaurant = deleterestaurant;
    vm.editrestaurant = editrestaurant;

    activate();

    function activate() {
    }

    function saverestaurant() {
      var restaurant = {
        name: vm.restaurant.name,
        identifier: vm.restaurant.identifier,
        email: vm.restaurant.email,
        phone: vm.restaurant.phone,
        address: vm.restaurant.address
      }

      var foundedrestaurants = lodash.groupBy(vm.restaurants, function(restaurantInArray){
        return restaurantInArray.identifier;
      });

      if (foundedrestaurants[restaurant.identifier]) {
        var index = vm.restaurants.indexOf(foundedrestaurants[restaurant.identifier]);
        vm.restaurants[index] = restaurant;
      } else {
        vm.restaurants.push(restaurant);
      }

      cleanForm();
    }

    function cleanForm() {
      vm.restaurant = {
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

    function showDetails(restaurant) {
      $scope.restaurant = restaurant;
      $ionicModal.fromTemplateUrl('/app/restaurants/restaurant.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal){
        vm.modal = modal;
        vm.modal.show();
      });
    }

    function deleterestaurant(restaurant) {
      var index = vm.restaurants.indexOf(restaurant);

      vm.modal.remove();
      vm.restaurants.splice(index, 1);
    }

    function editrestaurant(restaurant) {
      vm.restaurant = restaurant;
    }

  }
})();
