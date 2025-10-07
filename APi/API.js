    async function getData() {
      try {
        const response = await fetch("https://api.example.com/data"); // order pizza
        const data = await response.json(); // open pizza box
        console.log(data); // enjoy the pizza
      } catch (error) {
        console.log("Something went wrong:", error); // if pizza place burned down 😅
      }
    }
 getData();