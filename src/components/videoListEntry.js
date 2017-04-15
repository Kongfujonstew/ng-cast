angular.module('video-player')
.directive('videoListEntry', function() {
  return {

    scope: {
      video: '<'
    },

    controller: function() {

    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',

    templateUrl: 'src/templates/videoListEntry.html'
    // TODO
  };
});
