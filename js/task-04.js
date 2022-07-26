const counterDisplayValue = document.querySelector("#value");
const btnIncr = document.querySelector('button[data-action="increment"]');
const btnDecr = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

btnIncr.addEventListener("click", () => {
  counterValue += 1;
  counterDisplayValue.innerHTML = counterValue;
});

btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  counterDisplayValue.innerHTML = counterValue;
});
