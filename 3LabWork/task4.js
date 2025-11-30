'use strict';

function introspect(iface) {
  const res = [];
  for (const key in iface) {
    const val = iface[key];
    if (typeof val === 'function') res.push([key, val.length]);
  }
  return res;
};

const iface = {
  m1: x => [x],
  m2: function (x, y) { return [x, y]; },
  m3(x, y, z) { return [x, y, z]; },
  notAMethod: 123,
};
console.log(introspect(iface)); // [ [ 'm1', 1 ], [ 'm2', 2 ], [ 'm3', 3 ] ]