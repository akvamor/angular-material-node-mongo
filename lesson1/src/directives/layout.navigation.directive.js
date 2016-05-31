(function(){
    'use strict';
    angular.module('epamAngular')
        .directive('layoutNavigationDirective', ['$timeout', '$mdSidenav', '$log',
            function ($timeout, $mdSidenav, $log){
                return {
                    templateUrl : 'templates/layoutNavigationDirective.html',
                    restrict    : 'E',
                    transclude  : true,
                    replace     : true,
                    controller  : 'HomeController',
                    link        : function(scope, element, attr){
                        
                        var vm = scope;
                        vm.toggleLeft = buildDelayedToggler('left');
                    
                        /**
                         * Supplies a function that will continue to operate until the
                         * time is up.
                         */
                        function debounce(func, wait, context) {
                            var timer;
                            return function debounced() {
                                var context = vm,
                                    args = Array.prototype.slice.call(arguments);
                                $timeout.cancel(timer);
                                timer = $timeout(function() {
                                timer = undefined;
                                func.apply(context, args);
                                }, wait || 10);
                            };
                        }
                        function buildDelayedToggler(navID) {
                            return debounce(function() {
                                $mdSidenav(navID)
                                    .toggle()
                                    .then(function () {
                                        $log.debug("toggle " + navID + " is done");
                                    });
                                }, 200);
                        }
                        function buildToggler(navID) {
                            return function() {
                                $mdSidenav(navID)
                                    .toggle()
                                    .then(function () {
                                        $log.debug("toggle " + navID + " is done");
                                    });
                                };
                        }                     
                    }
                };
        }]);
})();