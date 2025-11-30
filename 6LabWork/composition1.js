'use strict';

// pipe: зліва направо, перевірка типів одразу
function pipe(...fns) {
  for (const fn of fns) if (typeof fn !== "function") throw new TypeError("pipe: only functions");
  return (x) => {
    let v = x;
    for (const fn of fns) v = fn(v);
    return v;
  };
}

// Перевірка
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5)); // 1728