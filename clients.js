var now = new Date().getHours();
let img= querySelector("#clientsId");

function backgroundImg(){
if (now < 10) {
  
  img.style.backgroundColor="white";
} else if (now < 20) {
   
    img.style.backgroundColor="white";
} else {
    
    img.style.backgroundColor="white";
}  
}

setInterval(backgroundImg, 1000 * 60);
backgroundImg();