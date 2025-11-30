'use strict';

/**
 * 1) sum через цикл for
 */
function sumFor(...args) {
  // Сумуємо всі елементи масиву args за допомогою класичного for
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

/**
 * 2) sum через цикл for..of
 */
function sumForOf(...args) {
  // Цикл for..of проходить по значеннях елементів
  let total = 0;

  for (const x of args) {
    total += x;
  }

  return total;
}

/**
 * 3) sum через цикл while
 */
function sumWhile(...args) {
  // Поки індекс менший за довжину, додаємо черговий елемент
  let total = 0;
  let i = 0;

  while (i < args.length) {
    total += args[i];
    i++;
  }

  return total;
}

/**
 * 4) sum через цикл do..while
 */
function sumDoWhile(...args) {
  // Якщо аргументів немає — одразу повертаємо 0, щоб не зайти в do..while
  if (args.length === 0) return 0;

  let total = 0;
  let i = 0;

  do {
    total += args[i];
    i++;
  } while (i < args.length);

  return total;
}

/**
 * 5) sum через Array.prototype.reduce()
 */
function sumReduce(...args) {
  // Reduce "згортає" масив у одне значення; початкове значення — 0
  return args.reduce((acc, x) => acc + x, 0);
}

/*Завдання 6*/

/**
 * Повертає максимальний елемент з двовимірного масиву чисел (матриці).
 */
function max(matrix) {
  // Починаємо з -Infinity, щоб коректно працювати навіть з від’ємними числами
  let best = -Infinity;

  for (const row of matrix) {
    for (const x of row) {
      if (x > best) best = x;
    }
  }

  return best;
}

/*Завдання 7*/

/**
 * Приймає "довідник" персон виду:
 * { name: { born: YYYY, died: YYYY }, ... }
 * Повертає новий довідник з тривалістю життя:
 * { name: died - born, ... }
 */
function ages(persons) {
  // Створюємо новий "довідник" з віком (тривалістю життя)
  const result = {};

  for (const key in persons) {
    // Беремо дані по конкретній персоні
    const { born, died } = persons[key];

    // Обчислюємо тривалість життя як різницю років
    result[key] = died - born;
  }

  return result;
}

// Приклади для sum (очікувані результати: 6, 0, 0, 1, 7)
console.log("sumFor:", sumFor(1, 2, 3), sumFor(0), sumFor(), sumFor(1, -1, 1), sumFor(10, -1, -1, -1));
console.log("sumForOf:", sumForOf(1, 2, 3), sumForOf(0), sumForOf(), sumForOf(1, -1, 1), sumForOf(10, -1, -1, -1));
console.log("sumWhile:", sumWhile(1, 2, 3), sumWhile(0), sumWhile(), sumWhile(1, -1, 1), sumWhile(10, -1, -1, -1));
console.log("sumDoWhile:", sumDoWhile(1, 2, 3), sumDoWhile(0), sumDoWhile(), sumDoWhile(1, -1, 1), sumDoWhile(10, -1, -1, -1));
console.log("sumReduce:", sumReduce(1, 2, 3), sumReduce(0), sumReduce(), sumReduce(1, -1, 1), sumReduce(10, -1, -1, -1));

// Приклад для max (очікуваний результат: 9)
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log("max:", m);

// Приклад для ages (очікувані значення як у прикладі: 54, 83, 79, 88)
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log("ages:", ages(persons));
