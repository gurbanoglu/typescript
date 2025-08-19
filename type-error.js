var user = {
    name: "Daniel",
    age: 26
};

/* Attempting to access a property on a TypeScript
   object that doesn't exist generates a type error. */

// Output: undefined
console.log(user.location);