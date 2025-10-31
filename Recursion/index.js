//factorial
let input = 5;
ans = 1;
for (let i = 1; i <= 5; i++) {
  ans = ans * i;
}
console.log(ans);
// ------------------------------------------------
function fact(n) {
  if (n === 1) {
    return 1;
  } else {
    return fact(n - 1) * n;
  }
}
let fun = fact(5);
console.log(fun);
// ---------------------------------------------------
function print(n) {
  if (n >= 10) {
    return n;
  } else {
    return print(n + 1);
  }
}

function countdown(num) {
  if (num === 0) {
    console.log(num);
    return;
  } else {
    console.log(num);
    return countdown(num - 1);
  }
}

let cutdownvalue = countdown(5);

//----------------------------------------------

function sumofdigits(digit) {
  if (digit < 10) {
    return digit;
  } else {
    return (digit % 10) + sumofdigits(Math.floor(digit / 10));
  }
}

let total = sumofdigits(1234);
console.log(total);

function noofdigits(n) {
  if (n <= 1) {
    return n;
  } else {
    return n + noofdigits(n - 1);
  }
}
console.log(noofdigits(10));

function reversestr(str) {
  if (str === "") {
    return "";
  } else {
    return reversestr(str.slice(1)) + str[0];
  }
}
console.log(reversestr("this is the revere string"));
