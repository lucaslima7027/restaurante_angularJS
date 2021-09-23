(function (){
'use strict';

angular.module('public')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider']; 
function routeConfig ($stateProvider){

    $stateProvider
    .state('public', {
        abstract: true,
        templateUrl: 'src/public/public.html'
    })
    
    .state('public.home',{
        url: '/',
        templateUrl: 'src/public/home/home.html'
    })

    .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
            menuCategories: ['MenuService', function (MenuService){
                return MenuService.getMenuCategories();
            }]
        }
    })

    .state('public.menuItems', {
        url: '/menu/{category}',
        templateUrl: 'src/public/menu/menu-items.html',
        controller: 'MenuItemsController',
        controllerAs: 'itemsCtrl',
        resolve: {
            menuItems: ['$stateParams','MenuService', function ($stateParams ,MenuService){
                return MenuService.getMenuItems($stateParams.category);
            }]
        }
    })

    .state('public.about', {
        url: '/about',
        templateUrl: 'src/public/about/about.html'
    })
    
    .state('public.awards', {
        url:'/awards',
        templateUrl: 'src/public/awards/awards.html'
    });
}

})();