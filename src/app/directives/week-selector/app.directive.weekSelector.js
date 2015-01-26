(function() {
    'use strict';

    angular
        .module('app.directives')
        .directive('weekSelector', directive);

    function directive () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            templateUrl : 'app/directives/week-selector/app.directive.weekSelector.html'
        };
        return directive;

        function link(scope, element, attrs) {
        	
        }
    }
})();