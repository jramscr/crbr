(function() {
  'use strict';

  angular
    .module('app.bonifications')
    .config(routesConfiguration);

  /* @ngInject */
  function routesConfiguration($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('bonifications', {
        url: '/bonifications',
        templateUrl: 'app/bonifications/bonifications.html',
        controller: 'BonificationsCtrl as vm'
      });

  }

})();
