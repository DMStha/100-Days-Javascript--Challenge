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
