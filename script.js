// const decreaseBtn = document.getElemnetById("decreaseBtn");
// const resetBtn = document.getElemnetById("resetBtn");
// const increaseBtn = document.getElemnetById("increaseBtn");
// const countLabel = document.getElemnetById("countLabel");

// let count = 0;
// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function() {
//     count=0;
//     countLabel.textContent = count;
// }

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}


resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
// let username;
// document.getElementById("mySubmit").onclick = function() {
    // username= document.getElementById("myText").value;
    // document.getElementById("myH1").textContent= `Hello ${username}`;
//     console.log(username);
// }
// const PI = 3.142;
// let radius;
// let circumference;
// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = Math.ceil(2*PI*radius);
//     document.getElementById("myH3").textContent= circumference + "cm";
//     // console.log(circumference);
// } 
