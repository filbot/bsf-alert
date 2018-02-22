var xhr = new XMLHttpRequest();

document.getElementById("butthole").addEventListener("click", buttonClick, false);

function buttonClick() {
	xhr.open('GET', 'https://traffic-owl.herokuapp.com/notification');
	xhr.send(null);

	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) 
				console.log('Purple alert sent.'); // 'This is the returned text.'
			} else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
};
