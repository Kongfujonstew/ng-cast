angular.module('video-player')
.directive('app', function() {

  return {

    controller: function() {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];

      this.videoChangeHandler = (video) => { this.currentVideo = video; console.log( video );}
    },

    scope: {
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/app.html'
  };
});


