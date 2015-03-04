(function() {
    'use strict';

    angular
        .module('app.services')
        .config(function($httpProvider, $logProvider, HEADER, TIMEOUT, LOG) {
            $httpProvider.defaults.timeout = TIMEOUT;
            $httpProvider.useApplyAsync(true);
            $logProvider.debugEnabled(LOG);
        })
        .factory('LoginService', LoginService);

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

            return LoginService;


        }


})();