// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// For...of (Array)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// For...in (Object)
let person = { name: "John", age: 25 };
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Write a program that counts how many even and odd numbers are in an array using forEach.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenCount = 0;
let oddCount = 0;

numbers.forEach((num) => {
  if (num % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
});

console.log("Even numbers:", evenCount); // Output: 5
console.log("Odd numbers:", oddCount); // Output: 5

// Given an array of objects representing people, use forEach to extract their names into a new array.
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

const names = [];
people.forEach((person) => {
  names.push(person.name);
});

console.log(names);
// Output: ["Alice", "Bob", "Charlie"]

// Use forEach to convert all strings in an array to uppercase.
const words = ["apple", "banana", "cherry"];
const upperCaseWords = [];

words.forEach((word) => {
  upperCaseWords.push(word.toUpperCase());
});

console.log(upperCaseWords);
// Output: ["APPLE", "BANANA", "CHERRY"]

// Write a JavaScript program using forEach to find the largest number in an array.
const numbers1 = [12, 45, 67, 89, 23, 56, 99, 4];
let maxNum = numbers[0];

numbers.forEach((num) => {
  if (num > maxNum) {
    maxNum = num;
  }
});

console.log("Maximum number:", maxNum);
// Output: Maximum number: 99

// Given an array of numbers, count the occurrences of each unique number using forEach.

const numbers2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const count = {};

numbers.forEach((num) => {
  count[num] = (count[num] || 0) + 1;
});

console.log(count);
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }

// Use forEach to create a new array that contains only unique values from an array.
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [];

numbers.forEach((num) => {
  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
});

console.log(uniqueNumbers);
// Output: [1, 2, 3, 4, 5]

// Given an array of product objects with name and price properties, use forEach to calculate the total price.
const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

let totalPrice = 0;

products.forEach((product) => {
  totalPrice += product.price;
});

console.log("Total Price:", totalPrice);
// Output: Total Price: 1600

// Use forEach to find the longest word in an array of strings
const words1 = ["apple", "banana", "strawberry", "blueberry", "kiwi"];
let longestWord = "";

words.forEach((word) => {
  if (word.length > longestWord.length) {
    longestWord = word;
  }
});

console.log("Longest word:", longestWord);
// Output: Longest word: strawberry

// Given an array of objects representing key-value pairs, use forEach to convert it into a single object.

const keyValuePairs = [
  { key: "name", value: "Alice" },
  { key: "age", value: 25 },
  { key: "city", value: "New York" },
];

const resultObject = {};

keyValuePairs.forEach((pair) => {
  resultObject[pair.key] = pair.value;
});

console.log(resultObject);
// Output: { name: 'Alice', age: 25, city: 'New York' }

// Given two arrays, use forEach to find common elements between them.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = [];

array1.forEach((num) => {
  if (array2.includes(num)) {
    commonElements.push(num);
  }
});

console.log("Common elements:", commonElements);
// Output: [3, 4, 5]

// Write a JavaScript program that counts the number of vowels (a, e, i, o, u) in a given sentence using forEach.

const sentence = "JavaScript is amazing!";
const vowels = "aeiouAEIOU";
let vowelCount = 0;

sentence.split("").forEach((char) => {
  if (vowels.includes(char)) {
    vowelCount++;
  }
});

console.log("Number of vowels:", vowelCount);
// Output: Number of vowels: 7

// Use forEach to find the first repeating element in an array.
