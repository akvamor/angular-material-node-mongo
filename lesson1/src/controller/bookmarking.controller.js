/**
 * Created by Dmytro_Petrov on 5/19/2016.
 */
(function(){
'use strict';

angular.module('epamAngular')

    .controller('BookmarkingController', ['$log', 'bookmarksService',
     function($log, bookmarksService) {
        var vm = this;
        vm.bookmarks = [];
        vm.selectedBookmarks = [];
        vm.selectedBookmark = {};
        vm.query = {
            filter: '',
            limit: 5,
            order: 'title',
            orderDir: 'asc',
            page: 1
        };
        
        var loadData = function(){
            vm.inprogress = bookmarksService.findBy(vm.query);
            vm.inprogress.then(
                function success(response){
                    console.log(response);
                    vm.bookmarks = response.data;
                    vm.query.limit = response.data.limit;
                }, 
                function error(response){
                    alert("Something goes wrong");
                }
            );
        };
        loadData();        
        
        var onSelect = function(record){
            vm.selectedBookmark = record;
        };
        vm.onSelect = onSelect;
        
        vm.savefn = function(){
            var item = vm.selectedBookmark;
            if (item._id !== undefined){
                bookmarksService.put(item)
                    .then(function success(response){
                        console.log(response);
                    },
                    function error(response){
                        console.log(response);
                    });
            } else{
                bookmarksService.post(item)
                    .then(function success(response){
                        console.log('Success added');
                    }, function error(response){
                        vm.errorItem = item;
                    });
            }
        };
        
  
        vm.getdatafn = function(){
            loadData();
        };
        
    }]);
})();