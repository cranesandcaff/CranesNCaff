'use strict';

angular.module('cncv2App')
  .factory('Articles', function ($resource) {
  	return $resource('/api/articles/:articleId', {
  		articleId: '@_id'
  	}, {
      

  	});
  });
