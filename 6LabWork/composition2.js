'use strict';

// composeSafeRight: справа наліво, глушить помилки, on('error', ...)
function composeSafeRight(...fns) {
  for (const fn of fns) if (typeof fn !== "function") throw new TypeError("composeSafeRight: only functions");

  const errorHandlers = [];
  const emitError = (e) => {
    for (const h of errorHandlers) {
      try { h(e); } catch (_) {}
    }
  };

  function f(x) {
    let v = x;
    for (let i = fns.length - 1; i >= 0; i--) {
      try { v = fns[i](v); }
      catch (e) { emitError(e); return undefined; }
    }
    return v;
  }

  f.on = (event, handler) => {
    if (event !== "error") throw new TypeError("only 'error' supported");
    if (typeof handler !== "function") throw new TypeError("handler must be a function");
    errorHandlers.push(handler);
    return f;
  };

  return f;
}

// Перевірка
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

// Нормальний виклик (справа наліво): inc(twice(cube(2))) = 17
const f1 = composeSafeRight(inc, twice, cube);
console.log(f1(2)); // 17