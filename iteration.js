'use strict';

/*
  Одна и та же функция sum(...args), но реализована 5-ю способами.
  Для проверки — раскомментируй нужный вариант (оставь активным только один).
*/

// 1) for
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) total += args[i];
  return total;
}

/*
// 2) for..of
function sum(...args) {
  let total = 0;
  for (const x of args) total += x;
  return total;
}
*/

/*
// 3) while
function sum(...args) {
  let total = 0;
  let i = 0;
  while (i < args.length) {
    total += args[i];
    i++;
  }
  return total;
}
*/

/*
// 4) do..while
function sum(...args) {
  let total = 0;
  let i = 0;

  if (args.length === 0) return 0;

  do {
    total += args[i];
    i++;
  } while (i < args.length);

  return total;
}
*/

/*
// 5) reduce
function sum(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}
*/

// Примеры (должны работать с любым вариантом выше):
console.log(sum(1, 2, 3));          // 6
console.log(sum(0));                // 0
console.log(sum());                 // 0
console.log(sum(1, -1, 1));         // 1
console.log(sum(10, -1, -1, -1));   // 7
