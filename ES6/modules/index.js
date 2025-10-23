import { num,num1,num3,test } from "./modules.js";
import personDetails from "./modules.js"
import { array as a  } from "./modules.js";
import { Car } from "../classes/classes.js";
import { newuser } from "../classes/classes.js";
console.log(num);
console.log(num1);
console.log(num3);
test()
console.log(personDetails.name);
console.log(personDetails);

console.log(a)
// let mycar = new Car();

// console.log(mycar.carDetails.carColor);


let mycar= new Car()
mycar.carInfo();


let newDetails = new newuser();
console.log(newDetails.newUser);

