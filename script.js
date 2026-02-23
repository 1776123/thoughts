const helloBtn = document.getElementById("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click", function () {
  message.textContent = "Nice. Your JavaScript is working.";
});
