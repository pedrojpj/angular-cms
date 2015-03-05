(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('LoginController', LoginController)
        .controller('RegisterController', RegisterController)

    function LoginController($scope, $state, LoginService, AuthenticationService) {

        $scope.submit = function() {

            $scope.message = null;
            $scope.alert = null;

            if ($scope.loginForm.$valid) {

                LoginService.signin($scope.user)
                    .then(function (data) {
                        AuthenticationService.setToken(data.token);
                        $state.go('app.main');
                    })
                    .catch(function (data) {
                        $scope.message = data.message;
                        $scope.alert = 'alert-danger';
                    });
            }
            else {
                $scope.message = 'You must fill in all fields';
                $scope.alert = 'alert-danger';
            }

        }

    }

    function RegisterController($scope, LoginService) {


        $scope.submit = function() {

            $scope.message = null;
            $scope.alert = null;

            if ($scope.registerForm.$valid) {

                LoginService.signup($scope.user)
                    .then(function(data) {
                        $scope.message = 'Success register';
                        $scope.alert = 'alert-success';
                        $scope.sendOk = true;
                    })
                    .catch(function(error) {
                        $scope.message = 'An error occurred';
                        $scope.alert = 'alert-danger';
                    });

            } else {
                $scope.message = 'You must fill in all fields';
                $scope.alert = 'alert-danger';
            }

        }

    }


})();