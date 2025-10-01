function inputtodropdown(){
    let input=document.getElementById("inputbox").value;
    let select=document.getElementById("select");
    let option=document.createElement("option");

    option.text=input;
    select.add(option);
    document.getElementById("inputbox").value=""
}

    function showValues() {
      let select = document.getElementById("select");
      let index = select.selectedIndex;
      let present = select.options[index].text;
      let past = index > 0 ? select.options[index - 1].text : "None";
      let future = index < select.options.length - 1 ? select.options[index + 1].text : "None";

      document.getElementById("output").innerHTML = "Past: " + past + "<br>" + "Present: " + present + "<br>" + "Future: " + future;
    }