// function email() {
//     let em=document.getElementById("emi").value;
//     let em1=document.createElement("h1");
//     let em2=document.createTextNode(em)
//     em1.appendChild(em2);
//     document.body.appendChild(em1)
//     document.getElementById("emi").value=""
// }

// function phone(){
//     let phn1=document.getElementById("pho").value;
//     let phn2=document.createElement("span");
//     let phn3=document.createTextNode(phn1);
//     phn2.appendChild(phn3);
//     document.body.appendChild(phn2);
//     document.getElementById("pho").value="";
// }

// function tocreatep(){
//     let para=document.createElement("p");
//     para.innerText="This is a paragraph";
//     document.body.appendChild(para)
// }


function remove(){
    let cou=document.getElementById("count").value;
    let cou1=document.createElement("");
    let cou2=document.createTextNode(cou)
    cou1.appendChild(cou2);
    document.body.appendChild(cou1);
    document.getElementById("count").value=""
    // document.getElementById("h1").style.backgroundColor = "red";

    cou1.style.backgroundColor = "red"

}


