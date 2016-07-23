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
            templateUrl: './src/views/utils/datepickerDialog.html',
            controller: 'DatePickerDialogCtrl',
            controllerAs: 'dialog',
            bindToController: true,
            clickOutsideToClose: true
        }
    };

    DatePickerDialogController.$inject = ['$mdDialog'];
    function DatePickerDialogController($mdDialog) {
        if(!this.date){
            this.date = new Date();
        };

        this.hide = function () {
            $mdDialog.hide(this.date);
        };

        this.abort = function(){
            $mdDialog.cancel()
        }
    }
}());
