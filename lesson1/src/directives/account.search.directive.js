/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */
(function(){
    
'use strict';
angular.module('epamAngular')
    .directive('accountSearch', function(){
        return {
            templateUrl : 'templates/account.search.tmpl.html',
            restrict    : 'E',
            transclude  : true,
            scope       : {
                searchText  : '=search'
            },
        };
    });
})();