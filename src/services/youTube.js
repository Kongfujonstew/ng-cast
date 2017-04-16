angular.module('video-player')
.service('youTube', function($http){

  this.search = (searchTerms, cb) => {
    console.log(searchTerms);
    console.log(YOUTUBE_API_KEY);
    var config = {
      params: {
        key: YOUTUBE_API_KEY,
        q: searchTerms,
        maxResults: 5,
        part: 'snippet',
        videoEmbeddable: 'true',
        type: 'video'
      }
    };

    $http.get('https://www.googleapis.com/youtube/v3/search', config)
    .then(
      function(data) {
        cb(data.data.items);
      },
      function(data) {
      });
  };
});