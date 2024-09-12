/**Create a search bar that displays live search results as user types, updating the 
results without requiring a full page reload.                            */
var input = document.querySelector("input");
var data = [
    {name:"sade" , src: "https://images.unsplash.com/photo-1581093804475-577d72e38aa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNvZnR3YXJlJTIwZW5pZ25lZXJ8ZW58MHx8MHx8fDA%3D"},
    {name:"vade" , src: "https://unsplash.com/photos/man-smiling-while-sitting-on-floor-during-daytime-KriecpTIWgY"},
    {name:"thode" , src: "https://unsplash.com/photos/man-standing-near-white-wall-d1UPkiFd04A"},
    {name:"nade" , src: "https://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k"},
];

// var pers = '';
// data.forEach(function(elem){
//     pers += `<div class="person">
//                     <div class="img">
//                         <img src="${elem.src}" alt="">
//                     </div>
//                     <h4 style="margin: 7px 0;">${elem.name}</h4>
//             </div>`
// })

// document.querySelector(".people").innerHTML = pers ;

input.addEventListener("input" , function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    var newusers = '';
matching.forEach(function(elem){
    newusers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4 style="margin: 7px 0;">${elem.name}</h4>
            </div>`
})

document.querySelector(".people").innerHTML = newusers ;
});