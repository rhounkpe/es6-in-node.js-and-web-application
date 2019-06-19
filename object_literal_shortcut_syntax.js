/**
 * Object Literal Shortcut Syntax
 * Node 4, 5, 6
 * 
 */
function greetingService(name) {
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

console.log(greetingService('Jon'));