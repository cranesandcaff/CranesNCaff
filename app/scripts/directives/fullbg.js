'use strict';
//Simple directive to make full page colored background similar to the iPhone website when it launched.
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
