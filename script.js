// document.addEventListener('DOMContentLoaded', (addTasks) => {
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');
 
//       // Load existing tasks from Local Storage
 
    
//     //Function to add tasks.
 
//     const addTask = function(taskText, save = true){
//      const taskText = taskInput.value.trim();
//      if(taskText === ""){
//          alert("Enter a task!");
//      }else {
 
//          //Create an li tag and assign its content to the input provided.
 
//          const li = document.createElement('li');
//          li.textContent = taskText;
 
//          //Create a remove button that will be used to remove a task.
 
//          const button = document.createElement('button');
//          button.textContent = "Remove";
//          button.classList.add('remove-btn');
 
//          //Listen for a click event on the remove button and remove the task.
 
//          button.addEventListener('click', () => {
//              taskList.removeChild(li);
//          });
 
//          //Append the button to the li containing the added task.
 
//          li.appendChild(button);
 
//          //Append the li containing the added task to the tasklist/ul.
 
//          taskList.appendChild(li);
 
//          //Assign the value of input to an empty string after obtaining and adding a task.
 
//          taskInput.value = '';
 
//          if (save) {
//              const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//              storedTasks.push(taskText);
//              localStorage.setItem('tasks', JSON.stringify(storedTasks));
//          }
 
//      }
//     }
 
//     //When the add task button is clicked the add task function is invoked.
 
//     addButton.addEventListener('click', addTask);
 
//     //When enter key is pressed the task is also added by calling the addTask function.
    
//     taskInput.addEventListener('keypress', (event) => {
//          if(event.key === 'Enter'){
//              addTask();
//          }
//      });
 
//      loadTasks();
//  });
 
//  function loadTasks() {
//      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
//      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
//  }
 
 
document.addEventListener('DOMContentLoaded', () => {  // Removed 'addTasks' parameter from DOMContentLoaded event
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
 
    // Function to add tasks
    const addTask = function(taskText = taskInput.value.trim(), save = true) {
        if (taskText === "") {
            alert("Enter a task!");
        } else {
            // Create an li tag and assign its content to the task provided
            const li = document.createElement('li');
            li.textContent = taskText;
 
            // Create a remove button to remove the task
            const button = document.createElement('button');
            button.textContent = "Remove";
            button.classList.add('remove-btn');
 
            // Listen for a click event on the remove button to remove the task
            button.addEventListener('click', () => {
                taskList.removeChild(li);
                removeTaskFromLocalStorage(taskText);
            });
 
            // Append the remove button to the li
            li.appendChild(button);
 
            // Append the li to the task list (ul)
            taskList.appendChild(li);
 
            // Clear the input field after adding the task
            taskInput.value = '';
 
            // Save the task to Local Storage if save is true
            if (save) {
                const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.push(taskText);
                localStorage.setItem('tasks', JSON.stringify(storedTasks));
            }
        }
    };
 
    // Function to remove tasks from Local Storage
    const removeTaskFromLocalStorage = function(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };
 
    // Load existing tasks from Local Storage
    const loadTasks = function() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    };
 
    // When the add task button is clicked, call the addTask function
    addButton.addEventListener('click', addTask);
 
    // When the Enter key is pressed, call the addTask function
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
 
    // Load tasks when the page is loaded
    loadTasks();
 });
 