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
    activitiesService.addNew('Первый Обед', 'primary');
    activitiesService.addNew('Второй Обед', 'primary');
    activitiesService.addNew('Первая 10 минутка', 'info');
    activitiesService.addNew('Вторая 10 минутка', 'info');
    activitiesService.addNew('Третья 10 минутка', 'info');
    activitiesService.addNew('Четвертая 10 минутка', 'info');
    activitiesService.addNew('Пожурчать', 'warning');
  }
}());
