/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */
(function(){
    
'use strict';
angular.module('epamAngular')
    .directive('accountSearchDirective', function(){
        return {
            templateUrl: 'templates/directives/accountSearchDirective.html',
            restrict: 'E',
            transclude: true,
            scope: {
                searchText: '=search'
            },
        };
    });
})();