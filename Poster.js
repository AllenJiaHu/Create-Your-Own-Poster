$(document).ready(function(){

// INFORMATION ENTRY FUNCTIONS
	var title = prompt("What is the title of your band/artist?");
	$('h1.bandtitle').text(title);
	
	var date = prompt("What is(are) the date(s) your band/artist going perform?");
	$('h1.datetitle').text(date);
	
	var venue = prompt("What venue is it being hosted at?");
	$('h1.locationtitle').text(venue);

	var ticket = prompt("Where can you purchase the tickets at?");
	$('h1.ticketpurchasetitle').text(ticket);

	var image = prompt("Insert your provided background photo. (Url or File path)");
	$('.backgroundimage').css("url", image);	

// $('body').css('background-image', imgURL);


	// BUTTON FUNCTIONS
	$(".bandtitlefs").click(function() {
		var titlesize = prompt("Format - #px")
		$("h1.bandtitle").css("font-size", titlesize)
	});

	$(".datetitlefs").click(function() {
		var datesize = prompt("Format - #px")
		$("h1.datetitle").css("font-size", datesize)
	});

	$(".locationtitlefs").click(function() {
		var datesize = prompt("Format - #px")
		$("h1.locationtitle").css("font-size", datesize)
	});

	$(".backgroundcolor").click(function() {
		var backgroundcolor = prompt("Hex # or Color Name")
		$("#container").css("background-color", backgroundcolor)
	});


});