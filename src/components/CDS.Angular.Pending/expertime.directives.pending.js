(function() {
    'use strict';

    angular
        .module('expertime', [])
        .directive('pending', pending);

    function pending (sharepointService) {
        // Usage:
        //	
        // Creates:
        //
        var directive = {
            scope: {},
            link: link,
            restrict: 'E',
            templateUrl : '../components/CDS.angular.Pending/expertime.directives.pending.html'
        };
        return directive;

        function link(scope, element, attrs) {
            
            console.log("active");
        }
    }
})();