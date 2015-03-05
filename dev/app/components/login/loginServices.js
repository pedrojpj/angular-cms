(function() {
    'use strict';

    angular
        .module('app.login')
        .config(function($httpProvider, $logProvider, TIMEOUT, LOG) {
            $httpProvider.defaults.timeout = TIMEOUT;
            $httpProvider.useApplyAsync(true);
            $logProvider.debugEnabled(LOG);
        })
        .factory('LoginService', LoginService)
        .factory('AuthenticationService', AuthenticationService);

        function LoginService($q, $http, $log, URL_SERVICE) {

            var LoginService = {};
            var makeRequest = function(config) {

                var deferred = $q.defer();

                // add domain to relative url
                config.url = URL_SERVICE + config.url;

                // make requests to api
                $http(config)
                    .success(function (data, status) {
                        $log.debug('[REQUEST ' + status + '] ' + config.method.toUpperCase() + ' ' + config.url);
                        $log.debug(data);

                        deferred.resolve(data); // return data to promise
                    })
                    .error(function (data, status) {
                        $log.error('[REQUEST ERROR ' + status + '] ' + config.method.toUpperCase() + ' ' + config.url);
                        $log.error(data);

                        deferred.reject(data);
                    });


                return deferred.promise;

            };

            LoginService.signup = function(data) {
                return makeRequest({method: 'post', url: 'users/signup', data: data});
            };

            LoginService.signin = function(data) {
                return makeRequest({method: 'post', url: 'users/signin', data: data});
            };

            LoginService.logout = function() {
                return makeRequest({method: 'get', url: 'users/logout'});
            };

            LoginService.checkLogin = function() {
                return makeRequest({method: 'get', url: 'users/check'});
            };

            return LoginService;


        }

        function AuthenticationService() {
            var auth = {
                token: null
            }

            auth.setToken = function(token) {
                localStorage.setItem('token', token);
            }

            auth.getToken = function() {
                return localStorage.getItem('token') || auth.token;
            }

            auth.deleteToken = function() {
                localStorage.removeItem('token');
                return null;
            }

            return auth;
        }




})();