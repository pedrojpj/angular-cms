(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $locationProvider, $urlRouterProvider) {

            $stateProvider
                .state('error', {
                    url: '/error',
                    template: '<div>Error</div>'
                });

            // Activate Mode HTML5
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix = '!';

            /// Default Route
            $urlRouterProvider.otherwise('/login');


        })

})();