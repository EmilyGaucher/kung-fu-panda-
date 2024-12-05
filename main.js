// KF Panda Search

// Button Event Listener
let searchBtn = document.getElementById("btn");
let searchIn = document.getElementById("char-in");
let charName = document.getElementById("char-name");
let charImg = document.getElementById("char-img");
let charQuote = document.getElementById("char-quote");
//
let themeBtn = document.getElementById("theme-btn");
let themeIn = document.getElementById("theme-in");

// Search Button
searchBtn.addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = searchIn.value.toLowerCase();
  // If Statement
  if (name === "Po" || name === "dragon warrior" || name === "kung fu panda") {
    charName.innerHTML = "po";
    charQuote.innerHTML = "Buddy, I am the Dragon Warrior.";
    charImg.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charName.innerHTML = "Tigress";
    charQuote.innerHTML = "That Was Hardcore.";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charName.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug.";
    charImg.src = "img/mantis.png";
  } else if (name === "viper") {
    charName.innerHTML = "Viper";
    charQuote.innerHTML = "I dont need to bite to fight.";
    charImg.src = "img/viper.png";
  } else if (name === "oogway") {
    charName.innerHTML = "Oogway";
    charQuote.innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImg.src = "img/oogway.png";
  } else {
    charName.innerHTML = "???????";
    charQuote.innerHTML = "_______";
    charImg.src = "img/question-mark.png";
  }
}

themeBtn.addEventListener("click", themeChange);

function themeChange() {
  let theme = themeIn.value.toLowerCase();
  //
  if (theme === "dark" || theme === "black") {
    document.getElementById("h1").style.color = "white";
    document.getElementById("char-name").style.color = "white";
    document.getElementById("body").style.background = "rgba(0, 0, 0, 0.7)";
  } else if (theme === "light" || theme === "white") {
    document.getElementById("h1").style.color = "black";
    document.getElementById("char-name").style.color = "black";
    document.getElementById("body").style.background =
      "rgba(225, 225, 225, 0.7)";
  }
}
