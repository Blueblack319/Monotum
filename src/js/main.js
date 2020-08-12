const key = document.querySelector(".key");
const hidden = document.querySelector(".surface");

const handleClick = () => {
  hidden.innerHTML = "It's so exciting! I wanna keeping it real!!";
  hidden.style.color = "red";
};

const handleResize = () => {
  console.log("It was resized");
  if (hidden.style.color !== "red") {
    handleClick();
  }
};

const handleFullscreen = () => {
  console.log("From or to fullscreen");
  hidden.style.color = "blue";
};

const view = () => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("fullscreenchange", handleFullscreen);
};

const init = () => {
  key.addEventListener("click", handleClick);
  view();
};
init();
