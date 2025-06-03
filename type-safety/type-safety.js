function greetUser(user) {
    return "Hello, " + user.name.toUpperCase();
}
// Compile-time error:
// Property 'name' is missing in type '{}' but
// required in type 'User'.
// greetUser({});
// Correct usage:
greetUser({ name: "Alice" });
// Install ts-node:
// sudo apt 
// Compile the program:
// tsc type-safety.ts
// Compiling this TypeScript program will
// generate a JavaScript file with the same
// name.
// Run the JavaScript file from the compilation:
// node type-safety.ts
