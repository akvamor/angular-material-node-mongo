/**
 * Created by Dmytro_Petrov on 5/16/2016.
 */

(function(){
    
angular.module('epamAngular')
    .directive('accountGridDirective', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                records: '=accounts',
                searchText: '=search'
            },
            templateUrl: 'templates/directives/accountGridDirective.html'
        };
    });
})();