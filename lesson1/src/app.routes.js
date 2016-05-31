/**
 * Created by Dmytro_Petrov on 5/11/2016.
 */
(function(){
    'use strict';
    angular.module('epamAngular', ['ui.router', 'ngMaterial', 'md.data.table'])
        .config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider){

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('home', {
                        url     : '/',
                        views   : {
                            '@' : {
                                templateUrl: 'views/home.view.html',
                                controller: 'HomeController as vm'
                            }
                        }
                    })
                    .state('home.github-accounts', {
                        url         : 'github-accounts/',
                        views       : {
                            'content@home':{
                                templateUrl : 'views/github.account.view.html',
                                controller  : 'GitHubController as gitHubCtr'
                            }
                        }
                    })
                    .state('home.bookamrking',{
                        url         : 'bookmarking/',
                        views       : {
                            'content@home': {
                                templateUrl : 'views/bookmarking.view.html',
                                controller  : 'BookmarkingController as bookamrkingCtr'
                            }
                        }
                    })
                    .state('home.users', {
                        url         : 'users/'
                    })
                    .state('home.users.profiles', {
                        url         : 'profiles',
                        views       : {
                            'content@home' :{
                                templateUrl : "views/user.view.html",
                                controller  : "UserController as userCtr"
                            }
                        }
                    })
                    .state('home.users.orders', {
                        url         : 'users/:user_id/orders',
                        templateUrl : "templates/orders.html",
                        controller  : "OrderController",
                        controllerAs: 'orderCtr',
                        viewOptions :    {
                            title       : 'Customer Manager',
                            type        : 'link'
                        }
                    })
                    .state('home.users.orders.all', {
                        url         : '/users/orders',
                        templateUrl : "templates/orders.all.html",
                        controller  : "OrderController",
                        controllerAs: 'orderCtr',
                        viewOptions :    {
                            title       : 'Customer Manager',
                            type        : 'link'
                        }
                    });
            }])
        .config(['$mdIconProvider', function($mdIconProvider){
            $mdIconProvider
                .icon('people', 'material-design-icons/social/svg/production/ic_people_24px.svg', 24)
                .icon('account_circle', 'material-design-icons/action/svg/production/ic_account_circle_24px.svg', 24)
                .icon('label', 'material-design-icons/action/svg/production/ic_label_24px.svg', 24)
                .icon('menu', 'material-design-icons/image/svg/production/ic_dehaze_24px.svg', 24)
                .icon('add', 'material-design-icons/content/svg/production/ic_add_24px.svg', 24)
                .icon('search', 'material-design-icons/action/svg/production/ic_search_24px.svg', 24)
                .icon('save', 'material-design-icons/content/svg/production/ic_save_24px.svg', 24)
                .icon('link', 'material-design-icons/content/svg/production/ic_link_24px.svg', 24)
                .icon('clear', 'material-design-icons/content/svg/production/ic_clear_24px.svg', 24);
                
        }])
         //take all whitespace out of string
        .filter('nospace', function () {
            return function (value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        //replace uppercase to regular case
        .filter('humanizeDoc', function () {
            return function (doc) {
                if (!doc) return;
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, function ($1) {
                        return '-' + $1.toLowerCase();
                    });
                }

                return doc.label || doc.name;
            };
        });
})();
