//Valid & invalid form elements removal on loading.
window.addEventListener("load", function () {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function (input) {
    input.classList.add("default");

    input.addEventListener("input", function () {
      if (input.value.trim() !== "") {
        input.classList.remove("default");
      } else {
        input.classList.add("default");
      }
    });
  });
});

//Validate user password

const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

function validatePassword() {
  if (password.value !== confirm.value) {
    password.setCustomValidity("Passwords do not match");
    confirm.setCustomValidity("Passwords do not match");
  } else {
    password.setCustomValidity("");
    confirm.setCustomValidity("");
  }
}

password.addEventListener("input", validatePassword);
confirm.addEventListener("input", validatePassword);
