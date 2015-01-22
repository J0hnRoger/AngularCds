describe('TaskBumper controller', function() {
 
	var scope, $httpBackend, initController;
 
	beforeEach(function() {
		module('angularCds');
		inject(function ($rootScope, $controller, dateService, tasksService, projectsService) {
            scope = $rootScope.$new();

            $controller("taskBumperCtrl", {
                $scope: scope,
            });
        });
	});
 
	afterEach(function() {
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
		scope.$destroy();
	});
 
	it('should pass', function() {
	});
});