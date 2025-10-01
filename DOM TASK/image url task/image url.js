function imagegenerator(){
    let image2 = document.getElementById("imginp2").value;
    let url2=document.getElementById("imageout2")
    url2.src=image2
    url2.alt="this is an f1 car image "
    document.getElementById("imginp2").value=""
}
