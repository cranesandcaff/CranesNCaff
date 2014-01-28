'use strict';

angular.module('cncv2App')
  .controller('ArticleCtrl', function ($scope, $http, $location, Articles) {
    $scope.create = function(){
    	var article = new Articles({
    		title: this.title,
    		subtitle: this.subtitle,
    		content: this.content,
    	});
    	article.$save(function(response){
    		$location.path('blog/' + response._id);
    	});

    	this.title = '';
    	this.subtitle = '';
    	this.content = '';
    };

    $scope.remove = function(article) {
    	article.$remove();

    	for (var i in $scope.articles){
    		if ($scope.articles[i] == article){
    			$scope.articles.splice(i, 1);
    		}
    	}
    };

    $scope.update = function() {
    	var article = $scope.article;
    	blog.$update(function(){
    		$location.path('articles' + article._id);
    	});
    };

    $scope.find = function(){
    	Articles.query(function(articles){
    		$scope.articles = articles;
    	});
    };

    $scope.findOne = function(){
    	Articles.get({
    		articleId: $routeParams.articleId
    	}, function(article){
    		$scope.article = article;
    	});
    };

  });
