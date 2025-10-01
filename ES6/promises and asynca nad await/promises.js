
/*
setTimeout(()=>{
            console.log(1);
    setTimeout(()=>{
            console.log(2)
        setTimeout(()=>{
            console.log(3)
            
        },3000)
    },2000)
},1000)
*/
//aysnc

// async function  fun1() {
//     console.log("hello") 
// }

// fun1()
// // Async its always rfeturn a promise 

// async function fun2(){
//     return 'hello'
// }
// console.log(fun2());

// you cna use 

// fun2().then((msg)=>console.log(msg));

//await is only valid in async function
/*
const theprom=new Promise((resolve, reject) => {
    let itemrecived=true
    if(itemrecived){
        resolve("item fetched")
    }else{
        resolve("item not fetched")
    }
})
// we can use without then 
theprom.then((message)=>{
    console.log("success",message)  
}  
)
.catch((error)=>{
    console.log("failure", error); 
}
).finally(
    ()=>{
        console.log("is this the end")
    }
)
    */

