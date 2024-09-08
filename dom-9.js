/**Build a character counter for a text area or input field,which updates in real-time
 * user types and enforces a character limit
 */

var textarea = document.querySelector("textarea");
var counter = document.querySelector("#counter");

textarea.addEventListener("input" , ()=>{
    counter.textContent = textarea.value.length ;
})