// normal class
class laptop {
  laptopname = "";
  constructor(name) {
    this.laptopname = name;
  }
}

let deviceName = new laptop("Asus");

console.log(deviceName);

// Inheretiance

class forumla1 {
  favcar;
  favteam;
  favdriver;
  constructor(favcar, favteam, favdriver) {
    this.favcar = favcar;
    this.favteam = favteam;
    this.favdriver = favdriver;
  }
}

let f1 = new forumla1("ferrari", "maclren", "Lando");
console.log(f1);

class championship extends forumla1 {
  champdriver;
  champteam;

  constructor(favcar, favteam, favdriver, champdriver, champteam){
    super(favcar, favteam, favdriver);
    this.champdriver = champdriver;
    this.champteam = champteam;
}
    display(){
      console.log(`championship driver is ${this.champdriver} and the championship team is ${this.champteam} `)
}
}
let champ = new championship("ferrari", "maclren", "Lando", "lando norris", "maclren");
console.log(champ.display());
  

