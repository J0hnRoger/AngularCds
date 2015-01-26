(function() {
    'use strict';

    angular
        .module('app.directives')
        .directive('weekRuler', weekRuler);

    function weekRuler (dateService) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            scope: {
                isMonday : '='
            },
            link: link,
            restrict: 'E',
            templateUrl : 'app/directives/week-ruler/app.directive.weekRuler.html'
        };
        return directive;

        function link(scope, element, attrs) {
        	var firstMonday = dateService.getFirstMonday(new Date());
        	var firstNum = firstMonday.getDate();
        	var weeksDays = 28;
        	var monthDays = new Date(firstMonday.getFullYear(), firstMonday.getMonth(), 0).getDate();

        	var days = new Array();
        	for (var i = firstNum; i <= monthDays; i++) {
        		days.push(i);
        	};

        	var j = 1;
        	for (var i = days.length; i < 28; i++) {
        		days.push(j);
        		j++;
        	};
            scope.current = new Date().getDate();
        	scope.days = days;

            scope.setCalendarEvents = function(index, day){
                if (index % 7 != 0)
                    return;
                var clickedMonday = new Date(firstMonday.getFullYear(), firstMonday.getMonth(), day);
                scope.isMonday(clickedMonday);
            };
        }
    }
})();