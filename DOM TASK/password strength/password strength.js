function passwordstrength(){
    let password=document.getElementById("password").value;
    let len =password.length;

    if(len>=3 && len<=5){
         document.getElementById("passlen").innerText="password is week"
    }else if(len>=6 && len<=8){
         document.getElementById("passlen").innerText="password is medium"
    }else if(len>=9){
        document.getElementById("passlen").innerText="password is strength"
    }else{
         document.getElementById("passlen").innerText="password is to short"
    }
}
