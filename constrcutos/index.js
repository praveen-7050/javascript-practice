function usernew() {
  let name = "mani";
  return name;
}
// let Usernew = usernew()
// usernew()
console.log(usernew());

function User() {
  this.name = "praveen";
  console.log(this.name);
}
let User1 = new User();
// console.log(User1.name)
function User2(name) {
  this.name = name;
}
let user2 = new User2("surya");
console.log(user2.name);

function User3(names) {
  this.name = names;
  return;
}
let user3 = new User3("premkesh");
console.log(user3.name);

//----------------------------------------------
class Person {
  name = "praveen";
}
let person = new Person();
console.log(person.name);

function Person1() {
  this.personname = "srikanth M";
  innerPerson1();
  function innerPerson1() {
    this.innerperson1 = "srikanth D";
    console.log(personname);
  }
//   console.log(innerperson1);
}
let persons= new Person1();


console.log(persons.personname);


function add(a,b){
    return a+b
}
add(2,2)
console.log(add())
