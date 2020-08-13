const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

const saveUser = (text) => {
  localStorage.setItem(USER_LS, text);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const userName = input.value;
  paintGreeting(userName);
  saveUser(userName);
};

const askForName = () => {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
};

const paintGreeting = (text) => {
  form.classList.remove(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
};

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser) {
    paintGreeting(currentUser);
  } else {
    askForName();
  }
};

const init = () => {
  loadName();
};
init();
