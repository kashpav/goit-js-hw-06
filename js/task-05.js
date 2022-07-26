const nameInput = document.querySelector("#name-input");
console.log(nameInput);
const nameToInsert = document.querySelector("span");
console.log(nameToInsert);

nameInput.addEventListener("input", onInputChange);

function onInputChange(e) {
  // console.log(e.currentTarget.value);
  nameToInsert.textContent = e.currentTarget.value;
}
