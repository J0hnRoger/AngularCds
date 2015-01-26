(function() {
    'use strict';

    angular
        .module('app.cdsCalendar', [])
        .controller('cdsCalendarCtrl', cdsCalendarCtrl);

    function cdsCalendarCtrl($scope, dateService, tasksService, projectsService, _, toaster) {
        
        $scope.loading = true;
       
        activate();

        function activate() {

            $scope.projects = projectsService.getProjects();
            
            tasksService.getCurrentWeekTasks()
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

        $scope.setCalendarEvents = function (monday){
            tasksService.getWeekTasks(monday)
                .then(function (week) {
                    $scope.week = week;
                });
        }
    }
})();