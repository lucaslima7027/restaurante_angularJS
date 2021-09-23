(function (){
'use strict';

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems', 'ApiPath'];
function MenuItemsController (menuItems, ApiPath){
    var $ctrl = this;

    $ctrl.menuItems = menuItems;
    $ctrl.ApiBasePath = ApiPath + '/images/';

}


})();