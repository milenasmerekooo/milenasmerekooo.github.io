(function(){
  'use strict';

  angular
    .module('workTimeTracker', [
      'ui.bootstrap',
      'dyFlipClock',
      'ngRoute',
      'ngAnimate',

      'workTimeTracker.components.main',
      'workTimeTracker.components.settings',
      'workTimeTracker.components.statistics',
      'workTimeTracker.directives.navigation'
    ])
    .config(workTimeTrackerConfig)
    .run(workTimeTrackerRun);

  workTimeTrackerConfig.$inject = ['$routeProvider'];
  function workTimeTrackerConfig($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }

  workTimeTrackerRun.$inject = ['activitiesService'];
  function workTimeTrackerRun (activitiesService) {
    activitiesService.addNew('Работа', 'default');
    activitiesService.addNew('Обед', 'primary');
    activitiesService.addNew('10 минутка', 'info');
  }
}());
