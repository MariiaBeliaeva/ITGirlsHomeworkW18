let textarea = document.querySelector(".add-text");
let result = document.querySelector(".ready-notes");
let string = "";

const saveMessage = () => {
  string += `<div> ${textarea.value}</div>`;
  if (textarea.value === "") {
    alert("you didn't write the note");
  } else {
    localStorage.setItem("key", string);
    result.innerHTML = string;
    textarea.value = "";
  }
};
