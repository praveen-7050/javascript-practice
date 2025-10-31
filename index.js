// console.log("hello world");
// let bookname;
// bookname = "praveen";
// let book_name;
//  book_name ="hello"
// console.log(bookname)
// let name,student;
// name = "praveen";
// student = name;
// console.log (student)
// let a=10
// let b=20
// 10**

// console.log (a+b)
// console.log(a**)
// let x=100
//  let y=10
// let xy=(x+y)
// console.log(xy)
// console.log(false - 2)

// reverse string without in bulit function

let strvalue = "hello world";

let reverseval=''

function reversestring(str){

    for(let i=str.length-1;i>=0;i--){
        reverseval+=str[i];    
    }
    return reverseval
}

console.log(reversestring(strvalue))



let bulitinfunctionvalue = "praveen";

function reversed(val) {
  return val.split("").reverse().join("");
}

console.log(reversed(bulitinfunctionvalue))
