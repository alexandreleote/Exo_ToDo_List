/* ADD A TASK */

const addBtn = document.querySelector('#btn'); // target the add button
const taskCard = document.querySelector(".todoCard"); // target the task card
const tasksContainer = document.querySelector("#todoCards"); // target the main container

addBtn.addEventListener('click', addTask); // add a task on click

function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelbtn = newTask.querySelector(".delBtn")
    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task" // set new task text to "New Task"
    newDelbtn.addEventListener('click', function () { // add delete event listener to new task
        deleteTask(newTask); // target the new task
    })

    tasksContainer.appendChild(newTask) // append new task to the tasks container
    updateCount(); // update count when adding a task
}

/* DELETE A TASK */

const delBtn = document.querySelector('.delBtn');
delBtn.addEventListener('click', function () { // delete default task on click
    deleteTask(taskCard); // target the right task
});

function deleteTask(task) {
    task.remove(); // remove the task
    updateCount(); // update count when removing a task
}

/* DELETE ALL TASKS */

const delAllBtn = document.querySelector("#delete-all-btn");
delAllBtn.addEventListener('click', deleteAllTasks);

function deleteAllTasks() {
    while (tasksContainer.firstChild) {// target the first child of the container while there is one
        tasksContainer.removeChild(tasksContainer.firstChild); // removes each task card
    }
    updateCount(); // update count after deletion
}

/* UPDATE COUNT */

const countText = document.querySelector('#count'); // target the count id 

function updateCount() {
    let countNumber = tasksContainer.children.length; // count the lenght of the different tasks present in the container
    countText.textContent = "Nombre de tâche(s) : " + countNumber; // change the text display of the #count div with the number of tasks
}

updateCount(); // Calling function when loading the page