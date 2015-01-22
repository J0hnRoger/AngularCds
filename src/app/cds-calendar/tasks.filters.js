(function() {
    'use strict';

    angular
        .module('app.cdsCalendar')
        .filter('sumThis', SumThis);

    function SumThis ($filter){
    	return function (array, key) {
	        if (typeof (data) === 'undefined' && typeof (key) === 'undefined')
	            return 0;
	        var sum = 0;
	        angular.forEach(array, function(element){
	        	sum += parseInt(element[key]);
	        });
	        return $filter('friendlyHour')(sum);
    	}
    }

})();