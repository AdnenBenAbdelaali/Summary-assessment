


$('#create').click(function() {
	
	var count = 0;
	var word ="";
	if($("#checkboxBlue").prop('checked')) {
		count += 1;
	}
	if($("#checkboxRed").prop('checked') ) {
		count += 1;
	}
	if($("#checkboxYellow").prop('checked')) {
		count += 1;
	}
	if (count === 3) {
		$('#ul').append("<li class='black'>black</li>");
	} else if(count === 2) {
		$('#ul').append("<li class='yellow'>yellow</li>");
	} else if (count === 1) {
		$('#ul').append("<li class='blue'>blue</li>");
	}

	



});

$('#delete').click(function() {
	$('#ul').html('');
})



