import {
  time,
  startBtn,
  settingsBtn,
  minutes,
  ring,
  seconds,
} from "./elements.js";
let interval;
export const startTimer = () => {
  if (startBtn.textContent.includes("start")) {
    let minute = parseInt(minutes.value);
    let second = parseInt(seconds.value);
    let totalTime = minute * 60 + second;
    interval = setInterval(() => {
      if (totalTime <= 0) {
        ring.classList.add("ending");

        clearInterval(interval);

        // alert("Timer is finished");

        startBtn.disabled = true;

        startBtn.textContent = "start";
      } else {
        console.log(second);
        startBtn.disabled = false;
        ring.classList.remove("ending");
        totalTime--;
        let remainingMinutes = Math.floor(totalTime / 60);
        let remainingSeconds = totalTime % 60;
        minutes.value =
          remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
        seconds.value =
          remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      }
    }, 1000);
    setTimeout(() => {
      startBtn.textContent = "stop";
    }, 1000);
  } else {
    startBtn.textContent.includes("stop")
      ? clearInterval(interval)
      : console.log("ja");

    startBtn.textContent = "start";
  }
};
