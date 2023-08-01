"use strict";
const btnCreate = document.querySelector(".create");
const asideEl = document.querySelector(".aside");

btnCreate.addEventListener("click", function () {
  asideEl.classList.toggle("hidden");
});
