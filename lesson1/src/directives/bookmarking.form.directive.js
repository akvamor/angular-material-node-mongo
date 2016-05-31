/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
'use strict';
angular.module('epamAngular')
    .directive('bookmarkingForm', function(){
        return {
            templateUrl : 'templates/bookmarking.form.tmpl.html',
            restrict    : 'E',
            transclude  : true,
            scope       : {
                bookmarks   : '=bookmarks',
                savefn      : '=savefn'
            },
            link        : function(scope, element, attr){
                scope.bookmark = {};
                scope.save = function(){
                    scope.bookmarks[scope.bookmarks.length] = scope.bookmark;
                    console.log(scope);
                    scope.savefn(scope.bookmark);
                    scope.bookmark = {};
                };
            }
        };
    });
})();