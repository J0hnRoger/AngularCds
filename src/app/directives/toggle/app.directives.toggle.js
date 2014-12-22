    'use strict';

    angular
        .module('app.directives.toggle', [])
        .directive('toggle', toggle);

    function toggle () {
        // Usage:
        //	<toggle color="#666666" icon="glyphicon-hdd" value="€" />
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'E',
            transclude : true,
            templateUrl : "app/directives/toggle/toggle.html"
        };
        return directive;

        function link(scope, element, attrs) {
        	scope.isOn = false;
        }
    }
