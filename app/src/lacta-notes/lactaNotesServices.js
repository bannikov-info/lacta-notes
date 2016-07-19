;(function () {
    "use strict";

    var module = angular.module('lacta-notes');

    module.service('LactanotesStore', LactanotesStoreService);
    module.constant('LactaTypes', ["Грудное", "Искуственное", " Смешаное"]);

    LactanotesStoreService.$inject = ['$q', '$moment', "LactaTypes"];
    function LactanotesStoreService($q, $moment, LactaTypes) {
        var lacta_notes = generateLactaNotes(4);

        return {
            getAll: function () {
                return $q.resolve(lacta_notes);
            }
        }


        function generateLactaNotes(days) {
            var m = $moment();
            var lacta_notes = Array.apply(null, {length: days}).reduce(function (prev, el, idx) {
                var i = idx+1;
                var l = Math.round(1+Math.random()*7);
                for (var j = 1; j <= l; j++) {
                    var t = Math.round(Math.random()*2);
                    var item = {
                        datetime: $moment(m).subtract(i, 'days').subtract(j*3, 'hours').toDate(),
                        type: LactaTypes[t],
                        breastfeeding: (t===0 || t===2)
                                       ? 30
                                       :null,
                        bottlefeeding: (t===1 || t===2)
                                       ? 30
                                       :null,
                        desc: !!Math.round(Math.random())
                              ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices placerat enim id varius. Donec sodales urna sed.'
                              : null
                    };
                    prev.push(item);
                };
                return prev;
            }, []);

            return lacta_notes;
        }
    }


}());
