function passwordgenerator(){
    let uname=document.getElementById("user").value; 
    let dob=document.getElementById("date").value

    let username = uname.substring(0,4);
    let dateofbirth = dob.substring(0,4);

    let para= document.getElementById("passun");

    let password = username+dateofbirth;

para.innerHTML = "Your password is : <span style='color:red'>" + password + "</span>";
}