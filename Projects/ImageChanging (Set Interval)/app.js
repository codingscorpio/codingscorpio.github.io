// Q. Create a Corousal 
/* 
    You have 5 images 
    after every 2sec images should change  
    After 5th Image 1st show 
    Run this cycle for 60 sec
*/

let imgTag = document.querySelector('img');

let pathArray = [
    './Assets/img1.jpg',
    './Assets/img2.jpg',
    './Assets/img3.jpg',
    './Assets/img4.jpg',
    './Assets/img5.jpg',
]

let num = 0;

let sIId = setInterval(function(){
        imgTag.setAttribute('src', pathArray[num]);
        console.log(pathArray[num])
        num = (num + 1) % pathArray.length;
},2000)

setTimeout(function(){
    clearInterval(sIId);
},60000)