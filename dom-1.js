/* create a html page with button, when the button is clicked , change the text of the 
paragraph element. */

var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click' , ()=> p.innerHTML='changed...');