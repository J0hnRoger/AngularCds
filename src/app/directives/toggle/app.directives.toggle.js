    'use strict';

    angular
        .module('app.directives')
        .directive('toggle', toggle);

    function toggle () {
        // Usage:
        //	<toggle color="#666666" icon="glyphicon-hdd" value="€" />
        // Creates:
        //
        var directive = {
            scope : {
                task : '=',
                save : '=',
                day : '='
            },
            link: link,
            restrict: 'E',
            transclude : true,
            templateUrl : "app/directives/toggle/toggle.html"
        };
        return directive;

        function link(scope, element, attrs) {
            
            scope.setInvoice = function(){
                scope.task.isInvoiced = !scope.task.isInvoiced;
                scope.save(scope.task, scope.day);
            }
        }
    }
