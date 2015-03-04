(function() {
    'use strict';

    angular
        .module('app.login')
        .config(function($stateProvider) {

            $stateProvider
                .state('login', {
                    abstract: true,
                    templateUrl: 'app/core/views/layoutLoginView.html'
                })
                .state('login.enter', {
                    url: '/login',
                    views : {
                        'content': {
                            templateUrl: 'app/components/login/loginView.html',
                            controller: 'LoginController'
                        }
                    }
                })
                .state('login.register', {
                    url: '/register',
                    views : {
                        'content': {
                            templateUrl: 'app/components/login/registerView.html',
                            controller: 'RegisterController'
                        }
                    }
                })
        })


})();