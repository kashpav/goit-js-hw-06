const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngredients = [];
const listIngredients = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const itemElement = document.createElement("li");
  itemElement.classList.add("item");
  itemElement.textContent = ingredient;
  arrayIngredients.push(itemElement);
}

listIngredients.append(...arrayIngredients);

// // const listIngredients = document.querySelector("#ingredients");
// const listIngr = document.querySelector("#ingredients");
// // console.log(listIngr);
// const itemsList = listIngr.children;
// // console.log(itemsList);

// const itemIngr1 = document.createElement("li");
// itemIngr1.classList.add("item");
// itemIngr1.textContent = "Potatoes";
// // console.log(itemIngr1);

// const itemIngr2 = document.createElement("li");
// itemIngr2.classList.add("item");
// itemIngr2.textContent = "Mushrooms";
// // console.log(itemIngr2);

// const itemIngr3 = document.createElement("li");
// itemIngr3.classList.add("item");
// itemIngr3.textContent = "Garlic";
// // console.log(itemIngr3);

// const itemIngr4 = document.createElement("li");
// itemIngr4.classList.add("item");
// itemIngr4.textContent = "Tomatos";
// // console.log(itemIngr4);

// const itemIngr5 = document.createElement("li");
// itemIngr5.classList.add("item");
// itemIngr5.textContent = "Herbs";
// // console.log(itemIngr5);

// const itemIngr6 = document.createElement("li");
// itemIngr6.classList.add("item");
// itemIngr6.textContent = "Condiments";
// // console.log(itemIngr6);

// listIngr.prepend(
//   itemIngr1,
//   itemIngr2,
//   itemIngr3,
//   itemIngr4,
//   itemIngr5,
//   itemIngr6
// );
