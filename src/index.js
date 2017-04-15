angular.module('video-player', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})
.controller( 'video-player', function($scope) {
  $scope.videos = exampleVideoData;
});
