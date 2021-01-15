
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
//log in validation
function Validation(){
  var form=document.querySelector("#login");
  var user=document.querySelector("#user").value;
  var pattern=/([A-Za-z._])\w+/g;
  var text=document.querySelector("#text");


  if (user.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML="You username is valid"; 
      text.style.color= "purple";
    }
    else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML="Please enter a valid username";
      text.style.color= "red";
}
}

function Validation1(){
  var form=document.querySelector("#login");
  var input=document.querySelector("#psw").value;
  var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  var text=document.querySelector("#text");


  if (input.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML="You password is valid"; 
      text.style.color= "purple";
    }
    else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML="Please enter a valid password";
      text.style.color= "red";
}
}
// validation of register
function Validation2(){
  var form=document.querySelector("#register");
  var user=document.querySelector("#user").value;
  var pattern=/([A-Za-z._])\w+/g;
  var text=document.querySelector("#text1");


  if (user.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text1.innerHTML="You username is valid"; 
      text1.style.color= "purple";
    }
    else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text1.innerHTML="Please enter a valid username";
      text1.style.color= "red";
}
}

function Validation3()
{
  var form =document.querySelector("#register");
  var email=document.querySelector("#email_").value;
  var form=document.querySelector("#text3");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ ;
  


  if (email.match(pattern)){ 
    form.classList.add("valid");
    form.classList.remove("invalid");
    text3.innerHTML="Your email Address is Valid"; 
    text3.style.color= "purple";

  } 
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text3.innerHTML="Please enter valid email address";
    text3.style.color= "red";
  }

 
  }

  
function Validation4(){
  var form=document.querySelector("#register");
  var input=document.querySelector("#psw").value;
  var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  var form=document.querySelector("#text4");


  if (input.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text4.innerHTML="You password is valid"; 
      text4.style.color= "purple";
    }
    else {
      form.classList.remove("valid");
      form.classList.add("invalid");
      text4.innerHTML="Please enter a valid password";
      text4.style.color= "red";
}
}

function ErrorHandling(){
  var username=document.querySelector("#username").value;
  var email=document.querySelector("#email").value;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ ;
  var pattern2=/^[a-z\d]+$/;
  
   
   try {if (username.match(pattern2));
     throw "Username is not valid";
     
  }
  catch(err){
    alert(err);
  }
  

  try {if (email.match(pattern))
    throw "Email is valid";
  }
  catch(err) {
    alert(err);
  }
  }