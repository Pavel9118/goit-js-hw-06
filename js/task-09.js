// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.
const refs = {
  onButton: document.querySelector('.change-color'),
  onSpanText: document.querySelector('.color'),
}


refs.onButton.addEventListener('click', makeChangeColor);

function makeChangeColor(event) {
  const randomColor = getRandomHexColor(); 
  refs.onSpanText.textContent = randomColor;
  document.body.style.background = randomColor;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

