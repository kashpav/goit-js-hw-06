const itemEl = document.querySelectorAll(".item");
const numbersItem = itemEl.length;
console.log(`Number of categories:`, numbersItem);

const categoryEl = itemEl.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});

// const liEls = document.querySelectorAll("li");
// const liEl = liEls.forEach((item) => {
//   console.log("Elements:", item.textContent);
// });

// const firstItem = listItems.firstElementChild;

// const lastItem = listItems.lastElementChild;

// const secondItem = lastItem.previousElementSibling;

// const firstCategory = firstItem.firstElementChild;

// const secondCategory = secondItem.firstElementChild;

// const lastcategory = lastItem.firstElementChild;

// const itemsFirstCategory = firstItem.querySelectorAll("li");

// const itemsSecondCategory = secondItem.querySelectorAll("li");

// const itemsLastCategory = lastItem.querySelectorAll("li");

// // console.log(`Number of categories:`, numbersItem);
// console.log("");
// console.log("Category:", firstCategory.textContent);
// console.log("Elements:", itemsFirstCategory.length);
// console.log("");
// console.log("Category:", secondCategory.textContent);
// console.log("Elements:", itemsSecondCategory.length);
// console.log("");
// console.log("Category:", lastcategory.textContent);
// console.log("Elements:", itemsLastCategory.length);
