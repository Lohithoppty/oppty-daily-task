
const DURATION = 120;
const TEXT = document.getElementById("quote").innerText.trim();

  let timeLeft = DURATION;
  let timer;
  let startTime;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const timerEl = document.getElementById("timer");
const inputEl = document.getElementById("input");
const resultMsg = document.getElementById("resultMsg");

  
const wpmEl = document.querySelector(".card:nth-child(1) .value");
const accEl = document.querySelector(".card:nth-child(2) .value");
const charEl = document.querySelector(".card:nth-child(3) .value");
const errEl = document.querySelector(".card:nth-child(4) .value");

      function resetAll() {
            clearInterval(timer);
            timeLeft = DURATION;
            timerEl.textContent = timeLeft;
            inputEl.value = "";
            inputEl.disabled = true;
            resultMsg.textContent = "";
            wpmEl.textContent = "0";
            accEl.textContent = "100%";
            charEl.textContent = "0";
            errEl.textContent = "0";
            startTime = null;
         }

       // start button
      startBtn.addEventListener("click", () => {
        resetAll();
        inputEl.disabled = false;
        inputEl.focus();
        startTime = Date.now();

        timer = setInterval(() => {
          timeLeft--;
          timerEl.textContent = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timer);
            inputEl.disabled = true;
            resultMsg.textContent = "⏰ Time is up! Check your results above.";
          }
        }, 1000);
      });

// reset button
resetBtn.addEventListener("click", resetAll);

     
inputEl.addEventListener("input", () => {
        const typed = inputEl.value;
        charEl.textContent = typed.length; // characters

        //error count
     let errors = 0;
        for (let i = 0; i < typed.length; i++) {
          if (typed[i] !== TEXT[i]) {
            errors++;
          }
        }
        errEl.textContent = errors;

        //  accuracy
     let accuracy =
          typed.length > 0
            ? Math.round(((typed.length - errors) / typed.length) * 100)
            : 100;
        accEl.textContent = accuracy + "%";

        //  wpm
     let minutes = startTime ? (Date.now() - startTime) / 60000 : 0;
     let wpm = minutes > 0 ? Math.round(typed.length / 5 / minutes) : 0;
        wpmEl.textContent = wpm;

        // finish when full text typed
        if (typed === TEXT) {
          clearInterval(timer);
          inputEl.disabled = true;
          resultMsg.textContent = "✅ Typing completed! Results are shown above.";
        }
      });