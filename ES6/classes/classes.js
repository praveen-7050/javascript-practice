// console.warn("warning")
// console.error("error")
// console.log("log")
// console.info("info")
// console.clear()
// console.count()
// console.countReset("error")
// console.debug("log")
// console.table(["tabel-1", "tabel-2", "tabel-3"]);


/*
class Employee{
    // class body
    // let a=10 
    // a=10                    // fleid
    //  function add (){} 

    // add (){}
    // sub (){}  // we can set multiple class
    employeeName="oscar"
    driverName=name

    forumla1(){
        console.log(this.employeeName)
        
    }
    favdriver(name){
        console.log(this.name)
        
    }
    }
    // forumla1()
let employee = new Employee()
employee.employeeName= "lando"
// console.log(employee.employeeName)
employee.forumla1();

let emp2 =new Employee()
emp2.employeeName ="Norris"
// console.log(emp2.employeeName)
emp2.forumla1()

let driver=new avdriver()
driver.favdriver("praveen") */

import { User } from "../modules/modules.js";

let user = new User
user.name = 'alonso'
console.log(user.rollno)
user.display()



class driver {
  // let favdriver ='lando'
  favdriver = "lando";
  add(a, b) {
    console.log(a + b);
    this.driverName = this.favdriver;
  }
  sub() {
    console.log("championship Leader", this.driverName);
  }
}
let Driver = new driver();
Driver.favdriver = "piastri";
// console.log(Driver.favdriver);
Driver.add(10, 10);
Driver.sub();

// ------------------------------
let Driver2 = new driver();
Driver2.favdriver = "max";
// Driver2.favdriver = Driver2.add(1, 2);
console.log(Driver2.favdriver);

//------------------------------------
let driver3 = new driver();
driver3.favdriver = "lewis";
driver3.favdriver = "saniz";
console.log(driver3.favdriver);

//------------------------------------

let Driver4 = new driver();
Driver4.favdriver = Driver4.add(2, 2);

class Employee {
  set employeeName(name) {
    this.name = name;
  }
  specialName() {
    console.log(this.name);
  }
}
let employee = new Employee();
employee.employeeName = "lando norris";
employee.specialName();

class person {
  #name = "praveen";

  set PersonName(name){
    this.#name ='Name: '+name
  }
  get personName() {
    return this.#name;
  }

  specialPerson() {
    console.log(this.#name);
  }
}

let persons = new person();
persons.name ='surya'
// persons.personName ='surya';
console.log(persons.personName);
// specialPerson()


 export  class Car{
    carDetails ={
      carName:"Maclren",
      carOwner:"Lando Norris",
      carColor:"Orange",
      carPrice:"2Million",
      carModel:2025,
      carTopSpeed:"365KMPH",
      carModelName:"Maclren F! Team"
    }

    carInfo(){
      let carinfo = this.carDetails

      console.log(carinfo)
      
    }
}


export class newuser {
  newUser = "praveen"
}
 