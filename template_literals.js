/**
 * Template Literal
 * Node 4, 5, 6
 * Use of Back tick
 */
function stringContatenationOldFashion(name) {
  var sayHi = function() {
    console.log('Hello ' + name + '!');
  }

  var sayBye = function() {
    console.log('Goodbye ' + name + '!');
  }

  return {
    sayHi,
    sayBye
  };
}

console.log(stringContatenationOldFashion('Jon'));

function stringContatenationBackTicks(name) {
  var sayHi = function() {
    console.log(`Hello ${name}!`);
  }

  var sayBye = function() {
    console.log(`Goodbye ${name}!`);
  }

  return {
    sayHi,
    sayBye
  };
}

var gs = stringContatenationBackTicks('Jon');
gs.sayHi(); // returns Hello Jon!