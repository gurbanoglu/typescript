function greetUser(user) {
    return "Hello, " + user.name.toUpperCase();
}
// Compile-time error:
// Property 'name' is missing in type
// '{}' but required in type 'User'.
// Note that a compile-time error is one that occurs
// simply before the code runs. It doesn't have to
// occur as a consequence of manually compiling the
// program with the subsequent command:
// tsc type-safety.ts
greetUser({});
// Correct usage:
greetUser({ name: "Alice" });
