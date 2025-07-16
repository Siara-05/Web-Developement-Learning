
// Function to generate a random hex color and apply it to the background
const getcolor = () => {
   
    //Hex code

     // Generate a random number between 0 and 1677215 (approx. #FFFFFF)
    const randomNumber = Math.floor(Math.random() * 1677215);
    
    // Convert the number to a hexadecimal string and prepend a '#'
    const randomCode = '#' + randomNumber.toString(16);
   
   // Set the background color of the body to the generated color
    document.body.style.backgroundColor = randomCode;
    
    // Update the <h1> element with the new color code
    document.getElementById('clr-code').innerText = randomCode;
    
     // Copy the color code to the user's clipboard
    navigator.clipboard.writeText(randomCode);
} 

// Event calling
// Attach a click event listener to the button
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)


// Initial calling
// Call the function once when the page loads
getcolor();

