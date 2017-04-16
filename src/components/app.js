angular.module('video-player')


.directive('app', function() {

  return {

    controller: [ 'youTube', function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];

      this.selectVideo = (video) => { 
        this.currentVideo = video;
      };

      this.searchResults = (results) => {
        this.videos = results;
        this.currentVideo = results[0];
      };

      this.searchEntryHandler = (searchTerms) => {
        youTube.search(searchTerms, this.searchResults);
      };

      youTube.search( 'perfect golf swing', this.searchResults );
    }],

    scope: {
    },

    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'src/templates/app.html'
  };
});


