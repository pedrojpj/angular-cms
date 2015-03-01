(function() {
    'use strict';

    angular.module('app', [
        'ui.router', 'ngAnimate', /// third party libraries
        'app.core', /// core
        'app.login'//modules
    ]);

})();