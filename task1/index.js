let info = document.querySelectorAll(".input");
let button = document.getElementsByClassName(".questionnaire__btn");

const checkValidity = () => {
  if (info.value === "") {
    alert("Поля не заполнены");
  }
  return true;
};

button.addEventListener("click", checkValidity);
