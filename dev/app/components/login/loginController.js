(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController)
        .controller('RegisterController', RegisterController)

    function LoginController($scope) {

        $scope.submit = function() {

        }

    }

    function RegisterController($scope, LoginService) {

        $scope.submit = function() {

            LoginService.signup($scope.user)
                .then(function(data) {

                })
                .catch(function(error) {

                });

        }

    }


})();