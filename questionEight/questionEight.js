

  var firstInput = document.getElementById('firstInput');
  var secondInput = document.getElementById('secondInput');
  var myButton = document.getElementById('myButton');
 	var ourList = document.getElementById('ourList');	
 	myButton.onclick = function() { 
 		alert(firstInput.value)
 		if(secondInput.value.toLowerCase() == 'red' || secondInput.value.toLowerCase() == 'yellow' || secondInput.value.toLowerCase() == 'blue') {
 			ourList.innerHTML += "<li class='" + secondInput.value.toLowerCase() + "'>" + firstInput.value.toLowerCase() + "</li>";
 		}

 	}; 