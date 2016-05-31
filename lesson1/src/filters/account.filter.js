/**
 * Created by Dmytro_Petrov on 5/16/2016.
 */
(function(){
    
    'use strict';  
    angular.module('epamAngular')
        .filter('filterAccount', function(){
            return function(items, search){
                if (!search){
                    return items;
                }

                return items.filter(function(element, index, array){
                    var res = false;
                    Object.getOwnPropertyNames(element).every(function(prop, idx, array){
                        if (typeof element[prop] === 'string'){
                            res = element[prop].toLowerCase().indexOf(search.toLowerCase()) > -1;
                            return;
                        }
                    });
                    return res;
                });
            };
        });
})();