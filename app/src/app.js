;(function () {
    "use strict";
    var app = angular
        .module('starterApp', ['ngMaterial', 'ngAnimate', 'lacta-notes', 'angular-momentjs'])
        .constant('_', window._)
        .config(function($mdThemingProvider, $mdIconProvider){

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128)
                .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                .icon("share"      , "./assets/svg/share.svg"       , 24)
                .icon("add", "./assets/svg/ic_add_white_24px.svg", 24)
                .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                .icon("phone"      , "./assets/svg/phone.svg"       , 512);

                $mdThemingProvider.theme('default')
                    .primaryPalette('teal')
                    .accentPalette('red');

        });

    app.filter('groupByDate', function($moment, _){
        return _.memoize(function (items, dateField) {
            var field = dateField || 'date';

            var gRes = _.groupBy(items, function (item) {
                try {
                    var m = $moment(item[field]);
                    return m.format('DD.MM.YYYY')
                } catch (e) {
                    return null
                };
            })

            return gRes;
        })
    })
}());
