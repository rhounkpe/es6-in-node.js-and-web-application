/**
 * Node 5 - 6
 * Spread Operator changes a list (array) to CSV (Comma Separated Value).
 * [1, 2, 3] -> 1, 2, 3
 * It's the opposite of Rest Operator
 */
function log(level, ...args) {
  if (level === 'debug') {
    console.log(args);
  }
}

var foo = {bar:'baz'};
var obj = [{a:'a'}, {b:'b'}, {c:'c'}];
obj = [foo, ...obj];

log('debug', ...obj); // returns [ { bar: 'baz' }, { a: 'a' }, { b: 'b' }, { c: 'c' } ]