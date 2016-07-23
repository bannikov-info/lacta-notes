;(function () {
    "use strict";

    var module = angular.module('lacta-notes', ['angular-momentjs', 'ngMaterial']);

    module.config(function ($mdDialogProvider) {
        $mdDialogProvider.addPreset('lactationItemForm', {
            methods: ['data'],
            options: lactationItemFormDialogOptions
        })
    });

    function lactationItemFormDialogOptions($mdDialog) {
        return {
            templateUrl: './src/views/lacta-notes/lactaItemFormDialog.html',
            fullscreen: true,
            controller: 'AddItemDialogCtrl',
            controllerAs: 'form',
            bindToController: true
        }
    };

}())
