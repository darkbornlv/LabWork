'use strict';

// 1) removeElement(array, item): видаляє ПЕРШЕ входження item (як у прикладах)
function removeElement(array, item) {
  const idx = array.indexOf(item);
  if (idx !== -1) array.splice(idx, 1);
}

// 2) removeElements(array, item1, ...itemN): видаляє по одному входженню кожного item
function removeElements(array, ...items) {
  for (const item of items) removeElement(array, item);
}

// 3) unique(array): повертає новий масив без дублікатів, зберігає порядок
function unique(array) {
  const seen = new Set();
  const out = [];
  for (const x of array) {
    if (!seen.has(x)) {
      seen.add(x);
      out.push(x);
    }
  }
  return out;
}

// 4) difference(array1, array2): елементи з array1, яких немає в array2
function difference(array1, array2) {
  const set2 = new Set(array2);
  return array1.filter((x) => !set2.has(x));
}

// Перевірка
{
  const array = [1, 2, 3, 4, 5, 6, 7];
  removeElement(array, 5);
  console.log(array); // [1,2,3,4,6,7]
}
{
  const array = ["Kiev", "Beijing", "Lima", "Saratov"];
  removeElement(array, "Lima");
  removeElement(array, "Berlin");
  console.log(array); // ["Kiev","Beijing","Saratov"]
}
{
  const array = [1, 2, 3, 4, 5, 6, 7];
  removeElements(array, 5, 1, 6);
  console.log(array); // [2,3,4,7]
}
{
  const array = ["Kiev", "Beijing", "Lima", "Saratov"];
  removeElements(array, "Lima", "Berlin", "Kiev");
  console.log(array); // ["Beijing","Saratov"]
}
console.log(unique([2, 1, 1, 3, 2])); // [2,1,3]
console.log(unique(["top", "bottom", "top", "left"])); // ["top","bottom","left"]

console.log(difference([7, -2, 10, 5, 0], [0, 10])); // [7,-2,5]
console.log(difference(["Beijing", "Kiev"], ["Kiev", "London", "Baghdad"])); // ["Beijing"]
