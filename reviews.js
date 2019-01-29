// Add the click function for the go button
$('.go').click(function(){
	alert('The more reviews and recommendations the more the wait, please wait for about 20-ish seconds to see your results!');
	// Get the place ID value
	var pageid = $('#pageid').val();
	if (pageid == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter a page ID!');
	} else {
		// Call my API
		$.getJSON("https://www.reviewsmaker.com/api/public/recommendations?pageid=" + pageid, function (data){
			// Iterate through the results for this demo and display them on the page
			$('.results').append('<h3>General Feed Results</h3><hr>');
			$('.results').append('<b>Page ID: </b>' + data.page_id + "<br>");
			$('.results').append('<b>Current Rating: </b>' + data.current_rating + "<br>");
			$('.results').append('<b>Opinions: </b>' + data.total_opinions + "<br>");
			$('.results').append('<b>Recommendations: </b>' + data.total_recomendations + "<br>");
			$('.results').append('<b>Most Talked About: </b>' + data.popular_topics + "<hr>");
			$('.results').append('<h3>Sample Parsed Results</h3>');
			$('.results').append('<b>Total Recommended: </b>' + data.results.total_recommended + "<br>");
			$('.results').append('<b>Total Not Recommended: </b>' + data.results.total_not_recommended + "<br>");
			$('.results').append('<b>Total Reviews: </b>' + data.results.total_reviews + "<hr>");
			$('.results').append('<h3>Returned Data:</h3><hr>');
			$.each( data.reviews, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.author + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.date + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.rating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.text + "<br>");
			  $('.results').append('<b>Type: </b><font color="blue">' + value.type + "</font><hr>");
			});
			
			$.each( data.positive_recommendations, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.author + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.date + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.rating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.text + "<br>");
			  $('.results').append('<b>Type: </b><font color="green">' + value.type + "</font><hr>");
			});
			
			$.each( data.negative_recommendations, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.author + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.date + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.rating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.text + "<br>");
			  $('.results').append('<b>Type: </b><font color="red">' + value.type + "</font><hr>");
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});