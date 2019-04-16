angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'centered'
      }).state('component1',
      {
        url: '/component1',
        component: 'component1'
      }).state('component2',
      {
        url: '/component2',
        component: 'component2'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
