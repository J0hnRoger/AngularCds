'use strict';

angular
.module('app.directives')
    .directive('timer', timer);

function timer ($interval) {
    
    return {
        restrict: 'E',
        templateUrl: 'app/directives/timer/timer.html',
        link: function (scope, element) {
            var convert = function(second){
                var h = Math.floor(second / 3600);
                var m = Math.floor(second % 3600 / 60);
                var s = Math.floor(second) - h * 3600 - m * 60;
                return witho(h) + ':' + witho(m) + ':' + witho(s);
            };

            var witho = function(n){
                if( n < 10 ){
                    return '0' + n;
                }
                return n;
            };

            var updateTime = function(){
                if(scope.start === 0){
                    scope.time = convert(0);
                } else {
                    scope.time = convert((Date.now() - scope.start) / 1000);
                }
            };
            var interval = $interval(updateTime, 1000);
            updateTime();

            element.on('$destroy', function(){
                $interval.cancel(interval);
            });
        }
    };
}

