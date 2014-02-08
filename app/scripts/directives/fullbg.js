'use strict';

angular.module('cncv2App')
  .directive('fullPage', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.css("min-height", function(){
          return $(window).height() - $('.globalHeader').outerHeight()
        })
      }
    }
});
