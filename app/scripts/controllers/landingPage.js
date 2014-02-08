'use strict';

angular.module('cncv2App')
  .controller('landingPageCtrl', function ($scope,$http) {
  	$scope.pusssh = function(){
  		console.log('My Name is My Name')
  	}
      $scope.myInterval = 500;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
  	//$http.get('json/toolbox.json').success(function(data){
  		//var slides = $scope.slides = data;
  	//})
  });
