const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Загружаем задачи из localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// Сохраняем задачи
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

// Отображаем задачи
function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            todos.splice(index, 1);
            saveTodos();
        };
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Добавляем задачу
addBtn.onclick = () => {
    const value = input.value.trim();
    if (value) {
        todos.push(value);
        saveTodos();
        input.value = '';
    }
}

// Отображаем задачи при загрузке
renderTodos();
