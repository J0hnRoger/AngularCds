(function() {

    angular
        .module('app.invoice', [])
        .controller('invoiceCtrl', invoiceCtrl);

    function invoiceCtrl($scope, $firebase, FireBaseRoot,_, dateService, $filter) {

        $scope.date = {isCurrent:true,selectedDate:new Date(), month:0, year:0}; 

		$scope.$watch('date.selectedDate', function(newVal, oldVal){
         	var currDate = new Date(newVal);
         	$scope.date.month = currDate.getMonth() + 1;
         	$scope.date.year = currDate.getFullYear();
			
			var ref = new Firebase(FireBaseRoot);
	  		var projectSync = $firebase(ref.child("invoices")
	  			.child($scope.date.year)
	  			.child($scope.date.month));
	  		$scope.projects = projectSync.$asArray();
		});

		$scope.update = function(updatedProj) {
		    var projectRef = new Firebase(FireBaseRoot + "invoices/" + $scope.date.year +'/' + $scope.date.month + '/' + updatedProj.title);
		    projectRef.update(_.omit(updatedProj, ['$$hashKey', '$id', '$priority']));
		};

		$scope.total = function(propertyName){
			var total = 0;
			angular.forEach($scope.projects, function (project) {
				total += parseFloat(project[propertyName]);
			});
			return Math.round(total *100) /100;
		}

		$scope.totalTasks = function(project){
			var total = 0;
			angular.forEach(project.tasks, function (task) {
				total += parseFloat(task.duration );
			});
			return $filter('invoicedTime')(total);
		}
    }

})();