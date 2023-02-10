const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const html = new DocumentFragment();
for (let ingredient of ingredients) {
  const elemOfList = document.createElement('li');
  elemOfList.className = 'item';
  elemOfList.textContent = ingredient;
  html.appendChild(elemOfList);
};

document.querySelector('#ingredients').append(html);
