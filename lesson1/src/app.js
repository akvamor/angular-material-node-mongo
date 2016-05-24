/**
 * Created by Dmytro_Petrov on 5/11/2016.
 */
(function(){
    'use strict';
    angular.module('epamAngular', ['ui.bootstrap', 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){

                $urlRouterProvider.otherwise('/github-accounts');

                $stateProvider
                    .state('github-accounts', {
                        url: '/github-accounts',
                        templateUrl: 'templates/gitHubAccountView.html',
                        controller: 'GitHubController',
                        controllerAs: 'gitHubCtr'
                    })
                    .state('bookamrking',{
                        url: '/bookmarking',
                        templateUrl: 'templates/bookmarkingView.html',
                        controller: 'BookmarkingController',
                        controllerAs: 'bookamrkingCtr'
                    })
                    .state('users', {
                        url: '/users',
                        templateUrl: "templates/userView.html",
                        controller: "UserController",
                        controllerAs: 'userCtr'
                    });
        }]);
})();
