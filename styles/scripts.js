// JavaScript Document

var root = document.querySelector(':root');

function colorChange(primary, secondary, text, accent){
	root.style.setProperty('--primarycolor',primary);
	root.style.setProperty('--secondarycolor',secondary);								
	root.style.setProperty('--text',text);
	root.style.setProperty('--accent',accent);
}

function dropdownFunction(){
	document.getElementById("colorlist").classList.toggle("show");						// dropdown function opens list
}

function obtainColors(){
	if(localStorage.getItem('--primarycolor')){
		colorChange(sessionStorage.getItem('--primarycolor'),'black','black','black');
		console.log("Colors found.");
	}
	else{
		console.log("Colors not found.");
		colorChange('white','darkgray','black','hotpink');
	}
}

obtainColors();

window.onclick = function(event) {
  if (!event.target.matches('.colorButton')) {
    var amount = document.getElementsByClassName("dropdownContent");						// close list if user clicks outside
    var i;
    for (i = 0; i < amount.length; i++) {
      var open = amount[i];
      if (open.classList.contains('show')) {
        open.classList.remove('show');
      }
    }
  }
}