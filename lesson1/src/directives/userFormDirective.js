/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
        .directive('userFormDirective', function(){
        return {
            templateUrl: 'templates/directives/userFormDirective.html',
            restrict: 'E',
            transclude: true,
            scope: {
                accounts: '=accounts'
            },
            link: function(scope, element, attr){
                scope.account = {};
                scope.addNewAccount = function(){
                    console.log(scope.accounts);
                    scope.accounts[scope.accounts.length] = scope.account;
                    scope.account = {};
                };
            }
        };
    });
})();