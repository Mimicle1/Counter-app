let increase = document.querySelector(".increment-btn");



let counter = document.querySelector(".counter");

let newP = document.createElement("P");

 newP.className= "P1";

 let container = document.querySelector(".container2");

 let main = document.querySelector(".container3");

 container.insertBefore(newP, main);

 


increase.addEventListener("click", add);

count=0;
function add(){

   
    count++; 
    
    counter.innerHTML=count;
    
    
};
let colorChange = document.querySelector(".body");
    colorChange.addEventListener("load", change());

function change(){
    
    let save=prompt("Please Enter Your Name: ");

   newP.appendChild(document.createTextNode("" + save));
   newP.style.color="red";
}

