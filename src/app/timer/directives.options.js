(function() {
    'use strict';

    angular
        .module('app.timer')
        .directive('optionalize', optionalizer);

    function optionalizer ($timeout) {
        // Usage:
        //	<div optionalize>
    	// 		options : <input type='text'/> ... 
        //  </div>
        // Need animate.css to work : 
        // Creates:
        // 
        var directive = {
        	transclude : true,
        	scope:{},
            link: link,
            restrict: 'A',
            templateUrl : 'app/timer/directives.options.html'
        };
        return directive;

        function link(scope, element, attrs) {
        	scope.visible = false;
    		var container = element.parent().css("position","relative");
    		
        }
    }
})();