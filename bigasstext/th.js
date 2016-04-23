$(document).ready ( function () {
	var url = "https://teamtreehouse.com/thibautdavoult.json";
		$.getJSON(url, function treehouse(response) {
			var jsPoints = response.points.JavaScript;
			console.log(jsPoints);
			$('#th').html(jsPoints);
		});
});
