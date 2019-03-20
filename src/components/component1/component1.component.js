const angular = require('angular');

angular.module('app-bootstrap').component('component1', {
  template: require('./component1.pug')(),
  controller: [function () {
    this.component1Phrase = 'This is component 1';
  }]
});
