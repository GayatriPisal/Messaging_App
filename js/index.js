var app = angular.module('animakuzChirpApp', []);


//init


//controllers
app.controller('mainCtrl', function($scope) {
  $scope.posts = [];
  $scope.newPost = { createdBy: '', text: '', createdAt: '' };
  
  $scope.post = function() {
    $scope.newPost.createdAt = Date.now();
    $scope.posts.push($scope.newPost);
    $scope.newPost = { createdBy: '', text: '', createdAt: ''};    
  };
  
});

//services