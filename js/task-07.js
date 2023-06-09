// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// *******************************************************************

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener('input', onInputForm);

function onInputForm(event) {
  const textSize = event.currentTarget.value;
  text.style.fontSize = textSize + "px";
};

