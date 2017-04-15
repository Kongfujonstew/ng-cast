angular.module('video-player')


.directive('videoPlayer', function() {
  return {


    scope: {
      videos: '<',
    },

    // controller: function() {
    //   // this.videos = exampleVideoData;
    //   this.videos = 'hi';
    // },
    controller: function($scope) {
      $scope.currentVideo = exampleVideoData[0]
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
