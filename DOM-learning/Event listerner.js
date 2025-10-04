// DOM MANIPULATON

// EVENT LISTERNERS


//TO ADD EVENTLISTENERS

//element.addEventListeners("click",function);  // synatx


// const btntwo = document.getElementById("event2");


// let arrow = ()=>{
//     alert("this is second event by doing evnet listener")
// }

// btntwo.addEventListener('click',arrow)

//MOUSEOVER
/*
let styling=document.querySelector("#event3")

function bgcolor(){
    styling.style.backgroundColor="black";
    styling.style.color="white";
}

styling.addEventListener('mouseover',bgcolor)
*/

// REVEAL EVENT
/*

let revealbtn=document.querySelector('.btn-reveal')
let revealcontent=document.querySelector('.reveal-text')

function torevealtext(){
   revealcontent.classList.toggle("show")
}

revealbtn.addEventListener('click',torevealtext);
*/

//Event prograbation



  const input = document.getElementById("liveInput");
  const output = document.getElementById("output");

  input.addEventListener("input", function(e) {
    output.textContent = "input value: " + e.target.value;
  });
