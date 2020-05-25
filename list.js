//Defining UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load Event Listeners

loadEventListeners();

function loadEventListeners(){
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter Tasks event
  filter.addEventListener('keyup', filterTasks);

}

function addTask(e){
  if(taskInput.value === ''){
    alert('add task');
  }

  //Create Element
  const li = document.createElement('li');
  //add class name
  li.className = 'collection-item';
  //create the text
  li.appendChild(document.createTextNode(taskInput.value));
  //create link item aka delete icon
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  //append link to li
  li.appendChild(link);
  //now append to ul
  taskList.appendChild(li);
  //clear input
  taskInput.value = '';

  e.preventDefault();

}

//Remove Task

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
    }
  }
}

//Clear task

function clearTasks(e){

  //taskList.innerHTML = '';

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
    } else{
        task.style.display = 'none';
    }
  })
}