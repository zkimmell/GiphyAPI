
var topics = ["basketball", "football", "boxing", "hockey", "baseball"];

//create a button for each item in the array
function renderButtons(){

	for (i=0;i<topics.length; i++){

		var a = $("<button>");

		a.attr("data-name",topics[i]);

		a.text(topics[i]);

		$("#sportsButtons").append(a);
	}	

//add user input as an item in the array
};

$("#addSport").on("click", function(){

	var sport= $("#sports-input").val().trim();

	topics.push(sport);
});


//click on a button to populate giphs


$("#sportsButtons").on("click", function(){

	var sport = $(this).attr("data-name");

	var key = "dc6zaTOxFJmzC";
	var url="http://api.giphy.com/v1/gifs/search?q= " + sport + "&limit=10&api_key= " + key;
	
	$.AJAX({queryURL: url,method: "GET"}).done(function(response){

		var rating = response.rating;

		var pOne = $("<p>").text("Rating: " + rating);

		$("#giphs").append(response.url);


	});


});

$(document).on("click", renderButtons());

