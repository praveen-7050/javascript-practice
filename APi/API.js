// async function getData() {
//   try {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Something went wrong:", error);
//   }
// }
// getData();

//  fetch()
//  .then()
//  .catch()
// syntax for fecth api

fetch("https://mimic-server-api.vercel.app/todos/11")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    // let index =4;
    // let post =data[index] // the enpoint are not in id use this method to get the index value
    // console.log(post)
  })

  .catch((error) => {
    console.log(error);
  })

  fetch("https://mimic-server-api.vercel.app/movies/910784"),{
    
  }
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
    });
  