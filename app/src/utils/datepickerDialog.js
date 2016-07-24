;(function () {
    "use strict";

    var module = angular.module('utils.datepicker', ['ngMaterial']);

    module.config(function ($mdDialogProvider) {
        // debugger;
        $mdDialogProvider.addPreset('datepicker',
            {
                methods: ['date'],
                options: datepickerDialogOptions
            }
        )
    });
    module.controller('DatePickerDialogCtrl', DatePickerDialogController);

    function datepickerDialogOptions($mdDialog) {
        return {
            template: [
                '<md-dialog>',
                '    <md-toolbar layout="column" layout-padding>',
                '            <div class="md-subhead">{{dialog.date | date:\'yyyy\'}}</div>',
                '            <div class="md-display-1">{{dialog.date | date:\'EEE, MMM d\'}}</div>',
                '    </md-toolbar>',
                '    <md-dialog-content flex layout="column" layout-align="center center">',
                '            <md-calendar ng-model="dialog.date" flex></md-calendar>',
                '    </md-dialog-content>',
                '    <md-dialog-actions>',
                '        <md-button class="md-primary" ng-click="dialog.abort()">Cancel</md-button>',
                '        <md-button class="md-primary" ng-click="dialog.hide()">Ok</md-button>',
                '    </md-dialog-actions>',
                '</md-dialog>'
            ].join(''),
            controller: 'DatePickerDialogCtrl',
            controllerAs: 'dialog',
            bindToController: true,
            clickOutsideToClose: true,
            preserveScope:true,
            autoWrap:false,
            fullscreen: true
        }
    };

    DatePickerDialogController.$inject = ['$mdDialog', '$mdUtil', '$scope'];
    function DatePickerDialogController($mdDialog, $mdUtil, $scope) {

        this.date = this.date || (new Date());

        this.hide = function () {
            $mdDialog.hide(this.date);
        };

        this.abort = function(){
            $mdDialog.cancel()
        }
    }
}());
