(function() {
    'use strict';

    angular
        .module('app.cdsCalendar', [])
        .controller('cdsCalendarCtrl', cdsCalendarCtrl);

    /* @ngInject */
    function cdsCalendarCtrl($scope, dateService, tasksService, projectsService, $firebase, FireBaseRoot, _ , toaster) {
        
        $scope.loading = true;
       
        activate();

        function activate() {

            var projects = [];
            $scope.projects = projectsService.getProjects();

            var monday = dateService.getMonday(new Date());
            tasksService.getWeeksTasks(monday)
                .then(function (week) {
                    $scope.week = week;
                });
        }

        $scope.save = function (task, day ) {
          var taskRef = tasksService.getTask(task.$id);
          task.project = _.omit(task.project, ['$$hashKey', '$id', '$priority'])
          taskRef.$set(_.omit(task, ['$$hashKey', '$id', '$priority']))
          .then(function () {
          }).then(function () {
            toaster.pop('success', "Yeah", "Tâche sauvegardée");
          }, function (err) {
            toaster.pop('error', "Oh no..", err);
          });

          if (task.isInvoiced)
            tasksService.setInvoicedTask(task);
          else
            tasksService.resetInvoicedTask(task);
        };

        $scope.remove = function (task, day) {
            day.tasks.$remove(task)
                .then(function(){
                toaster.pop("error", "Bim!", "tache supprimée")
            });
        }

        $scope.add = function(day) {
            var lastTask = _.last(day.tasks);
            //If it's the first task of the day, day.tasks is undefined, so take the day.startDate, else, set the startDate after the last element. 
            var startDate = (lastTask === undefined) 
                    ? day.startDate
                    : lastTask.startDate + parseInt(lastTask.duration) * 1000;

            var defaultTask = { 
                    duration : 3600,
                    startDate : startDate,
                    project : { title : "Default", color : "grey"}
            };

            tasksService.add(defaultTask, function(ref){
                toaster.pop('success', 'Owh, nice', "Tâche créée");
            });
        }

        $scope.getTotal = function (day) {
            var timeSpent = 0; 
            angular.forEach(day.tasks, function(task){
                timeSpent += task.duration;
            })
            return timeSpent;
        }
    }
})();