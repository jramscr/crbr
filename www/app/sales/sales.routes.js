(function() {
  'use strict';

  angular
    .module('app.sales')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('sales', {
        url: '/sales',
        templateUrl: 'app/sales/sales.html',
        controller: 'SalesCtrl as vm'
      });

  }

})();
