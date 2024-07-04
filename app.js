import { startTimer } from "./utils/startTimer.js";
import { editTime } from "./utils/editTime.js";
import {
  time,
  startBtn,
  settingsBtn,
  minutes,
  seconds,
  ring,
} from "./utils/elements.js";
ring.classList.add("ending");
startBtn.addEventListener("click", startTimer);

settingsBtn.addEventListener("click", editTime);
