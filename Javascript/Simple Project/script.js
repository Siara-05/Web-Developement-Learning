// Start count from 0
let count = 0;

// Get the span element where count will be shown
const countDisplay = document.getElementById("count");

// Get the "Click Me!" button
const clickBtn = document.getElementById("clickBtn");

// Get the "Reset" button
const resetBtn = document.getElementById("resetBtn");

// When clickBtn is clicked, increase count by 1
clickBtn.addEventListener("click", function () {
  count++; // Increase count
  countDisplay.textContent = count; // Show new count on screen
});

// When resetBtn is clicked, reset count to 0
resetBtn.addEventListener("click", function () {
  count = 0; // Reset count
  countDisplay.textContent = count; // Update the screen
});
 