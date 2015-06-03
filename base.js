function imdb(data) {
  $("#film").html("<a href='" + data.results.collection1[0].film_name.href + "' target='_blank'>" + data.results.collection1[0].film_name.text + "</a>");
  $("#film_rating").html(data.results.collection1[0].film_rating + "/10");
  $("#film_director").text(data.results.collection1[0].film_director.text);
  $("#opinion").text(opinion(data.results.collection1[0].film_rating));
};

function opinion(rating) {
  if (rating == 10) {
    return "a masterpiece";
   }
  else if (rating == 9) {
    return "amazing";
  }
  else if (rating == 8) {
    return "great";
  }
  else if (rating == 7) {
    return "good";
  }
  else if (rating == 6) {
     return "pretty good";
  }
  else if (rating == 5) {
     return "pretty boring";
  }
  else {
    return "the worst";
  }
};


$.ajax({
  url: "http://www.kimonolabs.com/api/1vvwp5au?apikey=a51813d8c7299c1e2506b8b8654c2bd4&callback=imdb",
  jsonp: "imdb",
  crossDomain: true,
  dataType: "jsonp"
});


function lastfm(data) {
  $("#album").html("<a href='" + data.results.collection1[0].Album.href + "' target='_blank'>" + data.results.collection1[0].Album.text + "</a>");
  $("#band").text(data.results.collection1[0].Band.text);

};

$.ajax({
  url: "https://www.kimonolabs.com/api/aocumgg0?apikey=a51813d8c7299c1e2506b8b8654c2bd4&callback=lastfm",
  jsonp: "lastfm",
  crossDomain :true,
  dataType: "jsonp"
});

$(window).load(function() {
  $('body').css({visibility: 'visible'});

});