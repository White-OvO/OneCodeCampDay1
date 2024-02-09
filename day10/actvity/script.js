// Accessing elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("createtask");
const incompletedTaskHolder = document.getElementById("taskincomplete");
const completedTaskHolder = document.getElementById("taskcomplete");

// Adding event listener for form submission
const createNewTaskItem = function(taskString) {
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const editInput = document.createElement("input");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  
   //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}
  
// Function to add a task
function addTask(event) {
console.log("add Task");
  const listItem = createNewTaskElement(taskInput.value);
  incompletedTaskHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}

// Function to delete a task
function deleteTask(event) {

}