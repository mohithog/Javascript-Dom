/**create a page with 2 images and a btn . when the button is clicked , swap the source 
attribute of the images       */

var btn = document.querySelector('button');
var img1 = document.querySelector('#one');
var img2 = document.querySelector('#two');


btn.addEventListener('click' , ()=>{
    var src1 = img1.src;
    var src2 = img2.src;
    img1.src = src2;
    img2.src = src1;
})