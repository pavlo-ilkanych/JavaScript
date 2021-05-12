const getById = (id) => document.querySelector(`#${id}`);
const getByClassName = (name) => document.querySelector(`.${name}`);

const input = getById('input');
const btn = getById('btn');
const tasksBlock = getByClassName('tasks');

btn.addEventListener('click', function(event) {
  addTodo(input.value);
  input.value = '';
});

function addTodo(value) {
  let todo = document.createElement('div');
  todo.style.height = '50px';
  todo.style.display = 'flex';
  todo.style.justifyContent = 'space-between';
  todo.style.alignItems = 'center';
  todo.style.marginTop = '10px';

  todo.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'gray';
    event.preventDefault();

  });

  todo.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = 'inherit';
    event.preventDefault();

  });

  let index = document.createElement('span');
  index.innerText = tasksBlock.children.length + 1;
  index.style.width = '1%';

  let redFlag = document.createElement(`div`);
  redFlag.style.height = `20px`;
  redFlag.style.width = `20px`;

  let todoText = document.createElement('span');
  todoText.innerText = value;
  todoText.style.width = '25%';

  let todoPriority = document.createElement('span');
  todoPriority.innerText = 'Low';
  todoPriority.style.width = '10%';

  let editBtn = document.createElement('button');
  editBtn.style.border = '1px solid black';
  editBtn.style.height = '50px';
  editBtn.style.width = '15%';
  editBtn.textContent = 'EDIT';
  editBtn.addEventListener('click', function(event) {
    let parent = event.target.parentNode;
    parent.style.textDecoration = 'line-through';
  });

  let removeBtn = document.createElement('button');
  removeBtn.style.border = '1px solid black';
  removeBtn.style.height = '50px';
  removeBtn.style.width = '15%';
  removeBtn.textContent = 'REMOVE';
  removeBtn.addEventListener('click', function(event) {
    let parent = event.target.parentNode;
    tasksBlock.removeChild(parent);
  });

  let flagBtn = document.createElement(`button`);
  flagBtn.style.border = `1px solid black`;
  flagBtn.style.height = `50px`;
  flagBtn.style.width = `15%`;
  flagBtn.textContent = `FLAG`;
  flagBtn.addEventListener(`click`, function(event){
    redFlag.style.backgroundImage = `url("flag.jpg")`;
    redFlag.style.backgroundSize = `100%`;
  });

  todo.append(index, redFlag, todoText, todoPriority, editBtn, removeBtn, flagBtn);
  tasksBlock.append(todo);
} 