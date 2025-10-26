//set 

/*
let array=[1,2,2,4,5,3,2,1,5,3,"name","sty","buqsx"]

let myset=new Set(array)


myset.add("praveen")
myset.add({a:10,b:10})

console.log(myset.delete(5))
console.log(myset)
*/

//map

const car=['audi','totyato','honda','benz','melaren']

let vechile=car.map((motor)=>{
    console.log(motor.toUpperCase())
    return motor.toUpperCase()
})
console.log(vechile)


let arr = [1,1,2,2,3,4,4,4,4,5,6,7,8,8,8,8,9,10]

let newarr = new Set(arr)

console.log(arr,newarr)

let newset= new Set()

newset.add("one")
newset.add("two")
newset.add("three")
newset.add("four")
newset.add("five")
newset.add(true)
newset.add({
    name:"praveen",
    age:20,
    place:"tiruppur",
    lang:"tamil,english"
})


console.log(newset);
console.log(newset.size);
let obj = {
  name: "praveen",
  age: 20,
  place: "tiruppur",
  lang: "tamil,english",
};
newset.add(obj)
console.log(newset.has(obj))
console.log(newset.has("one"));
console.log(newset.delete("one"))
console.log(newset)

let arr2 =Array.from(newset)

console.log(arr2)

// MAP

const student = new Map()

student.set('Name',"praveen")
student.set("age",20)
student.set("ROle","front End Developer")
student.set('Name',"surya")
console.log(JSON.parse(student))

