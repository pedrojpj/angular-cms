(function() {
    'use strict';

    angular
        .module('app')
        .directive('coreHeader', CoreHeader)

        function CoreHeader($state, LoginService, AuthenticationService, UserService) {
            return {
                restrict: 'E',
                templateUrl: 'app/shared/header/headerView.html',
                transclude: true,
                scope: true,
                link: function(scope, element, attr) {
                    scope.user = UserService.getData();
                    scope.logout = function() {
                        LoginService.logout()
                            .then(function(data) {
                                UserService.deleteData();
                                AuthenticationService.deleteToken();
                                $state.go('login.enter');
                            })
                    }
                }
            }
        }

})();