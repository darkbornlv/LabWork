'use strict';

// 1–5) sum
function sumFor(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) total += args[i];
  return total;
}

function sumForOf(...args) {
  let total = 0;
  for (const x of args) total += x;
  return total;
}

function sumWhile(...args) {
  let total = 0, i = 0;
  while (i < args.length) total += args[i++];
  return total;
}

function sumDoWhile(...args) {
  if (args.length === 0) return 0;
  let total = 0, i = 0;
  do total += args[i++]; while (i < args.length);
  return total;
}

function sumReduce(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}

// 6) max
function max(matrix) {
  let best = -Infinity;
  for (const row of matrix) for (const x of row) if (x > best) best = x;
  return best;
}

// 7) ages
function ages(persons) {
  const result = {};
  for (const key in persons) {
    if (!Object.prototype.hasOwnProperty.call(persons, key)) continue;
    const { born, died } = persons[key];
    result[key] = died - born;
  }
  return result;
}

// Перевірка
console.log('sumFor:', sumFor(1, 2, 3), sumFor(0), sumFor(), sumFor(1, -1, 1), sumFor(10, -1, -1, -1));
console.log('sumForOf:', sumForOf(1, 2, 3), sumForOf(0), sumForOf(), sumForOf(1, -1, 1), sumForOf(10, -1, -1, -1));
console.log('sumWhile:', sumWhile(1, 2, 3), sumWhile(0), sumWhile(), sumWhile(1, -1, 1), sumWhile(10, -1, -1, -1));
console.log('sumDoWhile:', sumDoWhile(1, 2, 3), sumDoWhile(0), sumDoWhile(), sumDoWhile(1, -1, 1), sumDoWhile(10, -1, -1, -1));
console.log('sumReduce:', sumReduce(1, 2, 3), sumReduce(0), sumReduce(), sumReduce(1, -1, 1), sumReduce(10, -1, -1, -1));

console.log('max:', max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

const persons = {
  Me: { born: 2007, died: 2025 }, // Якщо не здам сесію
  Mao: { born: 1893, died: 1976 },
  Gandhi: { born: 1869, died: 1948 },
  Hirohito: { born: 1901, died: 1989 },
};
console.log('ages:', ages(persons));
