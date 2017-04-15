angular.module('video-player')

.directive('app', function() {

  // $scope.videos = exampleVideoData;
  return {

    scope: {
      videos: '=',
    },

    // controller: function() {
    //   // this.videos = exampleVideoData;
    //   this.videos = 'hi';
    // },
    controller: function($scope) {
      $scope.videos = exampleVideoData;
      $scope.carName = 'Volvo';
      $scope.currentVideo = exampleVideoData[0]
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/app.html'

  };
});
