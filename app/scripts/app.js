'use strict';
var cncv2App = 
angular.module('cncv2App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-medium-editor',
  'ngAnimate',
  'headroom',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      //Please note, having a 'secret' route is in no way secure. Secure the API in the backend.
      .when('/topsecretroute', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/evenmoretopsecretroute', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .when('/work', {
        templateUrl: 'partials/work.html'
      })
      .when('/approach', {
        templateUrl: 'partials/approach.html'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html'
      })
      .when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'ArticleCtrl'
      })
      .when('/blog/:blogId', {
        templateUrl: 'partials/blog/viewone.html',
        controller: 'ArticleCtrl'
      })
      .when('/admin', {
        templateUrl: 'partials/admin.html',
        authenticate: true
      })
      .when('/addArticle', {
        templateUrl: 'partials/addArticle.html',
        controller: 'ArticleCtrl',
        authenticate: true
      })
      .when('/addAddiction', {
        templateUrl: 'partials/addAddiction.html',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and 403s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401 || response.status === 403) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });