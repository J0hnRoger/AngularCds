(function() {
    'use strict';

    angular
        .module('expertime', [])
        .directive('expSlider', directive);

    function directive ($timeout, $sanitize) {
        // Usage:
        //	La gallerie prend la taille de la slide la plus grande.
        // Creates:
        var directive = {
            link: link,
            scope : {
            	source : '=',
            	image : '@',
            	content : '@'
            },
            restrict: 'E',
            templateUrl :'../components/exp-slider/exp-slider.html'
        };

        return directive;

        function link(scope, element, attrs) {
        	$timeout(function(){
	    		element.find(".owl-carousel").owlCarousel({
			      navigation : true, // Show next and prev buttons
			      slideSpeed : 300,
			      paginationSpeed : 400,
			      singleItem:true
		   		});
        	});
    	}
        
    }
})();