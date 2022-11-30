//map()

/**syntex=====> .map(callback(currentValue,index,array),thisArg);
 * currentValue is required
 * thisArgs points current object
 */

/**
 * map creates new array
 * it does not modify old array
 */
const users = [
  { firstName: "Susan", lastName: "Steward" },
  { firstName: "Daniel", lastName: "Longbottom" },
  { firstName: "Jacob", lastName: "Black" },
];

const userFullnames = users.map(function (value) {
  return `${value.firstName} ${value.lastName}`;
});

console.log(users); //[{ firstName: "Susan", lastName: "Steward" },{ firstName: "Daniel", lastName: "Longbottom" },{ firstName: "Jacob", lastName: "Black" },];
console.log(userFullnames); // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

//Another Example of map()
//We can also use arrow function
const arr = [3, 4, 5, 6];
const newArr = arr.map((element) => element * 3);

console.log(arr); //[3, 4, 5, 6] old array
console.log(newArr); // [9, 12, 15, 18] new array
