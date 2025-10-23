export class User {
  name = "charles";
  age = 28;
  #rollno = "4";
  gender = "male";

  constructor(rollno, gender) {
    console.log(this.#rollno);
    console.log(this.gender);
  }
  display() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
  }
  get rollno() {
    return this.#rollno;
  }
  set rollno(rollno) {
    if (rollno === "sebastain vettel") {
      this.#rollno = "4";
    } else {
      this.#rollno = rollno;
    }
  }
}


export let num = 10;
export var num1 = 20;
export const num3 = 30;

export function test(){
    console.log('testing the export')
    
}

const personDetails = {
    name:'virat',
    age:36,
    sport:'cricketer',
    team:'india'
}
export default personDetails;

export   let array =[1,2,3,4,5,6]