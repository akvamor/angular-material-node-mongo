/**
 * Created by Dmytro_Petrov on 5/13/2016.
 */

(function(){
    
'use strict';
angular.module('epamAngular')
    .directive('bookmarkingForm', function(){
        return {
            templateUrl : 'templates/bookmarking.form.tmpl.html',
            restrict    : 'E',
            transclude  : true,
            scope       : {
                bookmark    : '=',
                save      : '=savefn'
            }           
        };
    });
})();