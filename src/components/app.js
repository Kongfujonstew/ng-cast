angular.module('video-player')

.directive('app', function() {

  return {

    scope: {
      videos: '<'
    },

    // controller: function($scope) {
    //   $scope.videos = exampleVideoData;
    //   $scope.carName = 'Volvo';
    //   $scope.currentVideo = exampleVideoData[0]
    // },
    controller: function() {
      this.test = 'hello';
      // this.videos = exampleVideoData;
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/app.html'

  };
});
