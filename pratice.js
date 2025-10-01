  var credit=document.getElementById("hello");

  var para=document.getElementById("credit");
   credit.onclick = function () {
    alert("you clicked on the text");
   }
// function text(){
//     alert("you clicked on the text");
// }
// credit.onclick=text;
// };

// credit.setAttribute("onclick",'alert("you clicked on the text")');

// credit.addEventListener("click",function(){
//   alert("you clicked on the text");
// })

// para.addEventListener("dblclick",function(){
//   alert("you double clicked on the text second time");
// })

// btn.addEventListener("click",()=>{
//     btn.innerText=" you are using event";
// })
// btn.addEventListener("mouseover",(event)=>{
//     btn.innerText=" you are using event for mouse over";
// })

// for select and copy method

let inputtype=document.getElementById("input-text");
let inputtype2=document.getElementById("text")
let btn=document.getElementById("btn");
let paragraph=document.getElementById("para1")

btn.addEventListener("click",()=>{
    inputtype.select(); 
  })
btn.addEventListener("click",()=>{
  let inputtype = document.getElementById("input-text");
    navigator.clipboard.writeText(inputtype.value);
})

// revrese value

inputtype.addEventListener('input',function revresefunction(){
  let value=inputtype.value
  let split=value.split("")
  let reverse=split.reverse()
  let join=reverse.join("");
  paragraph.innerText = join;
})


event.target(h1)