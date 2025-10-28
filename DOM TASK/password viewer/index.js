function viewpassword(){
  let password = document.getElementById("password");
//     if (password.type==='text'){
//         password.type="password"
//     }else if(password.type==="password"){
//         password.type="text"
//     }

   // or

  password.type= password.type==="password"?"text":"password"
}   
