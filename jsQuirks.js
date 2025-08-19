/* "" is converted to a number because in
   JavaScript, when a string and a number
   are being compared, the string will be
   coerced into becoming a number. */
if("" == 0) {
  console.log(
    "\"\" is loosely equal to 0 because an\n" +
    "empty string is coerced to 0.");
}

/* When comparing a boolean and a number, JavaScript
   converts the boolean to a number first.

   false is coerced into 0. */
console.log(false == 0);

var x = 9;

/*
In JavaScript expressions are evaluated from left
to right.

True is coerced to 1 and false is coerced to 0.

Therefore:
If 1 < x is true, then true < 3 → 1 < 3 → true

If 1 < x is false, then false < 3 → 0 < 3 → true

If x < 3 is true, then true < 3 → 1 < 3 → true

If x < 3 is false, then false < 3 → 0 < 3 → true

In any of these cases, the entire expression evaluates
to true!
*/
if(1 < x < 3) {
  console.log("\nTrue for *any* value of x.");
}

const obj = { width: 10, height: 15 };

// Why is this NaN? Spelling is hard!
const area = obj.width * obj.heigth;

console.log("\nobj.heigth: " + obj.heigth);

console.log("\narea: " + area);

/* TypeScript wouldn’t allow this program to run at
   at all because it contains bugs.

   Detecting errors in code without running it is
   referred to as static checking.

   TypeScript has a static type checker. */