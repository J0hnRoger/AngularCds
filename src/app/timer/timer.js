(function() {
    'use strict';

    angular
        .module('app.timer', [])
        .controller('timerCtrl', TimerCtrl);

    function TimerCtrl($scope, $interval) {

		$scope.minutes = "00:00";
        $scope.option = "";
        var interval;

        var minutes = [];
        for (var i = 0; i < 60;i++) {
            minutes.push(i);
        };

        var seconds = []
        for (var i = 0; i < 60; i = i + 5) {
            seconds.push(i);
        };

        $scope.startTimer = function(){
            
            if ($scope.started)
            {
                interval = $interval(function(){
                    $scope.options.selSecond--;
                    if ($scope.options.selSecond % 60 == 0)
                    {   
                        if ($scope.options.selMinute == 0)
                            //$interval.cancel(this);
                        $scope.options.selMinute--;
                        $scope.options.selSecond = 59;
                    }
                },1000);

          }else{
            $interval.cancel(interval);
          }
        }

        $scope.options = { minutes : minutes, seconds : seconds, selSecond : 0, selMinutes : 0}

        activate();

        function activate() {
           
        }
    }
})();