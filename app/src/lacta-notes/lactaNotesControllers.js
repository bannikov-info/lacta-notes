;(function () {
    "use strict";

    var module = angular.module('lacta-notes');

    module.controller('LactanotesListCtrl', LactanotesListController);
    module.controller('AddItemDialogCtrl', AddItemDialogController);

    LactanotesListController.$inject = ['$scope', 'LactanotesStore', '$mdDialog'];
    function LactanotesListController($scope, LactanotesStore, $mdDialog) {
        this.items = [];
        var self = this;

        LactanotesStore.getAll().then(function (items) {
            self.items = items;
        });

        this.addItem = function () {
            var preset = $mdDialog.lactationItemForm();
            $mdDialog.show(preset).then(function (data) {
                self.items.push(data);
            })
        };
    };

    AddItemDialogController.$inject=['$scope', '$mdDialog']
    function AddItemDialogController($scope, $mdDialog) {
        this.data = this.data || {datetime: new Date()};
        var self = this;

        this.cancel = function () {
            $mdDialog.cancel();
        };
        this.done = function () {
            $mdDialog.hide(this.data);
        };

        this.selectDate = function () {

            var preset = $mdDialog.datepicker({skipHide: true}).date(self.data.datetime);
            $mdDialog.show(preset).then(function (date) {
                self.data.datetime = date;
            });

        }
    };


}());
