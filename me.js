if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "nikamilo","nikamilo","nikamil","nikamil","nikami","nikami","nikam","nikam","nika","nika","nik","nik","ni","ni","n","n","n","ni","ni","nik","nik","nika","nika","nikam","nikam","nikami","nikami","nikamil","nikamil","nikamilo","nikamilo"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}