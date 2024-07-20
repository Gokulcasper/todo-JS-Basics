let inputIdElement = document.getElementById("todo-id-input");
let addButtonIdElement = document.getElementById("todo-id-addButton");
let ulIdElement = document.getElementById("todoList-id");
let todoSaveButton = document.getElementById("todoSaveButton");

function getItem(){
    let getData = localStorage.getItem("todoJSONValues");
    let parseData = JSON.parse(getData);
    return parseData;
}

let todoList= getItem();

let todoListLength = todoList.length;
console.log(todoListLength);

todoSaveButton.onclick=function(){
    localStorage.setItem("todoJSONValues",JSON.stringify(todoList));
}

function onDeleteTodo(todoId){
    let todoDeleteElementId = document.getElementById(todoId);
    ulIdElement.removeChild(todoDeleteElementId);
}

function onChangeStatus(labelId){
    let todoLabelElementId = document.getElementById(labelId);
    todoLabelElementId.classList.toggle("checked");
}

function createAndAppendTodo(todo){ 
    console.log(todo)
    let todoId="todo"+todo.id;
    let checkboxId="checkbok"+todo.id;
    let labelId="label"+todo.id;


let liElement = document.createElement("li");
liElement.classList.add("todo-li-class");
liElement.id=todoId;
ulIdElement.appendChild(liElement);

let inputElement = document.createElement("input");
inputElement.type="checkbox";
inputElement.id=checkboxId;
inputElement.classList.add("checkboxClassInput");
liElement.appendChild(inputElement);
inputElement.onclick=function()
{
    onChangeStatus(labelId)
}

let divlabelContainer = document.createElement("div");
divlabelContainer.classList.add("todo-divElement");
liElement.appendChild(divlabelContainer);

let labelElement = document.createElement("label");
labelElement.textContent=todo.text;
labelElement.setAttribute("for",checkboxId);
labelElement.classList.add("labelClassInput");
labelElement.id=labelId;
divlabelContainer.appendChild(labelElement);

let divDeleteIconContainer = document.createElement("div");
divDeleteIconContainer.classList.add("delete-div-container");
divlabelContainer.appendChild(divDeleteIconContainer);

let DeleteIconElement = document.createElement("i");
DeleteIconElement.classList.add("ri-delete-bin-fill", "delete-icon" );
divDeleteIconContainer.appendChild(DeleteIconElement);
DeleteIconElement.onclick=function()
{
    onDeleteTodo(todoId);
}

}

for(let todo of todoList)
{
    createAndAppendTodo(todo);
    
}

function  onAddTodo(){
    let inputElementValue = inputIdElement.value;
    if(inputElementValue == "")
    {
    alert("Please Enter The Value");
    return
    }
    todoListCount = todoListLength+1;
    let TodoIncreaseCount=
    {
        text:inputElementValue,
        id:todoListCount
    }

    todoList.push(TodoIncreaseCount);
    createAndAppendTodo(TodoIncreaseCount);
    inputIdElement.value=" ";
}


addButtonIdElement.onclick=function(){
    onAddTodo();
}