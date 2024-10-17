// Use concat() to join two arrays
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: ["Cecile", "Lone", "Emil", "Tobias", "Linus"]

// Use push() to add an element "Kiwi" to the array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// Use unshift() to add two numbers 4 and 5 to the beginning of the array
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1); // Output: [4, 5, 1, 2, 3]

// Use pop() to remove the last element from the fruits array
fruits.pop();
console.log(fruits); // Output: ["Banana", "Orange", "Apple", "Mango"]

// Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log(array2); // Output: [2, 3]

// Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// Use slice() to create a new array containing a portion of the fruits array
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ["Banana", "Mango"]

// Use splice() to insert and remove elements in the months array
let months = ["January", "March", "April", "June"];
months.splice(1, 0, "February"); // Inserts "February" at index 1
console.log(months); // Output: ["January", "February", "March", "April", "June"]

months.splice(4, 1, "May"); // Removes "June" and adds "May" at index 4
console.log(months); // Output: ["January", "February", "March", "April", "May"]
