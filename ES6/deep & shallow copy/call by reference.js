let x=10;
function value(a){
    a=20
}
value(x);
console.log(x)

let user ={hello:"xyz"};
function changename(obj){
    obj.hello="zxy";
}
changename(user)
console.log(user.hello)

function oject(value){
    value=x
}
oject(x)
console.log('the value of y is:',x)
let obj1 ={Name:'praveen'}
obj2=obj1
obj2.Name='surya'
obj1.age=20


console.log(obj1,obj2)


let arr1=[1,2,3];
let arr2=arr1

arr1[0]='one'
arr1.push(4)
arr2.pop()
console.log(arr1,arr2)
