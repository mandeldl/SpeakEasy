var template = function(text) {
	return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
	$('form').submit(function() {
		return false;
	});

	// END OF PRE-EXISTING STUFF

// ANNYANG STUFF:

if (annyang) {
	var commands = {
	  // Let's define our first command. First the command we expect, and then the function it should call   
	  // annyang will capture anything after a splat (*) and pass it to the function.
	  // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
	  'add *item' : add,
	};

	var add = function(item) {
		var html = template(item);
		$(html).appendTo('.list');
	}

	// Add our commands to annyang
	annyang.addCommands(commands);

	// Start listening
	annyang.start();
}

};


$(document).ready(main);