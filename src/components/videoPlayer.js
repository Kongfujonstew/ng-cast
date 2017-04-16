angular.module('video-player')


.directive('videoPlayer', function() {
  return {

    scope: {
      video: '<',
    },

    controller: function( $scope ) {
    },

    bindToController: true,
    controllerAs: 'ctrl',
    restrict: 'E',

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
