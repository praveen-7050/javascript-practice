// let p=1
// let i=p
// function multiple(i) {((
    // for( let i=1;i<=10;i++)
    //     console.log(i*i)     
// }


// function area(length,breadth){
    
   
//     let l=20
//     let b=30
//     let a = l * b;
//     //  console.log("the area is " + a); 
// area(30,400)
// }


// function fun1(name){
//    console.log(`hello ${name}`)
   
// }
// fun1("praveen")

// function fun2(suqare){
//     return(suqare*suqare)
// }
// (fun2(12))
// console.log(fun2(12))


// function fun3(num){
//     if(num%2!=0){
//         return"odd"
//     }else{
//         return"even"
//     }
// }
// console.log(fun3(11));


// function fun4(a,b){
//     return a+b
// }fun4(10,20)

// console.log(fun4(10, 20));

// function fun5(cel) {
//     return (cel*9/5)+32;
// }
// console.log(fun5(25))

// function fun6(n){
//     let sum=0
//     for(i=1;i<=n;i++){
//         sum=sum+i
//     }
//     return sum;
// }console.log(fun6(10))

// function fun7(number){
//     let fact=1
//     let i=1 
//     while(i<=number){
//         fact=fact*i
//         i++
//     }
//     return fact;
// }console.log(fun7(10))

// function fun8(Firstname,lastname){
//     return(Firstname+lastname)
// }
// console.log(fun8("praveen ","kumar"))

// Arrow function
// let num=5
// let square=(num)=>(num*num);

// console.log(square(10));

// let cube=10

// let no=(cube)=>(cube*cube*cube);

// console.log(no(5))


// self invoking function

(
    function (name){
       console.log("my name is",name)
    }
)("praveen");

(
    function (a,b){
        console.log("this is an self invoking function")
    }
)()