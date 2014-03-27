'use strict';
//Was gonna do a carousel for my main page decided against it for a lot of reasons. Never deleted. May delete in future
angular.module('cncv2App')
  .directive('carousel', function ($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
      	slides: '='
      },
      link: function(scope, elem, attrs) {
        scope.currentIndex = 0;  

        scope.next = function(){
          scope.currentIndex < scope.slides.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
        };

        scope.prev = function(){
          scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.slides.length - 1;
        };

        scope.$watch('currentIndex', function(){
          scope.slides.forEach(function(slide){
            slide.active = false;
          });

          scope.slides[scope.currentIndex].active = true;
        });
        var timer;
        var sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 5000);
          }, 5000);
        };
         
        sliderFunc();
 
        scope.$on('$destroy', function() {
          $timeout.cancel(timer); 
        });
      },
      templateUrl: 'views/partials/carousel.html'
    };
  });
