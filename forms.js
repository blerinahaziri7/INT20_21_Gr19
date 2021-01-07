
function validation()
{
  var form =document.querySelector("#form1");
  var email=document.querySelector("#email").value;
  var form=document.querySelector("#text1");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ ;
  


  if (email.match(pattern)){ 
    form.classList.add("valid");
    form.classList.remove("invalid");
    text1.innerHTML="Your email Address is Valid"; 
    text1.style.color= "green";

  } 
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text1.innerHTML="Please enter valid email address";
    text1.style.color= "red";
  }

 
  }

 
   function validation1(){
    var form1=document.querySelector("#form1");
    var mobile=document.querySelector("#phonenumber").value;
    var pattern1=/^[\d,\s,\+,\-]{5,20}/;
    var form1=document.querySelector("#text2");


    if (mobile.match(pattern1)){
        form1.classList.add("valid");
        form1.classList.remove("invalid");
        text2.innerHTML="Your Phonenumber is Valid"; 
        text2.style.color= "green";
      }
      else {
        form1.classList.remove("valid");
        form1.classList.add("invalid");
        text2.innerHTML="Please enter valid phonenumber";
        text2.style.color= "red";
}

}

function validation2(){
    var form=document.querySelector("#form1");
    var name=document.querySelector("#fname").value;
    var pattern2=/^[a-zA-Z]+[\-'\s]?[a-zA-Z ]+$/;
    var form=document.querySelector("#text3");


    if (name.match(pattern2)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text3.innerHTML="You entered your name"; 
        text3.style.color= "green";
      }
      else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text3.innerHTML="Please enter your name";
        text3.style.color= "red";
}

}