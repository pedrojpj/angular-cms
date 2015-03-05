(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('TIMEOUT', 3000)
        .constant('LOG', true)
        //.constant('URL_SERVICE', 'http://angular-cms-api.herokuapp.com/')
        .constant('URL_SERVICE', 'http://localhost:8090/')

})();