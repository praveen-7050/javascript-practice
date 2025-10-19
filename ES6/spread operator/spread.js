// spread operator

/* let a=[10,20,30,40,50]

let b=[...a,60,70,80,90,100]

console.log(b) */

/* let f1mercedes=[" the driver 1 is geroge"," the driver 2 is kimi"]

let f1teamprinciple=[" the team principle is toto",...f1mercedes]


console.log(f1teamprinciple) */


/* let arr1=[10,20,30,40,50]
let arr2=[...arr1,60,70,80,90,100]

console.log(arr1) */

// differnce between concat and spread operator and both or same in arrays only
/*
const student=["praveen","surya","mani","hari","bhavan",]

const student2=["prem","sam","manoj","deepak"]


const combine=student.concat(student2)

console.log(combine)


const person = ["praveen", "surya", "mani", "hari", "bhavan"];

const person2 = ["prem", "sam", "manoj", "deepak"];
const join = [...person,...person2]

console.log(join);
*/

//object using spread operator
/*
let redbullf1={
    drivername:{
        driver1:"max",
        driver2:"yuki"
    },
    teamprincipal:"Horner",
    teampostion:3,
    lastwin:"china"
}

let maclernf1 = {
  drivername1: {
    drivername1: "lando",
    drivername2: "oscar",
  },
  teamprincipalofmaclern: "jack",
  teampostioncamp: 1,
  latestwon: "hungary",
};


let f1={...redbullf1,...maclernf1};

console.log(f1)
*/

// let name="praveen"

// let spread=[...name]

// console.log(spread)

/*

function inp(inpvalues) {
 ans=5
for(i=0;i<inpvalues.length;i++){
    ans=ans+inpvalues[i];
} 
console.log(ans)
} 
input=[1, 2, 3, 4, 5];
inp(input)
*/

// function sum(x,y,z){
// return x+y+z
// }
// const numbers =[1,2,3]
// console.log(sum(...numbers))
const person ={
  name:"praveen",
  age:20
}
const role ={
  role:"front end developer"
}
const combined={...person,...role}
console.log(combined)

const newproperties ={name:"prop-1"}
const newproperties2={...newproperties,newprop2:"yes"}
console.log(newproperties2);

//rest operator

function inp1(...inpvalues1) {
  ans1 = 5;
  for (i = 0; i < inpvalues1.length; i++) {
    ans1 = ans1 + inpvalues1[i];
  }
  console.log(ans1);
}
// inputp= [1, 2, 3, 4, 5];
inp1(2,3,4,5,6);