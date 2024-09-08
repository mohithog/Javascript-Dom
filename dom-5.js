/** Build a countdown timer that starts when a button is clicked  and updates the
display in real-time.              */

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");

var int;

start.addEventListener("click", function(){
    var count = 0;
    int = setInterval(()=>{
        h3.textContent = count;
        count++;
    } , 1000)
})
stop.addEventListener("click", function(){
    clearInterval(int);
})