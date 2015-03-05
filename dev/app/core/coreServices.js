(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('AuthInterceptor', AuthInterceptor)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('AuthInterceptor');
        });

    function AuthInterceptor($rootScope, $q, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return response || $q.when(response);
            }
        };
    }


})();
