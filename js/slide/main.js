import { track } from "./dom.js";

window.addEventListener('DOMContentLoaded', () => {
  track.innerHTML += track.innerHTML;
});