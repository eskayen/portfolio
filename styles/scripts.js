// JavaScript Document

var root = document.querySelector(':root');
var rootStyles = root.getComputedStyle(root);
var currentAccent =  rootStyles.getPropertyValue('--accent');
console.log(currentAccent);


function colorChange(){
	root.style.setProperty('--accent','blue');
}