function inp(){
    const input=document.getElementById("inptext")
    const paragraph=document.getElementById("para")
    paragraph.value=input.value;
    input.style.color="red"
    console.log(input.type) 
    console.log(input.placeholder) 
    console.log(input.id) 
    console.log(input.name) 
}
// document.body.style.backgroundColor="red"
  input=document.getElementById("inptext")
paratag=document.getElementById("para1").innerText="helloworld"
paratag1=document.getElementById("para2").innerHTML="helloworld"
div=document.getElementById("div1").innerHTML="<b>hello</b>"
let img=document.getElementById("imgtag")
// img.src="https://camo.githubusercontent.com/3cae61090608b8cbd681f5825ca5ac76af8d8d3ee12024926d51c5480aef5d6c/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067"
img.style.width="300px";
let para2=document.getElementById("para3")
para2.textContent="hello its working"
console.log(para2.textContent);


// attributes

let inp5=document.getElementById("inp3")
let inptext = inp5.getAttribute("isAlive");
let para5=document.getElementById("para5")
let place=inp5.getAttribute("place")
// inp5.value=place
// inp5.value=inptext

let findatri=inp5.attributes
console.log(findatri)

// inp5.value=findatri


//set attribute

inp5.setAttribute("age","20")
console.log(inp5)
//has atrribute

let has =inp5.hasAttribute("placeholder")

// inp5.value=has

// remove attribute

let remove=inp5.removeAttribute("isAlive")
console.log(inp5)
let para6=document.getElementById("para6")

console.log(para5.style.fontSize)
