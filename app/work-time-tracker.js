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
    activitiesService.addNew('Работа', 'success');
    activitiesService.addNew('Пожурчать', 'warning');
    activitiesService.addNew('1 Обед', 'primary');
    activitiesService.addNew('2 Обед', 'primary');
    activitiesService.addNew('1 10 минутка', 'info');
    activitiesService.addNew('2 10 минутка', 'info');
    activitiesService.addNew('3 10 минутка', 'info');
    activitiesService.addNew('4 10 минутка', 'info');
  }
}());
