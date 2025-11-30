'use strict';

// 1) iterate(object, callback): callback(key, value, object)
function iterate(object, callback) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      callback(key, object[key], object);
    }
  }
}

// 2) store(value): зберігає значення в замиканні й повертає його при виклику
function store(value) {
  return () => value;
}

// 3) contract(fn, ...types): перевіряє типи аргументів і тип результату
function contract(fn, ...types) {
  if (typeof fn !== "function") throw new TypeError("fn must be a function");
  if (types.length < 1) throw new TypeError("at least return type must be provided");

  const argTypes = types.slice(0, -1);
  const returnType = types[types.length - 1];

  const check = (val, Type) => {
    if (Type === Number) return typeof val === "number";
    if (Type === String) return typeof val === "string";
    if (Type === Boolean) return typeof val === "boolean";
    if (Type === Function) return typeof val === "function";
    if (Type === Object) return val !== null && typeof val === "object";
    return val instanceof Type;
  };

  return (...args) => {
    for (let i = 0; i < argTypes.length; i++) {
      if (!check(args[i], argTypes[i])) {
        throw new TypeError(`Argument ${i} type mismatch`);
      }
    }

    const res = fn(...args);

    if (!check(res, returnType)) {
      throw new TypeError("Return type mismatch");
    }

    return res;
  };
}

// Перевірка
const obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => console.log({ key, value }));

const read = store(5);
console.log(read()); // 5

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); // 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings("Hello ", "world!")); // Hello world!
