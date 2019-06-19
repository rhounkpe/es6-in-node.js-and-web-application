/**
 * For Of
 * Node 4, 5, 6
 */
function logStandardForWay(level, ...args) {
  if (level === 'debug') {
    for (var i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  }
}

var a = {a: 'a'};
logStandardForWay('debug', 'Object A: ', a);

/**
 * For Of is just a simple other way to iterate over an array
 * @param {*} level 
 * @param  {...any} args 
 */
function logForOfWay(level, ...args) {
  if (level === 'debug') {
    for (i of args) {
      console.log(i);
    }
  }
}
logForOfWay('debug', 'Object A: ', a);