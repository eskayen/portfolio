// JavaScript Document

var root = document.querySelector(':root');

function colorChangeMidnight(){
	root.style.setProperty('--primarycolor','#181818');
	root.style.setProperty('--secondarycolor','#8758FF');								// dark theme
	root.style.setProperty('--text','#F2F2F2');
	root.style.setProperty('--accent','#5CB8E4');
}

function colorChangeDefault(){
	root.style.setProperty('--primarycolor','white');
	root.style.setProperty('--secondarycolor','darkgray');								// dark theme
	root.style.setProperty('--text','black');
	root.style.setProperty('--accent','hotpink');
}

function colorChangeBananaPudding(){
	root.style.setProperty('--primarycolor','#FFF5E4');
	root.style.setProperty('--secondarycolor','#FFC4C4');								// dark theme
	root.style.setProperty('--text','#EE6983');
	root.style.setProperty('--accent','#850E35');
}

function dropdownFunction(){
	document.getElementById("colorlist").classList.toggle("show");						// dropdown function opens list
}

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