const key = document.querySelector(".key");
const hidden = document.querySelector(".surface");

const handleClick = () => {
  hidden.innerHTML = "It's so exciting! I wanna keeping it real!!";
  hidden.style.color = "red";
};

const init = () => {
  key.addEventListener("click", handleClick);
};
init();
