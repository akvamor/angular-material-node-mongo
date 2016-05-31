(function(){

'use strict';
angular.module('epamAngular')
    .service('bookmarksService', ['$http', function($http){
        var get = function(){
            return $http({
                method  : 'GET',
                url     : '/api/bookmarks'
            });
        };
        var findBy = function(query){
            console.log(query);
            return $http({
                method  : 'GET',
                url     : '/api/bookmarks?' + serialize(query)
            });
        };
        var post = function(data){
            console.log(data);
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
        
        var serialize = function(obj) {
            var str = [];
            for(var p in obj){
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            }
            return str.join("&");
        };
        return {
            get     : get,
            post    : post,
            delete  : deleteEl,
            findBy  : findBy
        };
    }]);
})();