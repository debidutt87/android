(function() {
    'use strict';

    angular
        .module('app')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider) {
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:

        .state('tab.accounts', {
            url: '/accounts',
            views: {
                'tab-accounts': {
                    templateUrl: 'templates/tab-accounts.html',
                    controller: 'AccountsController'
                }
            }
        })

        .state('tab.alerts', {
                url: '/alerts',
                views: {
                    'tab-alerts': {
                        templateUrl: 'templates/tab-alerts.html',
                        controller: 'AlertsController'
                    }
                }
            })
            .state('tab.settings', {
                url: '/settings',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-settings.html',
                        controller: 'SettingsController'
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginController'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');
    }

})();