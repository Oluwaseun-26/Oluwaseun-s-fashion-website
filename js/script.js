const welcomeButton = document.querySelector("#welcome-button");
const welcomeMessage = document.querySelector("#welcome-message");

welcomeButton.addEventListener("click", function () {
  welcomeMessage.textContent =
    "Welcome! We’re glad you’re visiting our fashion house.";
});
