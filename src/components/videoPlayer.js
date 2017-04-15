angular.module('video-player')


.directive('videoPlayer', function() {
  return {

    scope: {
    },

    // controller: function() {
    //   // this.videos = exampleVideoData;
    //   this.videos = 'hi';
    // },
    controller: function() {
      // this.currentVideoUrl = "https://www.youtube.com/embed/" + this.currentvideo.id.videoId;
    },

    controllerAs: 'ctrl',
    bindToController: {
      currentvideo: '<'
    },
    restrict: 'E',

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
