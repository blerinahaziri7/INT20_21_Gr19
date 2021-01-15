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
    greeting.textContent = 'Good morning from our team ! Scroll down se you can learn more about us...  ';
    document.blerina.style.color = 'white';
  } else if (hour < 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon from our team ! Scroll down se you can learn more about us...';
    document.blerina.style.color = 'white';
  } else {
    // Evening
    greeting.textContent = 'Good Evening from our team ! Scroll down se you can learn more about us...';
    document.blerina.style.color = 'white';
  }
}


// Run
showTime();
setBgGreet();