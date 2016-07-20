;(function () {
    "use strict";

    var module = angular.module('lacta-notes');

    module.controller('LactanotesListCtrl', LactanotesListController);

    LactanotesListController.$inject = ['$scope', 'LactanotesStore', '$mdDialog'];
    function LactanotesListController($scope, LactanotesStore, $mdDialog) {
        this.items = [];
        var self = this;

        LactanotesStore.getAll().then(function (items) {
            self.items = items;
        });

        this.addItem = function () {
            $mdDialog.show({
                templateUrl: './src/views/lacta-notes/lactaItemFormDialog.html',
                fullscreen: true,
                controller: function ($scope, $mdDialog) {
                    this.data = {datetime: new Date()};

                    this.cancel = function () {
                        $mdDialog.cancel();
                    };
                    this.done = function () {
                        $mdDialog.hide(this.data);
                    };
                },
                controllerAs: 'form'
            }).then(function (data) {
                self.items.push(data);
            })
        }
    };
}());
