{let para1=document.getElementById("para-1")} // block scope
let para1=document.getElementById("para-1")  // global scope
para1.textContent="hello my name is praveen";
 // blockscope
function blockscope(){
    let message = "hello everyone !"
    console.log(message);
}
blockscope()
// golbal scope
let message1 = "hello world this is golbal scope !";
function golbalscope() {
  console.log(message1);
}
golbalscope();
// function scope
function functionscoped(){
    if(true){
        var a=10
    }
    console.log(a)
}
functionscoped();
// loop example
function forloopscope(){
    let num=2
    for(let  i=num;i<=5;i++){
    console.log(i)
}
}
 forloopscope()


//  calling function inside a function

function outerfunction(){
    let a="hello there"
    
    function innerfunction(){
        console.log(a)
        let inner = "inner calling";
        console.log(inner);
    }
    innerfunction();
}
outerfunction();