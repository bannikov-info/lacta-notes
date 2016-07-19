;(function () {
    "use strict";

    var module = angular.module('lacta-notes');

    module.controller('LactanotesListCtrl', LactanotesListController);

    LactanotesListController.$inject = ['$scope', 'LactanotesStore'];
    function LactanotesListController($scope, LactanotesStore) {
        $scope.items = [];

        LactanotesStore.getAll().then(function (items) {
            $scope.items = items;
        })
    };
}());
