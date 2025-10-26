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
