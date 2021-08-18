function greeting(name) {
  return `Hi ${name}`;
}

export function calculateAreaOfSquare(length, width) {
  return length * width;
}

export function calculatePerimeterOfRectangle(length, width) {
  var c = 10;
  console.log(a, b);
  const a = 5;
  console.error(a);
  return 2 * (length + width);
}

export default greeting;

/*  IMPORT / EXPORT NOTES */

/*
    1.  Here we are making greeting function as default
        ? export default greeting;
        (There should be only one default in the .js file).
        Now to use the greeting function in another js file, we need to use as
        ? import greeting from './counter.js';

    2. The rest of the functions declarations are preceeded with export.
        ? export function calculateAreaOfSquare(...args) {...}
        ? export function calculatePerimeterOfRectangle(...args) {...}
       There can be multiple individual function exports in the .js file.
       Now to use all these function in another js file, we need to use as
        ? import {calculateAreaOfSquare, calculatePerimeterOfRectangle} from './counter.js'

    3. There's another way of exporting the functions which we haven't done here.
       ? export default greeting;
       ? export {calculateAreaOfSquare, calculatePerimeterOfRectangle};

       While importing we can import as

       ? import greeting, {calculateAreaOfSquare, calculatePerimeterOfRectangle} from './counter.js

       * Note: This below syntax is not valid (INVALID INVALID)

       ! export default greeting, {calculateAreaOfSquare, calculatePerimeterOfRectangle};

*/
