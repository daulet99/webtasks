function changePicture(event){
	var x = event.target;
	document.getElementById("bigImage").getElementsByTagName("img")[0].src = x.src;
}

document.getElementById("carousel").onclick = function() {changePicture(event)};