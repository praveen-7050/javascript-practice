function f1(){
console.log("first");
}
setTimeout(function f2(){
console.log("second");
},3000) 
function f3(){
console.log("third");
}
f1()
// f2()
f3()

setTimeout(()=>{
    console.log("HELLO")
},5000)