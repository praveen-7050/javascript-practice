// localStorage.setItem('name','praveen')
// localStorage.setItem('place','tiruppur')
// const keyvalue={
//   name:'praveen',
//   age:20,
//   degree:'B.com CA'
// }
// // localStorage.setItem('key in obj',keyvalue)
// // localStorage.removeItem("keyvalue", "praveen");
// const convertstring=JSON.stringify(keyvalue)
// localStorage.setItem("key in obj",convertstring)
// console.log(keyvalue)
// const get = localStorage.getItem("key in obj");
// const getele=JSON.parse(get)
// console.log(getele)
// const storeval=localStorage.getItem("name")
// // const storedval=JSON.parse(storeval)
// console.log(storeval)
// const detail ={
//   name :'surya',
//   age:20,
//   degree:'B.COM CA'
// }
// console.log(localStorage.setItem('detail',JSON.stringify(detail)))
// console.log(JSON.parse(localStorage.getItem('detail')))
// let arr=["praveen","surya","prem","tharun","mani","sri","kishore"]
// localStorage.setItem("FriendsName",arr)
// console.log(localStorage.getItem('FriendsName'))
// let praveen={
//   favspors:"Forumla 1",
//   favf1driver:"lando norris",
//   favfood:"veg pasta",
//   favcolor:"red",
//   favcar:"maclren",
//   favbike:"yamaha"
// }
// let fav=JSON.stringify(praveen)
// localStorage.setItem("praveen",fav)
// console.log(JSON.parse(localStorage.getItem("praveen")))
// console.log(localStorage.key(2))
// localStorage.clear()


function savedata(event){
  event.preventDefault();
  let uname=document.getElementById("inp-text").value
  let number=document.getElementById("inp-num").value
  let email=document.getElementById("inp-email").value
  let user={
    name:uname,
    number:number,
    email:email
  }
  let local=JSON.stringify(user)
  localStorage.setItem("user-detail",local)
  alert("data saved in local storage")
  document.getElementById("inp-text").value=""
  document.getElementById("inp-num").value=""
  document.getElementById("inp-email").value=""
  const output=document.getElementById("demo")
  const parse=JSON.parse(localStorage.getItem("user-detail"))
output.innerHTML=
`<p>name=${parse.name}</p>
<p>name=${parse.number}</p>
<p>name=${parse.email}</p>`
}
