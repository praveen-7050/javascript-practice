function imageblock(){
    let image = document.getElementById("imginp").value;
    let url=document.getElementById("imageout")
    url.src=image
    url.alt="this is an f1 car image "
    document.getElementById("imginp").value=""
    let image1 = document.getElementById("imginp1").value;
    let url1 = document.getElementById("imageout1");
    url1.src = image1;
    url1.alt = "this is an f1 car image ";
    document.getElementById("imginp1").value = "";
}
