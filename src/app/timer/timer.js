(function() {
    'use strict';

    angular
        .module('app.timer', [])
        .controller('timerCtrl', TimerCtrl);

    function TimerCtrl($scope) {

		$scope.time = "00:00";
        var time = [];
        for (var i = 0; i <= 60; i++) {
            time.push(i);
        };
        $scope.options = { time : time }
        

        activate();

        function activate() {
        }
    }
})();