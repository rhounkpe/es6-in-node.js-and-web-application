// Function Defaults

/*
Function params are weird in js.
*/


/**
 * 
 * @param {*} x 
 * @param {*} y 
 */
function sum0(x, y) {
  return x + y;
}

console.log(sum0(0)); // returns NaN


// Ugly validation codes ...
function sum1(x, y) {
  y = y || 0;
  x = x || 0;

  return x + y;
}

function sum2(x, y) {
  if (typeof y === 'undefined') {
    y = 0;
  }
  return x + y;
}

/*
Function Defaults simplifies the validation process...
*/

function sum3(x=0, y=0) {
  return x + y;
}

console.log(sum3(0)); // returns 0

// Function Defaults enables the use of variables as well...

function product(x, y=x) {
  return x*y;
}

console.log(product(2)); //returns 4;