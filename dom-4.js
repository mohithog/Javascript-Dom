/* Create an unordered list. Allow users to add and remove list items dynamically using 
buttons     */
var ul = document.querySelector("ul");
var inp = document.querySelector("input");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");

var li;

add.addEventListener('click' , () => {
    if(inp.value.trim() === ""){
    }else{
// var li = document.createElement("li"); we want to acces li to remove , so declare 
// outside and init inside .with this we can remove one previous li only .
        li = document.createElement("li")
        li.textContent = inp.value ;
        ul.appendChild(li);
        inp.value = "";
    }
})

remove.addEventListener('click' , () => {
    ul.removeChild(li);
})