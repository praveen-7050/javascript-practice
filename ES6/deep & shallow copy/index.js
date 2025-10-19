// deep copy

let num1 = 10;
let num2 = num1;

console.log(num1, num2);

let obj1 = { Name: "praveen", role: "developer" };
// let obj2=obj1 //call by reference;

let obj2 = { ...obj1 };

obj1.Name = "surya";
obj2.role = "Front end developer";
delete obj2.role;
obj2.postion = obj2.role;
obj2.postion = " front end developer";
console.log(obj1, obj2);

let deep1 = {
  name: "prem",
  age: 20,
  skills: {
    tools: "powerbi, vscode,sql",
    lang: "python,java",
  },
  place: "covai",
};

let deep2 = { ...deep1 };

deep1.skills = {
  personlaity: "communication",
};

console.log(deep1, deep2);

let arr1 = [1, 2, 3, [4, 5, 6]];

let arr2 = [...arr1];

arr1[0] = "one";
arr1[3][0] = "four"; // both are affected shallow copy

newarr = JSON.parse(JSON.stringify(...arr1));

console.log(arr1, arr2);
console.log(newarr);
