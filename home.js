const toTopButton = document.getElementById("to-top-btn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.scrollY > 730) { 
        toTopButton.style.display = "block"; // show button
    }
    else {
        toTopButton.style.display = "none"; // hide button
    }
}

toTopButton.addEventListener("click", function(){
    window.scrollTo(0,0); // scroll back to the top
})