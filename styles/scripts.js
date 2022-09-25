// JavaScript Document

var root = document.querySelector(':root');
var rootStyles = root.getComputedStyle(root);

function colorChange(){
	root.style.setProperty('--accent','blue');
}