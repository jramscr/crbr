(function() {
  'use strict';

  angular
    .module('app.clients')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('clients', {
        url: '/clients',
        templateUrl: 'app/clients/clients.html',
        controller: 'ClientsCtrl as vm'
      });

  }

})();
