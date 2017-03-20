(function() {
  'use strict';

  angular
    .module('app.memberships')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('memberships', {
        url: '/merberships',
        templateUrl: 'app/memberships/memberships.html',
        controller: 'MembershipsCtrl as vm'
      });

  }

})();
