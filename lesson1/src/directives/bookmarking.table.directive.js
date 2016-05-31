/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
    'use strict';
    angular.module('epamAngular')
    .directive('bookmarkingTable', ['$mdDialog', 'bookmarksService',
        function($mdDialog, bookmarksService){
            return {
                restrict    : 'E',
                transclude  : true,
                scope       : {
                    bookmarks: '=bookmarks'
                },
                templateUrl : 'templates/bookmarking.table.tmpl.html',
                link        : function(scope, elem, attr){
                    
                    scope.getData = function(){
                        scope.promise = bookmarksService.findBy(scope.query);
                        scope.promise.then(
                            function success(response){
                                scope.data = response.data;
                                return response.data;
                            }, 
                            function error(response){
                                console.log('Error');
                            }
                        );
                    };
                    
                    var bookmark;
  
                    scope.selected = [];
                    
                    scope.filter = {
                        options: {
                            debounce: 500
                        }
                    };

                    scope.query = {
                        filter: '',
                        limit: '5',
                        order: 'title',
                        page: 1
                    };                    
                    
                    scope.addItem = function (event) {
                        $mdDialog.show({
                            clickOutsideToClose : true,
                            controller          : 'addItemController',
                            controllerAs        : 'ctrl',
                            focusOnOpen         : false,
                            targetEvent         : event,
                            templateUrl         : 'templates/add-item-dialog.html',
                        }).then(scope.getData);
                    };
                    
                    scope.delete = function (event) {
                        $mdDialog.show({
                            clickOutsideToClose : true,
                            controller          : 'deleteController',
                            controllerAs        : 'ctrl',
                            focusOnOpen         : false,
                            targetEvent         : event,
                            locals              : { data: scope.selected },
                            templateUrl         : 'templates/delete-dialog.html',
                        }).then(scope.getData);
                    };
                    
                    scope.removeFilter = function () {
                        scope.filter.show = false;
                        scope.query.filter = '';
                        
                        if(scope.filter.form.$dirty) {
                            scope.filter.form.$setPristine();
                        }
                    };
                    
                    scope.$watch('query.filter', function (newValue, oldValue) {
                        if(!oldValue) {
                            bookmark = scope.query.page;
                        }
                        
                        if(newValue !== oldValue) {
                            scope.query.page = 1;
                        }
                        
                        if(!newValue) {
                            scope.query.page = bookmark;
                        }
                        
                        scope.getData();
                    });
                }
            };
        }
    ]);
})();