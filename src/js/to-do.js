const form = document.querySelector(".js-toDoForm"),
  input = form.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

const paintToDos = (loadedToDos) => {
  const parsedToDos = JSON.parse(loadedToDos);
  parsedToDos.forEach(function (toDo) {
    paintToDo(toDo.text);
  });
};

const saveToDos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const deleteToDo = (li) => {
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
};

const handleClick = (event) => {
  const button = event.target;
  const li = button.parentElement;
  deleteToDo(li);
};

const paintToDo = (text) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  li.id = newId;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleClick);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const toDo = input.value;
  paintToDo(toDo);
  input.value = "";
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos) {
    paintToDos(loadedToDos);
  }
};

const init = () => {
  loadToDos();
  form.addEventListener("submit", handleSubmit);
};
init();
