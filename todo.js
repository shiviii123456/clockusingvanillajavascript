
const input=document.querySelector(".todoinput");
const button=document.querySelector(".todobutton");
const list=document.querySelector(".todolist");
const date=document.querySelector("#date");
const clear=document.querySelector(".todoinput1");

// const format={weekday:"long",month:"short",day:"numberic"};
// let todaydate=new Date();
// date.innerHTML=todaydate.toLocaleDateString("en-us",format);
var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var monthName=months[d.getMonth()]; 
var weekday=["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
var week=weekday[d.getDay()];
var dat=d.getDate(); 
date.innerHTML=week+","+dat+monthName;

console.log(monthName);
//event listener
document.addEventListener('DOMContentLoaded',gettodos);
button.addEventListener('click',addtodos);
list.addEventListener('click',deleted);
clear.addEventListener('click',clears);

function clears(){
    localStorage.clear();
    location.reload();
}

function addtodos(e){
 e.preventDefault();
console.log("hello");

const tododiv=document.createElement('div');
tododiv.classList.add("todo");
const todoli=document.createElement('li');
todoli.innerText=input.value;
todoli.classList.add("todo-item");
tododiv.appendChild(todoli);
savelocaltodos(input.value);
//adding buttons
const checked=document.createElement("button");
checked.innerHTML='<i class="fas fa-check"></i>';
checked.classList.add("completed-btn");
tododiv.appendChild(checked);
//check delete
const deleted=document.createElement("button");
deleted.innerHTML='<i class="fas fa-trash"></i>';
deleted.classList.add("trash-btn");
tododiv.appendChild(deleted);

list.appendChild(tododiv);
  //clear the todo
  input.value="";

}
function deleted(e){
      console.log(e.target);
      const item=e.target;
      if(item.classList[0]==="trash-btn"){
          const todo=item.parentElement;
          removelocaltodos(todo);
          todo.remove();
      }
      //checkmark
      if(item.classList[0]==="completed-btn"){
          const todo=item.parentElement;
         todo.classList.toggle("completed");
      }     
}

function savelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function gettodos(){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        const tododiv=document.createElement('div');
tododiv.classList.add("todo");
const todoli=document.createElement('li');
todoli.innerText=todo;
todoli.classList.add("todo-item");
tododiv.appendChild(todoli);

const checked=document.createElement("button");
checked.innerHTML='<i class="fas fa-check"></i>';
checked.classList.add("completed-btn");
tododiv.appendChild(checked);
//check delete
const deleted=document.createElement("button");
deleted.innerHTML='<i class="fas fa-trash"></i>';
deleted.classList.add("trash-btn");
tododiv.appendChild(deleted);

list.appendChild(tododiv);
   
    });  

}
function removelocaltodos(todo){
    let todos;
    if(localStorage.getItem('todos')===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem('todos'));

    }
    console.log(todo.children);
    const todoindex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

let searchbox=document.getElementById("search");
searchbox.addEventListener('click',searchbar);
function searchbar(e){
    e.preventDefault();
    let trlist=document.querySelector("#todolist");
    console.log(trlist);
}
