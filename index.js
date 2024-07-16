let addItemContainer = document.getElementById("todoList-id");

let todoList= [
    {
        text:" Learn Html ",
    },
    {
        text:" Learn Css ",
    },
    {
        text:" Learn JS ",
    },
]
function createAppendTodo(todo){
    let liElement = document.createElement("li");
liElement.classList.add("todo-li-class","d-flex","flex-row");
addItemContainer.appendChild(liElement);

let inputElement = document.createElement("input");
inputElement.type="checkbox";
inputElement.classList.add("checkboxClassInput");
inputElement.id="addCheckbox";
liElement.appendChild(inputElement);

let divElement = document.createElement("div");
divElement.classList.add("todo-divElement","d-flex","flex-row");
liElement.appendChild(divElement);

let labelElement = document.createElement("label");
labelElement.textContent=todo.text;
labelElement.setAttribute("for","addCheckbox");
labelElement.classList.add("labelClassInput");
divElement.appendChild(labelElement);

}
// let inputElement = document.createElement("input");
// inputElement.type="checkbox";
// inputElement.id="addCheckbox";
// inputElement.classList.add("checkboxClassInput")
// addItemContainer.appendChild(inputElement);

// let labelElement = document.createElement("label");
// labelElement.textContent="Gokul";
// addItemContainer.appendChild(labelElement);
// labelElement.setAttribute("for","addCheckbox")
// labelElement.classList.add("labelClassInput");

// let myArray=[1,2,3,4,5];
// console.log(myArray);
for(let todo of todoList){
createAppendTodo(todo);
}
