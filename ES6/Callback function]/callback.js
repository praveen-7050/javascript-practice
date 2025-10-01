// callback function


/* function firstfunction(){
    console.log("i am  first")
    
}
firstfunction()
function second() {
    console.log(" i am second")
    
}
firstfunction(second())

let third=()=>{
    console.log(" iam third")
}
firstfunction(third()) */

/*
const call=()=>{
    console.log("this is callback function")
}


const back=()=>{
    console.log("this is second call back function")
}
call(back()) */


// call back function using settime out function
/*
function setfun(name){

    let myname=name.toUpperCase()
    console.log("hi my name is "+myname)
}
  setTimeout(()=>{
    setfun("praveen")
  },2000)
*/


function cb(name){
    console.log("hello "+name)
    
}

function person(myname){
    myname("praveen")
}
// person(cb)
cb(person) // call the whole function of cb