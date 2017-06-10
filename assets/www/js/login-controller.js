(function() {
    'use strict';

    angular
        .module('app.login', ['ionic'])
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state'];

    /* @ngInject */
    function LoginController($scope, $state) {
        $scope.login = function() {
            $state.go('tab.accounts')
        }
    }
})();