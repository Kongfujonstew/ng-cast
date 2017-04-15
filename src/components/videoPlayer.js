angular.module('video-player')


.directive('videoPlayer', function() {
  return {

    scope: {
      currentVideo: '<'
    },

    controller: [$scope, function($scope) {
      console.log( this.currentVideo );
      this.getVideoUrl = (video) => {
        return "https://www.youtube.com/embed/" + this.currentVideo.id.videoId;
      }
      // this.currentVideoURL = "https://www.youtube.com/embed/" + this.currentVideo.id.videoId;
    }],

    bindToController: true,
    controllerAs: 'ctrl',
    restrict: 'E',

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
