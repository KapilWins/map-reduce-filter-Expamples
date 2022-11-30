//map()

/**
 * syntex=====> .map(function(currentValue,index,array),thisArg);
 * function- Required.A function to be run for each array element.
 * currentValue- Required. The value of the current element.
 * index- Optional. The index of the current element.
 * array- Optional. The array of the current element.
 * thisArgs- Default value undefined. A value passed to the function to be used as its this value.
 */

//The resulting array will always be the same length as the original array.

/**
 * map creates new array
 * it does not modify old array
 * it does not execute the function for empty elements.
 * it does not change the original array.
 */

//array containing multiple objects – each one representing a person. The thing you really need in the end, though, is an array containing only the id of each person.

// What we have
const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
// What we need
[20, 24, 56, 88];

const officersIds = officers.map((officer) => officer.id);

//old array
console.log(officers); /*[
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
]; */

//new Array with contains id only
console.log(officersIds); // [ 20, 24, 56, 88 ]
