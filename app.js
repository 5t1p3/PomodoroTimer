import { startTimer } from "./utils/startTimer.js";
import { editTime } from "./utils/editTime.js";
import {
  time,
  startBtn,
  settingsBtn,
  minutes,
  seconds,
} from "./utils/elements.js";
startBtn.addEventListener("click", startTimer);
settingsBtn.addEventListener("click", editTime);
