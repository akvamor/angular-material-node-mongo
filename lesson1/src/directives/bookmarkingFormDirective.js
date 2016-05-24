/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
'use strict';
angular.module('epamAngular')
    .directive('bookmarkingFormDirective', function(){
        return {
            templateUrl: 'templates/directives/bookmarkingFormDirective.html',
            restrict: 'E',
            transclude: true,
            scope: {
                bookmarks: '=bookmarks'
            },
            link: function(scope, element, attr){
                scope.bookmark = {};
                scope.save = function(){
                    scope.bookmarks[scope.bookmarks.length] = scope.bookmark;
                    scope.bookmark = {};
                };
            }
        };
    });
})();