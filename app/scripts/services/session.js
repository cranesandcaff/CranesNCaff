'use strict';

angular.module('cncv2App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
