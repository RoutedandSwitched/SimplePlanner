const vacationTodosArr = [];
let vacationTodos = document.getElementById("vacationTodos-el");
let todoInput = document.getElementById("todoInput");
document.getElementById("form-el").addEventListener("submit", addTodo);

// todoInput.addEventListener("click", addTodo)

function addTodo(e) {
  e.preventDefault();
  vacationTodosArr.push(todoInput.value);
  createTodo(todoInput.value);
}

function createTodo(todo) {
  let todoLabel = todo.split(" ").join("");
  let li = document.createElement("li");
  li.innerHTML = `
                <input type="checkbox" id=${todoLabel} name=${todoLabel}>
                <label for=${todoLabel}>${todo}</label>
                `;
  vacationTodos.appendChild(li);
}

for (let i = 0; i < vacationTodosArr.length; i++) {
  let todo = vacationTodosArr[i];
  createTodo(todo);
}
