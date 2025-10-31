let user = {
    name:"surya",
    age:20,
    login(){
        console.log(this.name)
    },
}
    let all = user.login()
    let alls = user.age
//    user.login()
console.log(user)


class users{
    name1= "praveen"
    name2= "surya"
    name3= "tharun"
    name4= "mani"
    name5= "premkesh"
    name1= "srkanth"
    age={
       age1:20,
       age2:30,
       age3:50,
       age4:10,
       age5:30,
       age6:20
    }
}

let allusers=new users;

console.log(allusers.name1)
console.log(allusers.age.age1)

class person{
    static numberofusers =0
    constructor(name,age){
      this.name=name;
      this.age=age;
      person.numberofusers++
    }
    city="tiruppur";
    isalive=true;
    login(email,password){
        this.email=email;
        this.password=password;
        return {email,password}
    }
    static welcomeuser(){
        console.log("welcome user ")  
    }
}

let person1=new person("praveen",20)
let person2 = new person("surya", 21);
let person3 = new person("tharun", 22);
let person4 = new person("mani", 23);
let person5 = new person("premkesh", 24);
person1.login("praveen.n7050@gmail.com","praxvn7050")
console.log("Number of users = "+person.numberofusers)
person.welcomeuser()
console.log(person1.name)
console.log(person1.email);
