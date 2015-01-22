describe('CDS Calendar', function() {
 
	var scope, $httpBackend, initController;
 
	beforeEach(function() {
		module('angularCds');

		inject(function($injector) {
			var $rootScope, $controller;
			$rootScope = $injector.get('$rootScope');
			$controller = $injector.get('$controller');
			$httpBackend = $injector.get('$httpBackend');
			dateService = $injector.get('dateService');
			tasksService = $injector.get('tasksService');

			scope = $rootScope.$new();
 
			initController = function(opts) {
				$controller('cdsCalendarCtrl', angular.extend({
					$scope: scope
				}, (opts || {})));
			};
		});
	});
 
	afterEach(function() {
		scope.$destroy();
	});
 	
	it('load projects of the current week at the first load', function() {
		// $httpBackend.expectGET('').respond(200);
		initController();
		expect(scope.projects).not.toBeUndefined();
		
		expect(scope.week.length).toBe(7);

	});
 
});