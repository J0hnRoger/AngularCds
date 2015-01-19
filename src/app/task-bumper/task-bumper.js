(function() {

    angular
        .module('app.taskBumper', [])
        .controller('taskBumperCtrl', taskBumperCtrl);

    function taskBumperCtrl($scope, dateService, tasksService, projectsService) {
        
        $scope.title = 'taskBumperCtrl';
        $scope.projects = [];
    	$scope.start = 0;
        
        activate();

        function activate() {
        	
            $scope.projects = projectsService.getProjects();
            $scope.projects.$loaded().then(function(data){
                data.forEach(function(elem){
                    if (elem.start !== 'undefined' && elem.start > 0){
                        $scope.start = elem.start;
                    }
                });
            });

        	$scope.record = function(project) {

                var now = new Date().getTime();
                
                if (project.isActive){
        			var s = Math.floor((Date.now() - $scope.start) / 1000);
        			var task = {
        				project :  { title : project.title, color : project.color },
        				startDate : now,
        				duration : s
        			};
                    tasksService.add(task);
                    project.isActive = false;
        		}
                else {
                    $scope.projects.forEach(function(elem){
                            if (!elem.isActive)
                                return;
                            var s = Math.floor((Date.now() - $scope.start) / 1000);
                            var task = {
                                project :  { title : elem.title, color : elem.color },
                                startDate : now,
                                duration : s
                            };
                            tasksService.add(task);
                            elem.isActive = false;
                        });

                        project.start = $scope.start;
                        project.isActive = true;
                }
                $scope.start = Date.now();

                var index = projectsService.getIndexOf(project);
        		$scope.projects.$save(index);
        	}
        }
    }
})();