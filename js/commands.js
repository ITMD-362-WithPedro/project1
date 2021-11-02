	document.getElementById('sub').addEventListener('click',
	function () {
		var f = document.getElementById('fn').value;
		var l = document.getElementById('ln').value;
		if (isNaN(f)) {
			alert("No numbers in here");
		}
	});
		