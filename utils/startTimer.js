import { editTime } from "./editTime.js";
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
  //
  if (startBtn.textContent.includes("start")) {
    setTimeout(() => {
      minutes.setAttribute("disabled", true);
      seconds.setAttribute("disabled", true);
    }, 1000);
    let minute = parseInt(minutes.value);
    let second = parseInt(seconds.value);

    let totalTime = minute * 60 + second;
    interval = setInterval(() => {
      if (totalTime <= 0) {
        ring.classList.add("ending");
        setTimeout(() => {
          alert("Time is up.");
        }, 200);
        clearInterval(interval);

        startBtn.textContent = "start";
        startBtn.disabled = true;
      } else {
        ring.classList.remove("ending");

        totalTime--;
        startBtn.textContent = "stop";
        let remainingMinutes = Math.floor(totalTime / 60);
        let remainingSeconds = totalTime % 60;
        minutes.value =
          remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
        seconds.value =
          remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
      }
      startBtn.disabled = false;
    }, 1000);
  } else {
    startBtn.textContent.includes("stop")
      ? clearInterval(interval)
      : console.log("ja");

    startBtn.textContent = "start";
  }
};
