'use strict';

angular.module('angularCds', [
 /*Angular dependencies*/
            'ngAnimate',
            'ngSanitize',
            'mgcrea.ngStrap',
            'ngRoute',
            'ui',
            'expertime',
            'toaster',
            'firebase',
            'ui.bootstrap',
    /*Features dependencies*/
            'app.services',
            'app.directives',
            'app.filters',
            'app.taskBumper',
            'app.cdsCalendar',
            'app.invoice',
            'app.timer'
  ])
  .config(routing)
  .constant('FireBaseRoot', 'https://dazzling-inferno-3649.firebaseio.com/')
  .constant('DayLength', 86400000);

   function routing($routeProvider) {
      $routeProvider.when('/', 
      {
        templateUrl:"app/timer/timer.html",
        controller : "timerCtrl"
      })
        .when('/calendar/', {
            templateUrl:"app/cds-calendar/cds-calendar.html",
            controller : "cdsCalendarCtrl"
        })
        .when('/invoice/',
        {
            templateUrl:"app/invoices/invoice.html",
            controller : "invoiceCtrl"
        })
        .when('/task-bumper/',
        {
            templateUrl:"app/task-bumper/task-bumper.html",
            controller : "taskBumperCtrl"
        });
    }
;
