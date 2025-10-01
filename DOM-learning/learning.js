//  DOM MANIPLUATION

// selectors

// BY ID
/*
let title=document.getElementById("heading");

console.log(title)

//BY CLASSNAME

let paragraph=document.getElementsByClassName("para");

console.log(paragraph)

// BY TAGNAME

const tags=document.getElementsByTagName("div");

console.log(tags)


//BY QUERYSELECTOR

// const query=document.querySelector("span");

// console.log(query)

// BY QUERY SELECTORALL

const queryall=document.querySelectorAll("span")

console.log(query)
*/
//  STYLE IN CSS
/*
const cssstyle = document.querySelector(".heading-main");

cssstyle.style.color="red"

const groupel=document.querySelectorAll("p");
groupel.style.color="green" 

//   it does not work because using css we can style only one element at the time not group of elements or we can other method

for(i=0;i<groupel.length;i++){
    groupel[i].style.color="blue"
}

console.log(groupel)
 */

/*
// CREATING ELEMENTS

const div =document.getElementById("divid");
const crsp=document.createElement("h2")
// crsp.textContent="this is new content"
div.append(crsp)

crsp.innerText="hello"


//MODIFIYING ATTRIBUTES AND CLASSESS

crsp.setAttribute("class", "heading-main");

// TO REMOVE ATRRIBUTE
// crsp.removeAttribute("class")

//TO GET ATTRIBUTE

const head=document.querySelector("#heading");

console.log(head.getAttribute("class"))


// TO REMOVE ELEMENT

crsp.remove()
*/

