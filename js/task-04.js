// Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або 
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrement = document.querySelector('button[data-action="decrement"]');
// console.log(saveBtn.dataset.action);
console.log(btnDecrement);
const btnIncrement = document.querySelector('button[data-action="increment"]');
console.log(btnIncrement);
const value = document.querySelector("#value");
let counterValue = 0;
const counterDecrement = () => {
  counterValue -=1;
  value.textContent = counterValue;
}
const counterIncrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
}
btnDecrement.addEventListener("click", counterDecrement);
btnIncrement.addEventListener("click", counterIncrement);