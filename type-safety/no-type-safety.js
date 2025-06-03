function greet(user) {
  return "Hello, " + user.name.toUpperCase();
}

/* user.name is expected to be a string, but JavaScript
   doesn't enforce that. If you pass {} or a wrong
   object, it crashes at runtime. */

/* Runtime error:
   TypeError: Cannot read properties of undefined
   (reading 'toUpperCase') */
// greet({});

// Correct usage:
greet({ name: "Alice" });

// Run the program:
// node no-type-safety.js