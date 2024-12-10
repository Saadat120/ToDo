// Verify that the task fields aren't empty
function validate() {
  const name = document.getElementById('name').value.trim();
  const details = document.getElementById('details').value.trim();
  const endDate = document.getElementById('endDate').value.trim();

  if (!name || !details || !endDate) {
    alert("All fields are required!");
    return false;
  }

  saveTask(name, details, endDate);
  return true;
}

// Save Task
function saveTask(name, details, endDate) {
  const task = { name, details, endDate };
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Go to page of ToDO Lists
function goToTasks() {
  window.location.href = 'tasks.html';
}

// Display all the todo tasks
function displayTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const mainDiv = document.getElementById('main');
  mainDiv.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'note';
    taskDiv.innerHTML = `
        <h1>${task.name}</h1>
        <p>${task.details}</p>
        <p>${task.endDate}</p>
        <button class="check" onclick="resolveTask(${index})">
           <i class="fa fa-check"></i>
        </button>
     `;
    mainDiv.appendChild(taskDiv);
  });
}

// Remove todo task
function resolveTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.splice(index, 1); // Remove the task at the specified index
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks(); // Refresh the task list
}

// Go back to page for adding new todo task
function goToForm() {
  window.location.href = 'index.html';
}