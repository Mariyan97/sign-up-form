function emptyField() {
  let field = document.querySelectorAll("input");

  if (field.value !== "") {
    field.style.backgroundColor = "white";
  } else {
    field.style.backgroundColor = "red";
  }
}
emptyField();
