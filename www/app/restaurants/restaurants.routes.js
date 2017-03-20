(function() {
  'use strict';

  angular
    .module('app.restaurants')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('restaurants', {
        url: '/restaurants',
        templateUrl: 'app/restaurants/restaurants.html',
        controller: 'RestaurantsCtrl as vm'
      });

  }

})();
