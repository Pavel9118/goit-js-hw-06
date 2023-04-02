// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// ************************************************************************************


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredients = document.querySelector("#ingredients");
const addIngredientsArray = [];

ingredients.forEach(element => {
  const addElement = document.createElement("li");
  addElement.textContent = element;
  addElement.classList.add("item");
  addIngredientsArray.push(addElement);
  return addIngredientsArray;
  

});

listIngredients.append(...addIngredientsArray);