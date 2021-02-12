/*
 * Excercise 1
 *
 */

/*
 * Then write a function that changes the text and the color inside the div
 *
 */
document.getElementById("color-block").onclick = function () {
  changeColor();
};
function changeColor() {
  //Write a condition determine what color it should be changed to
  if (
    document.getElementById("color-block").style.backgroundColor ==
    "rgb(240, 128, 128)"
  ) {
    document.getElementById("color-block").style.backgroundColor = "#008080";
    //change the background color using JS
    const span = document.getElementById("color-name");
    span.textContent = "#008080";
    //Change the text of the color using the span id color-name
  } else {
    //change the background color using JS
    document.getElementById("color-block").style.backgroundColor = "#f08080";
    //Change the text of the color using the span id color-name
    const span = document.getElementById("color-name");
    span.textContent = "#F08080";
  }
}

/*
 * For excercise 2, you need to write an event handler for the button id "convertbtn"
 * on mouse click. For best practice use addEventListener.
 *
 */
const block = document.getElementById("convertbtn");
block.addEventListener("click", convertTemp);
/*
 * Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
 *
 */

function convertTemp() {
  //Calculate the temperature here
  temp_celsius = (document.getElementById("f-input").value - 32) * (5 / 9);
  //Send the calculated temperature to HTML
  const span = document.getElementById("c-output");
  span.textContent = temp_celsius;
}
