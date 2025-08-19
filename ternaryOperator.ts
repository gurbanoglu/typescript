let isRaining = true;

console.log('isRaining:', isRaining);

// The ? is called the "ternary operator".
// It works like a shorthand if...else.
// Syntax: condition ? valueIfTrue : valueIfFalse
// If isRaining is true → groundIsDry = false
// If isRaining is false → groundIsDry = true
let groundIsDry = isRaining ? false : true;

console.log('\ngroundIsDry: ' + groundIsDry);

/*
How to execute this program:
1. Make sure Node.js and TypeScript are installed.
2. Compile the TypeScript program to JavaScript:
   tsc ternaryOperator.ts
   This generates a file named ternaryOperator.js
3. Run the compiled JavaScript file with Node.js:
   node ternaryOperator.js
*/