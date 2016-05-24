(function(){
    'use strict';
    angular.module('epamAngular')
        .directive('navigationDirective', ['$location', '$rootScope', function($location, $rootScope){
            
            var resetNavigation = function(scope){
                scope.bookamrking = '';
                scope.users = '';
                scope.github_accounts = '';
            };
            
            var decideActive = function(scope){
                if ($location.path() === '/bookmarking'){
                    scope.bookamrking = 'active';
                } else if ($location.path() === '/users'){
                    scope.users = 'active';
                } else if ($location.path() === '/github-accounts'){
                    scope.github_accounts = 'active';
                }
            };
            
            return {
                templateUrl: 'templates/directives/navigationDirective.html',
                restrict: 'E',
                transclude: true,
                link: function(scope, element, attr){
                    decideActive(scope);
                    $rootScope.$on('$locationChangeSuccess',function(event){
                        resetNavigation(scope);
                        decideActive(scope);
                    });
                }
            };
        }]);
})();