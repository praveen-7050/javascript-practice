function formtabel(){
  let name=document.getElementById("name").value; 
  let tabel=document.getElementById("td1")
  tabel.innerHTML="Name :"+name;
  let phone=document.getElementById("phone").value; 
  let tabel1=document.getElementById("td2")
  tabel1.innerHTML="phone Number :"+phone;
  let birth = document.getElementById("birth").value;
  let tabel2 = document.getElementById("td3");
  tabel2.innerHTML ="Birth Date :"+ birth;
  let tabel3 = document.getElementById("td4");
       if(document.getElementById("genmale").checked){
          tabel3.innerHTML= " Gender : male"
       }else if (document.getElementById("genfemale").checked){
        tabel3.innerHTML=" Gender :female"
        }
   let gmail = document.getElementById("email").value;
   let tabel4 = document.getElementById("td5");
   tabel4.innerHTML ="Gmail :"+gmail;
  //  let tabel5 = document.getElementById("td6");
  //  if(document.getElementById("hobread").checked){
  //     tabel5.innerHTML="Hobbies : Reading"
  //  }
  //  if(document.getElementById("hobtrav").checked){
  //    tabel5.innerHTML="Hobbies : travelling"
  //  }   if (document.getElementById("hobsports").checked) {
  //    tabel5.innerHTML = "Hobbies : Sports";
  //  }   if (document.getElementById("hobother").checked) {
  //    tabel5.innerHTML = "Hobbies : other";
  //  }
  //  tabel5.innerHTML ="Hobbies :"+ hoby;
  let state = document.getElementById("state").value;
     let tabel6 = document.getElementById("td7");
     tabel6.innerHTML = "state :" + state;
     let country = document.getElementById("country").value;
     let tabel7 = document.getElementById("td8");
      tabel7.innerHTML = "country :" + country;
      let pincode = document.getElementById("pincode").value;
      let tabel8 = document.getElementById("td9");
      tabel8.innerHTML = "Pincode :" + pincode;
   document.getElementById("name").value=""
   document.getElementById("phone").value = "";
   document.getElementById("birth").value = "";
   document.getElementsByClassName("unity").value = "";
   document.getElementById("email").value = "";
   document.getElementsByClassName("hob").value = "";
   document.getElementById("state").value = "";
   document.getElementById("country").value = "";
    document.getElementById("pincode").value = "";

       
}