document.getElementById("cos").onclick = function(){

	let first = document.getElementById("textZoneOne").value;
	let answer = Math.cos(+first);
	alert(`${answer}`);
}
