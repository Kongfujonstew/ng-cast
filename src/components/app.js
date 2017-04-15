angular.module('video-player')

.directive('app', function() {

  return {

    scope: {
    },

    controller: function() {
      this.videos = exampleVideoData;
      this.currentvideo = exampleVideoData[0];

      this.videoChangeHandler = function(video) {
        // this.currentVideo = video;
        console.log('correcttheory')
      }
      this.videoChangeHandler = this.videoChangeHandler.bind(this);
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/app.html'
  };
});


