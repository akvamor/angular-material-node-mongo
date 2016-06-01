/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
    .directive('bookmarkingTable', [
        function(){
            return {
                restrict    : 'E',
                transclude  : true,
                scope       : {
                    bookmarks: '=',
                    getdatafn: '=',
                    selectedBookmarks: '=',
                    inprogress : '=',
                    query : "="
                },
                templateUrl : 'templates/bookmarking.table.tmpl.html'
            };
        }
    ]);
})();