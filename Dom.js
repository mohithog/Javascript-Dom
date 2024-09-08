/*               Topics     (~W3-School)
* javascript Dom - is a programming interface that allows the javascript to interact with 
  and manipulate the structure , style and content of web pages (HTML document) . 

~>                               Dom manipulation

* Accessing elements:
        -document.querySelector()

* Modifying elements:
        -.innerHTML 
        -.textContent

* Manipulating styles and classes
        -.style -  to access and manipulate the inline styles of an element, allowing 
                   you to directly set or get CSS properties for that element.
        -.classList -  is a property that allows you to access, manipulate, and manage 
                      the list of classes assigned to an element, providing methods to 
                      add, remove, toggle, and check for specific classes.
eg: create a class with properties and with the help of js we can add the class to the
    any html element or even remove .

* Creating and Deleting Elemenmts:
        -.createElement()
        -.appendChild()
        -.removeChild()        /          remove() .

* Event Handling:
        -.addEventListener()

* Event Object
*/


//                        Selection/Accessing elements  +  Modifying elements
/**document.getElementById
 * document.getElementsByClassName
 * document.getelementsByTagName
 * document.querySelector()
 * document.querySelectorAll() - above code will only select 1st ele
*/
let h1 = document.querySelector('h1');
// h1.textContent += '<li>hello</li>'; 
h1.innerHTML += '<li>hello</li>' // without innerhtml <li> will not be considered as tag 


//                    Modifying Styles and Classes
h1.style.color = 'red'; // if not written in quotes it becomes a js keyword -> error
h1.style.fontSize = '16px';

var h2 = document.querySelector('h2');
h2.textContent = 'Adding and Removing Class to HTML element';
h2.classList.add('makeItRed');


//                Creating and Deleting Elements
var h3 = document.createElement('h3');// element has been created
h3.innerHTML='Creating and Deleting Elements by js';
h3.classList.add('makeItRed');

/* to add it to html we must select it , then append.
* where do we want it to be in html document -> in body so select body */
document.querySelector('body').appendChild(h3);


var img = document.createElement('img');
img.src="https://images.unsplash.com/photo-1721332153289-0c46dc38981b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.querySelector('body').appendChild(img);
/**removeChild works differently -> select parent here and then remove child 
 * we cannot directly remove like this 
  document.querySelector('img').removeChild();    // error 

 * remove like this      ->      document.querySelector('img').remove();
 */

document.querySelector('body').removeChild(img);


//                                 Event handling
/**when an action is performed on an element -> event occurs -> for that element we have 
 * to add .addEventListener(event , callback) -> if listener is there then based on the 
 * type of event performed  callback function is executed .
  
 * Types of Events :
- 'click'
- 'dblclick'
- 'mousemove'
- 'mouseover'
- 'mouseleave'
- 'change'
- 'submit' etc...........             to name a few. 
*/
var btn = document.querySelector('button');
btn.addEventListener('click',  ()=>btn.textContent='Clicked...'   );


//                    Event object
document.querySelector('body')
.addEventListener('mousemove' , (dets) => console.log(dets));
/**with this we can get the values of mouse pointer location .
with this we can create animated websites like a circle moves along the mouse ptr etc...
 */