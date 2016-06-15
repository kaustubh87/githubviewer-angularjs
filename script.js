// Code goes here

(function() {

  var app = angular.module('githubviewer', []);

  var MainController = function($scope, $http) {


    var getUserData = function(response) {
      $scope.user = response.data;
      $http.get($scope.user.repos_url)
            .then(ongetRepos, onError);
    }
    var onError = function(reason) {
      $scope.error = "Error fetching the content";
    };
    
    var ongetRepos = function(response){
      $scope.repos = response.data;
      
    };
    
    $scope.reposSortOrder = "+name";



    $scope.search = function(username) {

      $http.get('https://api.github.com/users/' + username)
        .then(getUserData, onError);

    };


  };

  app.controller("MainController", MainController);
}());