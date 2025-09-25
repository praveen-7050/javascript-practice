
function multiple() {
     for( let i=1;i<=10;i++)
        console.log(i*i)     
 }

function area(length,breadth){
    
   
    let l=20
    let b=30
    let a = l * b;
    //  console.log("the area is " + a); 
area(30,400)
}

//by passing parameter and agrument

function fun1(name){
   console.log(`hello ${name}`)
   
}
fun1("praveen")

function fun2(suqare){
    return(suqare*suqare)
}
(fun2(12))
console.log(fun2(12))

function fun3(num){
    if(num%2!=0){
        return"odd"
    }else{
        return"even"
    }
}
 console.log(fun3(11));
