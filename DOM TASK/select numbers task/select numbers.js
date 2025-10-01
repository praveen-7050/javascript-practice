    function generateDropdown() {
      let input = document.getElementById("numInput").value;
      let dropdown = document.getElementById("dropdown");
      dropdown.innerHTML = "";

      for (let i = 1; i <= input; i++) {
        let opt = document.createElement("option");
        opt.text = i;
        dropdown.add(opt);
      }
    }

    document.getElementById("dropdown").onchange = function () {
      let count = this.value;
      let formArea = document.getElementById("formArea");
      formArea.innerHTML = "";

      for (let i = 1; i <= count; i++) {
        formArea.innerHTML += 
          `<p>Username ${i}: <input type="text"> 
           Password ${i}: <input type="password"></p>`;
      }

    }