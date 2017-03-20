(function() {
  'use strict';

  angular
    .module('app.home')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        abstract: true,
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl as vm'
      })

      // Admin configuration.
      .state('home.clients', {
        url: '/clients',
        views: {
          'tab_clients': {
            templateUrl: 'app/clients/clients.html',
            controller: 'ClientsCtrl as vm'
          }
        }
      })
      .state('home.restaurants', {
        url: '/restaurants',
        views: {
          'tab_restaurants': {
            templateUrl: 'app/restaurants/restaurants.html',
            controller: 'RestaurantsCtrl as vm'
          }
        }
      })

      // Regular user configuration.
      .state('home.memberships', {
        url: '/memberships',
        views: {
          'tab_memberships': {
            templateUrl: 'app/memberships/memberships.html',
            controller: 'MembershipsCtrl as vm'
          }
        }
      })
      .state('home.products', {
        url: '/products',
        views: {
          'tab_products': {
            templateUrl: 'app/products/products.html',
            controller: 'ProductsCtrl as vm'
          }
        }
      })
      .state('home.bonifications', {
        url: '/bonifications',
        views: {
          'tab_bonifications': {
            templateUrl: 'app/bonifications/bonifications.html',
            controller: 'BonificationsCtrl as vm'
          }
        }
      })
      .state('home.sales', {
        url: '/sales',
        views: {
          'tab_sales': {
            templateUrl: 'app/sales/sales.html',
            controller: 'SalesCtrl as vm'
          }
        }
      })
      .state('home.users', {
        url: '/users',
        views: {
          'tab_users': {
            templateUrl: 'app/users/users.html',
            controller: 'UsersCtrl as vm'
          }
        }
      });
  }

})();

