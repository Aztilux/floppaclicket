var floppas = 0;
var fishecost = 15;
var fishenumber = 0;

function floppers(amount) {
	floppas = floppas + amount; 
	document.getElementById("floppas").innerHTML = (floppas);
}

function fishebuy() {
	debugger;
	if (floppas >= fishecost) {
		floppas = floppas - fishecost;
		fishenumber = fishenumber + 1; 

		document.getElementById("floppas").innerHTML = floppas;
		document.getElementById("fishenumber").innerHTML = fishenumber;
	}
}

setInterval (function() {
	floppas = floppas + fishenumber;
	document.getElementById("floppas").innerHTML = floppas;
}, 1000);