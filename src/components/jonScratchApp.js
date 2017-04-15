angular.module('video-player', [])

.controller('appCtrl', function($scope) {

  $scope.selectVideo = function() {}

})

.directive('app', function() {
  return {
    scope: {

    },

    controllerAs: 'ctrl',
    template: `<div id="app container">
      <nav class="navbar">
        <div class="col-md-6 col-md-offset-3">
          <search>Replace me with template in search.js</search>
        </div>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <video-player><h5><em>videoPlayer</em> component goes here</h5></video-player>
        </div>
        <div class="col-md-5">
          <video-list><h5><em>videoList</em> component goes here</h5></video-list>
        </div>
      <div>
    </div>`
  };
});