(function() {

    angular
        .module('app.services')
	        .factory('_', factory);

    function factory() {
        return window._;
    }
})();