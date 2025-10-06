fetch('https://official-joke-api.appspot.com/jokes/programming/random');
then(res=>console.log(res.json()))