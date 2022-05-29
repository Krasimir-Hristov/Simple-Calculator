// funcionality
const screen = document.querySelector(".screen");
const buttons = Array.from(document.querySelectorAll(".btn"));

const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const back = document.querySelector(".back");

buttons.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    screen.value += buttons.textContent;
  });
});

equal.addEventListener("click", (e) => {
  screen.value = eval(screen.value);
});

clear.addEventListener("click", (e) => {
  screen.value = "";
});

back.addEventListener("click", (e) => {
  screen.value = screen.value.slice(0, -1);
});

// Dark - White modes

const modeButton = document.querySelector(".btn-mode");
const calculator = document.querySelector(".calculator");

modeButton.addEventListener("click", (e) => {
  if (modeButton.textContent === "WHITE") {
    modeButton.textContent = "DARK";
    calculator.style.background = "#fff";
    screen.style.background = "#fff";
    screen.style.color = "#000";
    buttons.style.background = "white";
  } else {
    modeButton.textContent = "WHITE";
    calculator.style.background = "#000";
    screen.style.background = "#000";
    screen.style.color = "#fff";
    buttons.style.background = "#fff";

  

  }
});
