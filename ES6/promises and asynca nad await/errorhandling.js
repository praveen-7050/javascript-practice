// let test=5 
/*
try{
    console.log(test);
}catch(error){
    console.log(error.message)
    console.log(error.name)
    console.log(error.stack)
    
}
*/
/*
const hello="hello this is praveen"
try{
    console.log(hello)
}catch(error){
   console.log(error.message);
}finally{
    console.log('from finnaly')  // finally is allways exective infact catch block is not written and if try has value also it exective
}

*/

// try{
//     throw new Error ('hello')
// }catch(error){
//    console.log(error.message);
// }finally{
//     console.log('from finnaly') 
// }
const divison = (inp1, inp2) => {
       if (isNaN(inp1) || isNaN(inp2)) 
       {
         throw new Error("this is invalid number or not a number");
       }
       return inp1 / inp2;
};
try {
  const answer=divison(5,"0");
  if(answer===Infinity){
    throw new Error("it not divided by not a number");
  }
} catch (error) {
  console.log(error.message);
} finally {
  console.log("from finnaly");
}
