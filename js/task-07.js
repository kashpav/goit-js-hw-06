// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputSize = document.querySelector("input");
// console.log(input);

const span = document.querySelector("#text");
// console.log(span);

function onFontChange(e) {
  //  console.log(inputSize.value);
  span.style.fontSize = `${inputSize.value}px`;
}

inputSize.addEventListener("input", onFontChange);
