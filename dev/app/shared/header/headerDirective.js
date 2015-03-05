(function() {
    'use strict';

    angular
        .module('app')
        .directive('coreHeader', CoreHeader)

        function CoreHeader($state, LoginService, AuthenticationService) {
            return {
                restrict: 'E',
                templateUrl: 'app/shared/header/headerView.html',
                transclude: true,
                scope: true,
                link: function(scope, element, attr) {

                    scope.logout = function() {
                        LoginService.logout()
                            .then(function(data) {

                                AuthenticationService.deleteToken();
                                $state.go('login.enter');
                            })

                    }


                }
            }


        }

})();