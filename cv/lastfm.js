
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

/* Create a cache object */
var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : '725c8a7294e1dd8c5d084529fb28a713',
  apiSecret : '9685dae6da614d45ad2ac614539bc4db',
  cache     : cache
});

/* Load some artist info. */
function search() {
	var request = lastfm.user.getrecenttracks({	
	});
	request.execute(onSearchResponse);

}


function onSearchResponse(response) {
    showResponse(response);
}