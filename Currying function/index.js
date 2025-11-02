// currying function
function currying(a){
    return function (b){
        return function (c){
            return a + b +c
        }
    }
}
//  console.log(currying(10)(10)(10))
    let curry1 = currying(10)//10
    //  console.log(curry1)
    let curry2= curry1(10)//10+10 =20
    let curry3 = curry2(10) // 20 +10 =30
 console.log(curry3)
 function friendsname(name1){
    return function (name2){
        return function (name3){
            return function (name4){
                return name1+ name2 + name3+ name4
            }
        }
    }
 };
 console.log(friendsname('kpr ')('college ')('Arts ')('science'))
 let names1 = friendsname("sri ");
 let names2 = names1("surya ");
let names3 =names2('praveen ')
let names4=names3('tharun ')
console.log(names4);
// self invoke function 
( function () {
    console.log( " this is self invoke function" );
})() ;
(function (){
    console.log("this is second self invoke function by function name");  
})();
console.log(
(function personname (name,age){
    return {name,   age} ;
})("praveen",20));
//closuer
