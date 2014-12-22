'use strict';

angular.module('angularCds', [
 /*Angular dependencies*/
            'ngAnimate', 
            'mgcrea.ngStrap',
            'ngRoute',
            'ui',
            'app.directives.timer',
            'app.directives.toggle',
            'toaster',
            'app.directives.resizable',
            'app.service.date',
            'app.service.tasks',
            'app.service.underscore',
            'app.service.projects',
            'app.filters',
            'app.directives.input',
            'app.directives.totalDay',
            'firebase',
            'ui.bootstrap',
    /*Features dependencies*/
            'app.taskBumper',
            'app.cdsCalendar',
            'app.invoice'
  ])
  .config(routing)
  .constant('FireBaseRoot', 'https://dazzling-inferno-3649.firebaseio.com/')
  .constant('DayLength', 86400000);
   

   function routing($routeProvider) {
      $routeProvider.when('/task-bumper/', 
      {
        templateUrl:"app/task-bumper/task-bumper.html",
        controller : "taskBumperCtrl"
      })
        .when('/', {
            templateUrl:"app/cds-calendar/cds-calendar.html",
            controller : "cdsCalendarCtrl"
        })
        .when('/invoice/',
        {
            templateUrl:"app/invoices/invoice.html",
            controller : "invoiceCtrl"
        });
    }
;
