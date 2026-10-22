const form = document.getElementById("analyze-form");
const usernameInput = document.getElementById("username");
const results = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim().replace(/^@/, "");

  if (!username) {
    results.textContent = "Please enter an X username.";
    return;
  }

  results.textContent = `Ready to analyze @${username}.`;
});
