document.getElementById("multiple").onclick = function(){

	let first = document.getElementById("textZoneOne").value;
	let second = document.getElementById("textZoneTwo").value;
	let answer = +first * +second
	alert(`${answer}`);
}
