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

/* ------------------------ Quote of the day ------------------ */
const quotes =
[
    '"Simplicity is the ultimate sophistication."', 
    '"When I’m working on a problem, I never think about beauty. But when I’ve finished, if the solution is not beautiful I know it’s wrong."',
    '"To create, one must first question everything."',
    '"I don’t know why people hire architects and then tell them what to do."',
    '"The mother art is architecture. Without an architecture of our own we have no soul of our own civilization."',
    '"There are 360 degrees, so why stick to one"',
    '"As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown."',
    '"Whatever good things we build end up building us."',
    '"Good buildings come from good people and all problems are solved by good design."'];


const authors = 
[
    '- Leonardo da Vinci', 
    '- Buckminster Fuller', 
    '- Eileen Gray', 
    '- Frank Gehry', 
    '- Frank Lloyd Wright', 
    '- Zaha Hadid', 
    '- Norman Foster', 
    '- Jim Rohn', 
    '- Stephen Gardiner' ];


const quoteBtn = document.getElementById("generate-btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const tweetBtn = document.querySelector(".tweet-quote");

var index = 1;

function shuffleQuotes(){
    index = Math.floor(Math.random()*quotes.length);                  //generates a random index
    quote.innerHTML = quotes[index];
    author.innerHTML = authors[index];
    quote.style.webkitFilter = "blur(2px)";
    author.style.webkitFilter = "blur(2px)";
}

var currentDate = new Date();                                       //gets current date
var strCurrentDate = String(currentDate.getDate());                  //gets the day from current date and converts it to a string

if (strCurrentDate == localStorage.getItem("yourQuoteDate") ) {     // checks if current date == the date you picked a quote so you can't pick more than once a day 
    var definedQuote = localStorage.getItem("yourQuote");             // gets "yourQuote" value from localStorage 
    var definedAuthor = localStorage.getItem("yourAuthor");            
    document.querySelector(".quote").innerHTML = definedQuote;          // sets the gotten value 
    document.querySelector(".author").innerHTML = definedAuthor;
    document.querySelector(".quote").style.webkitFilter = "blur(0px)";
    document.querySelector(".author").style.webkitFilter = "blur(0px)";
    document.getElementById("generate-btn").disabled = true;
}
else {         // if not => pick a quote
var shuffle = setInterval(shuffleQuotes,100);
}

quoteBtn.addEventListener("click", pickQuote);

function pickQuote(){                   // picks a quote by stopping the shuffle
    clearInterval(shuffle);
    quote.style.webkitFilter = "blur(0px)";
    author.style.webkitFilter = "blur(0px)";
    tweetBtn.style.display = "block";
    quoteBtn.disabled = true;

    if (typeof(Storage) !== "undefined") {      
        localStorage.setItem("yourQuote", quotes[index]);    // saves the picked quote to localStorage
        localStorage.setItem("yourAuthor", authors[index]);
        localStorage.setItem("yourQuoteDate", strCurrentDate);
      } ;
}