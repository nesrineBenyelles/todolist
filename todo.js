
var todos= document.getElementById("task");
var list= document.getElementById("list");
function AddTask(){
   var task=document.createElement('li');
   task.innerHTML='<input type="checkbox">'+todos.value;
   list.appendChild(task);
   todos.value="";

}

