  
//   const student ={
//   name: 'praveen',
//   age:20,
//   isAlive:true,
//   skills:["coding","thinking"],
//   adrress:{
//     city:'chennai',
//     pincode:604604, },
//     weakness:null,
//     greet:()=>{
//         return 'hello'
//     },
//     borndate:new Date('2004=07-08'),
//     relationship:undefined,
// }
//  console.log(student)

// // parsed

// let detail = `[{
//     "id":1,
//     "name":"surya",
//     "age":20,
//     "isalive":true,
//     "skills":["coding","thinking"],
//     "address":{
//       "city":"chennai",
//      "picode":604604    },
//     "weakness":null
// }]`
// console.log(detail)
// let parsed = JSON.parse(detail)
// console.log(parsed)

fetch("http://127.0.0.1:5500/js/jsobjectn/js.json")
.then(prav=>prav.json())
.then(prav=>console.log(prav))
fetch("http://127.0.0.1:5500/js/jsobjectn/js.json")
.then(prav=>prav.json())
.then(json=>console.log(json))

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((res) => console.log(res));

fetch("http://127.0.0.1:5500/js/jsobjectn/js.json")
.then((hello)=>hello.json())
.then((hello)=>console.log(hello))

fetch("http://127.0.0.1:5500/js/jsobjectn/js.json")
.then((hello)=>(hello.json))
.then((json)=>console.log(json))


fetch("https://jsonplaceholder.typicode.com/posts/1'")
.then((response)=>(response.json))
.then((json)=>console.log(json))
// const perdet={
//   "Name":"praveen",
//   "Age":20,
//   "Gender":"male",
//   "phone number":7094365750,
//   "Favourtie sports":["Formula 1","cricket","kabaadi"],
//   "Education-Details":{
//   "secondary Education":"shri makesh vidiyala matric  secondary school",
//   "Higher secondary":"Jai sharadha matric higher secondary school",
//    "Bachelor's Degree":"KPR college of Arts science and Research"
//   },
//    "marks":{
//       "secondary Education":52,
//       "Higher secondary":92,
//       "Bachelor's Degree":76
//    }
// }
// console.log(perdet);
// const perdetpar=JSON.stringify(perdet)
// console.log(perdetpar);


// fetch("http://127.0.0.1:5500/js/jsobjectn/js.json")
// .then(prav=>prav.json())
// .then (sun=>console.log(sun))