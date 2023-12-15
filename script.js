function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value + ' <button class="delete-button" onclick="deleteTask(this)">Delete</button>';
    
    taskList.appendChild(newTask);
    taskInput.value = "";
}

function deleteTask(button) {
    var taskToDelete = button.parentNode;
    taskToDelete.parentNode.removeChild(taskToDelete);
}
