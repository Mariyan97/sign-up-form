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
