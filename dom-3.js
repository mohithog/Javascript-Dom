/*create a form with input fields and a submit button . use javascript to validate the 
form and display error message if the input is invalid   */

/* 1st   :-  when we submit the page automatically reloads which causes the js file 
to not run(i.e, even before the js files has run the page gets reloaded) -> prevent this .
*/
/* 2nd :-  check if inputs are blank   
var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");
var h4 = document.querySelector("h4");
form.addEventListener("submit",function (event) {
    event.preventDefault();
    if(inp1.value === '' || inp2.value === ''){
        h4.textContent = "error,the input fields are empty";
        h4.style.color = "red";
    }else{ 
//  this is for, when there are no inputs -> submit -> error will show up -> 
//  inputs given -> error wont go and this block is for that .                     
        h4.textContent = "";
    }
})
*/

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit",function (event) {
    event.preventDefault();
/**the problem with this approach is , it runs for each elem independently . and for eg:
 * if the first element is empty and the last elem is filled then else block will run 
 * removing the error that displayed for first element . so use normal for loop . */
    // inps.forEach((elem) => {
    //     if(elem.value === "") {
    //         h4.innerHTML = `Error , some fields are missing`;
    //         h4.style.color = "red" ;
    //     }else{
    //         h4.textContent = "";
    //     }
    // })
    for (let i = 0 ; i < inps.length ; i++){
        if(inps[i].value.trim() === ''){ //what if empty spaces are added in input field
            h4.innerHTML = `Error , some firelds are missing`;
            h4.style.color ="red" ;
            break ; // important step
        }else{
            h4.innerHTML="";
        }
    }
})


