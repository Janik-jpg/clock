//Select clock hands
const hourHand = document.querySelector('.hour-hand'); //Selects the hour hand element for dynamic rotation.
const minHand = document.querySelector('.min-hand'); //Selects the minute hand element.
const secondHand = document.querySelector('.second-hand'); //Selects the second hand element.

//Main function that calculates the rotation angles for each hand based on the current time.
function setClock() {
  const now = new Date();

  //Second hand adjustments
  const seconds = now.getSeconds(); //Gets the current date and time.
  const secondsDegrees = (seconds / 60) * 360 + 90; //Calculates the rotation angle for the second hand.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //Applies the calculated rotation to the second hand.

  //Minute hand adjustments
  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  //Hour hand adjustments
  const hours = now.getHours();
  const hoursDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90; 
  hourHand.style.transform = `rotate(${hoursDegrees - 180}deg)`; //Inverse the hour hand 180 degrees for a correct angle.
}

//Updates the clock every second by calling the setClock function.
setInterval(setClock, 1000);

//Initializes the clock on load
setClock();
