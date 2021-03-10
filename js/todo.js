const todoForm = document.querySelector(".jsTodoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".jsTodoList");
const isTrue = "true";

const todos = "todos";

let currentElemId = 1;
let todoArray = [];

function loadTodos() {
    const loadedTodos = localStorage.getItem(todos);
    if (loadedTodos !== null) {
        const parsedTodos = JSON.parse(loadedTodos);

        parsedTodos.forEach(function (todo) {
            paintTodo(todo.text);
        });
    }
}

function saveTodoArray() {
    localStorage.setItem(todos, JSON.stringify(todoArray));
}

function paintTodo(text) {
    const todoElem = document.createElement("li");
    const chkBox = document.createElement("input");
    const delBtn = document.createElement("span");
    const span = document.createElement("span");

    const elemId = currentElemId;
    currentElemId += 1;

    chkBox.type = "checkbox";
    chkBox.addEventListener("click", chkBoxClicked);
    chkBox.className = "checkBox";
    chkBox.value = false;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteTodo);
    delBtn.className = "btn";

    span.innerText = text;

    todoElem.appendChild(chkBox);
    todoElem.appendChild(span);
    todoElem.appendChild(delBtn);
    todoElem.id = elemId;

    todoList.appendChild(todoElem);

    const todoObj = {
        text: text,
        id: elemId,
    };

    todoArray.push(todoObj);

    saveTodoArray();
    // localStorage.setItem();
}

function chkBoxClicked(event) {
    // console.log(event.target);

    event.target.value = !(event.target.value === isTrue);

    const contentStyle = event.target.parentNode.querySelector("span").style;

    if (event.target.value === isTrue) {
        contentStyle.textDecoration = "line-through";
    } else {
        contentStyle.textDecoration = "";
    }
}

function deleteTodo(event) {
    // console.dir(event.target);
    const clickedBtn = event.target;
    const elemDeleted = clickedBtn.parentNode;
    todoList.removeChild(elemDeleted);
    // elemDeleted.remove();

    const cleanTodos = todoArray.filter(function (todo) {
        return todo.id !== parseInt(elemDeleted.id);
    });

    todoArray = cleanTodos;
    saveTodoArray();
}

function filterFn(todo) {
    return todo.id === 1;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();
