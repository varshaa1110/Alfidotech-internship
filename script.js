function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span onclick="removeTask(this)">❌</span>`;
  taskList.appendChild(li);

  input.value = "";
}

function removeTask(element) {
  element.parentElement.remove();
}
