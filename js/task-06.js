const input = document.querySelector("#validation-input");
// console.log(input);

const numberOfSymbol = input.getAttribute("data-length");
// console.log(numberOfSymbol);

const validStyle = document.querySelector("style");
// console.log(validStyle);

function onInputBlur(e) {
  if (
    e.currentTarget.value.length === Number(input.getAttribute("data-length"))
  ) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  // e.currentTarget.value.length == Number(input.getAttribute("data-length"))
  //   ? (input.style.borderColor = "#4caf50")
  //   : (input.style.borderColor = "#f44336");
  // return result;
}

input.addEventListener("blur", onInputBlur);
