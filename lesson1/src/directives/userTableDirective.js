/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
        .directive('userTable', [function(){
            return {
                restrict    : 'E',
                replace     : true,
                scope       : {
                    accounts    : '=accounts'
                },
                templateUrl : 'templates/user.table.tmpl.html',
                link        : function(scope, element, attr){
                    scope.$watch('accounts.length', function(newNames, oldNames){
                        scope.groups = [];
                        scope.groups[0] = [];
                        scope.groups[1] = [];
                        var records = scope.accounts;
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
                    });
                }
            };
        }]);
})();