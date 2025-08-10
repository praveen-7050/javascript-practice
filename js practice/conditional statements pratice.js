 let num=18;

if(num%2!=0){
    console.log("odd")  
}else{
    console.log("even")  
}
 
 let surya = 109;

if (surya>100){
    console.log("null")
}else if(surya >= 90 && surya <= 100) {
  console.log("AA");
} else if (surya >= 80 && surya <=89) {
  console.log("AB");
} else if (surya >= 70 && surya <= 79) {
  console.log("BB");
} else if (surya >= 60 && surya <= 69) {
  console.log("BC");
} else if (surya >= 50 && surya <= 59) {
  console.log("CC");
} else if (surya >= 40 && surya <= 49) {
  console.log("CD");
} else if (surya >= 30 && surya <= 39) {
  console.log("CD");
} else if (surya <= 30 && surya >= 1) {
  console.log("FAIL");
}

//switch statement
let day = "monday";
  
switch (day) {
  case "monday": console.log("monday is weekday");
    break;
  case "Tuesday":console.log("Tuesday is weekday");
    break;
  case "wednesday":console.log("wednesday is weekday");
    break;
  case "Thursday": console.log("Thursday is weekday");
    break;
  case "Friday":console.log("Friday is weekday");
    break;
  case "saturday":console.log("Saturday is weekday");
    break;
  case "sunday":console.log("sunday is week-end");
    break;
    default:console.log("its is not a day")
}  

 //age
let age=-1
if (age >= 0 && age<=2) {
  console.log("infant");
} else if (age >= 3 && age <= 12) {
  console.log("child");
}else if(age>=13 && age<=19){
    console.log("Teen")
}else if(age>=20 && age<=64){
    console.log("Adult")
}else if(age>=65){
    console.log("Senior")
}else{
    console.log("it is not a age")
}
//number system
let no=-9

if(no>=1){
    console.log("postive")
}else if (no==0){
    console.log("netural")
}else if (no<0){
    console.log("negative")
}

// finding greater numberr among 3

let a=100
let b=10
let c=40

if((a>b)&&(a>c)){
    console.log("a is greater")
}else if ((b>a)&&(b>c)){
    console.log("B is greater")
}else if ((c>a)&&(c>b)){
    console.log("C is greater")
}


// finding user name and password

let username="Admin"

let password="123456"

if (username==="Admin"){
     console.log("Username is correct")
     
}else{
   console.log("username is incorrect")   
}
if(password==="123456"){
    console.log("password is correct")
}else{
    console.log("password is invalid")
}

// divisble finder
let number=24

if((number%3==0)&&(number%5==0)){
    console.log("its is divisble by both 3 and 5")
}else if((number%3==0)&&(number%5!=0)) {
    console.log("its divisble by 3")
}else if ((number%3!=0)&&(number%5==0)){
    console.log("its is divisble by 5")
}else if (number%3!=0 && number% 5!== 0) {
  console.log("not divible by either")
}


let username="Admin"

let password="123456"

if (username==="Admin"){
     console.log("Username is correct")
     
}else{
   console.log("username is incorrect")   
}
if(password==="123456"){
    console.log("password is correct")
}else{
    console.log("password is invalid")
}

// finding leap year

let lp=2004
if((lp%100!=0)&&(lp%4==0)||(lp%400==0)){
    console.log("its is leapyear")   
}else{
    console.log("it is not a leapyear")
}

// divisble finder
let number=24

if((number%3==0)&&(number%5==0)){
    console.log("its is divisble by both 3 and 5")
}else if((number%3==0)&&(number%5!=0)) {
    console.log("its divisble by 3")
}else if ((number%3!=0)&&(number%5==0)){
    console.log("its is divisble by 5")
}else if (number%3!=0 && number% 5!== 0) {
  console.log("not divible by either")
}

//grade average calculation

 let mark1=90
let mark2=50
let mark3=90

  let Average=(mark1+mark2+mark3)/3
//   console.log(Average)
if(mark1<=35||mark2<=35||mark3<=35){
   console.log("Result:Fail")
}
else if (Average>=35&&Average<=59){
    console.log("Result :pass")
    console.log("Grade: D")
    console.log("Average :" + Average);
}else if(Average>=60&&Average<=74){
  console.log("Result :pass");
  console.log("Grade:C");
  console.log("Average :" + Average); 
}else if(Average>=75&&Average<=89){
   console.log("Result :pass");
   console.log("Grade:B");
   console.log("Average :" + Average); 
}else if(Average>=90&&Average<=100){
   console.log("Result :pass");
   console.log("Grade:A");
   console.log("Average :"+Average); 
}





