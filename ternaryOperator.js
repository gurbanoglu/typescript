var isRaining = false;
console.log('isRaining:', isRaining);
// ? is referred to as the "ternary operator".
// If isRaining is true, then false is assigned to
// groundIsDry. Otherwise, true is assigned.
var groundIsDry = isRaining ? false : true;
console.log('groundIsDry: ' + groundIsDry);
// How to execute this program:
// 1. Compile the TypeScript program:
//    tsc ternaryOperator.ts
// 2. Run the JavaScript program:
//    node ternaryOPerator.js
