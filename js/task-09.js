function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(getRandomHexColor());

const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector("button"),
  span: document.querySelector("span"),
};
// console.log(refs.btn);
// console.log(refs.body);

refs.body.style.backgroundColor = getRandomHexColor();
refs.btn.addEventListener("click", () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
});
