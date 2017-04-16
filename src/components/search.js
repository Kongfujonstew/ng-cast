angular.module('video-player')

.directive('search', function() {
  return {
    
    scope: {
      result: '<',
    },

    controller: function() {
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',

    templateUrl: 'src/templates/search.html'
  };
});
