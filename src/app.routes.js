angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./components/centered/centered.pug'),
        controller: 'centeredController',
        controllerAs: '$ctrl'
      }).state('component1',
      {
        url: '/component1',
        template: require('./components/component1/component1.pug'),
        controller: 'Component1Controller',
        controllerAs: 'comp1Ctrl'
      }).state('component2',
      {
        url: '/component2',
        template: require('./components/component2/component2.pug'),
        controller: 'Component2Controller',
        controllerAs: 'Component2Controller'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
