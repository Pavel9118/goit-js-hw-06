// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//   Яка кількість символів повинна бути в інпуті, зазначається 
// в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border 
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і
// invalid, які ми вже додали у вихідні файли завдання.

const onEventForm = document.querySelector('#validation-input');
const dataLength = onEventForm.dataset.length;

onEventForm.addEventListener("blur", onFormBlur);

function onFormBlur(event) {
  const inputInFormLength = event.currentTarget.value.length;
  console.log(inputInFormLength);
  if (inputInFormLength < dataLength || inputInFormLength > dataLength) {
    onEventForm.classList.add("invalid");
  } else {
    onEventForm.classList.remove("invalid");
    onEventForm.classList.add("valid");
 }
 };