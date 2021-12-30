(function() {
    'use strict';

    /**
     *  Here scope is listed as a string so that the minification
     *  process won't change the variable name.
     *  This is required (if using minification) since it is injected by Angular
     */
    angular.module('templateApp').controller('mainController', [
        '$scope',
        function($scope) {
            $scope.message = 'Hello, World!';
        }
    ]);
}());