;(function () {
  "use strict";

  /*
    dependencies: lodash, moment.js, angular-momentjs
  */

  var module = angular.module('utils.filters', ['angular-momentjs']);
  module.constant('_', window._);

  module.filter('groupByDate', function($moment, _){
      return _.memoize(function (items, dateField, format) {
          var field = dateField || 'date';
          var fmt = format || 'DD.MM.YYYY';

          var gRes = _.groupBy(items, function (item) {
              try {
                  var m = $moment(item[field]);
                  return m.format(fmt)
              } catch (e) {
                  return null
              };
          })

          return gRes;
      },
      function resolver(items, dateField, format) {
        var field = dateField || 'date';
        var fmt = format || 'DD.MM.YYYY';
        return items.length + field + fmt;
      }
    )
  });

}());
