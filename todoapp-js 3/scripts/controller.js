// glue b/w view and model / service
import { validateName } from "./validation.js"; 
import todoOperations from "./service.js";
import { init } from "./utils.js";
window.addEventListener('load', initialize);
let autoId ; 
function initialize(){
    bindEvents();
    autoId = init();
    showId();
}

function bindEvents(){
document.getElementById('add').addEventListener('click', addTask);
}
function showId(){
    document.querySelector('#id').innerText = autoId();
}
function addTask(){
    var task = readFields();
    if(verifyFields(task)){
        todoOperations.addTask(task);
        printTask(task);
        computeTotal();
        showId();
    }

    //console.log('Task is ', task);

}

function printTask(task){
    const tbody = document.querySelector('#task-list');
   // const str = `<tr> <td>`;
   const tr = tbody.insertRow();
   //tr.insertCell(0).innerText = 1001;
   let index = 0;
   for(let key in task){
        tr.insertCell(index).innerText = task[key];
        index++;
   }
   const td = tr.insertCell(index);
   td.appendChild(createIcon(task.id, toggleMarking));
   td.appendChild(createIcon(task.id, edit, 'fa-pen'));

}

function computeTotal(){
    document.querySelector('#total').innerText = todoOperations.getTotal();
    document.querySelector('#marked').innerText = 0;
    document.querySelector('#unmarked').innerText = 0;
}

function toggleMarking(){
    console.log('Toggle Marking Call');
}

function edit(){
     console.log('Edit Call');
}

function createIcon(id, fn, className='fa-trash'){
    // <i class="fa-solid fa-trash"></i>
    const iTag = document.createElement('i');
    iTag.className = `fa-solid ${className}`;
    iTag.addEventListener('click', fn);
    iTag.setAttribute('task-id', id);
    return iTag;
}

function verifyFields(task){
    var errorMessage = "";
    errorMessage = validateName(task.name);
    if(errorMessage){
    document.getElementById('name-error').innerText  = errorMessage;
    return false;
    }
   
        return true;
    
}

function readFields(){
    // read the fields
    // var id = document.getElementById('id').value;
    // var name = document.getElementById('name').value;
    const FIELDS = ['id', 'name', 'desc' , 'date','time','photo'];
    var task = {};
    for(let field of FIELDS){
        if(field=='id'){
             task[field] = document.getElementById(field).innerText;
             continue;
        }
        task[field] = document.getElementById(field).value;
        console.log(field);
        console.log(task)
    }
    return task;
}