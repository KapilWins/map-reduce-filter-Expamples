//.filter()
const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  },
];

//if you have an array, but only want some of the elements in it, then we use filter

/**
 * syntex ====> array.filter(function(value, index, arr), thisValue)
 * function- Required. A function to run for each array element.
 * value- Required, the current element that needs to be filtered
 * index- 	Optional. The index of the current element.
 * arr- Optional. The array of the current element.
 * thisValue- Default undefined. A value passed to the function as its this value.
 */

// return value- Containing the elements that pass the test. If no elements pass the test it returns an empty array.

//Basically, if the callback function returns true, the current element will be in the resulting array. If it returns false, it won’t be.

// we want array in which pilots's faction is Rebels
const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
console.log("Rebels =====>", rebels); /*Rebels =====> [
  { id: 2, name: 'Wedge Antilles', faction: 'Rebels' },
  { id: 66, name: 'Thane Kyrell', faction: 'Rebels' }
]*/

const empire = pilots.filter((pilot) => pilot.faction === "Empire");
console.log("Empire ====>", empire); /*Empire ====> [
  { id: 8, name: 'Ciena Ree', faction: 'Empire' },
  { id: 40, name: 'Iden Versio', faction: 'Empire' }
]*/
