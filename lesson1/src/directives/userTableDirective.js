/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
        .directive('userTableDirective', function(){
            return {
                restrict: 'E',
                transclude: true,
                scope: {
                    accounts: '=accounts'
                },
                templateUrl: 'templates/directives/userTableDirective.html'
            };
        });
})();