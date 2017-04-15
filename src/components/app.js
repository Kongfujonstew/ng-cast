angular.module('video-player')

.controller('appControl', function($scope) {
  $scope.videos = exampleVideoData;
})


.directive('app', function() {

  // $scope.videos = exampleVideoData;
  return {

    scope: {
      videos: '<',
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    // controller: function() {
    //   // this.videos = exampleVideoData;
    //   this.videos = 'hi';
    // },
    // controller: function($scope) {
    //   $scope.videos = exampleVideoData;
    //   $scope.carName = 'Volvo';
    //   $scope.currentVideo = exampleVideoData[0]
    // },
    controller: function() {
      // this.test = 'hello';
    },

    templateUrl: 'src/templates/app.html'

  };
});
