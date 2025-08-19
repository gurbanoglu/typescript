const billDetails = [
  {
    billId: "OP908",
    billAmount: 58960,
    billDiscount: 5,
    date: new Date("02-02-2023")
  },
  {
    billId: "OP876",
    billAmount: 7813,
    billDiscount: 2.5,
    date: new Date("03-02-2023")
  },
  {
    billId: "OP908",
    billAmount: 0,
    billDiscount: 0,
    date: new Date("09-02-2023")
  }
];

/*
How would you replace the lines ?? to ensure that the
error thrown from the try catch block of the server()
method is preserved along with the method name?
*/

function server(index: number) {
  try {
    billDetails[index].billDiscount
  } catch (error) {
    // ??

    /* error instanceof Error is a type check in
       JavaScript (and TypeScript) that returns true
       if the exception is an instance of the built-in
       Error class. */
    throw new Error(
      `server: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

function getPerItemCostByCustomerId(id: number) {
  try {
    server(id);
  } catch (exception) {
    // ??
    console.error(
      `getPerItemCostByCustomerId:
      ${exception instanceof Error ? exception.message : String(exception)}`
    );
  }
}

getPerItemCostByCustomerId(2);