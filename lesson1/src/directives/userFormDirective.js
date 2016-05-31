/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
        .directive('userForm', function(){
        return {
            templateUrl : 'templates/user.form.tmpl.html',
            restrict    : 'E',
            replace     : true,
            scope       : {
                accounts    : '=accounts'
            },
            link        : function(scope, element, attr){
                scope.positions = ['Admin', 'Director', 'Manager'];
                scope.account = {};
                scope.addNewAccount = function(){
                    scope.accounts[scope.accounts.length] = scope.account;
                    scope.account = {};
                };
            }
        };
    });
})();