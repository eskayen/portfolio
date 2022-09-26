// JavaScript Document

var root = document.querySelector(':root');

function colorChangeToDark(){
	root.style.setProperty('--primarycolor','#181818');
	root.style.setProperty('--secondarycolor','#8758FF');							
	root.style.setProperty('--text','#F2F2F2');
	root.style.setProperty('--accent',"#5CB8E4");
}

function dropdownFunction(){
	document.getElementById("colorlist").classList.toggle("show");
}

window.onClick = function(event){
	if(!event.target.matches('.colorButton'))
	{
		var list = document.getElementsByClassName("dropdownContent");
		var i;
		for(i = 0; i < list.length; i++){
			var open = list[i];
			if(open.classList.contains('show')){
				open.classList.remove('show');
			}
		}
	}
}