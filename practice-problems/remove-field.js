/*
You are working on an enterprise project for a bank.
You have been assigned to the Customer Account module
that deals with managing the bank accounts of customers.

The API contract to send customer details allows fields
such as accountNumber, customerId, currentBalance,
addressLine1, addressLine2, and contactNumber.

However, in the frontend, while you were creating the
request body you encountered an additional key which is
important to maintain the state on the frontend.

You need to make a decision to identify the best way to
remove the extra field to create a request body for the
API.
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var bankAccount = {
    accountNumber: "A458962361",
    customerId: "A1056932036",
    currentBalance: "5896036",
    isSelected: true,
    addressLine1: "Parkway",
    addressLine2: "Apt 4B",
    contactNumber: "555-1234"
};
/* Use JavaScript object destructuring with the
   rest syntax to omit isSelected, like this: */
var _ = bankAccount.isSelected, newObj = __rest(bankAccount, ["isSelected"]);
/* This creates a new object newObj that includes all
   of bankAccount's properties except isSelected.

   isSelected: _
   Extracts the isSelected property from bankAccount,
   and assigns it to _.
   
   _ is a variable name, but used when wanting to
   ignore a variable.

  ...newObj
  Collects everything else from bankAccount (i.e. all
  properties except isSelected) and puts them into a
  new object called newObj.

  The ... is the rest syntax or spread operator,
  which allows you to collect the remaining properties
  into a new object.

  This way, newObj will contain all the properties
  of bankAccount except isSelected.

  This is a common pattern in JavaScript to create
  a new object with some properties omitted.
*/
console.log('newObj:', newObj);
