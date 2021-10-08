const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";


window.addEventListener("storage",storageEvent)



function saveTodo(){
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos));

}



function deleteTodo(event){
   const li = event.target.parentElement;
   li.remove();
  toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id));
  saveTodo();

}

function lineThrough(event){
    const list = event.target.parentElement;
    
    list.classList.toggle("line");

   
    
    

}




function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.style.fontSize = "15px";
    button.style.backgroundColor = "transparent";
    button.style.borderTopColor = "transparent";
    button.style.borderBottomColor = "transparent";
    button.style.borderLeftColor = "transparent";
    button.style.borderRightColor = "transparent";
    button.addEventListener("click", deleteTodo);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.addEventListener("click", lineThrough);
    checkbox.style.boxSizing = "20px";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);

}





function submitTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
        
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj)
    saveTodo();
    
}

todoForm.addEventListener("submit", submitTodo)


const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
    
}



