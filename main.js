const bosh=document.querySelector(".start");
  bosh.addEventListener("click", function(){
    const ra1=document.getElementById("r1").value;
    const ra2=document.getElementById("r2").value;
    const ra3=document.getElementById("r3").value;
    const vaq=document.getElementById("vaqt").value;
    let inter=null
    if(!inter){
     inter=setInterval(function(){
        document.body.style.backgroundColor=ra1;
    }, vaq)
    setInterval(function(){
        document.body.style.backgroundColor=ra2;
    }, 2*vaq)
    setInterval(function(){
        document.body.style.backgroundColor=ra3;
    }, 3*vaq)}
 })