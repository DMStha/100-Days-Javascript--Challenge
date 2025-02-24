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
