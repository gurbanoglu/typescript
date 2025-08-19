/* Explicit types refer to more generally any
   situation where the type of a variable, parameter
   or return type are explicitly stated rather than
   being implicitly inferred.
   
   Type annotations are the syntax you use to declare
   a type (: string, : number, etc.). */

// In the function signature, type annotations are
// specified for the parameters person and date.
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

console.log('typeof(Date()): ' + typeof(Date()));

// Without the "new" keyword, the Date() is invoked as
// a regular function, not a constructor. Thus it returns
// a string.
// greet('Thomas', Date());

// With the "new" keyword, Date() returns a Date object
// as it invokes the constructor of the Date class.
greet('Thomas', new Date());

// Type annotation for variable.
let age: number = 20;

/* It’s best not to add annotations when the type system
   would end up inferring the same type anyway.
   
   Source:
   https://www.typescriptlang.org/docs/handbook/2/basic-types.html#explicit-types*/