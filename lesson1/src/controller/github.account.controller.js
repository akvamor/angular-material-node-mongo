/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
'use strict';

angular.module('epamAngular')

    .controller('GitHubController', ['githubAccountsService', function(githubAccountsService) {
        var vm = this;
        vm.searchText = '';
        vm.accounts = [];
        console.log('----');
        githubAccountsService.get().then(
            function success(response){
                vm.accounts = response.data;
            },
            function error(response){
                alert("Something goes wrong");
            }
        );
    }]);
})();