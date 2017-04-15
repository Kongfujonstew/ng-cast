angular.module('video-player')

.directive('search', function() {
  return {



    scope: {

    },

    controller: function() {
      this.searchFunc = function() {
        //youtubeSearch
        console.log(2);
      }
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',

    templateUrl: 'src/templates/search.html'
  };
});
