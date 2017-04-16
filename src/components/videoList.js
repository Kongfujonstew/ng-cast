angular.module('video-player')



.directive('videoList', function() {
  return {

    scope: {
      videos: '<',
      onClick: '<'
    },

    controller: function() {

     
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',

    templateUrl: 'src/templates/videoList.html'
  };
});
