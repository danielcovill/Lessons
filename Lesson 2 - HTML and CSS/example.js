let hideFreddie = function () {
	document.getElementById("imgFreddie").style.visibility = "hidden";
}

let showFreddie = (ev) => {
	ev.preventDefault();
	document.getElementById("imgFreddie").style.visibility = "visible";
}
document.getElementById("showFreddie").addEventListener("click", showFreddie);
//note how you could just combine the above into one big blob