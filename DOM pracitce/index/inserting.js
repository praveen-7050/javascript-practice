function insertingelements(){
    let inp=document.getElementById("text-con")
    let unorder=document.getElementById("ul")
    let create=document.createElement("li")
     create.textContent=inp.value
     unorder.appendChild(create);
     inp.value=""

     create.style.padding="10px"
     create.style.width="300px"
     create.style.backgroundColor="red"
     create.style.marginLeft="650px"
     create.style.textDecoration="none"
}