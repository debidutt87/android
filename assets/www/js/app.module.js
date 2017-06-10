(function() {
    'use strict';

    angular
        .module('app', [
            /* Shared modules */
            'ionic',
            'app.accounts',
            'app.alerts',
            'app.settings',
            'app.login',
            'app.services',
            'ngInput'
        ]);
})();