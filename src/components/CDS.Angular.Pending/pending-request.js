(function() {
    'use strict';

    angular
        .module('expertime')
        .controller('sharepoint', sharepoint);

    function sharepoint() {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'sharepoint';

        activate();

        function activate() {
        }
    }
})();