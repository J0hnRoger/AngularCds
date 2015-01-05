 (function() {
        'use strict';
        angular
            .module('angularCds')
            .controller('componentsCtrl', Ctrl);
    
        function Ctrl($scope) {

            $scope.slides = [ { imageUrl : '../components/exp-slider/libs/demos/assets/fullimage1.jpg', content : '<h2>Mon titre</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel beatae quos eaque saepe eum, placeat enim temporibus. Eius, porro! Sint, magnam doloremque. Nulla velit voluptate sed explicabo repellat, debitis itaque.</p>'},
                   {imageUrl : '../components/exp-slider/libs/demos/assets/fullimage2.jpg', content : '<h2>Mon titre</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel beatae quos eaque saepe eum, placeat enim temporibus. Eius, porro! Sint, magnam doloremque. Nulla velit voluptate sed explicabo repellat, debitis itaque.</p>'},
                   {imageUrl : '../components/exp-slider/libs/demos/assets/fullimage3.jpg', content : '<h2>Mon titre</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel beatae quos eaque saepe eum, placeat enim temporibus. Eius, porro! Sint, magnam doloremque. Nulla velit voluptate sed explicabo repellat, debitis itaque.</p>'}];

            activate();

            $scope.name = "component";
            function activate() {
            }
        }
    })();