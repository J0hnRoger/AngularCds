(function() {
    'use strict';

    angular
        .module('app.timer')
        .directive('beautifySelect', beautifySelect);

    function beautifySelect ($timeout) {
        // Usage:
        //	<select beautify-select />
        // Creates:
        var directive = {
        	scope : {
        		options : '=',
        		model : '='
        	},
            link: link,
            restrict: 'A',
            templateUrl : 'app/timer/directives.select.html',
            replace : true
        };
        return directive;

        function link(scope, element, attrs) {
        	
        	scope.UpdateSelectedOpt = function (option){
				scope.model = option;
				scope.isActive=false;
        	}
        }
    }
})();