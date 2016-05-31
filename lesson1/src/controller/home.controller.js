/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
'use strict';

angular.module('epamAngular')
    .controller('HomeController', [
        '$rootScope',
        '$log',
        '$state',
        '$timeout',
        '$location',
        'menu',
        '$mdMedia',
        '$mdSidenav',
        
        function ($rootScope, $log, $state, $timeout, $location, menu, $mdMedia, $mdSidenav) {

            var vm = this;
            var section = [];
            $rootScope.$mdMedia = $mdMedia;
            vm.isOpen = isOpen;
            vm.toggleOpen = toggleOpen;
            vm.autoFocusContent = false;
            vm.menu = menu;

            vm.status = {
                isFirstOpen: true,
                isFirstDisabled: false
            };
            function isOpen(section) {
                return menu.isSectionSelected(section);
            }
            function toggleOpen(section) {
                menu.toggleSelectSection(section);
            }
            
            
            //mdSidenav
            
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
            /**
             * Build handler to open/close a SideNav; when animation finishes
             * report completion in console
             */
            function buildDelayedToggler(navID) {
                return debounce(function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                }, 200);
            }
            function buildToggler(navID) {
                return function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                };
            }
        }]); 
    
})();