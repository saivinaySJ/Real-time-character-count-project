"use strict";
const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-character");
const remainingCharacterEl = document.getElementById("remaining-character");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCharacterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
