// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting')


// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = "url('https://images.designtrends.com/wp-content/uploads/2015/11/06084012///////??Abstract-Brown-Leather-Background.jpg')";
    greeting.textContent = 'Mornings come with a blank canvas. Paint it as you like and call it a day. Wake up now and start creating your perfect day. Good morning from our team ! <br> Stay Home and Stay safe while you learn more about our amazing architects...  ';
    document.blerina.style.color = 'white';
  } else if (hour < 18) {
    // Afternoon
    document.blerina.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/6/65/Prishtina_at_night.jpg')";
    greeting.textContent = 'Good Afternoon, ';
    document.blerina.style.color = 'white';
  } else {
    // Evening
    //document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.blerina.style.color = 'white';
  }
}


// Run
showTime();
setBgGreet();