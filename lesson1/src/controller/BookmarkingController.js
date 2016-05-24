/**
 * Created by Dmytro_Petrov on 5/19/2016.
 */
(function(){
'use strict';

angular.module('epamAngular')

    .controller('BookmarkingController', ['$log', 'bookmarksService', function($log, bookmarksService) {
        var vm = this;
        vm.bookmarks = [];
        bookmarksService.get().then(
            function success(response){
                vm.bookmarks = response.data;
            }, 
            function error(response){
                alert("Something goes wrong");
            }
        );
        vm.totalItems = 64;
        vm.currentPage = 1;
        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function() {
            $log.log('Page changed to: ' + vm.currentPage);
        };
    }]);
})();