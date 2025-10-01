//normal function called function decleration 

/* function index(){
    console.log("This is normal function")  ; 
}index() */

// function expression

/* const expression=function  ferrari(){
    console.log("Scuderia Ferrari Forumla F1 team")
    
}
expression() */

// Anonymous function
 
/* let friday=function (){
  console.log("in formula one friday is fp1 and fp2")
  
}

friday() */

// arrow function

/* let merecedes=()=>{
    console.log("Lewis Hamliton is leaving Mercedes and joinig Ferrai")
    
}
merecedes() */


//Arrow function with Single Arugument

/* let greet=(x)=>{     
  return x*x
}
// console.log(greet(5))

const result=(greet(10))

console.log(result) */  

//Arrow function with Single Arugument no need to put() bracket it is not nessceray

/* let norris=y=>{
    return y*y
}

console.log(norris(3)) */ 

// Arrow function with multiple Arguments

/* let sum=(a,b)=>{
   return a+b
}

console.log(sum(10,10)) */

/* let singleline=(a,b)=>a+b;
console.log(singleline(10,10))  */


//Arrow function with object

const f1={
    team:"maclern",
    points:35,
    place:"dutch",

details:()=>{
    return `this is  ${f1.team} formula one team and  ${f1.points} points in ${f1.place} gp `;
}
}
console.log(f1.details())


