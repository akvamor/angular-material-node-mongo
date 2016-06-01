/**
 * Created by Dmytro_Petrov on 5/16/2016.
 */
(function(){
    
'use strict';
angular.module('epamAngular')
    .factory('menu', [
      '$location',
      '$rootScope',
      function ($location) {

        var sections = [];

        sections.push({
          name  : 'Customers',
          type  : 'toggle',
          pages : [{
            name  : 'Profiles Manager',
            type  : 'link',
            state : 'home.users.profiles'
          }, {
            name  : 'Orders',
            state : 'home.users.orders',
            type  : 'link'
          },
          {
            name  : 'All orders',
            state : 'home.users.orders.all',
            type  : 'link'
          }]
        });
        
        
        sections.push({
          name  : 'GitHub Accounts',
          type  : 'link',
          state : 'home.github-accounts'
        });
        
        sections.push({
          name  : 'Bookmarks',
          type  : 'link',
          state : 'home.bookamrking'
        });


        var self;

        self = {
          sections: sections,

          toggleSelectSection: function (section) {
            self.openedSection = (self.openedSection === section ? null : section);
          },
          isSectionSelected: function (section) {
            return self.openedSection === section;
          },

          selectPage: function (section, page) {
            if(page && page.url && $location.path(page.url));
            self.currentSection = section;
            self.currentPage = page;
          },
          getCurrentSection: function(state){
            var selected = null;
            sections.forEach(function (value, index, arr) {
              if (value.type === 'toggle'){
                value.pages.forEach(function(element) {
                  if (element.state === state.name){
                    selected = element;
                    return;
                  }
                }, this);
                if (selected !== null){
                  return;
                }
              }
              else if (value.state === state.name){
                selected = value;
                return;
              } 
            });
            return selected;
          }
        };
        return self;            
      }]);
})();