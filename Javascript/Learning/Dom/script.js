

// SELECTING ELEMENTS
const title = document.getElementById("main-title");
const changeTextBtn = document.getElementById("change-text-btn");
const addParaBtn = document.getElementById("add-paragraph-btn");
const toggleClassBtn = document.getElementById("toggle-class-btn");
const removeBoxBtn = document.getElementById("remove-box-btn");
const inputBox = document.getElementById("input-box");
const inputDisplay = document.getElementById("input-display");
const box = document.getElementById("box");

// CHANGE TEXT CONTENT
changeTextBtn.addEventListener("click", () => {
  title.textContent = "DOM is Awesome!";
});

// CREATE & APPEND NEW PARAGRAPH
addParaBtn.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "🧠 This paragraph was added using JavaScript!";
  document.querySelector(".container").appendChild(newPara);
});

// TOGGLE A CLASS
toggleClassBtn.addEventListener("click", () => {
  title.classList.toggle("highlight");
});

// REMOVE BOX
removeBoxBtn.addEventListener("click", () => {
  if (box) {
    box.remove();
  }
});

// INPUT EVENT HANDLING
inputBox.addEventListener("input", () => {
  inputDisplay.textContent = "You typed: " + inputBox.value;
});
