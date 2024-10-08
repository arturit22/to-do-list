document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const li = document.createElement("li");
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `${taskText}<button class="btn btn-danger btn-sm btn-delete">Delete</button>`;
            
            taskList.appendChild(li);
            taskInput.value = '';

            li.querySelector('.btn-delete').addEventListener("click", () => {
                taskList.removeChild(li);
            });
        }
    }
    
addButton.addEventListener("click", addTask);
});
