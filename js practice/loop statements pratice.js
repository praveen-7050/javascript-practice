// odd numbers

for(let i=2; i<=40; i++){
  if(i % 2 != 0){  
    console.log(i);
  }

  // odd and even numbers in while loop
let no = 1;
while (no <= 20) {
  if (no % 2 != 0) {
    console.log(no + " odd");
  } else if (no % 2 == 0) {
    console.log(no + " even");
  }
  no++;
}
  // desecending loop 
  for (let i = 20; i >= 1; i--) {
  console.log(i);
}


// odd and even numbers in for loop

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i + " odd");
  } else {
    console.log(i + " even");
  }
}

// Even numbers square using for loop
  
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i * i);
  }
}
// 3 multiple tabel
  for (let i = 1; i <= 10; i++) {
  console.log("3 x " + i + " = " + (3 * i));
}

// Factorial using fo loop

  let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(fact);
// factorial using while loop
  let num = 10;
let fact = 1;
let n = 1;

while (n <= num) {
  fact = fact * n;
  n++;
}

console.log(`The factorial of ${num} is ${fact}`);


  // prime numbers

  for (i = 2; i < num; i++) {
  if (num % i == 0) {
    console.log("not prime");
    str = true;
    break;
  }
}

// run only once after loop
if (str == false) {
  console.log("prime");
}

