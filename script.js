const clickMeEl = document.querySelector("#clickMe");
const messageEl = document.querySelector("#message");

clickMeEl.addEventListener("click", () => {
  messageEl.textContent = "You clicked the button! Well done!";
});
