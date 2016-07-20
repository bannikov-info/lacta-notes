;(function () {
    "use strict";
    var app = angular
        .module('starterApp', ['ngMaterial', 'ngAnimate', 'lacta-notes', 'utils.filters', 'menu'])
        .config(function($mdThemingProvider, $mdIconProvider){

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128)
                .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                .icon("share"      , "./assets/svg/share.svg"       , 24)
                .icon("add", "./assets/svg/ic_add_white_24px.svg", 24)
                .icon("dialog:close", "./assets/svg/ic_close_white_24px.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                $mdThemingProvider.theme('default')
                    .primaryPalette('teal')
                    .accentPalette('red');

        })
        .run(function () {

        });


}());
