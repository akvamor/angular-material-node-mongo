/**
 * Created by Dmytro_Petrov on 5/19/2016.
 */
(function(){
'use strict';

angular.module('epamAngular')

    .controller('BookmarkingController', ['$log', 'bookmarksService', function($log, bookmarksService) {
        var vm = this;
        vm.bookmarks = [];
        vm.selectedBookmarks = [];
        
        bookmarksService.get().then(
            function success(response){
                vm.bookmarks = response.data;
            }, 
            function error(response){
                alert("Something goes wrong");
            }
        );
        
        vm.savefn = function(item){
            console.log(item);
            bookmarksService.post(item)
            .then(function success(response){
                console.log('Success added');
            }, function error(response){
                vm.errorItem = item;
            });
        };
        
        vm.query = {
            filter: '',
            limit: '5',
            order: 'title',
            page: 1
        };
        vm.inprogress = {};
        vm.getdatafn = function(){
            console.log("getData");
            vm.inprogress = bookmarksService.findBy(scope.query);
            vm.inprogress.then(
                function success(response){
                    console.log(response);
                    vm.bookmarks = response.data;
                }, 
                function error(response){
                    console.log('Error');
                }
            ); 
        };
    }]);
})();