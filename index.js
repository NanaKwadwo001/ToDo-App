"use strict";
//ASSIGNING ALL DOM element
const btnCreate = document.querySelector(".create");
const asideEl = document.querySelector(".in-out-aside");
const createTaskBtn = document.querySelector(".add-task");
const taskContainer = document.querySelector(".task");
const taskInputEl = document.querySelector(".task-input");
const addTaskBtn = document.querySelector(".add-task-btn");
const cancelTaskBtn = document.querySelector(".cancel-task-btn");
const formEl = document.querySelector(".form");

//Pop up aside element
btnCreate.addEventListener("click", function () {
  asideEl.classList.add("hidden");
});
//INITIALS
//
// add task
let addTaskDeterminer = true;
//storage for all tasks
const allTasks = [];
//setting the form div empty
formEl.textContent = "";

// click on the Create Task
createTaskBtn.addEventListener("click", function () {
  if (addTaskDeterminer) {
    //create a new form element to input Task
    const inputTask = `
  <input type="text" class="task-input" />
  <button class="add-task-btn">Add</button>
  <button class="cancel-task-btn">Cancel</button>
  `;
    taskContainer.insertAdjacentHTML("afterend", inputTask);

    addTaskDeterminer = false;
  }
});

//click on the add Task button
addTaskBtn.addEventListener("click", function () {
  console.log("ADD");
});
