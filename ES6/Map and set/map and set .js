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
