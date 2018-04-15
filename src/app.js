angular.module('mainApp',['ui.router'])
.config(appConfig);


function appConfig($stateProvider,$urlRouterProvider){

        //default route
        $urlRouterProvider.otherwise('/'); 

        //app routes
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl: '/home/home-view.html',
                controller: 'home-controller',
                controllerAs: 'ctrl'
            })

}