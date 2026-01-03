const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageInput = document.getElementById("message");

const errors = document.querySelectorAll(".error");
const successMsg = document.querySelector(".success");

const nameRegex = /^[A-Za-z\s]{3,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  errors.forEach(err => err.textContent = "");
  successMsg.textContent = "";


  if (!nameRegex.test(nameInput.value.trim())) {
    errors[0].textContent = "Enter a valid name (min 3 letters)";
    isValid = false;
  }


  if (!emailRegex.test(emailInput.value.trim())) {
    errors[1].textContent = "Enter a valid email address";
    isValid = false;
  }

  if (!passwordRegex.test(passwordInput.value)) {
    errors[2].textContent =
      "Password must contain 8 chars, upper, lower, number & special char";
    isValid = false;
  }

  if (messageInput.value.trim().length < 10) {
    errors[3].textContent = "Message must be at least 10 characters";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "Form submitted successfully ✔";
    successMsg.style.color = "green";

    form.reset();
  }
});

const addBtn = document.getElementById("ADD");
const input = document.getElementById("Tdlist");
const listDiv = document.querySelector(".list");
const alertBox = document.getElementById("alert");
const clearAllBtn = document.querySelector(".clearButton");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = input.value.trim();

  if (text === "") {
    alertBox.textContent = "Please enter a task!";
    alertBox.style.padding = "10px";
    return;
  }

  alertBox.textContent = "";

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "REMOVE";
  removeBtn.id = "Remove"; 

  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(removeBtn);

  listDiv.appendChild(li);

  input.value = "";
}

clearAllBtn.addEventListener("click", function () {
  listDiv.innerHTML = "";
});


let timeLeft1 = 0;   
let interval1 = null;
let paused1 = false;

const display1 = document.getElementById("Time");
const pauseBtn1 = document.getElementById("puse");
const resetBtn1 = document.getElementById("reset");

function updateDisplay1() {
  let hours = Math.floor(timeLeft1 / 3600);
  let minutes = Math.floor((timeLeft1 % 3600) / 60);
  let seconds = timeLeft1 % 60;

  display1.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

function startTimer1() {
  interval1 = setInterval(() => {
    timeLeft1++;
    updateDisplay1();
  }, 1000);
}

pauseBtn1.addEventListener("click", () => {
  if (!paused1) {
    clearInterval(interval1);
    pauseBtn1.textContent = "Resume Timer";
    paused1 = true;
  } else {
    startTimer1();
    pauseBtn1.textContent = "Pause Timer";
    paused1 = false;
  }
});

resetBtn1.addEventListener("click", () => {
  clearInterval(interval1);
  timeLeft1 = 0;
  paused1 = false;
  pauseBtn1.textContent = "Pause Timer";
  updateDisplay1();
  startTimer1();
});

updateDisplay1();
startTimer1();


let timeLeft2 = 0;   
let interval2 = null;
let paused2 = false;

const display2 = document.getElementById("Time2");
const pauseBtn2 = document.getElementById("puse2");
const resetBtn2 = document.getElementById("reset2");

function updateDisplay2() {
  let hours = Math.floor(timeLeft2 / 3600);
  let minutes = Math.floor((timeLeft2 % 3600) / 60);
  let seconds = timeLeft2 % 60;

  display2.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
}

function startTimer2() {
  interval2 = setInterval(() => {
    timeLeft2++;
    updateDisplay2();
  }, 1000);
}

pauseBtn2.addEventListener("click", () => {
  if (!paused2) {
    clearInterval(interval2);
    pauseBtn2.textContent = "Resume Timer";
    paused2 = true;
  } else {
    startTimer2();
    pauseBtn2.textContent = "Pause Timer";
    paused2 = false;
  }
});

resetBtn2.addEventListener("click", () => {
  clearInterval(interval2);
  timeLeft2 = 0;
  paused2 = false;
  pauseBtn2.textContent = "Pause Timer";
  updateDisplay2();
  startTimer2();
});

updateDisplay2();
startTimer2();

function openMap() {
 
  const address = "Kodumurthi Yellanur";


  const mapURL =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);


  window.open(mapURL, "_blank"); 
}