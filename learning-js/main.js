let buttons = document.querySelectorAll(".trash-button");

buttons.forEach((el) =>
  el.addEventListener("click", (e) => {
    el.parentElement.remove();
  })
);
