//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List item

var createNewTaskElement = function(taskString) {
	// create List Item
  var listItem = document.createElement("li");
  // input checkbox
  var checkBox = document.createElement("input");
  // label
  var label = document.createElement("label");
  // input (text)
  var editInput = document.createElement("input");
  // button.edit
  var editButton = document.createElement("button");
  // button.delete
  var deleteButton = document.createElement("button");
  
  //Each element needs modified 
  
  checkBox.type = "checkBox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  // Each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

	return listItem;
}