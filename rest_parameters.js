/**
 * The number of parameters pass to the function is not set.
 * Rest Parameters introduces the ...args syntax.
 * It gives the rest of the parameters.
 * Takes 1, 2, 3 and makes [1, 2, 3]
 */

 function log(level, ...args) {
   // console.log(arguments);

   if (level === 'debug') {
     console.log(args[0]);
   }
 }
  var obj = {
    a: 'a',
    b: 'b',
    c: 'c',
  };

  log('debug', 'obj: ', obj, 'That was my obj');