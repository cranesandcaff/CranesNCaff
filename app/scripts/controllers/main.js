'use strict';

angular.module('cncv2App')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pusssh = function(){
  		console.log('My Name is My Name')
  	}
  	$http.get('json/devToolbox.json').success(function(data){
  		$scope.dev = data;
  	})
  });
