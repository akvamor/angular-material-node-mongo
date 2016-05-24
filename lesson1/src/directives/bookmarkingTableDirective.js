/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
    .directive('bookmarkingTableDirective', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                bookmarks: '=bookmarks'
            },
            templateUrl: 'templates/directives/bookmarkingTableDirective.html'
        };
    });
})();