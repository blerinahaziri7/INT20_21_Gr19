// Change background color on timer
var i = 0;
function changeBgColor() {
    var colorPalette = ["rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.15)",
    "rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0.35)"];
    var divToChange = document.getElementById("hotel-sliders");
    divToChange.style.backgroundColor = colorPalette[i];

    if (i == 0) {
        order = "ascending";
    }
    else if (i == (colorPalette.length - 1)) {
        order = "descending";
    }

    switch(order) {
        case "ascending": i++;
        break;
        case "descending": i--;
        break;
    }
}
setInterval(changeBgColor, 2000);

// Button Animations with jQuery
$(document).ready(function(){
    $(".hidden").hide();
    $("#main-btn").on("click", function () {
        $("#hidden-div").show(800, function() {
            $("#first-hidden-btn").fadeIn(400, function(){
                $("#second-hidden-btn").fadeIn(400, function(){
                    $("#third-hidden-btn").fadeIn(400, function(){
                        $("#fourth-hidden-btn").fadeIn(400, function(){
                        $("#fifth-hidden-btn").fadeIn(400);
                        }); 
                    });
                });
            });
        });
    });
    
    $("#main-btn").on("click", function () {
        doBounce($(this), 2, '10px', 200);
    });
    function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
            element.animate({marginTop: '-=' +distance, 
                            height: "80px", 
                            width: "310px"}, speed)
                    .animate({marginTop: '+=' +distance, 
                            height: "60px", 
                            width: "280px"}, speed)
        }        
    }
    
    $("#fifth-hidden-btn").click(() => {
        alert("You will be taken to the link with ID: " 
                + $("#link-to-get").attr("href"));
    });
});



/* To top Button */

const toTopButton = document.getElementById("to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.scrollY > 730) { 
        toTopButton.classList.add("show"); // show button
    }
    else {
        toTopButton.classList.remove("show"); // hide button
    }
}

toTopButton.addEventListener("click", function(){
    window.scrollTo(0,0); // scroll back to the top
})