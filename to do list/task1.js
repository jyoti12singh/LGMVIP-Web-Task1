const data =new Date();
const todoForm=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo-input");
const todoList=document.querySelector("#todo-list");
const editForm=document.querySelector("#edit-form");
const editInput=document.querySelector("#edit-input");
const cancelEditBtn=document.querySelector("#cancel-edit-btn");

const timeElapsed=Date.now();
const today=new Date(timeElapsed);
document.getElementById("date").innerHTML=today.toDateString();

function time() {
    const data =new Date();
    let h=data.getHours();
    let m=data.getMinutes();
    let s=data.getSeconds();

    if(h < 10)
       h="0" +h;
    if(m < 10)
       m="0" +m;
    if(s < 10)
       s="0" +s;
    document.getElementById("hour").innerHTML =h + ":" + m + ":" + s;
    setTimeout('time()',500);
}
todoForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const inputValue=todoInput.value;
   if(inputValue)
     saveTodo(inputValue); //save function
   if(inputValue==='')
   alert("You Must Write Something!");
   todoInput.value="";

    
})

const saveTodo =(text) =>{
   const todo=document.createElement("div");
   todo.classList.add("todo");

   const todoTitle=document.createElement("h3");
   todoTitle.innerText=text;
   todo.appendChild(todoTitle);

   const doneBtn=document.createElement("button");
   doneBtn.classList.add("finish-todo");
   doneBtn.innerHTML='<i class="fa-solid fa-check">Done</i>';
   todo.appendChild(doneBtn);

   const editBtn=document.createElement("button");
   editBtn.classList.add("edit-todo");
   editBtn.innerHTML='<i class="fa-solid fa-pen">Edit</i>';
   todo.appendChild(editBtn);

   const removeBtn=document.createElement("button");
   removeBtn.classList.add("remove-todo");
   removeBtn.innerHTML='<i class="fa-solid fa-xmark">Delete</i>';
   todo.appendChild(removeBtn);

   todoList.appendChild(todo);
   todoInput.Value="";
   todoInput.focus();
  
}

document.addEventListener("click",(e) =>{
    const targetE1=e.target;
    const parentE1=targetE1.closest("div");
    let todoTitle;

    if(parentE1 && parentE1.querySelector("h3"))
       todoTitle=parentE1.querySelector("h3").innerText;

    if(targetE1.classList.contains("finish-todo"))
    {
        parentE1.classList.toggle("done");
       
    }
      

    if(targetE1.classList.contains("remove-todo"))
       {
        parentE1.remove();
       
       }

    if(targetE1.classList.contains("edit-todo")){
        toggleForms();
        editInput.value=todoTitle;
        oldInputValue=todoTitle;
      
    }
})
const toggleForms =() => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");

}
cancelEditBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    toggleForms();
})
editForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const editInputValue=editInput.value;
    if(editInputValue)
       updateTodo(editInputValue); //update value function

    toggleForms();
})
const updateTodo=(text) => {
    const todos =document.querySelectorAll(".todo");
    todos.forEach((todo) => {
        let todoTitle =todo.querySelector("h3")
        if(todoTitle.innerText === oldInputValue)
        todoTitle.innerText = text;
    })
}