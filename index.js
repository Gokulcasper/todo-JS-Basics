let addItemContainer = document.getElementById("todoList-id");
let todoInputId = document.getElementById("todo-id-input");
let todoAddButton = document.getElementById("todo-id-addButton");

let todoList= [
    {
        text:" Learn Html ",
        id:1
    },
    {
        text:" Learn Css ",
        id:2
    },
    {
        text:" Learn JS ",
        id:3
    },
]

let todoListCounts = todoList.length;

function onTodoStatusChange(labelId)
{
    // let checkboxIdElement = document.getElementById(checkbox);
    
    let labelIdElement = document.getElementById(labelId);
labelIdElement.classList.toggle("checked");
}


function onDeleteTodo(todoId){
let todoDeleteElement =document.getElementById(todoId);
addItemContainer.removeChild(todoDeleteElement);
}

function createAndAppendTodo(todo){
    let todoId ="todo" + todo.id;
    let checkboxId ="checkbox" + todo.id;
    let labelId ="label" + todo.id;


    let liElement = document.createElement("li");
liElement.classList.add("todo-li-class","d-flex","flex-row");
liElement.id=todoId;
addItemContainer.appendChild(liElement);

let inputElement = document.createElement("input");
inputElement.type="checkbox";
inputElement.classList.add("checkboxClassInput");
inputElement.id=checkboxId;
    inputElement.onclick=function(){
    onTodoStatusChange(labelId);
}
liElement.appendChild(inputElement);


let divElement = document.createElement("div");
divElement.classList.add("todo-divElement","d-flex","flex-row");
liElement.appendChild(divElement);

let labelElement = document.createElement("label");
labelElement.textContent=todo.text;
labelElement.setAttribute("for",checkboxId);
labelElement.id=labelId;
labelElement.classList.add("labelClassInput");
divElement.appendChild(labelElement);

let deleteDivElement = document.createElement("div");
deleteDivElement.classList.add("delete-div-container")
divElement.appendChild(deleteDivElement);

let deleteIcon = document.createElement("i");
deleteIcon.classList.add("ri-delete-bin-fill", "delete-icon" );

deleteIcon.onclick = function(){
    onDeleteTodo(todoId);
};
deleteDivElement.appendChild(deleteIcon)
}

for(let todo of todoList){
createAndAppendTodo(todo);
}


function onAddTodo(){
   let userInputValue = todoInputId.value;
   console.log(userInputValue);
   if(userInputValue == ""){
    alert("Enter Value");
    return;
   }
   todoListCounts = todoListCounts+1;
   let newTodo = {
    text:userInputValue,
    id:todoListCounts,
   };

   createAndAppendTodo(newTodo);
   todoInputId.value= " ";
}




todoAddButton.onclick=function(){
    onAddTodo();
}