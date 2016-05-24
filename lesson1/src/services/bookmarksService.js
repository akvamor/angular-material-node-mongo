(function(){

'use strict';
angular.module('epamAngular')
    .service('bookmarksService', ['$http', function($http){
        var get = function(){
            return $http({
                method: 'GET',
                url: '/api/bookmarks'
            });
        };
        var post = function(data){
            return $http({
                method  : 'POST',
                url     : '/api/bookmarks',
                data    : data
            });  
        };
        var deleteEl = function(id){
            return $http({
                method  : 'DELETE',
                url     : '/api/bookmarks/' + id
            });
        };
        return {
            get     : get,
            post    : post,
            delete  : deleteEl
        };
    }]);
})();