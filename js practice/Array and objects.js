
const add=[2,5,10,20,33,55,64]

 // indexof-finding index value

console.log(add.indexOf(64));

// Map

let sum=add.map((number)=>{
    return number+10
})

console.log(sum)

// filter

let even=add.filter((num)=>{
    return num%2==0
})
console.log(even);

// some method()

let numbers=[10,20,30,40,50,60];
let value=numbers.some(number=>number>60);
console.log(value

            
// every method()

let digit=[10,20,40,50,70,80]

let every=digit.every(digits=>digits<90);
console.log(every)


// find()

let digit=[10,20,40,50,70,80]

let find=digit.find(digits=>digits<90);
console.log(find)
----------------------
