const angular = require('angular');


angular.module('app-bootstrap').controller('centeredController', [
  function () {
    this.logo = require('./../../assets/wolox_logo.svg');
    this.title = 'Welcome to AngularJS Bootstrap!';
    this.name = 'a AngularJS controller';
  }
]);
