//selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event Listeners
todoButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo', 'm-2', 'bg-white', 'text-black', 'text-2xl', 'flex', 'justify-between', 'items-center');

    const newTodo = document.createElement('li');
    newTodo.innerText = 'Oi';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); 

    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
})

//Functions