import { time, startBtn, settingsBtn, minutes, seconds } from "./elements.js";
export const editTime = () => {
  minutes.toggleAttribute("disabled");
  seconds.toggleAttribute("disabled");
};
