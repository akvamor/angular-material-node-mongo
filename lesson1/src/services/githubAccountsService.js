/**
 * Created by Dmytro_Petrov on 5/16/2016.
 */
(function(){
    
'use strict';
angular.module('epamAngular')
    .service('githubAccountsService', ['$http', function($http){
        var get = function(){
            return $http({
                method: 'GET',
                url: 'https://api.github.com/users'
            });
        };
        return {
            get: get
        };
    }]);
})();