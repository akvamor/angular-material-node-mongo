/**
 * Created by Dmytro_Petrov on 5/16/2016.
 */

(function(){
    
angular.module('epamAngular')
    .directive('accountGrid', ['$filter', function($filter){
        var prepareGroups = function(scope){
            scope.groups = [];
            scope.groups[0] = [];
            scope.groups[1] = [];
            var records = scope.accounts;
            var filterAccount = $filter('filterAccount');
            records = filterAccount(records, scope.searchText);
            var switcher = true;
            var i = 0;
            for (i; i < records.length; i++){
                if (switcher){
                    scope.groups[0].push(records[i]);
                } else {
                    scope.groups[1].push(records[i]);
                }
                switcher = !switcher;
            }
        };
        
        return {
            restrict    : 'E',
            transclude  : true,
            scope       : {
                accounts    : '=accounts',
                searchText  : '=search'
            },
            templateUrl : 'templates/account.grid.tmpl.html',
            link        : function(scope, element, attr){
                scope.$watch('accounts.length', function(newNames, oldNames){
                    prepareGroups(scope);
                });
                
                scope.$watch('searchText', function(newNames, oldNames){
                    prepareGroups(scope); 
                });
                prepareGroups(scope);
            }
        };
    }]);
})();