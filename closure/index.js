function outer(){
    let a=10;
  function inner(){
    let b=10

    console.log(a+b);
  }
  return inner;

}
let result = outer()
result()



function outerfunction(){
  let count = 0 ;
  function innerfunction(){
    count++ ;
    return count ;
  }
  return innerfunction
}

let callingfunction = outerfunction()

console.log(callingfunction())
console.log(callingfunction())

function mainfun(){
  let  name = "praveen";
  function subfun(){
    let age = 28;
    return name + age ;
  }
  return subfun
}

let wholeFun = mainfun()

console.log(wholeFun(
))
