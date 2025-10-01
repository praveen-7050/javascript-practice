//de-structure of object

/* let student={
     stuname:"praveen",
     age:20,
     classno:"b.com ca",
     rollno:88,
     reg:{
       rollno:60
     }
}

let {stuname,age,classno,reg}=student
console.log(age,classno,stuname)
let {rollno:regroll}=reg

console.log(regroll)*/

let f1car = {
  carname: "mclaren f1 team",
  driver1: "norris",
  driver2: "piastri",
  carno: {
    norris: 4,
    piastri: 81,
  },
  teampricipal: "zack brown",
  price: 20000000,
  concstand: 1,
  year: 2025,
  driverstandings: {
    // driver1:"norris",
    // driver2:"piastri"
  },
};

const { carname, driver, teamprincipal, price, concstand, year, driver1, driver2, carno, driverstandings } = f1car;
let { driver1: driverstd1 = "piastri" } = driverstandings;
let { driver2: driverstd2 = "norriss" } = driverstandings; // no default value we assinging the value  console.log(driverstd1);

function pitstop({ carname, concstand, driver1, driver2 }) {
  console.log(`carname is ${carname} and constrctor standing is ${concstand} and driver1 is  ${driver1} driver2  is  ${driver2}`);
}
pitstop(f1car);
