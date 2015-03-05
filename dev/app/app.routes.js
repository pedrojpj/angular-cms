(function() {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $locationProvider, $urlRouterProvider) {

            $stateProvider
                .state('error', {
                    url: '/error',
                    template: '<div>Error</div>'
                })

                .state('app', {
                    abstract: true,
                    templateUrl: 'app/core/views/layoutMainView.html',
                    resolve: {
                        checkLogin: function($q, LoginService, $state) {
                            var deferred = $q.defer();
                            LoginService.checkLogin()
                                .then(function() {
                                    deferred.resolve(true);
                                })
                                .catch(function() {
                                    $state.go('login.enter');
                                    deferred.reject(false);
                                });
                            return deferred.promise;
                        }
                    }
                })

                .state('app.main', {
                    url: '/main'

                })

            // Activate Mode HTML5
            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix = '!';

            /// Default Route
            $urlRouterProvider.otherwise('/login');


        })

})();