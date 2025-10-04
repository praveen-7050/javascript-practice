let h1tag=document.getElementById("id")
let para=document.getElementsByClassName("para-1")
function makebackground(){
    h1tag.classList.add("red")
}
function removebackground(){
    h1tag.classList.remove("red")
}
function togglestyle(){
    h1tag.classList.toggle("red")
}
/* h1tag.className +=" newclass h1tag big";
console.log(h1tag.className)
h1tag.classList.remove("h1tag")
h1tag.classList.replace("big","bigtag")

h1tag.classList.toggle("h1")
h1tag.classList.toggle("h1")
console.log(h1tag) */

